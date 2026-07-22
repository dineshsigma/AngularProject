export interface TableColumn {
  field: string;
  header: string;
  type?: 'text' | 'image' | 'badge' | 'currency';
}