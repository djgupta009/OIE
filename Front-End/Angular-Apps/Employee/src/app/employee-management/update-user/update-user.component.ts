import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { EmployeeModel } from '../employee.model';
import { EmployeeDatabaseModel } from '../../employee.database.model';
import { EmployeeManagementService } from '../employee-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsManagementService } from '../../skills-management/skills-management.service';
import { SelectItem } from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {

  constructor(private empSer: EmployeeManagementService,
    private route: ActivatedRoute,
    private router: Router,
    private skillSer: SkillsManagementService) { }

  empId: number;
  employee: any;
  employeeUpdateForm: FormGroup;
  skillList: Object;
  selectedSkillId: number;  
  msgs: Message[] = [];

  ngOnInit() {

    this.route.params.subscribe(
      (params) => {
        this.empId = +params['id'];
        this.employee = this.empSer.getEmployeeById(this.empId);
        this.skillSer.getSkills().subscribe((res) => {
          this.skillList = res;
        });
        this.initialiseForm();
      }
    );
  }

  initialiseForm() {
    this.employeeUpdateForm = new FormGroup({
      'emp_firstName': new FormControl({ value: this.employee.emp_firstName, disabled: false }),
      'emp_lastName': new FormControl({ value: this.employee.emp_lastName, disabled: false }),
      'emp_Desig': new FormControl(this.employee.emp_Desig, [Validators.required, Validators.pattern('^[a-z A-Z ]*$'), Validators.minLength(5)]),
      'emp_Contact': new FormControl(this.employee.emp_Contact, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6)]),
      'emp_JoiningDate' : new FormControl(this.employee.emp_JoiningDate),
      'emp_Skills': new FormArray([])
    });
    let emp_skill = this.employeeUpdateForm.get('emp_Skills') as FormArray;
    this.employee.emp_Skills.forEach(skill => {
      emp_skill.push(new FormControl(skill));
    });
  }


  skillAddedCheck(skillid: number){
    let emp_skill = this.employeeUpdateForm.get('emp_Skills').value as FormArray;
    let skillListLength = emp_skill.length;
    for(let i=0; i<skillListLength; i++){
      if( emp_skill[i].skill_id == skillid ){
        return true;  
      }
    }
  }

  changeSelectedSkill(newSkill: number){
    this.selectedSkillId = newSkill;
  }

  addSkill(){
    if(!this.skillAddedCheck(this.selectedSkillId)){
      let skillListLength = Object.keys(this.skillList).length;
      for(let i=0; i<skillListLength; i++){
        if(this.skillList[i].skill_id== this.selectedSkillId){
          let emp_skill = this.employeeUpdateForm.get('emp_Skills') as FormArray;
          emp_skill.push(new FormControl(this.skillList[i]));
        }
      }
    }else{
      this.msgs.push({severity:'error', summary:'Duplicate', detail:'Skill cannot be added as it is already assigned'});
    }
  }

  updateEmployee() {
    this.empSer.updateEmployee(this.employeeUpdateForm.value, this.empId).subscribe(() => {
      this.router.navigateByUrl('/employeemanagement/employeelist');
    });

  }

  toggleSkill(event: any,userskill: any){
    let skills = this.employeeUpdateForm.get('emp_Skills') as FormArray;

    if(event.target.checked){
      skills.push(new FormControl(userskill));
    }else{
      let index = skills.controls.findIndex(x => x.value.skill_id == userskill.skill_id );
      skills.removeAt(index);
    }

  }

  checkDesig() {
    const errors = this.employeeUpdateForm.get('emp_Desig').errors;
    if (errors.required) {
      return 'Please enter Designation';
    } else if (errors.pattern) {
      return 'Alphabets only';
    } else if (errors.minlength) {
      return 'Designation should have a minimum of 5 letters';
    } else return false;
  }

  checkContact() {
    const errors = this.employeeUpdateForm.get('emp_Contact').errors;
    if (errors.required) {
      return 'Please enter Contact Details';
    } else if (errors.pattern) {
      return 'Alphabets only';
    } else if (errors.minlength) {
      return 'Contact should have a minimum of 6 numbers';
    } else return false;
  }

}
