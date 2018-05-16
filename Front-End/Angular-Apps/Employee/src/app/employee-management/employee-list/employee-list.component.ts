import { Component, OnInit } from '@angular/core';
import { EmployeeManagementService } from '../employee-management.service';
import { EmployeeModel } from '../../employee.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService: EmployeeManagementService,
  private router: Router) { }
  employeeList: any;
  employeeListLength: number;
  recordSizePerPage: number = 5;
  page: number = 1;
  ngOnInit() {
      this.getEmployees();
  }

  getEmployees(){
      this.empService.getEmployees().subscribe(
        response => {
          if(response){
            this.employeeList = response;
            this.employeeListLength = Object.keys(this.employeeList).length;
          }
        }
      );
  }

  deleteUser(empId: number){
    this.empService.deleteEmployee(empId).subscribe(()=>{
      this.getEmployees();
    });
  }

  updateUser(empId: number){
      this.router.navigate(['/employeemanagement/updateemployee/',empId]);
  }

  paginate(event: any){
    this.page = +(event.page + 1);
  }
}
