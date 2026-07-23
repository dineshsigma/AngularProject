import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(
    private productService: Products, private cdr: ChangeDetectorRef
  ) {}

  employeeColumns: TableColumn[] = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: 'Title',
      field: 'title'
    },
    {
      header: 'Price',
      field: 'price',
      type: 'currency'
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
        this.pageSize
      )
      .subscribe({
        next: (response) => {
          this.employeeData = [...response.products]
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
}