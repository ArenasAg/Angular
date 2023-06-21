import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto001';
  art = {
    codigo: 0,
    descripcion: '',
    precio: 0,
  };

  bool = false;

  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.1 },
    { codigo: 3, descripcion: 'melon', precio: 52.3 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];

  agregar() {
    const nuevoArticulo = {
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
    };

    this.articulos.forEach((element, index) => {
      if (nuevoArticulo.codigo == element.codigo) {
        alert('El codigo ya existe');
        this.bool = true;
      }
    });

    if (!this.bool) {
      this.articulos.push(nuevoArticulo);
    }

    this.bool = false;

    this.resetForm();
  }

  borrar(index: number) {
    this.articulos.splice(index, 1);
  }

  seleccionar(index: number) {
    this.art.codigo = this.articulos[index].codigo;
    this.art.descripcion = this.articulos[index].descripcion;
    this.art.precio = this.articulos[index].precio;
  }

  modificar() {
    const nuevoArticulo = {
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
    };

    const index = this.buscarIndiceArticulo(this.art.codigo);

    if (index !== -1) {
      this.articulos[index] = nuevoArticulo;
      this.resetForm();
    } else {
      alert('El codigo no existe');
    }
  }

  private buscarIndiceArticulo(codigo: number): number {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo === codigo) {
        return i;
      }
    }
    return -1;
  }
  private resetForm() {
    this.art.codigo = 0;
    this.art.descripcion = '';
    this.art.precio = 0;
  }
}
