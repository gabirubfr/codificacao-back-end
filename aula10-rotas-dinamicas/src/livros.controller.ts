import  { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { LivrosService } from "./livro.service.js";

@Controller('livros')
export class LivrosController {
    constructor (private readonly livroService: LivrosService) {}

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: string){
        const numeroId = +id
        return this.livroService.findById(numeroId);
    }
}