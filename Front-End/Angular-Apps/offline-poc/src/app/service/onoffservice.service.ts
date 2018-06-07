import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Subject } from "rxjs/Subject";
import { observableToBeFn } from 'rxjs/testing/TestScheduler';

@Injectable()
export class OnoffserviceService {
  public subject = new Subject();
  constructor() { }

  checkNetworkStatus(status:string){
    console.log('status in service', status);
    this.subject.next({
      'status':status
    })
  }

  getStatus(): Observable<any>{
    return this.subject.asObservable();
  }
}
