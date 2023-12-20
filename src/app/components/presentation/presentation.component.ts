import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit{
	idade : number = 0;

	ngOnInit(): void {
		this.idade = this.calcAge("Mon Dec 02 2002 12:00:00 GMT-0300 (BRT)");
	}

	calcAge(dateString: string) {
		var birthday = +new Date(dateString);
		return ~~((Date.now() - birthday) / (31557600000));
	  }	
}
