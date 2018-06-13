import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from "./employees/employee.component";
import { employeeRouter } from "./employee.router";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeService } from "../../service/service";
import { SharedModule } from "../shared/shared.module";
import { PaginationComponent } from "../shared/components/paginations/pagination.component";
import { OnoffserviceService } from "../../service/onoffservice.service";
@NgModule({
  imports: [
    CommonModule,
    employeeRouter,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [EmployeeComponent],
  exports: [],
  providers: [EmployeeService, PaginationComponent, OnoffserviceService]
})
export class EmployeeModule { }
