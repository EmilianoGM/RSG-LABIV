import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../services/fire-auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fireAuthService: FireAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public registrarUsuario(value){
    //console.log("Formulario registro:", value);
    this.fireAuthService.registrarUsuario(value)
      .then((res) => {
        this.router.navigateByUrl("/login");
      }, (err) => {
        console.log("ERROR al registrarse", err);
      });
  }

}
