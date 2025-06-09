import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdmiService } from '../../services/admi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admi-mensajes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admi-mensajes.component.html',
  styleUrl: './admi-mensajes.component.css'
})
export class AdmiMensajesComponent {

  mensajes!:any
  constructor(private admiService: AdmiService){}


  ngOnInit(){
    this.admiService.getMessages().subscribe({
      next: (resApi: any) => {
        this.mensajes = resApi.mensaje;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
}

deleteMessage(id: string) {
  Swal.fire({
      title: "¿Estas seguro que quieres eliminar este mensaje?",
      text: "No podras revertir esta accion despues",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#85B185",
      cancelButtonColor: "#B4120C",
      confirmButtonText: "Si!, quiero borrarlo"
    }).then((result) => {
      if (result.isConfirmed) {
          this.admiService.deleteMessage(id).subscribe({
              next:(resApi:any)=> {
                  this.ngOnInit()
                  Swal.fire({
                      title: "Borrado!",
                      text: "Tu mensaje ha sido borrado",
                      icon: "success"
                    });
              },
              error:(error:any)=>{
                  console.log(error);
              }
          })
      }
    });
}

}
