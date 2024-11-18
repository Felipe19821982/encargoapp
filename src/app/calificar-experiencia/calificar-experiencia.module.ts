import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarExperienciaPageRoutingModule } from './calificar-experiencia-routing.module';

import { CalificarExperienciaPage } from './calificar-experiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarExperienciaPageRoutingModule
  ],
  declarations: [CalificarExperienciaPage]
})
export class CalificarExperienciaPageModule {}
