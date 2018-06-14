import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetPageComponent } from './sheet-page/sheet-page.component';
import { sheetRouter } from "./sheet.router";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    sheetRouter,
    ReactiveFormsModule
  ],
  declarations: [SheetPageComponent]
})
export class SheetModule { }
