# 🎟️ Parte 8: Manipulação de DTOs, Decorators de Payload e Novos Endpoints (NestJS)

Esta etapa do projeto foca na criação de APIs REST funcionais no NestJS utilizando **Data Transfer Objects (DTOs)** para estruturação de payloads em requisições `POST`, além do mapeamento de múltiplos controladores com os decorators `@Body()`, `@Get()` e `@Post()`.

---

## 📁 Estrutura dos Arquivos

* `main.ts` ➔ Ponto de entrada (bootstrap) do NestJS configurado para subir a aplicação na porta dinâmica ou `3000`.
* `app.module.ts` ➔ Módulo raiz registrando os controladores `AppController` e `ConvidadosController`.
* `app.controller.ts` ➔ Controlador de utilidade (`/status`) para checagem de integridade da API.
* `app.service.ts` ➔ Serviço injetável fornecendo dados de status da aplicação.
* `convidados.controller.ts` ➔ Controlador do recurso `/convidados` com suporte a listagem (`GET`) e cadastro (`POST`).
* `dto/criar-convidado.dto.ts` ➔ Objeto de Transferência de Dados que define o contrato/modelo esperado no corpo da requisição de um novo convidado (`nome` e `idade`).

---

## 🚀 Como Executar

> **1. Iniciar o servidor**
```bash
npm run start:dev

2. Checar o status da API (GET /status)
curl -i http://localhost:3000/status

3. Listar convidados (GET /convidados)
curl -i http://localhost:3000/convidados

4. Cadastrar um novo convidado (POST /convidados)
curl -i -X POST http://localhost:3000/convidados \
  -H "Content-Type: application/json" \
  -d '{"nome": "Yuri", "idade": 20}'

  🛠️ Destaques de Implementação
📦 Data Transfer Object (DTO) ➔ Uso do CriarConvidadoDto para tipar formalmente os dados aceitos nas requisições POST, garantindo consistência na camada de transporte.

📨 Extração de Payload com @Body() ➔ Mapeamento direto dos dados enviados no corpo do pacote HTTP JSON para instâncias no controlador.

🛣️ Roteamento Modular ➔ Separação clara de responsabilidades com o AppController gerenciando o status e o ConvidadosController manipulando a coleção de convidados.

## 🧪 Testando as Rotas no Insomnia

Abaixo estão as instruções para testar e validar o CRUD completo da aplicação utilizando o **Insomnia** (ou ferramentas similares como Postman e Hoppscotch):

### 1. Consultar Integridade da API
* **Método:** `GET`
* **URL:** `http://localhost:3000/status`
* **Descrição:** Retorna a mensagem de confirmação do estado da aplicação (`Status: Ativo!`).

### 2. Listar Convidados (`Read`)
* **Método:** `GET`
* **URL:** `http://localhost:3000/convidados`
* **Descrição:** Retorna a lista completa com todos os convidados cadastrados no array em memória.

### 3. Cadastrar Novo Convidado (`Create`)
* **Método:** `POST`
* **URL:** `http://localhost:3000/convidados`
* **Header:** `Content-Type: application/json`
* **Body (JSON):**
  ```json
  {
    "nome": "Yuri Marques",
    "idade": 21
  }

  Resposta Esperada: Status 201 Created retornando a mensagem de confirmação e os dados inseridos.

4. Atualizar Idade do Convidado (Update)
Método: PATCH

Exemplo:
URL: http://localhost:3000/convidados/1

Header: Content-Type: application/json

Body (JSON):

JSON
{
  "idade": 21
}
Descrição: Altera apenas o campo idade do convidado correspondente ao id passado como parâmetro de consulta (Query Param).

5. Remover Convidado (Delete)
Método: DELETE

URL: http://localhost:3000/convidados/1

Descrição: Remove permanentemente o convidado referente ao id informado na URL (Route Param).

Resposta Esperada: Status 204 No Content (sem corpo na resposta HTTP).