import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'report-detail',
  templateUrl: './report-detail.html',
  styleUrls: ['./report-detail.css']
})

export class reportDetail implements OnInit {
  title = 'app';
  ngOnInit(){
    console.log("From Report Details page component");
  }

  loadComponent(val){
    console.log(val);
  }

}
