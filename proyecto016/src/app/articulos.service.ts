import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://scratchya.com.ar/angular/proyecto016/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperarTodos.php`);
  }

  alta(articulos:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulos));
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulos:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulos));
  }
}
