import { Component, OnInit } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';

@Component({
  selector: 'app-mostrar-autos',
  templateUrl: './mostrar-autos.component.html',
  styleUrls: ['./mostrar-autos.component.scss']
})
export class MostrarAutosComponent implements OnInit {
  listaAutos: IAuto[];

  constructor(
    private cloudStorage: CloudStorageService
  ) {
    this.cloudStorage.getListaAutos().subscribe((lista) => {
      this.listaAutos = lista;
    });
  }

  ngOnInit(): void {
  }

}
