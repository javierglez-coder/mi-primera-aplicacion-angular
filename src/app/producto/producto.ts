import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [CurrencyPipe, PercentPipe],
  template: `
    <div>
      <h2 [class]="producto.precio > 20000 ? 'titulo' : 'subtitulo'">
        {{ producto.nombre }}
      </h2>
      <p>Precio: {{ producto.precio | currency }}</p>
      <p>Descripción: {{ producto.descripcion }}</p>
      <p>Disponible: {{ producto.disponible ? 'Sí' : 'No' }}</p>
      <p [style.color]="producto.descuento > 0 ? 'green' : 'red'">
        Descuento: {{ producto.descuento | percent }}
      </p>
      <img [src]="producto.imagen" [alt]="producto.nombre" />
      <button [disabled]="!producto.disponible">Comprar</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid #ccc;
        padding: 16px;
        max-width: 300px;
      }

      h2.titulo {
        font-size: 1.5em;
        margin-bottom: 0.5em;
        font-weight: bold;
      }

      h2.subtitulo {
        font-size: 1.2em;
        margin-bottom: 0.5em;
        font-weight: normal;
      }
    `,
  ],
})
export class Producto {
  producto = {
    nombre: 'Guitarra Jackson Kelly',
    precio: 21000,
    descripcion: 'Guitarra electrica de alta calidad',
    disponible: false,
    descuento: 0.15,
    imagen: 'https://picsum.photos/200/300',
  };
}
