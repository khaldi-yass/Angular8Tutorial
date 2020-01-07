import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {

  id = 1;
  disabled = true;
  btnText = 'Disabled with Property binding';

  constructor() {
    setTimeout(() => {
      this.disabled = false;
      this.btnText = 'Enabled with Property binding';
    }, 2000);
  }

}
