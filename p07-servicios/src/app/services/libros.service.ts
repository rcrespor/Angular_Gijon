import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class LibrosService {

  sUrl: string;

  constructor(public http: Http) {
    this.sUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
   }

   buscar(sClave: string) {
    const aLibros: Array<string> = [];
    const url = this.sUrl  + sClave;
    return this.http.get(url).toPromise()
    .then(
      (response) => {
         response.json().items.forEach(
           element => {
              aLibros.push(element.volumeInfo.title);
           }
          );
          return aLibros;
        }
    );
   }

   buscarRx(sClave: string)  {
    const url = this.sUrl  + sClave;
    return this.http.get(url).map(
      response => this.exctractTitles(response),
      error => console.log(error)
    );
   }

   private exctractTitles(response: Response) {

    if (response.json().items) {
      return response.json().items.map(
        book => book.volumeInfo.title
      );
    } else {
      return response;
    }

   }

}
