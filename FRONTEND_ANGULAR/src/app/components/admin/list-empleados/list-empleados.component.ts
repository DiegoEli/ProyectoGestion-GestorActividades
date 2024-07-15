import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-list-empleados',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // Añade CommonModule aquí
  templateUrl: './list-empleados.component.html',
  styleUrl: './list-empleados.component.css'
})
export class ListEmpleadosComponent {
  empleados = [
    { dni: '0999999999', nombres: 'Jose Juan', apellidos: 'Bernabe Guerrero' },
    { dni: '0999999999', nombres: 'Noel Reina', apellidos: 'Khalid Castello' },
    { dni: '0999999999', nombres: 'Juan Belda', apellidos: 'Nabil Barea' },
    { dni: '0999999999', nombres: 'Valentin Espino', apellidos: 'Placido Luna' },
    { dni: '0999999999', nombres: 'Ildefonso Roman', apellidos: 'Goku Cesar' },
    { dni: '0999999999', nombres: 'Emiliano Morales', apellidos: 'Yeray Bonilla' },
    { dni: '0999999999', nombres: 'Jose Javier', apellidos: 'Zheng Salazar' },
    { dni: '0999999999', nombres: 'Iker Florez', apellidos: 'Sole San-Juan' }
  ];

  editarEmpleado(empleado: any) {
    // Lógica para editar el empleado
    console.log('Editar empleado:', empleado);
  }

  eliminarEmpleado(empleado: any) {
    // Lógica para eliminar el empleado
    console.log('Eliminar empleado:', empleado);
  }
}
