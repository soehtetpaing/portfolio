import { FormsModule, NgForm } from '@angular/forms';
import { Component, HostListener, inject, Inject, PLATFORM_ID, signal } from '@angular/core';
import { ContactForm } from './interface/portfolio-model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ThemeMode } from './component/theme-mode/theme-mode';
import { EmployeeCard } from "./component/employee-card/employee-card";
import { ProjectCard } from './component/project-card/project-card';
import { ResumeModal } from "./component/resume-modal/resume-modal";
import { ProjectModal } from './component/project-modal/project-modal';
import { LocalStorageService } from './utils/localstorage.service';
import { app } from './config/app.config';
import { profiler } from './config/profiler.config';
import { Skill, skills } from './config/skills.config';
import { Experience, experiences } from './config/experiences.config';
import { Resume, resumes } from './config/resumes.config';
import { Project, projectFilters, projects } from './config/projects.config';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataCenterService } from './utils/datacenter.service';
import { AuthService } from './service/auth.service';
import { NotiService } from './service/noti.service';
import { ToastService } from './utils/toast.service';
import { finalize, switchMap } from 'rxjs';
import { Loading } from "./component/loading/loading";

declare var AOS: any;
@Component({
  selector: 'app-root',
  imports: [FormsModule, TranslatePipe, ThemeMode, EmployeeCard, ProjectCard, ProjectModal, ResumeModal, MatSnackBarModule, Loading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  translate = inject(TranslateService);
  storage = inject(LocalStorageService);
  authService = inject(AuthService);
  notiService = inject(NotiService);

  app = 'app';
  isDarkTheme = true;
  menuOpen = false;
  activeSection = 'home';
  sidebarMenus = app.sidebarMenus;

  socialLinks = profiler.socialLinks;
  stats = profiler.stats;
  skillLists: Skill[] = skills;

  experienceLists: Experience[] = experiences;

  projectLists: Project[] = projects;
  selectedProject: Project | null = null;
  projectFilterLists = projectFilters;
  activeFilter = "All";
  filteredProjects: Project[] = [];

  resumeLists: Resume[] = resumes;
  selectedResume: Resume | null = null;

  contactUs = profiler.contact;
  contact: ContactForm = {
    name: '',
    email: '',
    message: '',
    subject: '',
  };

  constructor(private dataCenter: DataCenterService, private toast: ToastService) {
    this.filteredProjects = [...this.projectLists];
  }

  ngOnInit() {
    // initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100
    });

    // load theme
    if (this.storage.hasItem('theme')) {
      const savedTheme = this.storage.getItem('theme');
      document.body.classList.toggle('dark-theme', !(savedTheme !== 'dark'));
    }    

    // load language
    document.body.classList.add('font-en');
    if (this.storage.hasItem('preferredLanguage')) {
      const savedLang = this.storage.getItem('preferredLanguage');
      this.translate.use(savedLang || 'en');
      document.body.classList.remove('font-en', 'font-mm', 'font-kr');
      document.body.classList.add(`font-${savedLang || 'en'}`);
    }
  }

  ngAfterViewInit() {
    // refresh AOS after view init
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.activeSection = section;
      this.menuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  filterProjects(filter: string) {
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredProjects = [...this.projectLists];
    } else {
      this.filteredProjects = this.projectLists.filter(p => p.category === filter);
    }
    
    // refresh AOS after filter
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  onImageError(event: any) {
    event.target.src = '/image/404-1.png';
  }

  openResumeModal(resume: Resume) {
    this.selectedResume = resume;
    document.body.style.overflow = 'hidden';
  }

  closeResumeModal() {
    this.selectedResume = null;
    document.body.style.overflow = 'auto';
  }

  onSubmit(form: NgForm) {
    if (this.contact.email && this.contact.message) {
      this.dataCenter.setLoading(true);

      this.authService.getJwtTokens().pipe(
        switchMap(() => this.notiService.sendMessage(this.contact)),
        finalize(() => {
          setTimeout(() => {
            this.dataCenter.setLoading(false);
          }, 1000);
        })
      ).subscribe({
        next: res => {
          if (res.status == 200) {
            this.toast.success(res.message);
            form.resetForm();
          } else {
            this.toast.error(res.message);
          }
        },
        error: err => {
          this.toast.error(err.message);
        }
      });
    } else {
      this.toast.warn("Please  enter email and message!");
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      if (sectionTop <= 100 && sectionTop > -sectionHeight + 100) {
        current = section.id;
      }
    });
    
    this.activeSection = current || 'home';
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.menuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}
