import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public sTitulo: string;

  constructor() {
    // el constructor se usa para inyeccion de dependencias
  }

  ngOnInit() {
    // por convención se utiliza esto para inicializar
    // pq ya esta todo enchufado en el dom
    this.sTitulo = 'Curso de Angular';
  }

}
