import { Routes } from '@angular/router';
import { LoanLoginComponent } from './loan-login/loan-login.component';
import { AppComponent } from './app.component';
import { CareerPageComponent } from './career-page/career-page.component';

export const routes: Routes = [ { path: '', redirectTo: '/career-page', pathMatch: 'full' }, // Default route
    
  { path: 'career-page', component: CareerPageComponent },
  { path: 'loan-login', component: LoanLoginComponent },
];
