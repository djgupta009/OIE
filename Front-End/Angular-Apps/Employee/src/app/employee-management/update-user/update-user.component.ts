import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
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
        this.employee = this.empSer.getEmployeeById(this.empId);
      }
    );
    

    this.employeeUpdateForm = new FormGroup({
      'emp_firstName': new FormControl({value: this.employee.emp_firstName, disabled: true}),
      'emp_lastName': new FormControl({value: this.employee.emp_lastName, disabled: true}),
      'emp_Desig': new FormControl(this.employee.emp_Desig,[Validators.required, Validators.pattern('^[a-z A-Z ]*$'),Validators.minLength(2)]),
      'emp_Contact': new FormControl(this.employee.emp_Contact,[Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(6)])
    });
  }

  updateEmployee(){
    this.empSer.updateEmployee(this.employeeUpdateForm.value,this.empId).subscribe(()=>{
      this.router.navigateByUrl('/employeemanagement/employeelist');
    });
    
  }

  checkDesig(){
    const errors = this.employeeUpdateForm.get('emp_Desig').errors;
    if (errors.required){
      return 'Please enter Designation';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Designation should have a minimum of 2 letters';
    }else return false;
  }

  checkContact(){
    const errors = this.employeeUpdateForm.get('emp_Contact').errors;
    if (errors.required){
      return 'Please enter Contact Details';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Contact should have a minimum of 6 numbers';
    }else return false;
  }

}
