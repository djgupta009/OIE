import { Component, OnInit } from '@angular/core';

// import { reportDetails } from './pages/report-details/report-details';

import { Router } from '@angular/router';
// import * as LANGUAGE_EN from '../app/json/en.json';
// import * as LANGUAGE_FR from '../app/json/fr.json';
// import * as LANGUAGE_ES from '../app/json/es.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {}
  // private router: Router
  content:any;
  selectedLanguage:any='EN';
  title = 'app';
  ngOnInit(){
    console.log("From app component");
    // this.languageTransform();
  }

  gotoReportDetails(){
    console.log("Going to next page");
    // this.router.navigateByUrl('./report-details').then(
      
      
    this.router.navigate(['report-details']).then(
      function(){
          console.log('navigate success');
      },
      function(){
          console.log('navigate failure');
      });
  }


  changeLanguage(selectedOption){
    this.selectedLanguage = selectedOption;
    console.log("selectedLanguage",this.selectedLanguage);
    // this.languageTransform();
  }

  // languageTransform(){
  //   if(this.selectedLanguage == "FR"){
  //     this.content = LANGUAGE_FR;
  //     console.log(" LANGUAGE_FR", this.content.language_content[0].title);
  //   }
  //   else if(this.selectedLanguage == "ES"){
  //     this.content = LANGUAGE_ES;
  //     console.log(" LANGUAGE_ES", this.content.language_content[0].title);
  //   }
  //   else{
  //     this.content = LANGUAGE_EN;
  //     console.log(" LANGUAGE_EN", this.content.language_content[0].title);
  //   }
  // }
}
