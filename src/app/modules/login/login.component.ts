import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';
import { UserService } from '../../core/services/user/user.service';
import { Auth } from '../home/model/auth';
import { AuthService } from '../home/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

  private auth = inject(AuthService);
  private user$ = inject(UserService);
  private mgs = inject(MessageService);
  private route = inject(Router);
  private lc = inject(LocalStorageService);


  formAuth = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.min(10)]),

    password: new FormControl('',
      [Validators.required,
      Validators.min(12),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$')
      ]),
  })


  get username() {
    return this.formAuth.get('username');
  }

  get password() {
    return this.formAuth.get('password');
  }



  onSubmit(): void {
    console.log('error', this.password?.errors?.['pattern'])
    this.formAuth.markAllAsTouched();
    if (this.formAuth.valid) {
      const value = this.formAuth.value as Auth;

      this.auth.login(value).subscribe(user => {
        if (user) {

          this.user$.setsUserData(user);
          this.lc.saveData('user', user);
          this.route.navigate(['/'])
        }
        if (user === null) {
          this.mgs.add(
            { severity: 'error', summary: 'Error', detail: 'Este usuario no se encuentra registrado' }
          );
        }

      }
      )
    }
  }


}
