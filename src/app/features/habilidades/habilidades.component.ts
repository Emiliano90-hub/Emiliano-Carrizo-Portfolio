import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [SectionTitleComponent, NgClass],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  frontend: boolean = false;
  backend: boolean = false;
  fullstack: boolean = true;


  mostrarFrontend(){
    this.frontend = true;
    this.backend = false;
    this.fullstack = false;
  }

  mostrarBackend(){
    this.frontend = false;
    this.backend = true;
    this.fullstack = false;
  }

  mostrarFullstack(){
    this.frontend = false;
    this.backend = false;
    this.fullstack = true;
  }
}
