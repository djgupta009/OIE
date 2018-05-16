import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PaginatorModule } from 'primeng/paginator';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserPortalComponent } from './user-portal/user-portal.component';

import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { SkillsManagementModule } from './skills-management/skills-management.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeManagementService } from './employee-management/employee-management.service';
import { SkillsManagementService } from './skills-management/skills-management.service';
import { HttpClientModule } from '@angular/common/http'; 

const route: Routes = [
  { path: '', component: UserPortalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserPortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmployeeManagementModule,
    SkillsManagementModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    PaginatorModule
  ],
  providers: [
    EmployeeManagementService,
    SkillsManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
