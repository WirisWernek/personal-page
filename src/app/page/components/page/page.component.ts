import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
typeVisible: number = 1;

  foiBaby($event: KeyboardEvent) {
	console.log("ok")
		const keyName = $event.key;
		if (keyName == 't' && $event.shiftKey) {
		  alert('keypress event  n  n' + 'chave:' + keyName);
		}
	  
  }
}
