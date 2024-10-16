import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ModalEditComponent } from './modal-edit.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule
  ],
  providers:[MessageService],
  exports: [ModalEditComponent]
})
export class ModalEditModule { }
