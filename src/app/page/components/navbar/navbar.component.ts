import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	@Output() emmitTypeVisible = new EventEmitter<string>();

	onMinimizeClick(){
		console.log("ok")
		this.emmitTypeVisible.emit('2');
	}

	onMaximizeClick(){
		console.log("ok")
		this.emmitTypeVisible.emit('1');
	}

	onCloseClick(){
		alert("Não vai não amor!")
	}
}
