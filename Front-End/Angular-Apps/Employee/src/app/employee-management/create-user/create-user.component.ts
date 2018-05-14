import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl } from '@angular/forms';
import { EmployeeModel } from '../../employee.model';
import { EmployeeManagementService } from '../employee-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private emplService: EmployeeManagementService,
  private router: Router){}


  employeeForm: FormGroup;
  
  ngOnInit() {
    this.employeeForm = new FormGroup({
      'emp_firstName': new FormControl(null),
      'emp_lastName': new FormControl(null),
      'emp_Desig': new FormControl(null),
      'emp_Contact': new FormControl(null)
    });
  }

  addEmployee(){
    let employee = new EmployeeModel(this.employeeForm.value);
    console.log(employee);
    this.emplService.addEmployee(employee).subscribe(()=>{
      this.router.navigateByUrl('employeelist');
    });
  }
  

}
