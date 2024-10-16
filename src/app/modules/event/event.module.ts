import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuModule } from '../../shared/components/menu/menu.module';
import { StateEventModule } from '../../shared/components/state-event/state-event.module';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [
    EventComponent,

  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    MenuModule,
    StateEventModule
  ]
})
export class EventModule { }
