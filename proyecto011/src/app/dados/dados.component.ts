import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent implements OnInit {
  @Input() valor: number = 0;

  constructor() {}

  ngOnInit() {}
}
