import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get()
  getPublic(){
    return{
      message:'Rota Pública acessada com sucesso!',
      data: new Date(),
    }
  }

  @Get('admin')
  getAdmin(){
    return{
      message: 'Bem-Vindo ao painel administrativo!',
      data: new Date(),
    }
  }
}