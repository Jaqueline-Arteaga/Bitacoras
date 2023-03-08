import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/Project/project';
import { ServicioGlobalService } from 'src/app/services/Globales/servicio-global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  project?:Project;

  constructor(private global:ServicioGlobalService){

  }  

  

}
