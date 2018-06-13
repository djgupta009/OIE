import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './modules/employees/employee.component';

// const routes: Routes = [
//  { path: '', redirectTo: '/addemployee', pathMatch: 'full'},
//  { path: 'viewemployees',component: EmployeeComponent },
//  { path: 'addemployee',component: EmployeeComponent },
//  { path: 'editemployee',component: EmployeeComponent }
// ];

const appRoute: Routes = [
  {
    path:"",loadChildren:'./modules/employee/employee.module#EmployeeModule'
  }
]
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoute) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}