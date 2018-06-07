import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { GrowlModule } from 'primeng/growl';
// import { TranslationsComponent } from './translation-list/translations/translations.component';
// import { TranslationListComponent } from './translation-list/translation-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddanimaldataComponent } from './addanimaldata.component';
import { MessageService } from 'primeng/components/common/messageservice';

const routes: Routes = [
  { path: '', component: AddanimaldataComponent }
]

@NgModule({
  declarations: [
    AddanimaldataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GrowlModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[MessageService]
})
export class AddAnimalDataModule { }
