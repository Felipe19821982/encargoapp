import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificar-experiencia',
  templateUrl: './calificar-experiencia.page.html',
  styleUrls: ['./calificar-experiencia.page.scss'],
})
export class CalificarExperienciaPage {
  calificacion: number = 0;
  comentarios: string = '';

  constructor(private router: Router) {}

  guardarCalificacion() {
    if (this.calificacion > 0) {
      console.log('Calificación guardada:', this.calificacion);
      console.log('Comentarios:', this.comentarios);
      alert('¡Gracias por calificar tu experiencia!');
      this.router.navigate(['/portada']); // Regresa a la página del viaje activo
    } else {
      alert('Por favor selecciona una calificación antes de enviar.');
    }
  }
}
