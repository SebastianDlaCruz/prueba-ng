import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuResponsiveComponent } from './menu-responsive.component';



@NgModule({
  declarations: [
    MenuResponsiveComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule
  ],
  exports: [MenuResponsiveComponent]
})
export class MenuResponsiveModule { }
