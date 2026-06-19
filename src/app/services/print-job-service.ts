import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrintJobService {
  private apiUrl = 'http://localhost:8080/api/print-jobs';

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<any[]> {
     const token = localStorage.getItem('accessToken'); // ✅ Get token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
