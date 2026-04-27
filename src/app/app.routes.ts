import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: '', redirectTo: 'soehtetpaing', pathMatch: 'full' },
    { path: 'soehtetpaing', component: App },
    { path: '**', redirectTo: 'soehtetpaing' }
];
