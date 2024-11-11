import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriptoactivosPageRoutingModule } from './criptoactivos-routing.module';

import { CriptoactivosPage } from './criptoactivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriptoactivosPageRoutingModule
  ],
  declarations: [CriptoactivosPage]
})
export class CriptoactivosPageModule {}
