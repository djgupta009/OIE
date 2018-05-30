import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mammal-check',
  templateUrl: './mammal-check.component.html',
  styleUrls: ['./mammal-check.component.css']
})
export class MammalCheckComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  @Output() changePage = new EventEmitter();
  
  status(result : string){
    if (result=='Yes'){
      this.changePage.emit({'result': result,pageName:'petCheck'});
    }else{
      this.changePage.emit({'result': result,pageName:'birdCheck'});
    }
  }

}  