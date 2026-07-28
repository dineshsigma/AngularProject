import { Component, OnInit, ChangeDetectorRef,inject } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';
import { Products } from '../services/products';
import { TableColumn } from '../models/table-column.model';

@Component({
  selector: 'app-employee',
  imports: [DynamicTable],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {
  employeeData: any[] = [];
  currentPage = 1;
  pageSize = 10;
  totalRecords = 0;
  loading = false;
  searchText = '';
  rediectUrl = "/add-products"

  private productService = inject(Products);
  private cdr = inject(ChangeDetectorRef)

  employeeColumns: TableColumn[] = [
    {
      header: 'firstName',
      field: 'firstName',
      width: '100px'
    },
    {
      header: 'lastName',
      field: 'lastName',
      width: '120px'
    },
    {
      header: 'Email',
      field: 'email',
      width: '180px'
    },
    {
      header: 'Mobile',
      field: 'phone',
      width: '200px'
    },
    {
      header: 'Role',
      field: 'role',
      width: '170px'
    }
  ];

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.productService
      .getProducts(
        this.currentPage,
        this.pageSize,
        this.searchText
      )
      .subscribe({
        next: (response) => {
          this.employeeData = [...response.users]
          this.totalRecords = Number(response.total);
          this.loading = false;
          this.cdr.detectChanges();
        },

        error: (error) => {
          this.loading = false;
          console.error(
            'API Error',
            error
          );
        }
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadEmployees();
  }
  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.loadEmployees();
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    this.currentPage = 1;
    this.loadEmployees();

  }
}