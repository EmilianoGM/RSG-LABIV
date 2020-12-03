import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from './services/fire-auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hayUsuario: boolean;
  banderaDos: boolean;
  title = 'RecuperatorioSegundoParcial';
  token;

  constructor(
    private fireAuthService: FireAuthService,
    private tokenService: TokenService,
    private router: Router
  ){
    this.banderaDos = false;
    this.fireAuthService.getAuthState().subscribe((authState) => {
      if(authState && this.tokenService.isLogged()){
        this.banderaDos = true;
        this.token = tokenService.getToken();
        if(this.token.ingresado){
          this.hayUsuario = true;
          this.banderaDos = true;
        }

      } else {
        this.hayUsuario = false;
      }
    });

  }

  public logOut(){
    if(this.hayUsuario){
      this.fireAuthService.logoutUsuario().then((res) => {
        this.banderaDos = false;
        this.router.navigateByUrl('/login');
      });
    }
  }
}
