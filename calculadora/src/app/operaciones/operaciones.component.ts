import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
})
export class OperacionesComponent implements OnInit {
  @Input() display: string = '';
  @Output() resultadoCalculado = new EventEmitter<string>();
  @Output() mostrar = new EventEmitter<string>();
  @Output() enviarPosicion = new EventEmitter<string>();
  @Output() deleteAction: EventEmitter<void> = new EventEmitter<void>();

  deleteCharacter() {
    this.deleteAction.emit();
    this.mostrar.emit(this.display);
  }

  ans: string = '';
  displayButtonOn: boolean = true;
  displayButtonOff: boolean = false;
  operaciones: string[] = [];
  resultados: string[] = [];
  contadorOperaciones: number = 1;
  contador: number = 0;
  audio: HTMLAudioElement;

  ngOnInit() {}

  constructor() {
    this.audio = new Audio();
  }

  playBackgroundMusic() {
    this.audio = new Audio();
    if (this.displayButtonOn === true) {
      this.audio.src = 'assets/sonidos/apagado.mp3';
    } else {
      this.audio.src = 'assets/sonidos/encendido.mp3';
    }
    this.audio.load();
    this.audio.play();
  }

  agregarNumero(numero: number) {
    this.display += numero.toString();
    this.mostrar.emit(this.display);
  }

  agregarOperador(operador: string) {
    if (operador === '.' && this.display.includes('.')) {
      return; // Ignorar si ya hay un punto en el display
    }

    this.display += operador;
    this.mostrar.emit(this.display);
  }

  borrar() {
    this.mostrar.emit('');
    this.resultadoCalculado.emit('0');
    this.contador = 0;
  }

  borrarUno() {
    if (this.display.length > 0) {
      this.display = this.display.substr(0, this.display.length - 1);
      this.mostrar.emit(this.display);
    }
  }

  calcular() {
    try {
      if (this.display === '') {
        // No se ha seleccionado ninguna operación, emitir el valor actual del display
        this.mostrar.emit(this.display);
        this.ans = this.display;
      } else {
        this.operaciones[this.contadorOperaciones] = this.display;
        const resultado = this.evaluarOperaciones(this.display);
        this.resultados[this.contadorOperaciones] = resultado.toString();
        this.contadorOperaciones++;
        this.resultadoCalculado.emit(resultado.toString());
        this.ans = resultado.toString();
      }
    } catch (error) {
      this.mostrar.emit('Error');
    }
  }

  bajar() {
    if (this.contador > 0) {
      this.contador--;
      this.display = this.operaciones[this.contador];
      this.mostrar.emit(this.display);
      this.display = this.resultados[this.contador];
      this.resultadoCalculado.emit(this.display);
    }
  }

  subir() {
    if (this.contador < this.contadorOperaciones - 1) {
      this.contador++;
      this.display = this.operaciones[this.contador];
      this.mostrar.emit(this.display);
      this.display = this.resultados[this.contador];
      this.resultadoCalculado.emit(this.display);
    }
  }

  guardarNumero() {
    this.display += this.ans;
    this.mostrar.emit(this.display);
  }

  toggleButtonState() {
    this.displayButtonOn = !this.displayButtonOn;
    this.displayButtonOff = !this.displayButtonOff;
    if (this.displayButtonOn == false) {
      this.mostrar.emit('');
      this.resultadoCalculado.emit('0');
    } else {
      this.mostrar.emit('');
      this.resultadoCalculado.emit('');
    }

    this.playBackgroundMusic();
  }

  evaluarOperaciones(expresion: string): number {
    const operacionesSeparadas = expresion.split(
      /(\+|\-|\*|\/|\^|\(|\)|e\^|sin|cos|tan|\%)/
    );
    const operadores = [
      '^',
      '*',
      '/',
      '+',
      '-',
      'sin',
      'cos',
      'tan',
      'e^',
      '%',
    ];
    let resultado = 0;
    let operadorActual = '+';
    let valorAntesE: number | null = null;
    let valorDespuesE: number | null = null;

    for (let i = 0; i < operacionesSeparadas.length; i++) {
      const operacion = operacionesSeparadas[i].trim();

      if (operacion === '') {
        continue;
      } else if (operadores.includes(operacion)) {
        operadorActual = operacion;
      } else {
        const valor = parseFloat(operacion);

        if (operadorActual === '+') {
          resultado += valor;
        } else if (operadorActual === '-') {
          resultado -= valor;
        } else if (operadorActual === '*') {
          resultado *= valor;
        } else if (operadorActual === '/') {
          resultado /= valor;
        } else if (operadorActual === '^') {
          resultado = resultado ** valor;
        } else if (operadorActual === 'sin') {
          resultado = this.calcularSeno(valor);
        } else if (operadorActual === 'cos') {
          resultado = this.calcularCoseno(valor);
        } else if (operadorActual === 'tan') {
          resultado = this.calcularTangente(valor);
        } else if (operadorActual === 'e^') {
          valorAntesE = parseFloat(operacionesSeparadas[i - 1]);
          valorDespuesE = valor;
        } else if (operadorActual === '%') {
          resultado = resultado * (valor / 100);
        }
      }
    }

    if (valorAntesE !== null && valorDespuesE !== null) {
      resultado = this.hallarNotCientifica(valorAntesE, valorDespuesE);
    }

    return resultado;
  }

  calcularSeno(numero: number): number {
    const iteraciones = 10;
    let resultado = 0;

    for (let n = 0; n < iteraciones; n++) {
      const termino =
        ((-1) ** n * numero ** (2 * n + 1)) / this.factorial(2 * n + 1);
      resultado += termino;
    }

    return resultado;
  }

  calcularCoseno(numero: number): number {
    const iteraciones = 10;
    let resultado = 0;

    for (let n = 0; n < iteraciones; n++) {
      const termino = ((-1) ** n * numero ** (2 * n)) / this.factorial(2 * n);
      resultado += termino;
    }

    return resultado;
  }

  calcularTangente(numero: number): number {
    const seno = this.calcularSeno(numero);
    const coseno = this.calcularCoseno(numero);
    let resultado = seno / coseno;
    return resultado;
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  hallarNotCientifica(base: number, ceros: number): number {
    return base + ceros;
  }
}
