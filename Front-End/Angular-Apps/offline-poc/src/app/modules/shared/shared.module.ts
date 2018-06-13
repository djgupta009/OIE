import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "./components/paginations/pagination.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PaginationComponent],
  exports:[PaginationComponent],
  providers:[PaginationComponent]
})
export class SharedModule { }
