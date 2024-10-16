import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private urlBase = environment.apiUrl;
  private http = inject(HttpClient);

  putDateUser(data: User): Observable<User> {
    return this.http.put<User>(`${this.urlBase}users/${data.id}`, data);
  }
}
