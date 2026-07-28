import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../../services/productservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-product',
  imports: [CommonModule],
  templateUrl: './view-product.html',
  styleUrl: './view-product.css',
})
export class ViewProduct implements OnInit {
  product: any = {};

  loading = true;

  constructor(
    private routes: Router,
    private route: ActivatedRoute,
    private productService: Productservice
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productId = params['id'];
      console.log(productId);
      if (productId) {
        this.productService.getProductById(productId).subscribe({
          next: (res: any) => {
            console.log('ressss=========', res);
            this.product = res;
            this.loading = false;
          },
          error: error => {
            this.loading = false;
          },
        });
      }
    });
  }
}
