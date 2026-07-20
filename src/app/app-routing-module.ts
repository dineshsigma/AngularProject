import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { About } from './about/about';
import { RouterModule, Routes } from '@angular/router';
import { Registartion } from './registartion/registartion';
import { Parent } from './parent/parent';
import { Employee } from './employee/employee';
import { PrintJob } from './print-job/print-job';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';
import { DataBinding } from './data-binding/data-binding';
import { NgIf } from './ng-if/ng-if'
import { Dashboard } from './dashboard/dashboard';
import { Products } from './products/products';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ✅ Public
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registartion', component: Registartion },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },

  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'dashboard',
        component: Home
      },
      {
        path: 'products',
        component: Products
      }
    ]
  },

  // ✅ Protected
  { path: 'parent', component: Parent, canActivate: [authGuard] },
  { path: 'employee', component: Employee, canActivate: [authGuard] },
  { path: 'printform', component: PrintJob, canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }