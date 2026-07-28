import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableColumn } from '../../models/table-column.model';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule, FormsModule, TooltipModule],
  standalone: true,
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
})
export class DynamicTable {
  @Input() title = '';
  @Input() viewPageUrl = '';
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() showAddButton = false;
  @Input() addButtonText = 'Add';
  @Input() redirectUrl = '';
  @Input() totalRecords = 0;
  @Input() currentPage = 1;
  @Input() pageSize = 10;
  @Input() loading = false;
  @Input() showSearch = false;
  @Input() searchFields: string[] = [];
  @Input() pageSizeOptions = [10, 20, 30, 40, 50];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() search = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('webvjhwrv');
    console.log('Dynamic Table Data', this.data);

    console.log('this.viewPageUrl');
  }

  showDeleteModal = false;
  selectedRow: any = null;
  searchText = '';
  constructor(private router: Router) {}
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

  get totalPages(): number {
    return this.totalRecords > 0 ? Math.ceil(this.totalRecords / this.pageSize) : 1;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  changePageSize(event: Event): void {
    const pageSize = Number((event.target as HTMLSelectElement).value);

    this.pageSizeChange.emit(pageSize);
  }
  applySearch(): void {
    let searchValue = this.searchText;
    this.search.emit(searchValue);
  }
  getBadgeStyle(status: string): string {
    const statusMap: { [key: string]: string } = {
      'In Stock': 'success',
      'Low Stock': 'warning',
      'Out Of Stock': 'danger',
      Active: 'success',
      Inactive: 'danger',
      Pending: 'warning',
      Approved: 'success',
      Rejected: 'danger',
      Processing: 'info',
      Completed: 'success',
    };

    return statusMap[status] || 'default';
  }

  getImageSource(image: any): string {
    if (Array.isArray(image)) {
      return image.length > 0 ? image[0] : '';
    }

    return image;
  }
  viewProduct(product: any): void {
    console.log('product', product);
    this.router.navigate([`${this.viewPageUrl}`], {
      queryParams: {
        id: product.id,
      },
    });
  }

  onRowKeyDown(event: KeyboardEvent, row: any): void {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    this.viewProduct(row);
  }
}
}
