import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistartionService {
  private baseUrl = 'https://example.com/api';  // Replace with real API

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    console.log("dineshhhhh",data);
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
