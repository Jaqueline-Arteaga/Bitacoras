import { Component, Input } from '@angular/core';
import { Project } from 'src/app/model/Project/project';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectcardComponent {
  @Input()
  project?:Project;

}
