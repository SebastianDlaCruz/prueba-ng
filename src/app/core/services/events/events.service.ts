import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Events } from '../../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private urlBase = environment.apiUrl;
  private http = inject(HttpClient);

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.urlBase}events`)
  }

  getEvent(id: string): Observable<Events> {
    return this.http.get<Events>(`${this.urlBase}events/${id}`)
  }

  createEvent(data: Events): Observable<unknown> {
    return this.http.post(`${this.urlBase}events`, data)
  }

  updateEvent(event: Events): Observable<unknown>{
    return this.http.put(`${this.urlBase}events/${event.id}`, event)
  }

  deleteEvent(id: string): Observable<unknown> {
    return this.http.delete(`${this.urlBase}events/${id}`)
  }
}
