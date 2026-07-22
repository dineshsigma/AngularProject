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


}
