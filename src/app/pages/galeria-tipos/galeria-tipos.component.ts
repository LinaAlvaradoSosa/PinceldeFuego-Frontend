import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-tipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-tipos.component.html',
  styleUrls: ['./galeria-tipos.component.css']
})
export class GaleriaTiposComponent implements OnInit {

  tipo: string = '';
  productos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo') || '';
      this.cargarProductos();
    });
  }

  cargarProductos() {
    this.productsService.getProductosPorTipo(this.tipo).subscribe({
      next: (res) => {
        this.productos = res;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }
}
