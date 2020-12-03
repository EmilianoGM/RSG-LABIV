import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { IUsuario } from '../clases/usuario';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private dataBase: AngularFirestore,
    private tokenService: TokenService
  ) {
  }

  public async loginUsuario(value){
    console.log('en login');
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password).then((res)=>{
        this.tokenService.setToken(value.email);
        resolve();
      }).catch((err)=>{
        console.log(err);
        reject();
      });
    });
  }
  /**
   * Para registrar un usuario en Firebase
   * @param value Recibe datos con campos email, password, nombre y apellido
   */
  public registrarUsuario(value){
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            let usuario: IUsuario = {
              correo: value.email
            };
            this.dataBase.collection('usuariosRecu').doc(res.user.uid).set(usuario);
            resolve();
          },
          err => reject(err))
    });
  }

  public logoutUsuario() {
    return new Promise((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            this.tokenService.resetToken();
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            console.log("Error en logout", error);
            reject();
          });
      }
    });
  }

  public getAuthState(): Observable<any>{
    return this.angularFireAuth.authState;
  }
}
