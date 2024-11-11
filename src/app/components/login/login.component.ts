import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';  // Importar ModalController
import { ModalPage } from '../modal/modal.page';   // Importar la página del modal

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController  // Inyectar ModalController
  ) {}

  ngOnInit() {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.showWelcomeModal();  // Mostrar modal después de iniciar sesión
    } catch (error) {
      alert('Error al intentar loguearse: ' + error);
    }
  }

  async register() {
    try {
      this.authService.register(this.email, this.password);
      alert('Registrado exitosamente');
    } catch (error) {
      alert('Error al intentar registrar: ' + error);
    }
  }

  // Método para mostrar el modal
  async showWelcomeModal() {
    const modal = await this.modalController.create({
      component: ModalPage,  // Componente del modal
      componentProps: {
        email: this.email,  // Pasar el email como parámetro al modal
      },
    });

    await modal.present();
  }
}
