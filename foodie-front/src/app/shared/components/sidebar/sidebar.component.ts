import {Component, Input} from '@angular/core';
import {SidebarItem} from "../../../models/sidebar-item-model/sidebar-item.model";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [
    {name: 'Home', icon: 'home', link: '/home/menu'},
    {name: 'Tables', icon: 'dashboard', link: '/tables'},
    {name: 'Cashier', icon: 'paid', link: '/cashier'},
    {name: 'Orders', icon: 'shopping_bag', link: '/orders'},
    {name: 'Reports', icon: 'pie_chart', link: '/reports'}
  ]

  @Input() activeItem!: string;

  constructor(private _keycloakService: KeycloakService) {
  }

  handleLogout() {
    this._keycloakService.logout(window.location.origin);
    console.log("logout");
  }
}
