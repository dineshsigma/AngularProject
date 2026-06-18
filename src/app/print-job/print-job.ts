import { Component, OnInit } from '@angular/core';
import { PrintJobService } from '../services/print-job-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-print-job',
  imports: [CommonModule,FormsModule],
  standalone: true, 
  templateUrl: './print-job.html',
  styleUrl: './print-job.css',
})
export class PrintJob implements OnInit {
 
jobs: any[] = [];
filteredJobs: any[] = [];
loading = false;   // ✅ LOADER FLAG

  // ✅ Pagination
  page = 1;
  pageSize = 10;

  // ✅ Search
  searchText = '';

  constructor(private service: PrintJobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.loading = true;
    this.service.getAllJobs().subscribe({
      next: (data:any) => {
        this.jobs = data.content;
        this.filteredJobs = data.content;  // ✅ initial load
        console.log("filtereddata",this.filteredJobs);
        console.log("Jobsdata",this.jobs);
        // this.loading = false;
      }
    });
  }

  // ✅ Search filter
  filterJobs() {
    this.filteredJobs = this.jobs.filter(job =>
      job.ian?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      job.status?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      job.fileName?.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.page = 1; // reset to first page
  }

  // ✅ Pagination logic
  get paginatedJobs() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredJobs.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.filteredJobs.length / this.pageSize);
  }


  
}
