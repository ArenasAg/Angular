import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Anderson';

  edad = 17;
  suma = this.edad + 10;
  resta = 50 - this.edad;
  multi = this.edad * 2;
  divi = this.edad / 2;
}
