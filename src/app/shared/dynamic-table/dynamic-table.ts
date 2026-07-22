import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableColumn } from '../../models/table-column.model';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
})
export class DynamicTable {

  @Input() title = '';

  @Input() columns: TableColumn[] = [];

  @Input() data: any[] = [];

  @Input() showAddButton = false;

  @Input() addButtonText = 'Add';

  @Input() redirectUrl = '';

  @Output() edit = new EventEmitter<any>();

  @Output() delete = new EventEmitter<any>();

  showDeleteModal = false;

  selectedRow: any = null;

  constructor(private router: Router) { }

  addRecord(): void {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    }
  }

  editRow(row: any): void {
    this.edit.emit(row);
  }

  openDeleteModal(row: any): void {
    this.selectedRow = row;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedRow = null;
  }

  confirmDelete(): void {
    this.delete.emit(this.selectedRow);
    this.closeDeleteModal();
  }

  
currentPage = 1;

pageSize = 5;

@Input() pageSizeOptions: number[] = [5, 10, 20, 50];

// Paginated Records

get paginatedData(): any[] {

  const startIndex =
    (this.currentPage - 1) * this.pageSize;

  const endIndex =
    startIndex + this.pageSize;

  return this.data.slice(
    startIndex,
    endIndex
  );
}

// Total Pages

get totalPages(): number {

  return Math.ceil(
    this.data.length / this.pageSize
  );

}

// Previous

previousPage(): void {

  if (this.currentPage > 1) {
    this.currentPage--;
  }

}

// Next

nextPage(): void {

  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }

}

// Change Page Size

changePageSize(event: Event): void {

  const value = Number(
    (event.target as HTMLSelectElement).value
  );

  this.pageSize = value;

  this.currentPage = 1;
}



}
