import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from '../../shared/components/menu/menu.module';
import { TableEventsModule } from './components/table-events/table-events.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TableEventsModule,
    MenuModule
  ]
})
export class HomeModule { }
