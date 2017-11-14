interface Autor{
    nombre:String;
    apellido:String;
}

interface Catalogo{
    mostrar():void;
}

class Libro implements Catalogo{
    public autor:Autor;
    public titulo:String;
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar(){
        console.log(this);

    }

}

class LibroTecnico extends Libro{
    public tema:String;
    constructor(autor, titulo, tema){
        super(autor, titulo);
        this.tema = tema;
    }
}

let oLibro = new Libro({nombre:'Pepe', apellido:'Perez'},'Angular para expertos');
let oLibroTecnico = new LibroTecnico({nombre:'Pepe', apellido:'Perez'},'Angular para expertos','Programación');

oLibro.mostrar();