import { Component, OnInit } from '@angular/core';
import { ProjecDataInterface } from '../../models/interfaces/ProjectData.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList: Array<ProjecDataInterface> = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectList = this.projectService.getAllProject();
  }
}
