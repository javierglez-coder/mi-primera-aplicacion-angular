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
    <hr />
    <div>
      <input type="text" (input)="alEscribir($event)" [value]="mensaje" placeholder="Escribe un mensaje" />
      <p>{{mensaje}}</p>
   </div>
   <div>
      <h3>Lista de Tareas</h3>
      <input type="text" (input)="alEscribirItem($event)" placeholder="Nueva tarea" [value]="nuevaTarea" />
      <button (click)="agregarTarea()">Agregar Nueva Tarea</button>
      <ul>
        @for(item of items;track item){
          <li>{{item}}</li>
        }
      </ul>
   </div>
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
  mensaje:string="";
  items:string[]=["Comprar Guitarra ESP","Pasear al perro","Lavar el coche"];
  nuevaTarea:string="";
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

  alEscribir(event:Event){
    const input = event.target as HTMLInputElement;
    this.mensaje = input.value;
  }

  alEscribirItem(event:Event){
    const input = event.target as HTMLInputElement;
    this.nuevaTarea = input.value;  
  }

  agregarTarea(){
    if(this.nuevaTarea.trim().length===0){
      return;
    }
    this.items.push(this.nuevaTarea);
    this.nuevaTarea="";
  }

}
