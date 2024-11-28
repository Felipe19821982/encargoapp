import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit, AfterViewInit {
  nombreUsuario: string = 'Usuario';
  destinoSeleccionado: string = '';
  fechaSalida: string = '';
  comentarios: string = '';
  costoTotal: number = 0;
  asientosDisponibles: number = 4;
  map: any;
  currentLocationMarker: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nombreUsuario = params['nombreUsuario'] || 'Usuario';
      this.destinoSeleccionado = params['destinoSeleccionado'] || 'puenteAlto';
      this.fechaSalida = params['fechaSalida'] || 'Sin definir';
      this.comentarios = params['comentarios'] || 'Sin comentarios';
      this.costoTotal = params['costoTotal'] || 0;
      this.asientosDisponibles = params['asientosDisponibles'] || 4;
    });
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    if (!this.map) {
      // Crea el mapa con una vista inicial genérica
      this.map = L.map('map').setView([-33.4489, -70.6693], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Obtener la ubicación actual
      this.locateUser();
    }
  }

  locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Centra el mapa en la ubicación actual
          this.map.setView([lat, lng], 15);

          // Agrega un marcador en la ubicación actual
          if (!this.currentLocationMarker) {
            this.currentLocationMarker = L.marker([lat, lng]).addTo(this.map);
            this.currentLocationMarker.bindPopup('Estás aquí').openPopup();
          } else {
            this.currentLocationMarker.setLatLng([lat, lng]);
          }
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
          alert('No se pudo obtener la ubicación actual.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert('La geolocalización no es compatible con este navegador.');
    }
  }

  seleccionarAsiento() {
    if (this.asientosDisponibles > 0) {
      this.asientosDisponibles -= 1;
      alert('Asiento reservado con éxito. Asientos restantes: ' + this.asientosDisponibles);
    } else {
      alert('No hay asientos disponibles.');
    }
  }

  calificarExperiencia() {
    // Navega a la página de calificación con los parámetros relevantes
    this.router.navigate(['/calificar-experiencia'], {
      queryParams: {
        nombreUsuario: this.nombreUsuario,
        destinoSeleccionado: this.destinoSeleccionado,
        fechaSalida: this.fechaSalida,
      },
    });
  }
}
