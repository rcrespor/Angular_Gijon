import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Impresora, Departamento } from '../../models/models';


@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  impresoras: Array<Impresora>;
  departamentos: Array<Departamento>;
  formulario: FormGroup;

  constructor() { }

  ngOnInit() {

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

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      impresora: new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl(),
      departamento: new FormControl()
    });

  }

  enviar() {
  }

  resetForm() {
    this.formulario.reset();

  }

}
