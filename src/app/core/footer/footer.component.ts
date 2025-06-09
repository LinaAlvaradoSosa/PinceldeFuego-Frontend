import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdmiService } from '../../services/admi.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  formularioContacto!: FormGroup

  constructor (private AdmiService: AdmiService, private http: HttpClient, private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      nombre: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      celular: ["", []], 
      mensaje: ["", [Validators.required]],
      tipo: ["", []]
    })
  }

  sendMessage() {
    this.AdmiService.sendMessage(this.formularioContacto.value).subscribe({
      next: (resApi: any)=>{
        Swal.fire({
          icon:"success",
          title: "Mensaje enviado exitosamente",
          text: "Gracias por escribir a Pincel de Fuego, me comunicaré contigo muy pronto"
        })
        this.formularioContacto.reset();
      },
      error: (error:any) => {
        console.log(error);
        Swal.fire ({
          icon:"error",
          title: "Mensaje no enviado",
          text: "Por favor revisa que todos los campos del formulario estén diligenciados"
        })
      }
    })
  }

}
