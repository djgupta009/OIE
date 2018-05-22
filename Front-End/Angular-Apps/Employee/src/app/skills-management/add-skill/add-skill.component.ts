import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SkillModel } from '../skill.model';
import { SkillsManagementService } from '../skills-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private skillServ: SkillsManagementService,
              private router: Router
  ) { }

  skillForm: FormGroup;

  ngOnInit() {
    this.skillForm = new FormGroup({
      'skill_name': new FormControl(null,[Validators.required,Validators.minLength(2)]),
      'skill_description': new FormControl(null,[Validators.required, Validators.pattern('^[a-z A-Z ]*$'),Validators.minLength(4)])
    })
  }

  checkSkillName(){
    const errors = this.skillForm.get('skill_name').errors;
    if (errors.required){
      return 'Please enter Skill Name';
    }else if(errors.minlength){
      return 'Skill should have a minimum of 2 letters';
    }else return false;
  }

  checkSkillDescription(){
    const errors = this.skillForm.get('skill_description').errors;
    if (errors.required){
      return 'Please enter Description';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Description should have a minimum of 2 letters';
    }else return false;
  }

  addSkill(){
    let skill = new SkillModel(this.skillForm.value);
    console.log(skill);
    this.skillServ.addSkill(skill).subscribe(()=>{
      this.router.navigateByUrl('/skillmanagement/skilllist');
    });
  }

}
