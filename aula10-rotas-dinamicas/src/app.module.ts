import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LivrosController } from './livros.controller.js';
import { LivrosService } from './livro.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService, LivrosController],
})
export class AppModule {}
