import { Component, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { Resume } from '../../config/resumes.config';

@Component({
  selector: 'app-resume-modal',
  imports: [],
  templateUrl: './resume-modal.html',
  styleUrl: './resume-modal.scss',
})
export class ResumeModal {
  @Input() resume: Resume | null = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }

  onContentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onImageError(event: any) {
    event.target.src = '/image/404-2.png';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.resume) {
      this.close.emit();
    }
  }
}
