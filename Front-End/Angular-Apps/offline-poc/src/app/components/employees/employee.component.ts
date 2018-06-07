 import { AppRoutingModule } from '../../app-routing.module';
import { Observable } from 'rxjs/Observable';
import { PaginationComponent } from '../paginations/pagination.component';
import { Component, OnInit, Injectable, HostListener } from '@angular/core';
import { EmployeeService } from '../../service/service';
import { Employee } from '../../bean/employee';
import { EmployeeResponse } from '../../bean/employee.response';
import {ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap, Routes, UrlSegment } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { JSONSchema } from 'JSON';
import { OnoffserviceService } from "../../service/onoffservice.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
 rForm: FormGroup;
 firstName = '';
 lastName = '';
 contact = '';
 remarks = '';
 titleAlert  = 'This field is required';
 status = '';
 networkStatus = '';
 /*employee = {
   gender: [
     { name: 'Male',  selected: true, id: 1 },
     { name: 'Female',  selected: false, id: 2 }
   ],
   eduqual : [
     { name: '10th',  selected: true, id: 1 },
     { name: '12th',  selected: true, id: 2 },
     { name: 'B.tech',  selected: false, id: 3 },
     { name: 'M.tech',  selected: false, id: 4 },
     { name: 'BCA',  selected: false, id: 5 },
     { name: 'MCA',  selected: false, id: 6 }
   ]
 };*/
  loading = false;
  page = 1;
  limit = 5;
  total = 0;
  response: EmployeeResponse = new EmployeeResponse();
  URL: any;
  condition: string;

  ngOnInit() {
    this.onoffserv.checkNetworkStatus(navigator.onLine ? 'online':'offline');
    this.networkStatus = navigator.onLine ? 'online':'offline';
    this.onoffserv.getStatus().subscribe(status=>{
      this.networkStatus = status.status;
    })
    window.addEventListener('offline',()=>{
      this.onoffserv.checkNetworkStatus('offline');
      //this.networkStatus = 'offline';
    });
    window.addEventListener('online',()=>{
      this.onoffserv.checkNetworkStatus('online');
      //this.networkStatus = 'online';
      this.addCachedData();
    })
    
    this.getEmployeeList();
    //this.networkStatus = navigator.onLine ? 'online' : 'offline';
  } 
   constructor (protected localStorage: AsyncLocalStorage, private employeeService: EmployeeService,
     private pageable: PaginationComponent, private fb: FormBuilder, private onoffserv: OnoffserviceService) {
      this.rForm = new FormGroup({
      //status: new FormControl(this.condition),
      firstName: new FormControl(),
      lastName: new FormControl(),
      contact: new FormControl(),
      remarks:  new FormControl()
   });
    this.rForm = this.fb.group({
    //  'status': [this.condition, Validators.required],
     'firstName': [null, Validators.required],
     'lastName': [null, Validators.required],
     'contact': [null, Validators.required],
     'remarks': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])]
   });
  // this.onoffserv.checkNetworkStatus();
    
   
 }
 addPost(post) {
   const employee: Employee = new Employee();
   console.log('employee', employee)
   employee.firstName = post.firstName;
   employee.lastName = post.lastName;
   employee.contact = post.contact;
   employee.remarks = post.remarks;
   if (this.networkStatus === 'offline') {
    alert('It seems you are offline,Data adding to cache');
     this.localStorage.setItem('newPost', JSON.stringify(employee)).subscribe(() => {});
     this.rForm.reset();
   } else {
   this.employeeService.addEmployee(post).subscribe(res => {
      this.getEmployeeList();
      this.rForm.reset();
   });
   }
 }

 //deletes a user by id
 deleteUser(empId : number){
      this.employeeService.deleteEmployee(empId);
 }

 addCachedData() {
  if ((this.localStorage.getItem<Employee>('newPost') != null)) {
    this.localStorage.getItem('newPost').subscribe((x) => {
      let formatted_data = JSON.parse(x)
      if ( formatted_data != null) {
      this.employeeService.addEmployee(formatted_data).subscribe(res =>{
      });
      this.localStorage.removeItem('newPost').subscribe(() => {});
      }
    });
  }
}

check(): boolean {
  const status: boolean = this.networkStatus === 'online' ? true : false;
  const request: boolean = ( this.localStorage.getItem<Employee>('newPost') != null) ? true : false;
  alert(!(status && request));
  return !(status && request);
}


  getEmployees(): void {
    console.log('response start time is: ' + new Date().getMilliseconds() );
    this.employeeService.getEmployees()
        .subscribe(response => {
          this.response.employee = response.employee;
          console.log(this.response);
        });
        
   console.log('response end time is: ' + new Date().getMilliseconds() );
  }

getEmployeeList(): void {
    this.loading = true;
    this.employeeService.getEmployeesList({page: this.page - 1, limit: this.limit})
        .subscribe((response) => {
          this.response.employee = response.employee;
          this.total = response.totalElements;
          this.limit = response.size;
          this.page = this.page;
          this.loading = false;
          }, ( responseError) => {
            alert('Error in loading');
          }
        );
  }

  goToPage(n: number): void {
    this.page = n;
    this.getEmployeeList();
  }

  onNext(): void {
    this.page++;
     this.getEmployeeList();
  }

  onPrev(): void {
    this.page--;
     this.getEmployeeList();
  }
}


export interface Pageable {
    page: number;
    limit: number; // interfaces allow fields to be optional
}

const schema: JSONSchema = {
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    contact: {type: 'string'},
    remarks: {type: 'string'}
  },
  required: ['firstName', 'lastName' , 'contact' , 'remarks']
};
