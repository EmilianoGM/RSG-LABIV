import { Component, OnInit } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-mostrar-autos-usuario',
  templateUrl: './mostrar-autos-usuario.component.html',
  styleUrls: ['./mostrar-autos-usuario.component.scss']
})
export class MostrarAutosUsuarioComponent implements OnInit {
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

}
