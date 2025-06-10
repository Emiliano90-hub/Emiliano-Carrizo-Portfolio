import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
  selector: 'app-proyecto-item',
  standalone: true,
  imports: [],
  templateUrl: './proyecto-item.component.html',
  styleUrl: './proyecto-item.component.css'
})
export class ProyectoItemComponent {

  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() tecnologias!: string[];
  @Input() img!: string;
  @Input() URLDemo!: string;
  @Input() URLCodigo!: string;

  get safeId(): string {
    return 'proyecto-' + this.titulo.toLowerCase().replace(/\s+/g, '-');
  }

}
