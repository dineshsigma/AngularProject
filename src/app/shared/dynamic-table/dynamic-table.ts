import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableColumn } from '../../models/table-column.model';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule,FormsModule,TooltipModule],
   standalone: true,
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

  @Input() totalRecords = 0;

  @Input() currentPage = 1;

  @Input() pageSize = 10;

  @Input() loading = false;

  @Input() showSearch = false;

  @Input() searchFields: string[] = [];

  @Input() pageSizeOptions = [
    10,
    20,
    30,
    40,
    50
  ];

  @Output() edit = new EventEmitter<any>();

  @Output() delete = new EventEmitter<any>();

  @Output() pageChange = new EventEmitter<number>();

  @Output() pageSizeChange = new EventEmitter<number>();

  @Output() search = new EventEmitter<string>();

  showDeleteModal = false;

  selectedRow: any = null;

  searchText = '';


   ngOnChanges(
    changes: SimpleChanges
  ): void {

    console.log(
      'Dynamic Table Changes',
      changes
    );

    console.log(
      'Total Records',
      this.totalRecords
    );
  }

  constructor(private router: Router) { }

  // ngOnChanges(changes: SimpleChanges): void {

  //   if (changes['totalRecords']) {
  //     // this.generatePageSizeOptions();
  //   }
  // }

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

    return this.totalRecords > 0
      ? Math.ceil(
        this.totalRecords /
        this.pageSize
      )
      : 1;
  }

  previousPage(): void {

    if (
      this.currentPage > 1
    ) {

      this.pageChange.emit(
        this.currentPage - 1
      );
    }
  }

  nextPage(): void {

    if (
      this.currentPage <
      this.totalPages
    ) {

      this.pageChange.emit(
        this.currentPage + 1
      );
    }
  }

  changePageSize(
  event: Event
): void {

  const pageSize = Number(
    (event.target as HTMLSelectElement)
      .value
  );

  this.pageSizeChange.emit(
    pageSize
  );
}


applySearch():void{
  console.log(this.searchText,"searchText");
  let searchValue  =  this.searchText;
  this.search.emit(searchValue)
}



}