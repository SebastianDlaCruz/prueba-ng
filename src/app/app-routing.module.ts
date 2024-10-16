import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    title: 'Login'

  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    title: 'Inicio',
    canActivate: [authGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    title: 'Perfil',
    canActivate: [authGuard]
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule),
    title: 'Evento',
    canActivate: [authGuard]
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./modules/add-event/add-event.module').then(m => m.AddEventModule),
    title: 'Crear evento',
    canActivate: [authGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
