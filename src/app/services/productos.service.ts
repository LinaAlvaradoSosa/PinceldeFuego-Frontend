import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiURL = "http://localhost:4000/api"

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiURL}/productos`);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.apiURL}/productos/borrarProducto/${id}`)
  }

  getOneProduct(id: string){
    return this.http.get(`${this.apiURL}/productos/obtenerProducto/${id}`)
  }

  crearProducto(formData: FormData) {
    return this.http.post(`${this.apiURL}/productos/crear`, formData);
  }

  actualizarProducto(id: string, formData: FormData) {
    return this.http.put(`${this.apiURL}/productos/actualizar/${id}`, formData);
  }

  getProductosPorTipo(tipo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/productos/obtenerProductosPorTipo/${tipo}`);
  }
  
  
}
