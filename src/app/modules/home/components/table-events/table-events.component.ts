import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Events } from '../../../../core/models/events';
import { EventsService } from '../../../../core/services/events/events.service';
import { UserService } from '../../../../core/services/user/user.service';
import { Col } from './model/col';

@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrl: './table-events.component.css'
})
export class TableEventsComponent implements OnInit, OnDestroy {

  private evs = inject(EventsService);
  private user$ = inject(UserService);
  private router = inject(Router);
  private cs = inject(ConfirmationService);
  private mgs = inject(MessageService);

  private evsSub$: Subscription | null = null;
  loading = false;
  searchValue = ''
  visible = false;
  idEvent: string = '';

  cols: Col[] = [
    { field: 'id', header: 'id' },
    { field: 'name', header: 'Nombre' },
    { field: 'day', header: 'Dia' },
    { field: 'hour', header: 'Hora' },
    { field: 'address', header: 'Dirección' },
    { field: 'state', header: 'Estado' },
  ];

  events: Events[] = [];

  ngOnInit(): void {
    this.getDataTable();
  }


  getDataTable(): void {
    this.evsSub$ = this.evs.getEvents().subscribe(events => {
      this.events = events;
      this.loading = true;
    })
  }

  clear(table: Table): void {
    table.clear();
    this.searchValue = ''
  }

  getRol(): string {
    return this.user$.getRole();
  }


  delete(id: string): void {
    this.evs.deleteEvent(id).subscribe(res => {
      this.getDataTable();
      this.mgs.add({ severity: 'info', summary: 'Éxito', detail: 'El evento se elimino con éxito', life: 3000 });
    })
  }

  onDelete(id: string): void {
    this.cs.confirm({
      header: '¿Estas seguro?',
      message: 'Este evento se eliminara',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);

      },

    });
  }

  onAccept(): void {
    this.visible = false;
    this.getDataTable();
  }

  onCancel(): void {
    this.visible = false;
  }

  onUpdate(id: string): void {
    this.idEvent = id;
    this.visible = !this.visible;
  }


  onView(id: string): void {
    this.router.navigate(['evento', id])
  }

  ngOnDestroy(): void {
    this.evsSub$?.unsubscribe();
  }
}
