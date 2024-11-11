import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderBarComponent } from './components/order-bar/order-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuOrderDetailsComponent} from "./components/menu-order-details/menu-order-details.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuOrderDetailsSkeletonComponent } from './components/menu-order-details-skeleton/menu-order-details-skeleton.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    OrderBarComponent,
    MenuOrderDetailsComponent,
    MenuOrderDetailsSkeletonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    NavbarComponent,
    OrderBarComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
