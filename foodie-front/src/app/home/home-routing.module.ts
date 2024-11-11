import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MenuComponent} from "./menu/menu.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'form', component: FormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
