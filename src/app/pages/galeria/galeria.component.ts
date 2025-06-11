import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-producto-carousel',
    standalone: true,
    templateUrl: './galeria.component.html',
    imports: [CommonModule],
    styleUrl: './galeria.component.css',

})
export class GaleriaComponent implements OnInit {
  imagenes: string[] = [];
  imagenSeleccionada: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ imagenes: string[] }>('http://localhost:4000/api/productos/obtenerImagenes')
      .subscribe(respuesta => {
        this.imagenes = respuesta.imagenes;
        this.imagenSeleccionada = this.imagenes[0]; 
      });
  }

  cambiarImagen(img: string) {
    this.imagenSeleccionada = ''; // resetea para reiniciar la animación
  
    setTimeout(() => {
      this.imagenSeleccionada = img;
    }, 10); // pequeño delay para activar animación
  }  
}
  