import { Component, inject, OnInit } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prueba-NG';

  private lc = inject(LocalStorageService);
  private user$ = inject(UserService);
  
  ngOnInit(): void {
    const data = this.lc.getData('user');
    if (data) {
      this.user$.setsUserData(Object(data));
    }
  }

}
