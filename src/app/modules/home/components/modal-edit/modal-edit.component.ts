import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Events } from '../../../../core/models/events';
import { EventsService } from '../../../../core/services/events/events.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css'
})
export class ModalEditComponent implements OnChanges {

  private event = inject(EventsService);
  private mgs = inject(MessageService);

  @Output() onAccept = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  @Input() visible: boolean = false;
  @Input() idEvent: string = '';



  formEvent = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    day: new FormControl(new Date(), Validators.required),
    hour: new FormControl(new Date(), Validators.required),
    address: new FormControl('', Validators.required),
    state: new FormControl(0, Validators.required),
  })

  stateEvent = [{
    id: 0,
    name: 'Activo'
  },
  {
    id: 1,
    name: 'En curso'
  },

  {
    id: 2,
    name: 'Finalizado'
  }];

  ngOnChanges(): void {
   
    this.event.getEvent(this.idEvent).subscribe(event => {
      this.formEvent.get('id')?.setValue(event.id);
      this.name?.setValue(event.name);
      this.address?.setValue(event.address);
      this.day?.setValue(new Date(event.day ?? ''));
      this.hour?.setValue(new Date(event.hour ?? ''));
      this.state?.setValue(event.state);
      this.details?.setValue(event.details);
    })
  }

  get name() {
    return this.formEvent.get('name');
  }

  get day() {
    return this.formEvent.get('day');
  }

  get details() {
    return this.formEvent.get('details');
  }

  get hour() {
    return this.formEvent.get('hour');
  }

  get address() {
    return this.formEvent.get('address');
  }

  get state() {
    return this.formEvent.get('state');
  }

  accept(): void {
    const data = this.formEvent.value as Events;
    this.event.updateEvent(data).subscribe(res => {
      this.onAccept.emit();
      this.mgs.add({
        severity: 'success', summary: 'Éxito', detail: 'Evento actualizado', life: 3000
      })
    })
  }

  cancel(): void {
    this.onCancel.emit()
  }



}
