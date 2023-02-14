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
    ActivityoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
