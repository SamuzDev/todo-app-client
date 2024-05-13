import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskPageComponent } from './task-page/task-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'tasks/:id', component: TaskPageComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
