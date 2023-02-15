import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path:"binnacle/login",component:LoginComponent},
  {path:"binnacle/projects",component:ProjectsComponent},
  {path:"binnacle/activities",component:ActivitiesComponent},
  {path:"binnacle/activity",component:ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
