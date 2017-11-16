import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosService } from '../../services/libros.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-buscar-httpService',
  templateUrl: './buscar-httpService.component.html',
  styleUrls: ['./buscar-httpService.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscarHttpServiceComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;
  sUrl: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
    this.sUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar(sClave: string) {
    this.aLibros = [];
    this.librosService.buscar(this.sClave)
    .then(
      (response) => {
         this.aLibros = response;
      }
    );
  }

  btnBuscarRx(sClave: string) {
    this.aLibros = [];
    this.librosService.buscarRx(this.sClave)
    .subscribe((response) => {
      this.aLibros = response;
   });
  }


}
