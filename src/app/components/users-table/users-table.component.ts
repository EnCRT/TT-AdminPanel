import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  id: number;
  avatar: string;
  name: string;
  mail: string;
  phone: string;
  city: string;
  state: string;
  isActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, avatar:'/assets/images/users/user-2.png', name: 'Corey Arcand', mail: 'corey.a@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: true},
  {id: 2, avatar:'/assets/images/users/user-1.png', name: 'Marley Torff', mail: 'marley.t@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: true},
  {id: 3, avatar:'/assets/images/users/user-3.png', name: 'Alfredo Gouse', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: false},
  {id: 4, avatar:'/assets/images/users/user-4.png', name: 'Jaydon Kenter', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: false},
  {id: 5, avatar:'/assets/images/users/user-5.png', name: 'Ann Siphron', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: true},
  {id: 6, avatar:'/assets/images/users/user-6.png', name: 'Justin Bator', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: false},
  {id: 7, avatar:'/assets/images/users/user-7.png', name: 'Zaire Bergson', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: true},
  {id: 8, avatar:'/assets/images/users/user-8.png', name: 'Cooper Levin', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: false},
  {id: 9, avatar:'/assets/images/users/user-9.png', name: 'Marley Levin', mail: 'alfredo.g@gmail.com', phone: '+09876543210', city: 'New York', state: 'United States', isActive: true},
  {id: 10, avatar:'/assets/images/users/user-10.png', name: 'Cheyenne Press', mail: 'alfredo.g@gmail.co', phone: '+09876543210', city: 'New York', state: 'United States', isActive: false},
];

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;  

  displayedColumns: string[] = ['select', 'name', 'mail', 'phone', 'city', 'state', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  itemsPossibleQuantities= [
    {key: 10, value: 10},
    {key: 20, value: 20},
  ]
  
  constructor() { }

  ngOnInit(): void {
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  onChangePage(event: PageEvent) {
    console.log(event.pageIndex);
    console.log(event.pageSize);
  }
}
