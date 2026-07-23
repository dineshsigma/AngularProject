import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { DataTable } from '../shared/data-table/data-table';
import { Productservice } from '../services/productservice';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../models/table-column.model';
@Component({
  selector: 'app-products',
  imports: [CommonModule, TooltipModule, DynamicTable],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  productData: any[] = [];
  currentPage = 1;
  pageSize = 10;
  totalRecords = 0;
  loading = false;
  searchText = '';
  rediectUrl = "/add-products"

  constructor(private router: Router, private productService: Productservice, private cdr: ChangeDetectorRef) {

  }

  productColumns: TableColumn[] = [
    {
      field: 'id',
      header: 'ID'
    },
    {
      field: 'title',
      header: 'Title'
    },
    {
      field: 'category',
      header: 'Category'
    },
    {
      field: 'description',
      header: 'Description'
    },
    {
      field: 'price',
      header: 'Price',
      type: 'currency'
    },
    {
      field: 'rating',
      header: 'Rating'
    },
    {
      field: 'stock',
      header: 'Stock'
    }
  ];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProductsWithSearch(this.currentPage,
      this.pageSize,
      this.searchText)
      .subscribe({
        next: (response) => {
          this.productData = [...response.products]
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
    this.loadProducts();
  }
  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.loadProducts();
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    this.currentPage = 1;
    this.loadProducts();

  }


}
