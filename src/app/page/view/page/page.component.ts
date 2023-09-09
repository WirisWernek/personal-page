import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  typeVisible: string = '1';

  ngOnInit(): void {

  }

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
