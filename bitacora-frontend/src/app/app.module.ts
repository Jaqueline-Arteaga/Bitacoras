import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { CurrentprojectComponent } from './pages/currentproject/currentproject.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ProjectformComponent } from './pages/projectform/projectform.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AuthGuard } from './helpers/auth.guard';
import { ActivityformComponent } from './pages/activityform/activityform.component';
import { ActivityelementComponent } from './components/activityelement/activityelement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginformComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectcardComponent,
    CurrentprojectComponent,
    ActivitiesComponent,
    ProjectformComponent,
    SidebarComponent,
    ActivityformComponent,
    ActivityelementComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
