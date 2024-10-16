import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../core/models/user';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';
import { UserService } from '../../core/services/user/user.service';
import { UpdateUserService } from './services/update-user/update-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  private user$ = inject(UserService);
  private update = inject(UpdateUserService);
  private lc = inject(LocalStorageService);
  private mgs = inject(MessageService);


  formProfile = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    id: new FormControl(''),
    rol: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    this.user$.getUserData().subscribe(user => {
      if (user) {
        this.formProfile.get('name')?.setValue(user.name);
        this.formProfile.get('lastName')?.setValue(user.lastName);
        this.formProfile.get('rol')?.setValue(user.rol);
        this.formProfile.get('username')?.setValue(user.username);
        this.formProfile.get('password')?.setValue(user.password)
        this.formProfile.get('id')?.setValue(user.id);
        this.disableInputs();
      }
    })
  }



  disableInputs(): void {
    if (this.getRol() === 'user') {
      this.formProfile.get('name')?.disable();
      this.formProfile.get('lastName')?.disable();
      this.formProfile.get('username')?.disable();
      this.formProfile.get('id')?.disable();
    }
  }

  getRol(): string {
    return this.user$.getRole();
  }

  onSubmit(): void {
    const data = this.formProfile.value as User;
    this.update.putDateUser(data).subscribe(res => {
      this.user$.setsUserData(res);
      this.lc.saveData('user', res);
      this.mgs.add(
        { severity: 'success', summary: 'Éxito', detail: 'Usuario modificado' }
      );
    });
  }
}
