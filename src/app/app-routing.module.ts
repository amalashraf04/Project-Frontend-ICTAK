import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { AddlearnerComponent } from './addlearner/addlearner.component';
import { UpdateleanerComponent } from './pages/updateleaner/updateleaner.component';
import { AddstaffComponent } from './admin/addstaff/addstaff.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { EdituserComponent } from './admin/edituser/edituser.component';

const routes: Routes = [
  {path:'learners',component:TrainerComponent},
  {path:'add',component:AddlearnerComponent},
  {path:'update/:id',component:UpdateleanerComponent},
  {path:'add-user',component:AddstaffComponent},
  {path:'users',component:AdmindashboardComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:id',component:EdituserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
