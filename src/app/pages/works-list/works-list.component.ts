import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WorksService } from '../../shared/services/works.service';

export interface WorkData {
  DOI: string;
  title: string;
  published: string;
  type: string;
  subject: string;
}

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  displayedColumns: string[] = [
    'title', 'publisher', 'type', 'subject', 'options'
  ];

  dataSource: MatTableDataSource<WorkData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _worksService: WorksService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._worksService.getAllWorks().subscribe(res => {
      if (res.status !== 'ok') {
        return
      }

      let data = res.message.items;
      data.subject = JSON.stringify(data.subject);
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._worksService.getByQuery(filterValue).subscribe(res => {
      if (res.status !== 'ok') {
        return
      }

      let data = res.message.items;
      data.subject = JSON.stringify(data.subject);
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  redirectToView(DOI: string){
    this._router.navigate(['/view/'+btoa(DOI)]);
  }

}

