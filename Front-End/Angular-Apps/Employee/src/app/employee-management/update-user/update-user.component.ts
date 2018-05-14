import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl } from '@angular/forms';
import { EmployeeModel } from '../../employee.model';
import {EmployeeDatabaseModel} from '../../employee.database.model';
import { EmployeeManagementService } from '../employee-management.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {

  constructor(private empSer :  EmployeeManagementService,
   private route : ActivatedRoute,
  private router : Router) { }

  empId: number; 
  employee: any;
  employeeUpdateForm : FormGroup;
  
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.empId = +params['id'];
      }
    );
    console.log(this.empSer.getEmployeeById(this.empId));
    this.employee = this.empSer.getEmployeeById(this.empId);
    this.employeeUpdateForm = new FormGroup({
      'emp_firstName': new FormControl(this.employee.emp_firstName),
      'emp_lastName': new FormControl(this.employee.emp_lastName),
      'emp_Desig': new FormControl(this.employee.emp_Desig),
      'emp_Contact': new FormControl(this.employee.emp_Contact)
    });
  }

  updateEmployee(){
    this.empSer.updateEmployee(this.employeeUpdateForm.value,this.empId).subscribe(()=>{
      this.router.navigateByUrl('employeelist');
    });
    
  }

}
