import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MammalCheckComponent } from '../modules/mammal-check/mammal-check.component';
import { BirdCheckComponent } from '../modules/mammal-check/bird-check/bird-check.component';
import { PetCheckComponent } from '../modules/mammal-check/pet-check/pet-check.component';
import { FarmCheckComponent } from '../modules/mammal-check/pet-check/farm-check/farm-check.component';
import { OceanCheckComponent } from '../modules/mammal-check/bird-check/ocean-check/ocean-check.component';
import { AnimalComponent } from '../modules/animal/animal/animal.component';
import { StartPageComponent } from '../modules/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OceanCheckComponent,
    MammalCheckComponent,
    BirdCheckComponent,
    PetCheckComponent,
    FarmCheckComponent,
    AnimalComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StartPageComponent,
    OceanCheckComponent,
    MammalCheckComponent,
    BirdCheckComponent,
    PetCheckComponent,
    FarmCheckComponent,
    AnimalComponent
  ]
})
export class AppModule { }
