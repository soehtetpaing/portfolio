import { Component } from '@angular/core';
import { profiler } from '../../config/profiler.config';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.scss',
})
export class EmployeeCard {
  employee = profiler.employee;
  
  onImageError(event: any) {
    event.target.src = '/image/404-1.png';
  }
}
