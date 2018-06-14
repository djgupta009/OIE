import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bird-check',
  templateUrl: './bird-check.component.html',
  styleUrls: ['./bird-check.component.css']
})
export class BirdCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() changePage = new EventEmitter();
  
  status(result : string){
    if (result=='Yes'){
      this.changePage.emit({animalType: "penguin",pageName:'animal'});
    }else{
      this.changePage.emit({'result': result,pageName:'oceanCheck'});
    }
    
  }

}
