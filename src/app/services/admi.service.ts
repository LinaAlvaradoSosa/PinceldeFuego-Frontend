import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmiService {

  apiURL: string = "http://localhost:4000/api"

  constructor(private http: HttpClient) { }

  login(body: any){
    return this.http.post(`${this.apiURL}/login`, body)
  }
  guardarToken(token: string) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', token);
    }
  }
  obtenerToken(): string | null {
    return typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
  }
  sendMessage(body: any) {
    return this.http.post(`${this.apiURL}/nuevoMensaje`, body)
  }
  getMessages(){
    return this.http.get(`${this.apiURL}/mostrarMensajes`)
  }
  deleteMessage(id: string) {
    return this.http.delete(`${this.apiURL}/borrarMensaje/${id}`)
  }

 
  
}
