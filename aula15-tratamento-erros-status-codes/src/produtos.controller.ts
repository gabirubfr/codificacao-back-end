import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService){}
    produtos(){
        return this.produtosService.listarProdutos();
    }

    private readonly logger = new Logger(ProdutosController.name);

    @Get(':id')
    idProduto(@Param('id') idProd: string){
        const id = Number(idProd);

        if(isNaN(id)){
            this.logger.warn(`Tentativa de buscar com ID não numérico: ${idProd}`);
            throw new BadRequestException('ID inválido. Deve ser um número inteiro!');
        }

        const produto = this.produtos().find(p => p.id === id);
        if(!produto){
            this.logger.warn(`Produto com ID ${id} não encontrado.`);
            throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
        }
        return produto;
    }

}