import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit {
  nombreUsuario: string = '';  // Inicializado con un valor por defecto
  destino: string = '';        // Inicializado con un valor por defecto
  fechaSalida: string = '';    // Inicializado con un valor por defecto
  cantidadPersonas: number = 0; // Inicializado con un valor por defecto
  costoTotal: number = 0;      // Inicializado con un valor por defecto
  comentarios: string = '';    // Inicializado con un valor por defecto

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreUsuario = params['nombreUsuario'] || '';  // Usa valor por defecto si no está presente
      this.destino = params['destino'] || '';              // Usa valor por defecto si no está presente
      this.fechaSalida = params['fechaSalida'] || '';      // Usa valor por defecto si no está presente
      this.cantidadPersonas = params['cantidadPersonas'] || 0; // Usa valor por defecto si no está presente
      this.costoTotal = params['costoTotal'] || 0;         // Usa valor por defecto si no está presente
      this.comentarios = params['comentarios'] || '';      // Usa valor por defecto si no está presente
    });
  }
}
