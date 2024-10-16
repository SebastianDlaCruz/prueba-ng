import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user';

/* Contexto de los datos del usuario al momento de iniciar sesion */

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user$ = new BehaviorSubject<User | null>(null);

  setsUserData(value: User): void {
    this.user$.next(value);
  }

  getUserData(): Observable<User | null> {
    return this.user$.asObservable();
  }

  hasUser(): boolean {
    return this.user$.value ? true : false;
  }

  getRole(): string {
    return this.user$.value?.rol ?? ''
  }

}
