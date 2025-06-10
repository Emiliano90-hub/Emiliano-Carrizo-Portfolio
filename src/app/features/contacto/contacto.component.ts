import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { ServicioContactoService } from '../../services/servicio-contacto.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [SectionTitleComponent, ReactiveFormsModule, NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formularioContacto: FormGroup;
  enviado: string = '';
  exito: boolean = false;

  constructor(
    private servicioContacto: ServicioContactoService,
    private fb: FormBuilder
  ) {
    this.formularioContacto = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required]
  });

  }

  enviar() {
    if (this.formularioContacto.valid) {
      this.servicioContacto.enviarFormulario(this.formularioContacto.value).subscribe({
        next: (res) => {
          console.log('Enviado con exito', res); 
          this.exito = true;
          this.enviado = 'Enviado con exito'
          this.formularioContacto.reset();
          setInterval(() => {
            this.enviado = '';
          }, 5000);
        },
        error: (err) => {
          console.error('Error al enviar', err);
          this.exito = false;
          this.enviado = 'Error al enviar';
          this.formularioContacto.reset();
          setInterval(() => {
            this.enviado = '';
          }, 5000);
        }
      });
    }
  }

  
}
