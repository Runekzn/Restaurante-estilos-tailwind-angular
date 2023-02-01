import { LoginComponent } from './../login/login.component';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { NavbaritemsdialogComponent } from '../navbaritemsdialog/navbaritemsdialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


   constructor(
    public dialog: MatDialog,
    ) {}

    abrirDialog(){
      const dialogo = this.dialog.open(NavbaritemsdialogComponent,{
        height: '400px',
        width: '600px',
      })
    }
    menuShow = false;
    toggleNavbar(){
      this.menuShow = !this.menuShow;
    }
  }

