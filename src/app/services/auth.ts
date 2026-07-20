import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'http://localhost:8080/api/auth'; // ✅ Sample API

  private registerUrl = 'http://localhost:8080/customers/api/register';

  constructor(private http: HttpClient) {}

  
login(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  
register(payload: any): Observable<any> {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(
      this.registerUrl,
      payload,
      { headers }
    );
  }



}
