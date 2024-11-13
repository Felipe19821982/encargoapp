import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage {
  nombreUsuario: string = '';
  destino: string = '';
  fechaSalida: string = '';
  cantidadPersonas: number = 0;
  comentarios: string = '';

  constructor(private navCtrl: NavController) {}

  enviarSolicitud() {
    const costoPorPersona = this.destino === 'puenteAlto' ? 3500 : 5000;
    const costoTotal = this.cantidadPersonas * costoPorPersona;

    this.navCtrl.navigateForward('/viaje-activo', {
      queryParams: {
        nombreUsuario: this.nombreUsuario,
        destino: this.destino,
        fechaSalida: this.fechaSalida,
        cantidadPersonas: this.cantidadPersonas,
        costoTotal: costoTotal,
        comentarios: this.comentarios
      }
    });
  }
}
