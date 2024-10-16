import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../modules/home/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {

  private auth = inject(AuthService);
  private user$ = inject(UserService);
  private router = inject(Router);

  items: MegaMenuItem[] | undefined = [];
  isMobile:boolean = false;

  ngOnInit(): void {
    this.initItemsMenu();
    this.checkVieWidth();
  }

  @HostListener('window:resize',['$event'])
  onResize(){
    this.checkVieWidth();
  }

  checkVieWidth():void{
    this.isMobile = window.innerWidth <= 800;
  }

  initItemsMenu():void{
    this.items = [
      {
        label: 'Inicio',
        root: true,
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Crear evento',
        root: true,
        visible: this.user$.getRole() !== 'user',
        command: () => {
          this.router.navigate(['/crear-evento']);
        },
      },
      {
        label: 'Perfil',
        root: true,
        command: () => {
          this.router.navigate(['/perfil']);
        },
      },
      {
        label: 'Cerrar Sesión',
        root: true,
      }
    ]

  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
