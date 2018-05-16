import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SkillModel } from '../skill.model';
import { SkillsManagementService } from '../skills-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})

export class UpdateSkillComponent implements OnInit {

  constructor(private skillServ: SkillsManagementService,
    private router: Router) { }

  skillUpdateForm: FormGroup;

  ngOnInit() {
    this.skillUpdateForm = new FormGroup({
      'skill_name': new FormControl(),
      'skill_description': new FormControl()
    });
  }
  
  checkSkillName(){
    const errors = this.skillUpdateForm.get('skill_name').errors;
    if (errors.required){
      return 'Please enter Skill Name';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Skill should have a minimum of 2 letters';
    }else return false;
  }

  checkSkillDescription(){
    const errors = this.skillUpdateForm.get('skill_description').errors;
    if (errors.required){
      return 'Please enter Description';
    }else if(errors.pattern){
      return 'Alphabets only';
    }else if(errors.minlength){
      return 'Description should have a minimum of 2 letters';
    }else return false;
  }
}
