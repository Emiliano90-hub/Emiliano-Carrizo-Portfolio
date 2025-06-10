import { Component } from '@angular/core';
import { ContactoComponent } from "../contacto/contacto.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [ContactoComponent, SectionTitleComponent],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {

}
