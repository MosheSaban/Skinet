import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginhHeaderComponent } from './components/paginh-header/paginh-header.component';
import { PagerComponent } from './components/pager/pager.component';



@NgModule({
  declarations: [PaginhHeaderComponent, PagerComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PaginhHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
