import { Component, OnInit } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-borrar-auto',
  templateUrl: './borrar-auto.component.html',
  styleUrls: ['./borrar-auto.component.scss']
})
export class BorrarAutoComponent implements OnInit {
  mensaje: string;
  listaAutos: IAuto[] = [];
  correo: string;
  token;
  constructor(
    private cloudStorage: CloudStorageService,
    public tokenService: TokenService
  ) {
    this.token = this.tokenService.getToken();
    this.correo = this.token.email;
    this.cloudStorage.getSnapAutos().subscribe((snap)=>{
      this.listaAutos = [];
      snap.forEach((data) => {
        let auto: IAuto = data.payload.doc.data();
        auto.id = data.payload.doc.id;
        if(auto.correo == this.correo){
          this.listaAutos.push(auto);
        }
      });
    });
  }

  ngOnInit(): void {
  }

  borrarAuto(auto: IAuto){
    this.mensaje = "El auto " + auto.marca + ' - ' + auto.modelo + ' fue eliminado';
    this.cloudStorage.deleteAuto(auto);
  }
}
