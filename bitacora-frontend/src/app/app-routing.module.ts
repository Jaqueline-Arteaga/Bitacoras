import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ThisprojectComponent } from './pages/thisproject/thisproject.component';

const routes: Routes = [
  {path:"binnacle/login",component:LoginComponent},
  {path:"binnacle/projects",component:ProjectsComponent,canActivate: [AuthGuard]},
  {path:"binnacle/project",component:ProjectComponent,canActivate: [AuthGuard]},
  {path:"binnacle/project/:idProject",component:ThisprojectComponent,canActivate: [AuthGuard]},
  {path:"binnacle/activities",component:ActivitiesComponent,canActivate: [AuthGuard]},
  {path:"binnacle/activity",component:ActivityComponent,canActivate: [AuthGuard]},
  {path:"binnacle/activity/:idActivitie",component:ActivityComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
