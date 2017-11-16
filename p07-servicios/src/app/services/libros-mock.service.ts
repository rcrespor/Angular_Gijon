import { Injectable } from '@angular/core';

@Injectable()
export class LibrosMockService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular I',
      'Angular II',
      'Angular III'
    ];
  }

  buscarLibro(clave: string) {
    return this.aLibros;
  }

  buscarLibrosAsync(clave: string) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {resolve(JSON.stringify(this.aLibros)); },
           2000
        );
      }
    );
  }

}
