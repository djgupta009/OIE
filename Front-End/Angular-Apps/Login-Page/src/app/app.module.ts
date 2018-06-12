import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageModule } from './modules/login/login-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    LoginPageModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
