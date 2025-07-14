import { Routes } from '@angular/router';
import { DashBoardComponent } from '../components/dash-board/dash-board.component';
import { BodyComponent } from '../components/body/body.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home' 
  }
];