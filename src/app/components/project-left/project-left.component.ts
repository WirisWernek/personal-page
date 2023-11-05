import { Component, Input } from '@angular/core';
import { ProjecDataInterface } from '../../models/interfaces/ProjectData.interface';

@Component({
  selector: 'app-project-left',
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss']
})
export class ProjectLeftComponent {
	@Input() project!: ProjecDataInterface;
}
