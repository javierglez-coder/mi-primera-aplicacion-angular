import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  template: `
    <h2>Eventos</h2>
    <h3>Contador: {{contador}}</h3>
    <button (click)="incrementar()">Incrementar</button>
    <button (click)="decrementar()">Decrementar</button>
    <div class="caja" (mouseover)="onMouseOver()"></div>
  `,
  styles: [
    `
    .caja{
      width:100px;
      height:100px;
      background-color:lightblue;
    }
        `
  ]
})
export class Eventos {
  contador:number=0;

  incrementar(){
    console.log("Incrementar");
    this.contador++;
  }

  decrementar(){
    console.log("Decrementar");
    this.contador--;
  }

  onMouseOver(){
    console.log("Mouse Over");
  }

}
