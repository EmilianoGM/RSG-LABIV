import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';
import { IAuto } from 'src/app/clases/autos';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.scss']
})
export class ListaAutosComponent implements OnInit {
  @Input() lista: IAuto[];
  constructor() { }

  ngOnInit(): void {
  }

}
