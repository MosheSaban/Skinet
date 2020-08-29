import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginh-header',
  templateUrl: './paginh-header.component.html',
  styleUrls: ['./paginh-header.component.scss']
})
export class PaginhHeaderComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
