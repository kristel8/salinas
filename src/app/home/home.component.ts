import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showLoader: boolean = false;
  loaderImages: string[] = ['loading1.svg', 'loading2.svg', 'loading3.svg']; // Rutas de las imágenes
  loaderTexts: string[] = [
    'Estamos elaborando algo especial para ti, ¡por favor, no te desconectes!',
    'La magia está sucediendo detrás de escena, ¡espera un momento!',
    'Nuestro equipo está ocupado creando algo grandioso, ¡gracias por tu paciencia!',
  ]; // Textos correspondientes a las imágenes

  constructor(private router: Router) {}

  startLoader(): void {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/dashboard']); // Redireccionar a una ruta diferente
    }, 5000); // Tiempo de simulación de la llamada al proceso o API
  }
}
