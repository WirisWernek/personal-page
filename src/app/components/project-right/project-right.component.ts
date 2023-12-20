import { Component, Input } from '@angular/core';
import { ProjecDataInterface } from '../../models/interfaces/ProjectData.interface';

@Component({
  selector: 'app-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.scss']
})
export class ProjectRightComponent {
	@Input() project!: ProjecDataInterface;
}
