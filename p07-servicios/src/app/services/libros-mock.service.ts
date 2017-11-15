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

}
