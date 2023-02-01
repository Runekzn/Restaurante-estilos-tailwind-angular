import { LoginverdaderoComponent } from './components/loginverdadero/loginverdadero.component';
import { Figura3dComponent } from './components/figura3d/figura3d.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IconosComponent } from './components/iconos/iconos.component';
import { NavbaritemsdialogComponent } from './components/navbaritemsdialog/navbaritemsdialog.component';
const routes: Routes = [
  {path:'inicio', component:PrincipalComponent},
  {path:'login', component:LoginComponent },
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  { path: 'iconos', component: IconosComponent },
  {path:'botones', component: ButtonsComponent},
  {path:'figura', component:Figura3dComponent},
  {path:'register', component: LoginverdaderoComponent},
  {path:'items', component: NavbaritemsdialogComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
