import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lista-v4',
  templateUrl: './lista-v4.component.html',
  styleUrls: ['./lista-v4.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaV4Component implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea() {
    this.aTareas.push(this.sTarea);
  }

}
