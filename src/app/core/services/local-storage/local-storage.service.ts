import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  saveData(name: string, value: User | null): void {
    const user = JSON.stringify(value);
    localStorage.setItem(name, user);
  }

  getData(name: string): string | null {
    const data = localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}
