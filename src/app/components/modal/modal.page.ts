import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @Input() email: string = '';  // Recibe el email del usuario

  constructor(
    private modalController: ModalController,
    private router: Router  // Inyectar Router
  ) {}

  // Método para cerrar el modal y redirigir a la portada
  closeModal() {
    this.modalController.dismiss();
    this.router.navigate(['/portada']);  // Redirigir a portada al cerrar el modal
  }
}
