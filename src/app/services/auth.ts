import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'https://dummyjson.com/auth/login'; // ✅ Sample API

  private registerUrl = 'http://localhost:8080/customers/api/register';

  constructor(private http: HttpClient) { }


  login(data: any): Observable<any> {
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

  logindummyApi(request: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, request);
  }

  saveUserData(response: any): void {

    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);

    localStorage.setItem('user', JSON.stringify({
      id: response.id,
      username: response.username,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      gender: response.gender,
      image: response.image
    }));
  }

  getToken():string | null{
    return localStorage.getItem('accessToken');
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
