import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Registartion } from './registartion/registartion';
import { Parent } from './parent/parent';
import { Employee } from './employee/employee';
import { PrintJob } from './print-job/print-job';
import { Login } from './login/login';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registartion', component: Registartion },
  { path: 'parent', component: Parent },
  { path: 'employee', component: Employee },
  { path: 'printform', component: PrintJob },
  { path: 'login', component: Login }

];

