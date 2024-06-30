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
router = inject(Router)

LoginUser() {
  const email = (<HTMLInputElement>document.getElementById('usuario')).value;
  const password = (<HTMLInputElement>document.getElementById('contrasena')).value;

  if (email == 'admin' && password == '1234') {
    this.router.navigate(['/home']);
  } else {
    alert('Usuario o Contraseña incorrecto UWU');
  }
}

}
