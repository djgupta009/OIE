import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() changePage = new EventEmitter();
  
  status(result : string){
      this.changePage.emit({'result': result,pageName:'mammalCheck'});
  }

}


