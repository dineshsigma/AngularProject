import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: '/dashbaord-slider',
      icon: 'fas fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: '/products',
      icon: 'fas fa-box-open',
      label: 'Products'
    },
    {
      routeLink: '/users',
      icon: 'fas fa-users',
      label: 'Users'
    },
    {
      routeLink: '/pages',
      icon: 'fas fa-file-alt',
      label: 'Pages',
    },
    {
      routeLink: '/settings',
      icon: 'fas fa-cog',
      label: 'Settings',
    },
  ];


  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}
