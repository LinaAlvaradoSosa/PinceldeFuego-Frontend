import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiURL = "http://localhost:4000/api/productos"

  constructor(private http : HttpClient) { }

  getproductos() {
    return this.http.get(`${this.apiURL}`)
  }
}
