import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admi-productos',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './admi-productos.component.html',
  styleUrl: './admi-productos.component.css'
})
export class AdmiProductosComponent  {

  productos: Producto[] = [];

  constructor(private ProductsService: ProductosService){}

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((res: any[]) => {
      this.productos = res;
    });
  }

  obtenerRutaImagen(nombreArchivo: string): string {
    return `http://localhost:4000/uploads/${nombreArchivo}`;
  }

  deleteProduct(id: string) {
    Swal.fire({
        title: "¿Estas seguro que quieres eliminar este producto?",
        text: "No podrás revertir esta acción después",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#85B185",
        cancelButtonColor: "#9E3329",
        confirmButtonText: "Sí!, quiero borrarlo"
      }).then((result) => {
        if (result.isConfirmed) {
          this.ProductsService.deleteProduct(id).subscribe({
              next:(resApi:any)=> {
                  this.ngOnInit()
                  Swal.fire({
                    title: "Borrado!",
                    text: "Tu producto ha sido borrado",
                    icon: "success"
                  });
              },error:(error:any)=>{
                  console.log(error);
                }
            })
          }
        });
  }

  producto = {
    nombre: '',
    descripcion: '',
    tipo: ''
  };

  archivo: File | null = null;

  onFileChange(event: any) {
    this.archivo = event.target.files[0];
  }

  crear() {
    if (!this.producto.nombre || !this.producto.descripcion || !this.producto.tipo) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor llena todos los campos antes de crear el producto.'
      });
      return;
    }
  
    const formData = new FormData();
    formData.append('nombre', this.producto.nombre);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('tipo', this.producto.tipo);
  
    if (this.archivo) {
      formData.append('imagen', this.archivo);
    }
  
    this.ProductsService.crearProducto(formData).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: '¡Producto creado!',
          text: 'El producto se ha guardado exitosamente.'
        });
        this.producto = { nombre: '', descripcion: '', tipo: '' };
        this.archivo = null;
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error?.error || 'Ocurrió un error al crear el producto.'
        });
        console.error('Error al crear producto:', err);
      }
    });
  }

}
