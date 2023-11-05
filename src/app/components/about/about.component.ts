import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
	idade : number = 0;

	ngOnInit(): void {
		this.idade = this.calcAge("Mon Dec 02 2002 12:00:00 GMT-0300 (BRT)");
	}

	calcAge(dateString: string) {
		var birthday = +new Date(dateString);
		return ~~((Date.now() - birthday) / (31557600000));
	}
}
