import { Component } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { DataTable } from '../shared/data-table/data-table';

import { CommonModule } from '@angular/common';
import { TableColumn } from '../models/table-column.model';
@Component({
  selector: 'app-products',
  imports: [CommonModule,TooltipModule,DynamicTable],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  constructor(private router: Router) {

  }


  showDeleteModal = false;
  selectedProduct: any = null;
  isEditMode = false;


  products = [
    {
      id: 1,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Dell Laptop',
      category: 'Electronics',
      price: 50000,
      status: 'Active'
    },
    {
      id: 2,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Samsung Mobile',
      category: 'Electronics',
      price: 25000,
      status: 'Active'
    },
    {
      id: 3,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Sony Headphones',
      category: 'Accessories',
      price: 5000,
      status: 'Inactive'
    },
    {
      id: 4,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Sony Headphones',
      category: 'Accessories',
      price: 5000,
      status: 'Inactive'
    },
    {
      id: 5,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Sony Headphones',
      category: 'Accessories',
      price: 5000,
      status: 'Inactive'
    },
    {
      id: 6,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Sony Headphones',
      category: 'Accessories',
      price: 5000,
      status: 'Inactive'
    },
    {
      id: 7,
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/p…5g-22041216i-redmi-original-imagghcw3htf3heg.webp',
      name: 'Sony Headphones',
      category: 'Accessories',
      price: 5000,
      status: 'Inactive'
    }
  ];


productColumns: TableColumn[] = [
    {
      field: 'id',
      header: 'ID'
    },
    {
      field: 'image',
      header: 'Image',
      type: 'image'
    },
    {
      field: 'name',
      header: 'Product Name'
    },
    {
      field: 'category',
      header: 'Category'
    },
    {
      field: 'price',
      header: 'Price',
      type: 'currency'
    },
    {
      field: 'status',
      header: 'Status',
      type: 'badge'
    }
  ];


  
editProduct(product: any): void {
    console.log('Edit Product:', product);
    this.router.navigate(
      ['edit-product/:id'],
      {
        state: {
          product: product
        }
      }
    );
  }

  deleteProduct2(product: any): void {
    console.log('Delete Product:', product);
    const index = this.products.findIndex(
      p => p.id === product.id
    );

    if (index > -1) {
      this.products.splice(index, 1);
      this.products = [...this.products];
    }
  }

  currentPage = 1;
  itemsPerPage = 5;

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  addProduct() {
    this.router.navigate(['/add-products']);
  }
  openDeleteModal(product: any): void {
    this.selectedProduct = product;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedProduct = null;
  }
updateProduct(updatedProduct: any) {

    const index = this.products.findIndex(
      product => product.id === updatedProduct.id
    );

    if (index !== -1) {

      this.products[index] = updatedProduct;

    }

  }


}
