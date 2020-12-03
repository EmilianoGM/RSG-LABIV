import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../services/fire-auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorLogin: boolean;

  constructor(
    private fireAuthService: FireAuthService,
    private router: Router
  ) {
    this.errorLogin = false;
  }

  ngOnInit(): void {
  }

  public loggearUsuario(value){
    this.fireAuthService.loginUsuario(value)
      .then((res) => {
        this.router.navigateByUrl("/home");
      }, (err) => {
        this.errorLogin = true;
        console.log("Error al loggear", err);
      });
  }

}
