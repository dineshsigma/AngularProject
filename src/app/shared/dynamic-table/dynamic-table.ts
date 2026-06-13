import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
})
export class DynamicTable {

  // Dynamic column configuration
  @Input() columns: any[] = [];

  // Dynamic table data
  @Input() data: any[] = [];

}
