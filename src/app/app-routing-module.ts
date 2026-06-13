import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { About } from './about/about';
import { RouterModule, Routes } from '@angular/router';
import { Registartion } from './registartion/registartion';
import { Parent } from './parent/parent';
import { Employee } from './employee/employee';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },       // default route
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registartion', component: Registartion },
  { path: 'parent', component: Parent },
  { path: 'employee', component: Employee }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
