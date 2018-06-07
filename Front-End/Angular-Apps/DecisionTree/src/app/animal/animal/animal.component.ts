import { Component, Output,EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  @Input() animalType: string;
  @Output() changePage = new EventEmitter();

  ngOnInit() {
  }

  status(result : string){
    this.changePage.emit({'result': result,pageName:'mammalCheck'});
  }

}
