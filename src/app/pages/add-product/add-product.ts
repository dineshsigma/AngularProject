import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Productservice } from '../../services/productservice';
import { MessageService } from 'primeng/api';

import {
  ActivatedRoute
} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {


  loading = false;
  productForm: FormGroup;

  imagePreview: string | ArrayBuffer | null = null;

  selectedFile!: File;
  isEditMode = false;
  productId!: number;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private productService:Productservice,private messageService:MessageService) {

    this.productForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      brand: [''],
      sku: [''],
      price: [''],
      discountPercentage: [''],
      rating: [''],
      stock: [''],
      minimumOrderQuantity: [''],
      weight: [''],
      width: [''],
      height: [''],
      depth: [''],
      warrantyInformation: [''],
      shippingInformation: [''],
      availabilityStatus: ['In Stock'],
      returnPolicy: [''],
    });

  }


  saveProduct(): void {
    console.log("this.productForm", this.productForm.value);
     this.loading = true;
    this.productService.addProducts(this.productForm.value).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Products Added Success',
          life: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1500);

      }, error: (error: any) => {
        console.log("error", error.error.message);
         this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: error?.error?.message || 'products Adding Failed',
          life: 3000
        });
      }
    })

    this.router.navigate(['/products']);
  }


}
