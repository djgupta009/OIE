import { 
  Component, 
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory 
} from '@angular/core';

import { MammalCheckComponent } from './mammal-check/mammal-check.component';
import { BirdCheckComponent } from './mammal-check/bird-check/bird-check.component';
import { PetCheckComponent } from './mammal-check/pet-check/pet-check.component';
import { FarmCheckComponent } from './mammal-check/pet-check/farm-check/farm-check.component';
import { OceanCheckComponent } from './mammal-check/bird-check/ocean-check/ocean-check.component';
import { AnimalComponent } from './animal/animal/animal.component';
import { StartPageComponent } from './start-page/start-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('templatecontainer',{ read: ViewContainerRef}) entry: ViewContainerRef;
  title = 'Decision Tree';
  componentRef: any;
  
  componentMapping = {
    'startPage' : StartPageComponent,
    'mammalCheck': MammalCheckComponent,
    'birdCheck' : BirdCheckComponent,
    'petCheck' : PetCheckComponent,
    'farmCheck' : FarmCheckComponent,
    'oceanCheck' : OceanCheckComponent,
    'animal' : AnimalComponent
  }
  
  firstViewPage = {'result': "none",pageName:'startPage'};
  
  constructor(private resolver: ComponentFactoryResolver){
  }

  createComponent(pageRequest){
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(this.componentMapping[pageRequest.pageName]);
    let componentRef = this.entry.createComponent(factory);
    if(pageRequest.pageName!="animal" ){
      componentRef.instance.changePage.subscribe( $event =>{
        this.createComponent($event);
      });
    }else{
      componentRef.instance.animalType = pageRequest.animalType;
      componentRef.instance.changePage.subscribe( $event =>{
        this.createComponent($event);
      });
    }
  }

  ngOnInit(){
    this.createComponent(this.firstViewPage);
  }

}
