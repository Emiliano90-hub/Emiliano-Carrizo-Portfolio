import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { InicioComponent } from "./features/inicio/inicio.component";
import { SobreMiComponent } from "./features/sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "./features/proyectos/proyectos.component";
import { HabilidadesComponent } from "./features/habilidades/habilidades.component";
import { FormacionComponent } from "./features/formacion/formacion.component";
import { ContactoComponent } from "./features/contacto/contacto.component";
import { LayoutComponent } from "./shared/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, InicioComponent, SobreMiComponent, ProyectosComponent, HabilidadesComponent, FormacionComponent, ContactoComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Emiliano-Carrizo-Portfolio';
}
