import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicio005';

  mensaje = '';

  actualizar(evento: any) {
    const { hora, minuto, segundo } = evento;
    this.mensaje =
      'La hora actual es ' + hora + ' : ' + minuto + ' : ' + segundo;
  }
}
