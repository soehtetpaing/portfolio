import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../config/projects.config';


@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project!: Project;
  @Output() openModal = new EventEmitter<Project>();

  onCardClick() {
    this.openModal.emit(this.project);
  }

  onImageError(event: any) {
    event.target.src = '/image/404-1.png';
  }
}
