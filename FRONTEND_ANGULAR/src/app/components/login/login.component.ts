import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  LoginUser() {
    const email = (<HTMLInputElement>document.getElementById('usuario')).value;
    const password = (<HTMLInputElement>document.getElementById('contrasena')).value;

    if (password === '123') {
      if (email === 'admin') {
        this.router.navigate(['/home-admin']);
      } else if (email === 'empleado') {
        this.router.navigate(['/home-empleado']);
      } else if (email === 'jefe') {
        this.router.navigate(['/home-jefe']);
      } else {
        alert('Usuario o Contraseña incorrecto UWU');
      }
    } else {
      alert('Usuario o Contraseña incorrecto UWU');
    }
  }
}
