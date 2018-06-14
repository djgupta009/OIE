import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { appRouter } from './app.router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouter,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
