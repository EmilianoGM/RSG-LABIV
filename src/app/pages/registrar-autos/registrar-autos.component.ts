import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { TokenService } from 'src/app/services/token.service';
import { IAuto } from '../../clases/autos';
@Component({
  selector: 'app-registrar-autos',
  templateUrl: './registrar-autos.component.html',
  styleUrls: ['./registrar-autos.component.scss']
})
export class RegistrarAutosComponent implements OnInit {
  correo: string;
  token;
  constructor(
    private cloudStorage: CloudStorageService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.token = this.tokenService.getToken();
    console.log('token en register', this.token);

    this.correo = this.token.email;
    console.log('correo', this.correo);
  }

  ngOnInit(): void {
  }

  public registrarAuto(value){
    /*
      id?;
      modelo;
      marca;
      correo;
      km: number;
      precio:number; */
    let nuevoAuto: IAuto = {
        modelo: value.modelo,
        marca: value.marca,
        correo: this.correo,
        km: value.km,
        precio: value.precio
    }
    console.log('nuevo auto a registrar', nuevoAuto);
    this.cloudStorage.setAuto(nuevoAuto);
    this.router.navigateByUrl("/mostrar-autos");
  }
}
