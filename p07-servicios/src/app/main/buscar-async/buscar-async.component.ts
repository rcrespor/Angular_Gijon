import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';

@Component({
  selector: 'app-buscar-async',
  templateUrl: './buscar-async.component.html',
  styleUrls: ['./buscar-async.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscarAsyncComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosMockService: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.librosMockService.buscarLibrosAsync(this.sClave)
    .then(JSON.parse)
    .then(
      // función OK
      (response) => {this.aLibros = response; },

      // función error
      (error) => { console.log(error); }
    );
    console.log(this.aLibros);
  }

}
