import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  map: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
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
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
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
}
