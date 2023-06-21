import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  segundos = 0;
  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.segundos = this.inicio;
    setInterval(() => {
      this.segundos++;
      if (this.segundos % 10 == 0) this.multiplo10.emit(this.segundos);
    }, 1000);
  }
}
