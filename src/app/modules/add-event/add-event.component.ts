import { Component, HostListener, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Events } from '../../core/models/events';
import { EventsService } from '../../core/services/events/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  private event = inject(EventsService);
  private mgs = inject(MessageService);

  inputResponsive: string = '';

  formEvent = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',
      [Validators.required,
      Validators.min(15)]),
    details: new FormControl('', Validators.required),
    day: new FormControl(null, Validators.required),
    hour: new FormControl(null, Validators.required),
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


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkVieWidth();
  }

  checkVieWidth(): void {
    if (window.innerWidth <= 800) {
      this.inputResponsive = '265px'
    } else {
      this.inputResponsive = '425px'
    }
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


  onSubmit(): void {
    this.formEvent.markAllAsTouched();
    if (this.formEvent.valid) {
      this.formEvent.get('id')?.setValue(self.crypto.randomUUID());
      const data = this.formEvent.value as Events;
      this.event.createEvent(data).subscribe({
        next: (res) => {
          {
            this.mgs.add(
              { severity: 'success', summary: 'Éxito', detail: 'Evento creado' }
            );
          }
          this.formEvent.reset();
        },
        error: () => {
          this.mgs.add(
            { severity: 'error', summary: 'Error', detail: 'Error al crear el evento' }
          );
        }
      }
      );
    }
  }
}
