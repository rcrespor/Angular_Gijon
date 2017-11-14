import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {

  public sName: string;
  public nValor: number;
  constructor() { }

  ngOnInit() {
    this.sName = 'Raquel';
    this.nValor = 10;
  }

}
