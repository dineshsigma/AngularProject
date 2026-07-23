import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {

  private readonly baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, limit: number): Observable<any> {

    const skip = (page - 1) * limit;

    const params = new HttpParams()
      .set('limit', limit)
      .set('skip', skip)
      .set('select', 'title,price');

    return this.http.get<any>(this.baseUrl, { params });
  }
}