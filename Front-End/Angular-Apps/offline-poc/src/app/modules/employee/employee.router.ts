import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employees/employee.component";
const empRoute: Routes = [
    {
        path:'',redirectTo:'addemployee',pathMatch:'full'
    },{
        path:'addemployee', component:EmployeeComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(empRoute)
    ]
})

export class employeeRouter {}