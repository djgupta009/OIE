import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { introPage } from '../intro/intro';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class dashboardPage implements OnInit {
  selectedListItem : any = 1;
  selectedAnimalType:any;
  constructor(private router: Router) {}
  ngOnInit(){
    console.log("From dashboard page component");
  }

  gotoHome(){
    this.router.navigate(['']);
  }

  gotoReportDetail(){
    
  }

  openDetails(val){
    console.log(val);
    this.selectedListItem = val;
  }

  loadComponent(val){
    console.log(val);
    this.selectedAnimalType = val
    // this.router.navigate(['report-detail']);
  }


}
