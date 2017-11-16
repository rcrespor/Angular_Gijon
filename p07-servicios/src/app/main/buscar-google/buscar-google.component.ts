import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscarGoogleComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;
  sUrl: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.aLibros = [];
    this.sUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar(sClave: string) {
    this.aLibros = [];
    const url = this.sUrl  + this.sClave;
    this.http.get(url).toPromise()
    .then(
      (response) => {
         response.json().items.forEach(
           element => {
             this.aLibros.push(element.volumeInfo.title);
           }
          );
        }
    );
  }

  btnBuscarRes(sClave: string) {
    this.aLibros = [];
    const url = this.sUrl  + this.sClave;
    this.http.get(url).subscribe(
      (response) => {
         response.json().items.forEach(
           element => {
             this.aLibros.push(element.volumeInfo.title);
           }
          );
        }
    );
  }


}
