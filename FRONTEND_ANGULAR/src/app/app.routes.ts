import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ListEmpleadosComponent } from './components/admin/list-empleados/list-empleados.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { HomeEmpleadoComponent } from './components/empleado/home-empleado/home-empleado.component';
import { HomeJefeComponent } from './components/jefe/home-jefe/home-jefe.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home-admin', component: HomeAdminComponent },
    { path: 'list-empleados', component: ListEmpleadosComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'home-empleado', component: HomeEmpleadoComponent },
    { path: 'home-jefe', component: HomeJefeComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
