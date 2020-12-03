import { Component, OnInit } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-auto',
  templateUrl: './cambiar-auto.component.html',
  styleUrls: ['./cambiar-auto.component.scss']
})
export class CambiarAutoComponent implements OnInit {

  mensaje: string;
  auto: IAuto;
  listaAutos: IAuto[] = [];
  correo: string;
  token;
  formActivado: boolean = false;

  formAuto: FormGroup;
  mensajesValidacion = {
    'modelo': [
      { tipo: 'required', mensaje: 'El modelo es requerido.' }
    ],
    'marca': [
      { tipo: 'required', mensaje: 'La marca es requerida.' }
    ],
    'km': [
      { tipo: 'required', mensaje: 'El kilometraje es requerido' }
    ],
    'precio': [
      { tipo: 'required', mensaje: 'El precio es requerido' }
    ]
  };

  constructor(
    private cloudStorage: CloudStorageService,
    public tokenService: TokenService,
    private formBuilder: FormBuilder
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

    this.formAuto = this.formBuilder.group({
      modelo: [
        '',
        [Validators.required]
      ],
      marca: [
        '',
        [Validators.required]
      ],
      km: [
        '',
        [Validators.required,
          Validators.maxLength(7),
          Validators.max(1000000),
          Validators.min(1)]
      ],
      precio: [
        '',
        [Validators.required,
          Validators.maxLength(7),
          Validators.max(1000000),
          Validators.min(1)]
      ]
    });
  }

  ngOnInit(): void {
  }

  cargarAuto(autoACAmbiar:IAuto){
    this.formActivado = true;
    this.formAuto.controls['modelo'].setValue(autoACAmbiar.modelo);
    this.formAuto.controls['marca'].setValue(autoACAmbiar.marca);
    this.formAuto.controls['km'].setValue(autoACAmbiar.km);
    this.formAuto.controls['precio'].setValue(autoACAmbiar.precio);
    this.auto = autoACAmbiar;
  }

  updateAuto(value){
    this.mensaje = "El auto fue cambiado";
    let nuevoAuto: IAuto = {
      modelo: value.modelo,
      marca: value.marca,
      correo: this.auto.correo,
      km: value.km,
      precio: value.precio
  }
  nuevoAuto.id = this.auto.id;
    this.cloudStorage.updateAuto(nuevoAuto);
    this.formActivado = false;
  }

}
