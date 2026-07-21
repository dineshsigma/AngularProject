import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ActivatedRoute
} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {



  productForm: FormGroup;

  imagePreview: string | ArrayBuffer | null = null;

  selectedFile!: File;
  isEditMode = false;
    productId!: number;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      status: ['Active']
    });

    const id = this.route.snapshot.paramMap.get('id');
    console.log("idddd",id);
    console.log(this.isEditMode,"11111111111")
    if(id){
      this.isEditMode = true;
      console.log(this.productForm);
      console.log(this.isEditMode,"isEditModeisEditMode")
    }
  }

  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (file) {

      this.selectedFile = file;

      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

 
  saveProduct(): void {
    // if (this.productForm.invalid) {
    //   this.productForm.markAllAsTouched();
    //   return;
    // }

    const payload = {
      id: this.isEditMode
        ? this.productId
        : Date.now(),

      ...this.productForm.value,

      image: this.imagePreview
    };
    if (this.isEditMode) {
      // alert('Product Updated Successfully');
    } else {
      // alert('Product Added Successfully');

    }

    this.router.navigate(['/products']);

  }


}
