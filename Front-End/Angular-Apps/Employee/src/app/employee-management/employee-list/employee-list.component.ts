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

  ngOnInit() {
  //  this.empService.employeeListObeserver.subscribe( res =>
  //   this.employeeList = res
  //  );
      this.getEmployees();
  }

  getEmployees(){
      this.empService.getEmployees().subscribe(
        response => {
          this.employeeList = response;
        }
      );
  }

  deleteUser(empId: number){
    console.log(empId);
    this.empService.deleteEmployee(empId).subscribe(()=>{
      this.getEmployees();
    });
  }

  updateUser(empId: number){
      this.router.navigate(['updateuser/',empId]);
  }
}
