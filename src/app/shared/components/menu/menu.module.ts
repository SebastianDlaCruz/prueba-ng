import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuResponsiveModule } from '../menu-responsive/menu-responsive.module';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    ButtonModule,
    MenuResponsiveModule

  ],
  exports: [MenuComponent]
})
export class MenuModule { }
