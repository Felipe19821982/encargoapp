import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudViajePageRoutingModule } from './solicitud-viaje-routing.module';

import { SolicitudViajePage } from './solicitud-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudViajePageRoutingModule
  ],
  declarations: [SolicitudViajePage]
})
export class SolicitudViajePageModule {}
