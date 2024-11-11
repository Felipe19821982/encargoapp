import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionSolicitudPageRoutingModule } from './confirmacion-solicitud-routing.module';

import { ConfirmacionSolicitudPage } from './confirmacion-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionSolicitudPageRoutingModule
  ],
  declarations: [ConfirmacionSolicitudPage]
})
export class ConfirmacionSolicitudPageModule {}
