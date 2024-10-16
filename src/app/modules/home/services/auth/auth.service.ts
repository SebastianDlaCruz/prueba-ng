import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../core/models/user';
import { LocalStorageService } from '../../../../core/services/local-storage/local-storage.service';
import { Auth } from '../../model/auth';
import { findUser } from '../../util/find-user.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = environment.apiUrl;
  private http = inject(HttpClient);
  private lc = inject(LocalStorageService)

  login(value: Auth): Observable<User | null> {
    return this.http.get<User[]>(`${this.urlBase}users`)
      .pipe(
        map(users => findUser(value, users)),
        catchError(() => of(null))
      )
  }

  logout(): void {
    this.lc.saveData('user', null);
  }

}
