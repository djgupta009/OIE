import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ocean-check',
  templateUrl: './ocean-check.component.html',
  styleUrls: ['./ocean-check.component.css']
})
export class OceanCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() changePage = new EventEmitter();
  
  status(result : string){
    if (result=='Yes'){
      this.changePage.emit({animalType: "squid",pageName:'animal'});
    }else{
      this.changePage.emit({animalType: "spider",pageName:'animal'});
    }
    
  }

}
