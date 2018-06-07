import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MammalCheckComponent } from './mammal-check/mammal-check.component';
import { BirdCheckComponent } from './mammal-check/bird-check/bird-check.component';
import { PetCheckComponent } from './mammal-check/pet-check/pet-check.component';
import { FarmCheckComponent } from './mammal-check/pet-check/farm-check/farm-check.component';
import { OceanCheckComponent } from './mammal-check/bird-check/ocean-check/ocean-check.component';
import { AnimalComponent } from './animal/animal/animal.component';
import { StartPageComponent } from './start-page/start-page.component';

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
