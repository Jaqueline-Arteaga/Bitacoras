import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityformComponent } from './pages/activityform/activityform.component';
import { CurrentprojectComponent } from './pages/currentproject/currentproject.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectformComponent } from './pages/projectform/projectform.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path:"",component:LoginComponent},  
  {path:"projects",component:ProjectsComponent,canActivate:[AuthGuard]},  
  {path:"currentproject",component:CurrentprojectComponent,canActivate:[AuthGuard]},  
  {path:"currentproject/activities",component:ActivitiesComponent,canActivate:[AuthGuard]},  
  {path:"projectform",component:ProjectformComponent,canActivate:[AuthGuard]},
  {path:"activityform",component:ActivityformComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
