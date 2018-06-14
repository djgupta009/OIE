import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoute: Routes = [
    {
        path:'',loadChildren:'./modules/sheet/sheet.module#SheetModule'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)]
})

export class appRouter {}