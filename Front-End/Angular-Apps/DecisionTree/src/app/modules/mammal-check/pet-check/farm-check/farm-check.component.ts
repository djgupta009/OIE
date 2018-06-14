import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-farm-check',
  templateUrl: './farm-check.component.html',
  styleUrls: ['./farm-check.component.css']
})
export class FarmCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() changePage = new EventEmitter();
  
  status(result : string){
    if (result=='Yes'){
      this.changePage.emit({'animalType': "goat",pageName:'animal'});
    }else{
      this.changePage.emit({'animalType': "elephant",pageName:'animal'});
    }
    
  }

}
