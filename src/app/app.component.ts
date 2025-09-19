import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';
import { Eventos } from './eventos/eventos';

@Component({
  selector: 'app-root',
  imports: [Eventos],  
  template:`    
    <app-eventos></app-eventos>
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
