import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../shared/shared.module";
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MenuCardComponent } from './menu-card/menu-card.component';
import {MatCardModule} from "@angular/material/card";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { MenuCardSkeletonComponent } from './menu-card-skeleton/menu-card-skeleton.component';
import {MenuService} from "./services/menu.service";


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FormComponent,
    MenuCardComponent,
    MenuCardSkeletonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
