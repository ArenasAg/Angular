import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OperacionesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
