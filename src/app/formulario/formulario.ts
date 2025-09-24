import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  template: `
    <h2>Formulario</h2>
    <fieldset>      
      <label for="nombre">Nombre:</label>
      <input id="nombre" name="nombre" type="text" [(ngModel)]="nombre">
      <br>
      <label for="correoElectronico">Correo Electrónico:</label>
      <input id="correoElectronico" name="correoElectronico" type="email" [(ngModel)]="correoElectronico">
      <br>
      <label for="edad">Edad:</label>
      <input id="edad" name="edad" type="number" [(ngModel)]="edad">
    </fieldset>
    <hr>
    <p>Nombre: {{nombre}}</p>
    <p>Correo Electrónico: {{correoElectronico}}</p>
    <p>Edad: {{edad}}</p>
  `,
  styleUrls: ['./formulario.css']
})
export class Formulario {
nombre: string = '';
correoElectronico: string = '';
edad: number | null = null;

}
