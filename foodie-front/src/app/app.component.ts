import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeItem: string = '';

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveItem();
      }
    });
  }

  setActiveItem() {
    this.activeItem = this._router.url;
  }
}
