import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyeto013';

  articulos: any;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
      this.articulosService.retornar().subscribe(result => this.articulos = result);
  }
}
