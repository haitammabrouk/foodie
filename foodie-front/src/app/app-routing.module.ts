import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
