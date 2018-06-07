import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pet-check',
  templateUrl: './pet-check.component.html',
  styleUrls: ['./pet-check.component.css']
})
export class PetCheckComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  
  @Output() changePage = new EventEmitter();
  
  status(result : string){
    if (result=='Yes'){
      this.changePage.emit({'animalType': "hamster",pageName:'animal'});
    }else{
      this.changePage.emit({'result': result,pageName:'farmCheck'});
    }
    
  }
}
