import { Component, OnInit } from '@angular/core';
import { SkillsManagementService } from '../skills-management.service';
import { SkillModel } from '../skill.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  constructor(private skillServ: SkillsManagementService,
    private router: Router) { }

  skillList: Object = [];
  skillListLength: number;
  recordSizePerPage: number = 5;
  page: number = 1;

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillServ.getSkills().subscribe(
      response => {
        this.skillList = response;
        this.skillListLength = Object.keys(this.skillList).length;
      }
    );
  }

  deleteSkill(skillId: number) {
    this.skillServ.deleteSkill(skillId).subscribe(() => {
      this.getSkills();
    });
  }

  updateSkill(skillId: number) {
    this.router.navigate(['/skillmanagement/updateskill/', skillId]);
  }

  paginate(event: any){
    this.page = +(event.page+1);
  }

}
