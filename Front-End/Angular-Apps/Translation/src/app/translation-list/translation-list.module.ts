import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationsComponent } from './translations/translations.component';
import { TranslationListComponent } from './translation-list.component';
import { SharedModule } from "../shared/shared.module";

const croute: Routes = [
    {
        path: '', component: TranslationListComponent, children:[
            {
                path:'xyz',component: TranslationsComponent
            },
            { path: 'animal/:reportid/:language', component: TranslationsComponent }
        ]
    },
   
    
];

@NgModule({
    declarations: [
        TranslationsComponent,
        TranslationListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(croute)
    ],
    exports: [RouterModule]
})


export class TranslationListModule { }