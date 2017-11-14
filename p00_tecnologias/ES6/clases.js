class Libro{
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }

}

class LibroTecnico extends Libro{
    constructor(autor, titulo, tema){
        super(autor, titulo);
        this.tema = tema;
    }
}

let oLibro = new Libro('Pepe','Angular para expertos');
let oLibroTecnico = new LibroTecnico('Pepe','Angular para expertos','Programación');
console.log(oLibroTecnico);