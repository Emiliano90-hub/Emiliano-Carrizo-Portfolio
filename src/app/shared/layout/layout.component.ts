import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements AfterViewInit {

  colors: string[] = ["#00F7FF", "#FFFF33", "#FF00FF", "#FFFFFF"];
  @ViewChild('fondo') fondo!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => this.crearLinea(), 3000);
  }

  crearLinea() {
    
    const linea = document.createElement('div');
    linea.classList.add('linea');

    const background = this.colors[Math.floor(Math.random() * this.colors.length)];
    linea.style.background = background;
    linea.style.boxShadow = `0 0 10px 5px ${background}`;

    // Posición vertical aleatoria
    const top = Math.random() * 100;
    linea.style.top = `${top}%`;

    // Ancho aleatorio
    const width = 80 + Math.random() * 50; // entre 80% y 130%
    linea.style.width = `${width}%`;

    // Duración aleatoria
    const duracion = 2 + Math.random() * 3; // entre 2s y 5s
    linea.style.animationDuration = `${duracion}s`;

    // Eliminar la línea después de la animación
    linea.addEventListener('animationend', () => {
      linea.remove();
    });

    // Agregar la línea al contenedor
    this.fondo.nativeElement.appendChild(linea);
  }
}
