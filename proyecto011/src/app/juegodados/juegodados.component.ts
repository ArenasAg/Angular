import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.css'],
})
export class JuegodadosComponent {
  title = 'proyecto004';
  valor: number = 0;
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string = '';

  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Gano';
    } else {
      this.resultado = 'Perdio';
    }
  }
}
