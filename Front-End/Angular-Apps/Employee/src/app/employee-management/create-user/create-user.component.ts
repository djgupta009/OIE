import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { EmployeeModel } from '../employee.model';
import { EmployeeManagementService } from '../employee-management.service';
import { Router } from '@angular/router';
import { SkillsManagementService } from '../../skills-management/skills-management.service';
import { SkillModel } from '../../skills-management/skill.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private emplService: EmployeeManagementService,
  private router: Router,
  private skillServ: SkillsManagementService){}


  employeeForm: FormGroup;
  skillList: SelectItem[] = [];
  
  ngOnInit() {
    this.employeeForm = new FormGroup({
      'emp_firstName': new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(3)]),
      'emp_lastName': new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(2)]),
      'emp_Desig': new FormControl(null,[Validators.required, Validators.pattern('^[a-z A-Z ]*$'),Validators.minLength(5)]),
      'emp_Contact': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(6)]),
      'emp_Skills': new FormControl(null, Validators.required)
    });

    this.skillServ.getSkills().subscribe((res: Response)=>{
        this.createSkillList(res);
    });
  }

  //for PrimeNG multiselect feature, converting its SelectItem[] based data 
  createSkillList(res: any){
      res.forEach((data) =>{
        this.skillList.push({'label':data.skill_name,'value':data});
      });
  }


  addEmployee(){
    let employee = new EmployeeModel(this.employeeForm.value);
    this.emplService.addEmployee(employee).subscribe(()=>{
      this.router.navigateByUrl('/employeemanagement/employeelist');
    });
  }
  
  checkFirstName(){
    const errors = this.employeeForm.get('emp_firstName').errors;
    if (errors.required){
      return 'Please enter First Name';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'First name should have a minimum of 3 letters';
    }else return false;
  }

  checkLastName(){
    const errors = this.employeeForm.get('emp_lastName').errors;
    if (errors.required){
      return 'Please enter Last Name';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Last name should have a minimum of 2 letters';
    }else return false;
  }

  checkDesig(){
    const errors = this.employeeForm.get('emp_Desig').errors;
    if (errors.required){
      return 'Please enter Designation';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Designation should have a minimum of 2 letters';
    }else return false;
  }

  checkContact(){
    const errors = this.employeeForm.get('emp_Contact').errors;
    if (errors.required){
      return 'Please enter Contact Details';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Contact should have a minimum of 6 numbers';
    }else return false;
  }

}
