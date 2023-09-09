import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
	ngOnInit(): void {
		document.addEventListener('keydown', (e) => {
			if (e.key.toLowerCase() === 'm' && e.ctrlKey) {
			  
			  alert("Pressionado tecla CTRL + M")
			}
		  });
	}

}
