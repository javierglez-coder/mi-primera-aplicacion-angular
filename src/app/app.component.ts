import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';

@Component({
  selector: 'app-root',
  imports: [Producto],
  //templateUrl: './app.component.html',
  template:`
    <app-producto></app-producto>
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
