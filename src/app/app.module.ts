import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IconosComponent } from './components/iconos/iconos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Figura3dComponent } from './components/figura3d/figura3d.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimacioncargaComponent } from './components/animacioncarga/animacioncarga.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannerComponent } from './components/banner/banner.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginverdaderoComponent } from './components/loginverdadero/loginverdadero.component';
import { NavbaritemsdialogComponent } from './components/navbaritemsdialog/navbaritemsdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IconosComponent,
    Figura3dComponent,
    ButtonsComponent,
    PrincipalComponent,
    NavbarComponent,
    AnimacioncargaComponent,
    CardsComponent,
    BannerComponent,
    LoginverdaderoComponent,
    NavbaritemsdialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
