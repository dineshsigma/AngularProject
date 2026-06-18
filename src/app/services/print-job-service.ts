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
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaW5lc2hAZ21haWwuY29tIiwiaWF0IjoxNzgxNzcwODA3LCJleHAiOjE3ODE3NzQ0MDd9.SCLuuDnfZ6P0UE-PIsPkogpkiBN5IpUXsMSW9ZVBo-s',
      Cookie: 'JSESSIONID=F39537FD040D498D7519E64349D6B865'
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
