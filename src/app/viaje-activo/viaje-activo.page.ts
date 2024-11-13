import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit {
  nombreUsuario: string = '';
  destinoSeleccionado: string = '';
  fechaSalida: string = '';
  cantidadPersonas: number = 0;
  costoTotal: number = 0;
  comentarios: string = '';
  mapUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Suscripción a los parámetros pasados a través de la URL
    this.route.queryParams.subscribe(params => {
      this.nombreUsuario = params['nombreUsuario'] || 'Usuario';
      this.destinoSeleccionado = params['destinoSeleccionado'] || '';
      this.fechaSalida = params['fechaSalida'] || '';
      this.cantidadPersonas = params['cantidadPersonas'] || 0;
      this.costoTotal = params['costoTotal'] || 0;
      this.comentarios = params['comentarios'] || '';

      // Generar la URL del mapa según el destino
      this.mapUrl = this.getMapUrl(this.destinoSeleccionado);
    });
  }

  // Función para generar la URL del mapa
  getMapUrl(destino: string): string {
    if (destino === 'puenteAlto') {
      return 'https://maps.google.com/?q=Puente+Alto'; // Enlace a Google Maps para Puente Alto
    } else if (destino === 'maipu') {
      return 'https://maps.google.com/?q=Maipu'; // Enlace a Google Maps para Maipú
    } else {
      return ''; // Retorna una cadena vacía si no se encuentra el destino
    }
  }
}
