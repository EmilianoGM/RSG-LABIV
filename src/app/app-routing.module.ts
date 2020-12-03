import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrarAutoComponent } from './pages/borrar-auto/borrar-auto.component';
import { CambiarAutoComponent } from './pages/cambiar-auto/cambiar-auto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MostrarAutosUsuarioComponent } from './pages/mostrar-autos-usuario/mostrar-autos-usuario.component';
import { MostrarAutosComponent } from './pages/mostrar-autos/mostrar-autos.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistrarAutosComponent } from './pages/registrar-autos/registrar-autos.component';

import{ AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'mostrar-autos',
    component: MostrarAutosComponent
  },
  {
    path: 'registrar-autos',
    component: RegistrarAutosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mostrar-autos-usuario',
    component: MostrarAutosUsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'borrar-auto',
    component: BorrarAutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cambiar-auto',
    component: CambiarAutoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
