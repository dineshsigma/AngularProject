import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'http://localhost:8080/api/auth'; // ✅ Sample API

  constructor(private http: HttpClient) {}

  
login(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }


}
