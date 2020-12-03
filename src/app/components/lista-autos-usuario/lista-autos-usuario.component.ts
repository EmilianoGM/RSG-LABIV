import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';

@Component({
  selector: 'app-lista-autos-usuario',
  templateUrl: './lista-autos-usuario.component.html',
  styleUrls: ['./lista-autos-usuario.component.scss']
})
export class ListaAutosUsuarioComponent implements OnInit {
  @Input() lista: IAuto[];
  @Input() activarUpdate: boolean;
  @Input() activarDelete: boolean;
  @Output() emitAuto = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public enviarAuto(auto: IAuto){
    this.emitAuto.emit(auto);
  }

}
