import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  segundos = 0;
  minutos = 0;
  horas = 0;
  @Input() inicioSegundos: number = 0;
  @Input() inicioMinutos: number = 0;
  @Input() inicioHoras: number = 0;
  @Output() segundoMinuto = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.segundos = this.inicioSegundos;
    this.minutos = this.inicioMinutos;
    this.horas = this.inicioHoras;
    setInterval(() => {
      this.segundos++;
      if (this.segundos % 60 == 0) {
        this.minutos++;
        this.segundos = 0;
        if (this.minutos % 60 == 0) {
          this.horas++;
          this.minutos = 0;
          this.segundos = 0;
          if (this.horas > 23) {
            this.segundos = 0;
            this.minutos = 0;
            this.horas = 0;
          }
        }
      }
      this.segundoMinuto.emit({
        hora: this.horas,
        minuto: this.minutos,
        segundo: this.segundos,
      });
    }, 1000);
  }
}
