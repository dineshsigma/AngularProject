import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-latest-products',
  imports: [CommonModule],
  templateUrl: './latest-products.html',
  styleUrl: './latest-products.css',
})
export class LatestProducts {

  loading = false;

  laptops = [
    {
      id: 1,
      name: 'Lenovo IdeaPad 3 Core i3 11th Gen',
      brand: 'Lenovo',
      category: 'Laptops',
      price: 42999,
      discount: 22,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'
    },
    {
      id: 2,
      name: 'HP Pavilion Core i5 11th Gen',
      brand: 'HP',
      category: 'Laptops',
      price: 52999,
      discount: 18,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'
    },
    {
      id: 3,
      name: 'Lenovo NB PC IP-S340 13',
      brand: 'Lenovo',
      category: 'Laptops',
      price: 38999,
      discount: 4,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'
    },
    {
      id: 4,
      name: 'HP Pavilion Intel Core i3 X360',
      brand: 'HP',
      category: 'Laptops',
      price: 47999,
      discount: 23,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'
    },
    {
      id: 5,
      name: 'HP Chromebook Touchscreen HD',
      brand: 'HP',
      category: 'Laptops',
      price: 34999,
      discount: 42,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'

    },
    {
      id: 6,
      name: 'HP Chromebook Touchscreen HD',
      brand: 'HP',
      category: 'Laptops',
      price: 34999,
      discount: 42,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'

    },
    {
      id: 7,
      name: 'HP Chromebook Touchscreen HD',
      brand: 'HP',
      category: 'Laptops',
      price: 34999,
      discount: 42,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'

    },
    {
      id: 8,
      name: 'HP Chromebook Touchscreen HD',
      brand: 'HP',
      category: 'Laptops',
      price: 34999,
      discount: 42,
      status: 'Out of stock',
      image: 'https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp'

    }
  ]



  @ViewChild('container') container!: ElementRef;

  scrollLeft() {
    console.log("Leftttt");
    this.container.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    })

  }

  scrollRight() {
    console.log("Rightyyyy");
    this.container.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    })
  }

  ngAfterViewInit() {

    setInterval(() => {

      this.container.nativeElement.scrollBy({
        left: 300,
        behavior: 'smooth'
      })

    }, 3000);
  }
}
