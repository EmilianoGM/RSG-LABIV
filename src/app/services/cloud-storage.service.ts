import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IAuto } from '../clases/autos';
import { IUsuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {
  coleccionUsuarios: AngularFirestoreCollection<IUsuario>;
  coleccionAutos: AngularFirestoreCollection<IAuto>;
  constructor(
    private dataBase: AngularFirestore
  ) {
    this.coleccionUsuarios = this.dataBase.collection<IUsuario>('usuariosRecu');
    this.coleccionAutos = this.dataBase.collection<IAuto>('autos');
  }

  public getListaUsuarios(){
    return this.coleccionUsuarios.valueChanges();
  }

  public getListaAutos(){
    return this.coleccionAutos.valueChanges();
  }

  public getSnapAutos(){
    return this.coleccionAutos.snapshotChanges();
  }

  public setAuto(auto: IAuto){
    let id = this.dataBase.createId();
    this.coleccionAutos.doc(id).set(auto);
    console.log('EN set auto', auto);
  }

  public updateAuto(auto: IAuto){
    let autoModificado: IAuto = {
      modelo: auto.modelo,
      marca: auto.marca,
      correo: auto.correo,
      km: auto.km,
      precio: auto.precio
    }
    this.coleccionAutos.doc(auto.id).update(auto);
  }

  public deleteAuto(auto: IAuto){
    this.coleccionAutos.doc(auto.id).delete();
  }
}
