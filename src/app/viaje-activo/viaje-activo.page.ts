import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit, AfterViewInit {
  nombreUsuario: string = '';
  destinoSeleccionado: string = '';
  fechaSalida: string = '';
  cantidadPersonas: number = 0;
  costoTotal: number = 0;
  comentarios: string = '';
  calificacion: number = 0;
  comentariosCalificacion: string = '';
  map: any;

  constructor(private route: ActivatedRoute, private router: Router) {} // Inyección de Router

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nombreUsuario = params['nombreUsuario'] || 'Usuario';
      this.destinoSeleccionado = params['destinoSeleccionado'] || '';
      this.fechaSalida = params['fechaSalida'] || '';
      this.cantidadPersonas = params['cantidadPersonas'] || 0;
      this.costoTotal = params['costoTotal'] || 0;
      this.comentarios = params['comentarios'] || '';
    });
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Marcador en la ubicación actual
      L.marker([latitude, longitude])
        .addTo(this.map)
        .bindPopup('Estás aquí.')
        .openPopup();
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  }

  irACalificar() {
    this.router.navigate(['/calificar-experiencia']); // Redirige a la página de calificación
  }

  guardarCalificacion() {
    if (this.calificacion > 0) {
      console.log('Calificación:', this.calificacion);
      console.log('Comentarios:', this.comentariosCalificacion);
      alert('¡Gracias por calificar tu experiencia!');
    } else {
      alert('Por favor selecciona una calificación antes de enviar.');
    }
  }
}
