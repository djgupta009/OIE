import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SkillModel } from '../skill.model';
import { SkillsManagementService } from '../skills-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})

export class UpdateSkillComponent implements OnInit {

  constructor(private skillServ: SkillsManagementService,
    private router: Router,
    private route: ActivatedRoute) { }

  skillUpdateForm: FormGroup;
  skillId: number;
  skill: SkillModel;  


  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.skillId = +params['id'];
        this.skill = this.skillServ.getSkillById(this.skillId);
        this.initialiseForm();
      }
    );
  }
  
  initialiseForm(){
    this.skillUpdateForm = new FormGroup({
      'skill_name': new FormControl(this.skill.skill_name),
      'skill_description': new FormControl(this.skill.skill_description)
    });
  }

  updateSkill(){
    this.skillServ.updateSkill(this.skillUpdateForm.value,this.skillId).subscribe(()=>{
      this.router.navigateByUrl('/skillmanagement/skilllist');
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
