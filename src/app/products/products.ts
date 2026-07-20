import { Component } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

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
}
