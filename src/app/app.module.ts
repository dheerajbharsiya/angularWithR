import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AlgoResultComponent } from './algo-result/algo-result.component';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    WelcomeComponent,
    AlgoResultComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
