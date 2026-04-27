import { Component, HostListener, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../utils/localstorage.service';
import { app } from '../../config/app.config';

type Language = 'en' | 'mm' | 'kr';

interface LanguageOption {
  code: Language;
  name: string;
  image: string;
}

@Component({
  selector: 'app-theme-mode',
  imports: [MatIconModule],
  templateUrl: './theme-mode.html',
  styleUrl: './theme-mode.scss',
})
export class ThemeMode {
  translate = inject(TranslateService);
  storage = inject(LocalStorageService);

  isLightTheme = true;
  currentLang: Language = 'en';
  isLangOpen = false;
  
  languages: LanguageOption[] = app.languageOptions as LanguageOption[];

  ngOnInit() {
    // load theme
    const savedTheme = this.storage.getItem('theme');
    this.isLightTheme = savedTheme !== 'dark';
    document.body.classList.toggle('dark-theme', !this.isLightTheme);

    // load language
    const savedLang = this.storage.getItem<Language>('preferredLanguage');
    this.currentLang = savedLang || 'en';
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;

    document.body.classList.toggle('dark-theme', !this.isLightTheme);

    this.storage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
  }

  toggleLanguageDropdown(event: Event) {
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
  }

  selectLanguage(lang: Language) {
    this.currentLang = lang;
    this.storage.setItem('preferredLanguage', lang);
    this.translate.use(lang);
    this.isLangOpen = false;
    document.body.classList.remove('font-en', 'font-mm', 'font-kr');
    document.body.classList.add(`font-${lang}`);
  }

  onImageError(event: any) {
    event.target.src = '/image/404-1.png';
  }

  @HostListener('document:click')
  closeDropdown() {
    this.isLangOpen = false;
  }
}
