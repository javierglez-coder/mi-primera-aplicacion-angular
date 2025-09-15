import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  //templateUrl: './app.component.html',
  template:`
    <h1>{{title}}</h1>
    <input [value]="nombre" type="text">
    <input [type]="edad < 18 ? 'text' : 'number'">
    <button [disabled]="estaDeshabilitado">Enviar</button>
    <img [src]="imagenUrl" alt="Imagen aleatoria">
    <div [style.color]="colorFavorito">Texto con color favorito</div>
  `,  
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
  nombre = 'Jimmy Javier';
  edad=15;
  estaDeshabilitado = false;
  imagenUrl = 'https://picsum.photos/id/237/200/300';
  colorFavorito = 'blue';

  constructor(){
    setTimeout(() => {
      this.colorFavorito = 'red';
      this.estaDeshabilitado = true;
      this.nombre = 'Nuevo Nombre';
      this.edad = 25;
    }, 3000);
  }

  mostrarMensaje(){
    return this.mensaje.toUpperCase();
  }

}
