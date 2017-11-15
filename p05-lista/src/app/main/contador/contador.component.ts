import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContadorComponent implements OnInit {

  public contador: number;
  public colores: any;
  public nIncremento: number;

  constructor() { }

  ngOnInit() {
    this.contador = 0;
    this.nIncremento = 1;
    this.actualizaColores();
  }

  incrementar() {
    this.contador += this.nIncremento;
        this.actualizaColores();
  }

  decrementar() {
    this.contador -= this.nIncremento;
    this.actualizaColores();
  }

  actualizaColores() {
    this.colores = {
    positivo: this.contador > 0,
    negativo: this.contador < 0,
    cero: this.contador === 0 };
  }

}
