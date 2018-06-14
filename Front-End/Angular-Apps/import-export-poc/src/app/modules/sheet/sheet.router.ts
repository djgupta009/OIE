import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import { SheetPageComponent } from './sheet-page/sheet-page.component';
const sheetRoute: Routes = [
    {
        path:'',component:SheetPageComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(sheetRoute)]
})

export class sheetRouter {}