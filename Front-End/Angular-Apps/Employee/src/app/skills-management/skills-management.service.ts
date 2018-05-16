import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SkillModel } from './skill.model';

@Injectable()
export class SkillsManagementService {

  constructor(private http: HttpClient,
    private router: Router) { }

  userUrl: string = 'http://10.224.21.173:8080/';
  url: string = 'http://127.0.0.1:4200/';
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


  getSkills(){
    return this.http.get(this.userUrl + 'skills').map((res) => {
      this.skillList = res;
      return res;
    });
  }


  deleteSkill(skillId: number){
    let deleteQuery = this.userUrl + 'deleteskill/' + skillId;
    return this.http.delete(deleteQuery, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': this.url
      })
    })
  }
  
}
