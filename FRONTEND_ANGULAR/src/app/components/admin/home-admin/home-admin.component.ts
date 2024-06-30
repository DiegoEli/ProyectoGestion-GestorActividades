import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-home-admin',
    standalone: true,
    templateUrl: './home-admin.component.html',
    styleUrl: './home-admin.component.css',
    imports: [NavbarComponent]
})
export class HomeAdminComponent {

}
