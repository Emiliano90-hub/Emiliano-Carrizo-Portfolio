import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { LayoutComponent } from "../../shared/layout/layout.component";

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [SectionTitleComponent, LayoutComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

}
