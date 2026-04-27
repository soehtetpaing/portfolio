import { Component, EventEmitter, HostListener, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Project } from '../../config/projects.config';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-modal',
  imports: [TranslatePipe],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  detailImageLists: string[] = [];
  currentImageIndex: number = 0;

  // show image-skeleton when image load
  mainImageLoaded: boolean = false;
  thumbnailLoadedStates: boolean[] = [];

  ngOnInit() {
    this.loadDetailImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project'] && this.project) {
      this.loadDetailImages();
      this.currentImageIndex = 0;

      // show image-skeleton when image load
      this.mainImageLoaded = false;
      this.resetThumbnailStates();
    }
  }

  loadDetailImages() {
    if (this.project?.detailImages && this.project.detailImages.length > 0) {
      this.detailImageLists = this.project.detailImages;
    } else if (this.project?.image) {
      this.detailImageLists = [this.project.image];
    } else {
      this.detailImageLists = ['/image/404-2.png'];
    }

    // show image-skeleton when image load
    this.resetThumbnailStates();
  }

  // show image-skeleton when image load
  resetThumbnailStates() {
    this.thumbnailLoadedStates = new Array(this.detailImageLists.length).fill(false);
  }

  nextImage() {
    if (this.detailImageLists.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.detailImageLists.length;

      // show image-skeleton when image load
      this.mainImageLoaded = false;
    }
  }

  prevImage() {
    if (this.detailImageLists.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.detailImageLists.length) % this.detailImageLists.length;

      // show image-skeleton when image load
      this.mainImageLoaded = false;
    }
  }

  setCurrentImage(index: number) {
    if (index >= 0 && index < this.detailImageLists.length) {
      this.currentImageIndex = index;

      // show image-skeleton when image load
      this.mainImageLoaded = false;
    }
  }

  // show image-skeleton when image load
  onMainImageLoad() {
    this.mainImageLoaded = true;
  }

  // show image-skeleton when image load
  onThumbnailLoad(index: number) {
    this.thumbnailLoadedStates[index] = true;
  }

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      // this.close.emit();
    }
  }

  onContentClick(event: MouseEvent) {
    // event.stopPropagation();
  }

  onImageError(event: any) {
    event.target.src = '/image/404-2.png';

    // show image-skeleton when image load
    this.mainImageLoaded = true;
  }

  onThumbnailError(event: any, index: number) {
    event.target.src = '/image/404-2.png';

    // show image-skeleton when image load
    this.thumbnailLoadedStates[index] = true;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.project) {
      this.close.emit();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight() {
    if (this.project && this.detailImageLists.length > 1) {
      this.nextImage();
    }
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() {
    if (this.project && this.detailImageLists.length > 1) {
      this.prevImage();
    }
  }
}
