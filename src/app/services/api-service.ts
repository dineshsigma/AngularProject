import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;
   constructor(private http: HttpClient) {}

   get<T>(endpoint: string, params?: any): Observable<T> {

    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }

    return this.http.get<T>(
      `${this.baseUrl}${endpoint}`,
      { params: httpParams }
    );
  }

  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}${endpoint}/${id}`
    );
  }

  post<T>(endpoint: string, payload: any): Observable<T> {
    return this.http.post<T>(
      `${this.baseUrl}${endpoint}`,
      payload
    );
  }

  put<T>(
    endpoint: string,
    id: number | string,
    payload: any
  ): Observable<T> {
    return this.http.put<T>(
      `${this.baseUrl}${endpoint}/${id}`,
      payload
    );
  }

  patch<T>(
    endpoint: string,
    id: number | string,
    payload: any
  ): Observable<T> {
    return this.http.patch<T>(
      `${this.baseUrl}${endpoint}/${id}`,
      payload
    );
  }

  delete<T>(
    endpoint: string,
    id: number | string
  ): Observable<T> {
    return this.http.delete<T>(
      `${this.baseUrl}${endpoint}/${id}`
    );
  }

   
}



// this.apiService
//   .get(API_ENDPOINTS.EMPLOYEE)
//   .subscribe({
//     next: (response) => {
//       console.log(response);
//     }
//   });


// this.apiService
//   .getById(API_ENDPOINTS.EMPLOYEE, 1)
//   .subscribe();


// const payload = {
//   name: 'Dinesh',
//   email: 'dinesh@gmail.com'
// };

// this.apiService
//   .post(API_ENDPOINTS.EMPLOYEE, payload)
//   .subscribe();


// const payload = {
//   name: 'Updated Name'
// };

// this.apiService
//   .put(
//     API_ENDPOINTS.EMPLOYEE,
//     1,
//     payload
//   )
//   .subscribe();

// this.apiService.get(
//   API_ENDPOINTS.EMPLOYEE,
//   {
//     page: 0,
//     size: 10,
//     sort: 'name'
//   }
// );