import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Registartion } from './registartion/registartion';
import { Parent } from './parent/parent';
import { Employee } from './employee/employee';
import { PrintJob } from './print-job/print-job';
import { Login } from './login/login';
import { DataBinding } from './data-binding/data-binding';
import { Dashboard } from './dashboard/dashboard';
import { Products } from './products/products';
import { AddProduct } from './pages/add-product/add-product';
import { Users } from './pages/users/users';
import { DashboardSliders } from './pages/dashboard-sliders/dashboard-sliders';
import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { LifeCycle } from './life-cycle/life-cycle';
import { Userprofile } from './userprofile/userprofile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registartion', component: Registartion },
  { path: 'parent', component: Parent },
  { path: 'employee', component: Employee },
  { path: 'printform', component: PrintJob },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'form', component: TemplateForm },
  { path: 'reactive-form', component: ReactiveForm },
  { path: 'life-cycle', component: LifeCycle },
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'products',
        component: Products
      },
      {
        path: 'add-products',
        component: AddProduct
      },
      {
        path: 'edit-product/:id',
        component: AddProduct
      },
      {
        path: 'users',
        component: Users
      },
      {
        path: 'dashbaord-slider',
        component: DashboardSliders
      },
      {
        path: 'user-profile',
        component: Userprofile
      }
    ]
  }

];

