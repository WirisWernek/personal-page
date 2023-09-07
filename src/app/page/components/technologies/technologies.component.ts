import { Component, OnInit } from '@angular/core';
import { Technologie } from '../../models/interfaces/Technologie.Interface';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  technologies: Array<Technologie> = [];

  ngOnInit(): void {
	this.technologies = [
		{
			url: "../../../../assets/images/technologies-icons/spring-original.svg",
			description: "Logo do Spring Boot Sendo uma folha levemente torcida dentro de um circulo verde"
		},
		{
			url: "../../../../assets/images/technologies-icons/java-original.svg",
			description: "Logo da linguagem Java sendo uma xícara azul com fumaça vermelha saindo dela"
		},{
			url: "../../../../assets/images/technologies-icons/angularjs-plain.svg",
			description: "Logo do Ângular sendo a letra 'A' de forma maiúscula dentro de um escudo vermelho"
		},{
			url: "../../../../assets/images/technologies-icons/html5-original.svg",
			description: "Logo do HTML sendo o número '5' branco dentro de um escudo laranja"
		},{
			url: "../../../../assets/images/technologies-icons/css3-original.svg",
			description: "Logo do CSS sendo o número '3' branco dentro de um escudo azul"
		},{
			url: "../../../../assets/images/technologies-icons/javascript-original.svg",
			description: "Logo do JavaScript sendo um quadrado amarelo com as letras 'js' no canto inferior direito"
		},{
			url: "../../../../assets/images/technologies-icons/postgresql-original.svg",
			description: "Logo do PostgreSql sendo o rosto de um elefante em azul"
		},{
			url: "../../../../assets/images/technologies-icons/mysql-original-wordmark.svg",
			description: "Logo do MySql sendo o nome 'MySql' em azul e laranja com o contorno de um golfinho em azul sobre o mesmo"
		},{
			url: "../../../../assets/images/technologies-icons/docker-original.svg",
			description: "Logo do Docker sendo uma baleia azul na água carregando alguns containers azuis em suas costas"
		},{
			url: "../../../../assets/images/technologies-icons/git-original.svg",
			description: "Logo do Git sendo a representação de um ramo da estrutura de dados árvore dentro de um losango laranja"
		},{
			url: "../../../../assets/images/technologies-icons/bootstrap-original.svg",
			description: "Logo do Bootstrap sendo a letra 'B' escrito em branco dentro de um quadrado roxo"
		},{
			url: "../../../../assets/images/technologies-icons/php-original.svg",
			description: "Logo do PHP sendo a escrita 'php' dentro de uma elipse horizontal azul clara"
		},
	]
  }
}
