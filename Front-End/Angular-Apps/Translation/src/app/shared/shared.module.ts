import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../buttons/back-button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ BackButtonComponent ],
  exports:[ BackButtonComponent ]
})
export class SharedModule { }
