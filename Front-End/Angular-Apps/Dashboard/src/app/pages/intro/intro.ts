import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { dashboardPage } from '../dashboard/dashboard';

import { language_en_content, language_es_content, language_fr_content } from '../../../app/json/language';


@Component({
  selector: 'introPage',
  templateUrl: './intro.html',
  styleUrls: ['./intro.css']
})

export class introPage implements OnInit {
  title = 'app';
  constructor(private router: Router) {}
  // private router: Router
  content:any;
  selectedLanguage:any='EN';
  ngOnInit(){
    console.log("From app component");
    this.languageTransform();
  }

  changeLanguage(selectedOption){
    this.selectedLanguage = selectedOption;
    console.log("selectedLanguage",this.selectedLanguage);
    this.languageTransform();
  }

  languageTransform(){
    if(this.selectedLanguage == "FR"){
      this.content = language_fr_content;
      console.log(" LANGUAGE_FR", this.content[0].title);
    }
    else if(this.selectedLanguage == "ES"){
      this.content = language_es_content;
      console.log(" LANGUAGE_ES", this.content[0].title);
    }
    else{
      this.content = language_en_content;
      console.log(" LANGUAGE_EN", this.content[0].title);
    }
  }
  gotoDashboard(){
    this.router.navigate(['dashboard-page']);
  }


}
