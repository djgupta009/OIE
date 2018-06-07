import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataSendService } from './service/data-send.service';
// import { TranslationsComponent } from './translation-list/translations/translations.component';
// import { TranslationListComponent } from './translation-list/translation-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';      
 

const routes: Routes = [
  { path: '', component:  MainpanelComponent},
  { path: 'translationlist', loadChildren: './translation-list/translation-list.module#TranslationListModule'},
  { path: 'addanimal', loadChildren: './addanimaldata/addanimaldata.module#AddAnimalDataModule' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ DataSendService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
