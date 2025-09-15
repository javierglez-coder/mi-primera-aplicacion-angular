import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  //templateUrl: './app.component.html',
  template:`
  <h1>{{ mensaje }}</h1>
  <hr>
  <h2>{{ mostrarMensaje() }}</h2>
  <hr>
  <h3>{{ 1 + 1  }}</h3>
  <hr>
  <h4>{{ mostrarResultado ? 'Este es el resultado' : 'XD' }}</h4>
  <hr>
  <input [value]="mensaje">
  <h1 [textContent]="mensaje"></h1>
  `,
  //styleUrl: './app.component.css'
  styles:[
    `
    :host{
      color:#000;
    }
    `
  ]
})
export class AppComponent {
  title = 'mi-primera-aplicacion-angular';
  mensaje = 'Hola desde Angular';
  mostrarResultado = false;

  mostrarMensaje(){
    return this.mensaje.toUpperCase();
  }

}
