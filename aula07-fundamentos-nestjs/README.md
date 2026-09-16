# 🦁 Fundamentos do NestJS, Arquitetura Modelar e Telemetria

Esta etapa marca a transição no projeto para o ecossistema **NestJS** utilizando **TypeScript**. O objetivo é estruturar uma API escalável seguindo o padrão **Injeção de Dependência** (DI) e arquitetura em camadas (Módulos, Controladores e Serviços), além de integrar instrumentação e observabilidade com o módulo de telemetria `@nestjs/observe`.

---

## 📁 Estrutura dos Arquivos

* `main.ts` ➔ Ponto de entrada (bootstrap) do NestJS. Configura a criação da aplicação com instrumentação de observabilidade e vincula o servidor à porta dinâmica ou `3000`.
* `app.module.ts` ➔ Módulo raiz da aplicação (`@Module`). Centraliza os módulos importados (incluindo o `ObserveModule`), declara os controladores e registra os provedores.
* `app.controller.ts` ➔ Camada de controle (`@Controller('api')`). Gerencia as requisições HTTP de entrada no prefixo `/api` e mapeia a rota GET para a regra de negócio.
* `app.service.ts` ➔ Camada de serviço e lógica de negócio (`@Injectable`). Provê os dados que serão retornados pelo controlador.
* `app.controller.spec.ts` ➔ Suíte de testes unitários para o controlador utilizando o ecossistema `@nestjs/testing` e Jest.

---

## 🚀 Como Executar

> **1. Instalar as dependências do projeto**
```bash
npm install

2. Executar em modo de desenvolvimento (Hot Reload)
npm run start:dev

3. Testar o endpoint REST
# Faz a requisição para a rota mapeada em app.controller.ts
curl -i http://localhost:3000/api

4. Rodar os testes unitários
npm run test

🛠️ Destaques de Implementação
🏗️ Arquitetura Decorada com TypeScript ➔ Uso intensivo de Decorators (@Module, @Controller, @Injectable, @Get) para metadata e inversão de controle.

🧩 Injeção de Dependência (DI) ➔ O AppService é injetado automaticamente via construtor no AppController, desvinculando o acoplamento direto entre as classes.

📊 Observabilidade Integrada (@nestjs/observe) ➔ Configuração nativa de tracing distribuído, logs correlacionados e coleta de métricas de requisições direto na inicialização do servidor (ObserveInstrument).

🛣️ Prefixagem de Rotas ➔ Mapeamento do controlador na rota base /api.