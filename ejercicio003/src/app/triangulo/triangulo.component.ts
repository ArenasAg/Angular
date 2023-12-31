import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css'],
})
export class TrianguloComponent implements OnInit {
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;

  coloresTriangulo = [
    { nombre: 'Amarillo', color: 'yellow' },
    { nombre: 'Azul', color: 'blue' },
    { nombre: 'Rojo', color: 'red' },
  ];

  colores = [
    { nombre: 'Amarillo', color: 'yellow' },
    { nombre: 'Azul', color: 'blue' },
    { nombre: 'Rojo', color: 'red' },
    { nombre: 'Verde', color: 'green' },
    { nombre: 'Purpura', color: 'purple' },
    { nombre: 'Naranja', color: 'orange' },
    { nombre: 'Rosado', color: 'pink' },
    { nombre: 'Cian', color: 'cyan' },
    { nombre: 'Magenta', color: 'magenta' },
    { nombre: 'Lima', color: 'lime' },
    { nombre: 'Azul Cerceta', color: 'teal' },
    { nombre: 'Indigo', color: 'indigo' },
    { nombre: 'Plata', color: 'silver' },
    { nombre: 'Oro', color: 'gold' },
    { nombre: 'Violeta', color: 'violet' },
    { nombre: 'Cafe', color: 'brown' },
    { nombre: 'Azul Marino', color: 'navy' },
    { nombre: 'Verde Oliva', color: 'olive' },
    { nombre: 'Granate', color: 'maroon' },
    { nombre: 'Agua Marina', color: 'aquamarine' },
    { nombre: 'Coral', color: 'coral' },
    { nombre: 'Carmesí', color: 'crimson' },
    { nombre: 'Azul Oscuro', color: 'darkblue' },
    { nombre: 'Fucsia', color: 'fuchsia' },
    { nombre: 'Gris', color: 'grey' },
    { nombre: 'Caqui', color: 'khaki' },
    { nombre: 'Verde Claro', color: 'lightgreen' },
    { nombre: 'Orquidea', color: 'orchid' },
    { nombre: 'Ciruela', color: 'plum' },
    { nombre: 'Salmon', color: 'salmon' },
  ];

  ngOnInit() {
    this.actualizarValores();
    setInterval(() => {
      this.actualizarValores();
      this.cambiarColores();
    }, 5000);
  }

  actualizarValores() {
    this.valor1 = this.generarNumeroAleatorio();
    this.valor2 = this.generarNumeroAleatorio();
    this.valor3 = this.generarNumeroAleatorio();
  }

  generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  cambiarColores() {
    this.coloresTriangulo[0].color = this.generarColorAleatorio();
    this.coloresTriangulo[1].color = this.generarColorAleatorio();
    this.coloresTriangulo[2].color = this.generarColorAleatorio();

    for (let index = 0; index < this.colores.length; index++) {
      if (this.coloresTriangulo[0].color == this.colores[index].color) {
        this.coloresTriangulo[0].nombre = this.colores[index].nombre;
      }
    }
    for (let index = 0; index < this.colores.length; index++) {
      if (this.coloresTriangulo[1].color == this.colores[index].color) {
        this.coloresTriangulo[1].nombre = this.colores[index].nombre;
      }
    }
    for (let index = 0; index < this.colores.length; index++) {
      if (this.coloresTriangulo[2].color == this.colores[index].color) {
        this.coloresTriangulo[2].nombre = this.colores[index].nombre;
      }
    }
  }

  generarColorAleatorio(): string {
    const colorIndex = Math.floor(Math.random() * this.colores.length);
    return this.colores[colorIndex].color;
  }
}
