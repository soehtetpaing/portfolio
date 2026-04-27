import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { DataroomService } from '../../utils/dataroom.service';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {
  loading$!: Observable<boolean>;
  private subscription!: Subscription;

  constructor(private room: DataroomService) {}

  ngOnInit(): void {
    this.loading$ = this.room._loading$;

    this.subscription = this.loading$.subscribe(loading => {
      if (loading) {
        document.body.classList.add('loading-active');
      } else {
        document.body.classList.remove('loading-active');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    document.body.classList.remove('loading-active');
  }
}
