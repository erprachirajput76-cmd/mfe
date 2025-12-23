import { Routes } from '@angular/router';
import { MainMfe1Component } from './main-mfe1/main-mfe1.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainMfe1Component,
    pathMatch: 'full'
  }
];