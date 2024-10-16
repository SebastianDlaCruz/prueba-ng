import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from '../../shared/components/menu/menu.module';
import { AddEventRoutingModule } from './add-event-routing.module';
import { AddEventComponent } from './add-event.component';

@NgModule({
  declarations: [
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class AddEventModule { }
