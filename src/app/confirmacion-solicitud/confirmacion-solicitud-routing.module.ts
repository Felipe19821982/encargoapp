import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionSolicitudPage } from './confirmacion-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionSolicitudPageRoutingModule {}
