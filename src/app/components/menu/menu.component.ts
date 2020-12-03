import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() hayUsuarioLoggeado: boolean;
  @Input() banderaDos: boolean;
  @Output() logOut = new EventEmitter<any>();
  token;
  bandera: boolean = false;

  isNavbarCollapsed=true;
  constructor(
    private tokenService: TokenService
  ) {
    if(this.tokenService.isLogged()){
      this.token = this.tokenService.getToken();
      if(this.token.ingresado){
        this.bandera = true;
      }
    }
   }

  ngOnInit(): void {
  }

  public salir(){
    this.logOut.emit();
  }

}
