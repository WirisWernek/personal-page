import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-page';
  typeVisible: string = '1';

  ngOnInit(): void {}

  reciverResponse(response: string) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', response);
    this.typeVisible = response;
  }

  foiBaby($event: KeyboardEvent) {
    console.log('ok');
    const keyName = $event.key;
    if (keyName == 't' && $event.shiftKey) {
      alert('keypress event  n  n' + 'chave:' + keyName);
    }
  }
}
