import { Component, OnInit, ViewChild } from '@angular/core';
import { Impresion, Impresora, Departamento  } from '../../models/models';


@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css']
})
export class FormVistaComponent implements OnInit {

  ordenImpresion: Impresion;
  impresoras: Array<Impresora>;
  departamentos: Array<Departamento>;
  @ViewChild('form1') formVista: any;

  constructor() { }

  ngOnInit() {
    this.ordenImpresion = new Impresion(
      { nombre: '', apellidos: '', telefono: ''},
      {codigo: '', nombre: ''},
      false,
      false,
      {codigo: '', nombre: ''}
    );

    this.impresoras = [
        {codigo: '001', nombre: 'HP'},
        {codigo: '002', nombre: 'LexMark'},
        {codigo: '003', nombre: 'Canon'}
      ];

      this.departamentos = [
        {codigo: 'VN', nombre: 'Ventas'},
        {codigo: 'MK', nombre: 'Marketing'},
        {codigo: 'SS', nombre: 'Sistemas'}
      ];

      console.log(this.formVista);

  }

  enviar() {
    console.log(this.formVista);
  }

  resetForm() {
    this.formVista.reset();
    console.log(this.formVista);
  }

}
