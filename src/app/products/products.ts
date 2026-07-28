import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';
import { ActivatedRoute, Router } from '@angular/router';
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
  rediectUrl = "/add-products";
  viewPageUrl='view-product'

  editProductData:any={}

  constructor(private router: Router, private productService: Productservice, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {

  }

productColumns: TableColumn[] = [
  {
    field: 'images',
    header: 'Image',
    type: 'image',
    width: '80px'
  },
  {
    field: 'title',
    header: 'Title',
    width: '160px'
  },
  {
    field: 'category',
    header: 'Category',
    width: '120px'
  },
  {
    field: 'description',
    header: 'Description',
    width: '150px'
  },
  {
    field: 'price',
    header: 'Price',
    width: '80px'
  },
  {
    field: 'rating',
    header: 'Rating',
    width: '80px'
  },
  {
    field: 'stock',
    header: 'Stock',
    width: '80px'
  },
  {
    field: 'availabilityStatus',
    header: 'Status',
    type: 'badge',
    width: '100px'
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

  editProduct(payload:any):void{
    console.log("dineshhhh",payload);
    this.editProductData = payload;
    this.router.navigate(
    ['/add-products'],
    {
      queryParams: {
        id: payload.id
      }
    }
  );

  }


}
