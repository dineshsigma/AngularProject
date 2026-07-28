import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BulkUploadService {
  private apiUrl = 'http://localhost:8080/api/employees/bulk-upload';

  constructor(private http: HttpClient) {}

  uploadRecords(records: any[]): Observable<any> {
    return this.http.post(this.apiUrl, records);
  }
}
