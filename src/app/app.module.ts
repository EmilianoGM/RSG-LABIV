import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MostrarAutosComponent } from './pages/mostrar-autos/mostrar-autos.component';
import { RegistrarAutosComponent } from './pages/registrar-autos/registrar-autos.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistermFormComponent } from './components/registerm-form/registerm-form.component';
import { ListaAutosComponent } from './components/lista-autos/lista-autos.component';
import { AutosFormComponent } from './components/autos-form/autos-form.component';
import { HomeComponent } from './pages/home/home.component';
import { CambiarAutoComponent } from './pages/cambiar-auto/cambiar-auto.component';
import { BorrarAutoComponent } from './pages/borrar-auto/borrar-auto.component';
import { ListaAutosUsuarioComponent } from './components/lista-autos-usuario/lista-autos-usuario.component';
import { MenuComponent } from './components/menu/menu.component';
import { MostrarAutosUsuarioComponent } from './pages/mostrar-autos-usuario/mostrar-autos-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MostrarAutosComponent,
    RegistrarAutosComponent,
    LoginFormComponent,
    RegistermFormComponent,
    ListaAutosComponent,
    AutosFormComponent,
    HomeComponent,
    CambiarAutoComponent,
    BorrarAutoComponent,
    ListaAutosUsuarioComponent,
    MenuComponent,
    MostrarAutosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
