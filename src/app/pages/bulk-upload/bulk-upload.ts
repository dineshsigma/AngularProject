import { Component } from '@angular/core';
import Papa from 'papaparse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulk-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulk-upload.html',
  styleUrls: ['./bulk-upload.css'],
})
export class BulkUpload {
  allRecords: any[] = [];
  displayedRecords: any[] = [];
  displayedColumns: string[] = [];

  totalRecords = 0;

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (result: any) => {
        console.log('CSV Records', result.data);

        this.allRecords = result.data;

        this.totalRecords = this.allRecords.length;

        this.displayedRecords = this.allRecords.slice(0, 100);

        if (this.displayedRecords.length > 0) {
          this.displayedColumns = Object.keys(this.displayedRecords[0]);

          console.log('Columns', this.displayedColumns);
        }
      },
    });
  }
}
