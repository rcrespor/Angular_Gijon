import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nValor: number;
  nPrecio: number;
  dFecha: Date;
  oDato: Object;


  constructor() { }

  ngOnInit() {
    this.sNombre = 'Raquel crespo';
    this.nValor = 30.876;
    this.nPrecio = 45.50;
    this.dFecha = new Date();
    this.oDato = {nombre: 'Raquel',
    apellido: 'Crespo'
    };
    }

}
