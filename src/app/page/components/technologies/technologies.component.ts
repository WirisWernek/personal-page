import { Component, OnInit } from '@angular/core';
import { TechnologieInterface } from '../../models/interfaces/Technologie.interface';
import { TechnologiesService } from '../../services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  technologies: Array<TechnologieInterface> = [];

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
	this.technologies = this.technologiesService.getAllTechnologies();
  }
}
