import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { EmployeeDatabaseModel } from '../employee.database.model';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeManagementService {

  constructor(private http: HttpClient,
    private router: Router) {
  }

  userUrl: string = environment.serverUrl;
  url: string = environment.userUrl;
  employeeList: any;

  getEmployeeById(empId: number) {
    
    for (let i = 0; i < this.employeeList.length; i++) {
      if (this.employeeList[i].emp_ID == empId) {
        return this.employeeList[i];
      }
    }
  }
  addEmployee(employee: EmployeeModel) {
    const uri = this.userUrl + 'addemployee';
    return this.http.post(uri,
      employee,
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

  deleteEmployee(empId: number) {
    let deleteQuery = this.userUrl + 'deleteemployee/' + empId;
    return this.http.delete(deleteQuery, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': this.url
      })
    })
  }
  ngOnDestroy() {
    console.log('DEstroyed');
  }

  updateEmployee(employee: EmployeeModel, empId: number) {
    let updateQuery = this.userUrl + 'updateemployee/' + empId;
    console.log(employee);
    return this.http.put(updateQuery, employee,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Cache-control': 'no-cache',
        'Expires': '0',
        'Pragma': 'no-cache'
      })
    })
  }

  getEmployees() {
    return this.http.get(this.userUrl + 'employees').map((res) => {
      this.employeeList = res;
      return res;
    });
  }

}
