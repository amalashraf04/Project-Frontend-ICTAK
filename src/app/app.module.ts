import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AddlearnerComponent } from './addlearner/addlearner.component';
import {  HttpClientModule } from '@angular/common/http';
import {NgxCsvParserModule}  from 'ngx-csv-parser'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateleanerComponent } from './pages/updateleaner/updateleaner.component';
import { AddstaffComponent } from './admin/addstaff/addstaff.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    AddlearnerComponent,
    UpdateleanerComponent,
    AddstaffComponent,
    AdmindashboardComponent,
    HomeComponent,
    LoginComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCsvParserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
