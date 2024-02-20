import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsertaskComponent } from './usertask/usertask.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OperatorDashboardComponent } from './components/operator-dashboard/operator-dashboard.component';
import { AddcontainerComponent } from './components/addcontainer/addcontainer.component';
import { ViewcontainerComponent } from './components/viewcontainer/viewcontainer.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { ViewAssignmentComponent } from './components/view-assignment/view-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    UsertaskComponent,
    CreatetaskComponent,
    DisplaytaskComponent,
    AdminDashboardComponent,
    OperatorDashboardComponent,
    AddcontainerComponent,
    ViewcontainerComponent,
    AddAssignmentComponent,
    ViewAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
