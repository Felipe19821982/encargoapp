import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage {
  constructor(private navCtrl: NavController) {}

  enviarSolicitud() {
    // Aquí puedes agregar lógica de envío si fuera necesario
    this.navCtrl.navigateForward('/confirmacion-solicitud');
  }
}
