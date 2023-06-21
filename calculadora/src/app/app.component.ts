import { Component, ViewChild, ElementRef } from '@angular/core';
import { OperacionesComponent } from './operaciones/operaciones.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(OperacionesComponent) operacionesComponent!: OperacionesComponent;
  @ViewChild('input1') myInputRef!: ElementRef;
  inputValue = '';
  title = 'calculadora';
  display: string = '';
  recibirResultad: string = '';
  cont: number = 0;

  ngAfterViewInit() {
    this.operacionesComponent.deleteAction.subscribe(() => {
      this.deleteCharacter();
    });
  }

  mostrarOperacion(resultado: string) {
    this.display = resultado;
  }

  recibirResultado(resultado: string) {
    this.recibirResultad = resultado;
  }

  atras() {
    const inputElement: HTMLInputElement = this.myInputRef.nativeElement;
    if (this.cont < 0) {
      this.cont = this.display.length;
      inputElement.focus();
      inputElement.setSelectionRange(this.cont, this.cont);
    } else if (this.cont <= this.display.length) {
      this.cont--;
      inputElement.focus();
      inputElement.setSelectionRange(this.cont, this.cont);
    }
  }

  adelante() {
    const inputElement: HTMLInputElement = this.myInputRef.nativeElement;
    if (this.cont < this.display.length) {
      this.cont++;
      inputElement.focus();
      inputElement.setSelectionRange(this.cont, this.cont);
    } else {
      this.cont = 0;
      inputElement.focus();
      inputElement.setSelectionRange(this.cont, this.cont);
    }
  }

  deleteCharacter() {
    const inputElement: HTMLInputElement = this.myInputRef.nativeElement;
    const currentPosition = inputElement.selectionStart;
    const currentValue = inputElement.value;

    if (currentPosition !== null && currentPosition > 0) {
      const newValue =
        currentValue.slice(0, currentPosition - 1) +
        currentValue.slice(currentPosition);

      inputElement.value = newValue;
      inputElement.setSelectionRange(currentPosition - 1, currentPosition - 1);
    }
  }
}
