import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  public isLogged(){
    this.token = localStorage.getItem('token');
    return this.token != null;
  }

  public setToken(correo: string){
    let json =
      {
        ingresado: true,
        email: correo
      };
    localStorage.setItem("token", JSON.stringify(json));
  }

  public getToken(){
    this.token = localStorage.getItem('token');
    if (this.isLogged()){
      return JSON.parse(this.token);
    } else{
      return null;
    }
  }

  public resetToken(){
    let json =
      {
        ingresado: false,
        email: ''
      }
    localStorage.setItem("token", JSON.stringify(json));
  }
}
