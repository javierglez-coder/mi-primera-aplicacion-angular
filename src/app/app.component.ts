import { Component } from '@angular/core';
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-root',
  imports: [Formulario],  
  template:`    
    <app-formulario></app-formulario>
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

}
