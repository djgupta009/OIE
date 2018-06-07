import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SkillModel } from './skill.model';
import { EmployeeManagementService } from '../employee-management/employee-management.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SkillsManagementService {

  constructor(private http: HttpClient,
    private router: Router,
    private empSer: EmployeeManagementService) { }

  userUrl: string = environment.serverUrl;
  url: string = environment.userUrl;
  skillList: any;

  addSkill(skill: SkillModel) {
    const uri = this.userUrl + 'addskill';
    return this.http.post(uri,
      skill,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': this.url,
          'Cache-control': 'no-cache',
          'Expires': '0',
          'Pragma': 'no-cache'
        })
      })
  }


  getSkillById(empId: number) {
    for (let i = 0; i < this.skillList.length; i++) {
      if (this.skillList[i].skill_id == empId) {
        return this.skillList[i];
      }
    }
  }

  getSkills() {
    return this.http.get(this.userUrl + 'skills').map((res) => {
      this.skillList = res;
      return res;
    });
  }

  //called dby deleteSkill() 
  checkSkillPresent(employee: Object, employeeLength: number, skillId: number) {
    let _foundSkill: boolean = false;
    for (let i = 0; i < employeeLength; i++) {
      employee[i].emp_Skills.forEach(data => {
        if (data.skill_id == skillId) {
          _foundSkill = true;
        }
      });
    }
    return _foundSkill;
  }

  deleteSkill(skillId: number): Observable<Object> {
      let deleteQuery = this.userUrl + 'deleteskill/' + skillId;
      return this.http.delete(deleteQuery, {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': this.url
        })
      })
  
  }

  updateSkill(skill: SkillModel, skillId: number): Observable<Object> {
    let updateQuery = this.userUrl + 'updateskill/' + skillId;
    console.log(skill);
    return this.http.put(updateQuery, skill, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Cache-control': 'no-cache',
        'Expires': '0',
        'Pragma': 'no-cache'
      })
    })
  }

}
