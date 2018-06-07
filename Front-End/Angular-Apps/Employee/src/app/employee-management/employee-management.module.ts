import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FilterListPipe } from './employee-list/filter-list.pipe';
import { MultiSelectModule } from 'primeng/multiselect';
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

const route: Routes = [
    {path:'employeemanagement', children: [
        { path: '', component: EmployeeManagementComponent },
        { path: 'addemployee', component: CreateUserComponent },
        { path: 'updateemployee/:id',component: UpdateUserComponent },
        { path: 'employeelist', component: EmployeeListComponent }
      ]},
]

@NgModule({
    declarations: [
        EmployeeManagementComponent,
        EmployeeListComponent,
        UpdateUserComponent,
        CreateUserComponent,
        FilterListPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(route),
        PaginatorModule,
        GrowlModule,
        ConfirmDialogModule,
        MultiSelectModule
    ],
    exports: [RouterModule],
    providers: [ConfirmationService]
})

export class EmployeeManagementModule{}