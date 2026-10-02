import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rotaAdmin = req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${rotaAdmin}`);

    const cachorro = req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${cachorro}`);

    if(rotaAdmin.startsWith('/secret')){
      const role = req.headers['api-key-dog'];
      if (role !== 'cachorro'){
        return res.status(403).json({
          statusCode: 403,
          message: 'Acesso Negado: Privilégio de cachorro necessário.',
          log: new Date(),
        });
      }
    }

    if(rotaAdmin.startsWith('/admin')){
      const role = req.headers['api-key-admin'];

      if(role !== 'administrator'){
        return res.status(403).json({
          statusCode: 403,
          message: 'Acesso Negado: Privilégio de administrator necessário.',
          log: new Date(),
        });
      }
    }
    next();
  }
}