import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { ProyectoItemComponent } from "../../shared/proyecto-item/proyecto-item.component";

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [SectionTitleComponent, ProyectoItemComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
