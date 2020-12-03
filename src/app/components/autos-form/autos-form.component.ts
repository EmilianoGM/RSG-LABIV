import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autos-form',
  templateUrl: './autos-form.component.html',
  styleUrls: ['./autos-form.component.scss']
})
export class AutosFormComponent implements OnInit {

  /*
   modelo;
  marca;
  correo;
  nombreUsuario;
  km: number;
  precio:number;
   */
  @Output() emitData = new EventEmitter<any>();
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
    private formBuilder: FormBuilder
  ) {
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

  public onSubmit(autoData){
    this.emitData.emit(autoData);
    console.log('data en form', autoData);
  }


}
