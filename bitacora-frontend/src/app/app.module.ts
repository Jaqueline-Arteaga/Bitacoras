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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivityComponent } from './pages/activity/activity.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectformComponent } from './components/projectform/projectform.component';
import { ThisprojectComponent } from './pages/thisproject/thisproject.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { UserformComponent } from './components/userform/userform.component';
import { UserComponent } from './pages/user/user.component';

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
    ProjectformComponent,
    ThisprojectComponent,
    UserformComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
