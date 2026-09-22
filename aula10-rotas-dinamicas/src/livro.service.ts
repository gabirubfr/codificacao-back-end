import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class LivrosService {
    private livros = [
        {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien'},
        {id: 2, titulo: '1984', autor: 'George Owen'},
        {id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis'},
        {id: 4, titulo: 'Jurassic Park', autor: 'Michael Crichton'},
        {id: 5, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury'},
    ];

    findById(id: number){
        const livro = this.livros.find((livro) => livro.id === id);
        if(!livro) {
            throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo.`);
        }
        return livro;
    }
}