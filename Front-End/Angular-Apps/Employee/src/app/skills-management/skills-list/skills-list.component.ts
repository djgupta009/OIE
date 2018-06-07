import { Component, OnInit } from '@angular/core';
import { SkillsManagementService } from '../skills-management.service';
import { SkillModel } from '../skill.model';
import { Router } from '@angular/router';
import { EmployeeManagementService } from '../../employee-management/employee-management.service';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  constructor(private skillServ: SkillsManagementService,
    private router: Router,
    private empSer: EmployeeManagementService,
    private confirmationService: ConfirmationService ) { }

  skillList: Object;
  skillListLength: number;
  recordSizePerPage: number = 5;
  page: number = 1;
  msgs: Message[] = [];

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillServ.getSkills().subscribe(
      response => {
        if (response) {
          this.skillList = response;
          this.skillListLength = Object.keys(this.skillList).length;
        }
      }
    );
  }


  deleteSkill(skillId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Confirm Delete?',
      accept: () => {
        this.skillServ.deleteSkill(skillId).subscribe((res) => {
          this.getSkills();
        }, 
        error => {
          if(error.error.status == 'CONFLICT'){
            this.msgs.push({severity:'error', summary:'Cannot Delete', detail:'Skill cannot be deleted as it is already assigned to a user'});
          }
        });
      }
     });
   
  }


  updateSkill(skillId: number) {
    this.router.navigate(['/skillmanagement/updateskill/', skillId]);
  }

  paginate(event: any) {
    this.page = +(event.page + 1);
  }

}
