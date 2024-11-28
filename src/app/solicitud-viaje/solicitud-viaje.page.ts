import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage {
  nombreUsuario: string = '';
  destino: string = '';
  fechaSalida: string = '';
  comentarios: string = '';
  asientosDisponibles: number = 4; // Total de asientos disponibles

  constructor(private router: Router, private alertController: AlertController) {}

  async enviarSolicitud() {
    if (!this.nombreUsuario || !this.destino || !this.fechaSalida) {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, completa todos los campos obligatorios.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const costoTotal = this.destino === 'puenteAlto' ? 1000 : 1500;

    // Navegar a la pantalla de viaje activo y pasar datos
    this.router.navigate(['/viaje-activo'], {
      queryParams: {
        nombreUsuario: this.nombreUsuario,
        destinoSeleccionado: this.destino,
        fechaSalida: this.fechaSalida,
        comentarios: this.comentarios,
        asientosDisponibles: this.asientosDisponibles,
        costoTotal: costoTotal,
      },
    });
  }
}
