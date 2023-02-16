import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { ActivityformComponent } from './components/activityform/activityform.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivityoverviewComponent } from './components/activityoverview/activityoverview.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './pages/activity/activity.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectformComponent } from './components/projectform/projectform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivitiesComponent,
    LoginformComponent,
    ProjectcardComponent,
    ActivityformComponent,
    HeaderComponent,
    ProjectsComponent,
    ActivityoverviewComponent,
    ActivityComponent,
    ProjectComponent,
    ProjectformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
