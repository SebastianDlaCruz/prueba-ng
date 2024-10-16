import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { StateEventModule } from "../../../../shared/components/state-event/state-event.module";
import { TableEventsComponent } from './table-events.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ModalEditModule } from '../modal-edit/modal-edit.module';

@NgModule({
  declarations: [
    TableEventsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    StateEventModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ConfirmDialogModule,
    ToastModule,
    ModalEditModule
  ],
  providers:[ConfirmationService, MessageService],
  exports: [TableEventsComponent]
})
export class TableEventsModule { }
