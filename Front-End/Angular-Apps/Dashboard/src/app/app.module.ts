import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component, OnInit} from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { introPage } from './pages/intro/intro';
import { dashboardPage } from './pages/dashboard/dashboard';
import { reportDetail } from './pages/dashboard/report-detail/report-detail';


const route: Routes = [
  { path: '', component: introPage },
  { path: 'dashboard-page', component: dashboardPage},
  { path: 'report-detail', component: reportDetail}
];

@NgModule({
  declarations: [
    AppComponent,
    introPage,
    dashboardPage,
    reportDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  content:any;
  constructor(){
    //called first time before the ngOnInit()
    console.log("App Module started");
 }  

  ngOnInit(){
      //called after the constructor and called  after the first ngOnChanges() 
  }
 }
