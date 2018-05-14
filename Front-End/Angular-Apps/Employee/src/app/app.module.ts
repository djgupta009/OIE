import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PaginatorModule} from 'primeng/paginator';
import {Routes, RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EmployeeListComponent } from './employee-management/employee-list/employee-list.component';
import { UpdateUserComponent } from './employee-management/update-user/update-user.component';
import { CreateUserComponent } from './employee-management/create-user/create-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeManagementService } from './employee-management/employee-management.service';
import { HttpClientModule } from '@angular/common/http'; 

const route: Routes = [
  {path: '', component: EmployeeManagementComponent},
  {path: 'createuser', component: CreateUserComponent},
  {path: 'updateuser/:id',component: UpdateUserComponent},
  {path: 'employeelist', component: EmployeeListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementComponent,
    EmployeeListComponent,
    UpdateUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    PaginatorModule
  ],
  providers: [EmployeeManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
