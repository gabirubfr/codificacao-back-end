# 🟢 Parte 15: Módulo de Produtos, Logger Nativo e Tratamento Explícito de Exceções (`/produtos`)

Nesta etapa, implementamos o módulo `/produtos` para explorar o uso do utilitário interno de registros do NestJS (`Logger`) integrado ao tratamento explícito de exceções HTTP (`BadRequestException` e `NotFoundException`).

---

## 🛠️ Tecnologias e Recursos Aplicados

* **NestJS Logger (`Logger`):** Registro de mensagens de aviso no console com contexto dinâmico da classe (`ProdutosController.name`).
* **Tratamento de Exceções Nativo:**
  * **`BadRequestException` (HTTP 400):** Lançado quando o parâmetro `:id` enviado na URL não é um valor numérico válido.
  * **`NotFoundException` (HTTP 404):** Lançado quando o produto correspondente ao ID informado não é localizado no acervo.
* **Camada de Serviço (`ProdutosService`):** Isolamento da lista de produtos e regras de consulta de dados.

---

## 📂 Arquivos Criados/Alterados

* `src/produtos.service.ts`: Serviço com lista de produtos em memória e método `listarProdutos()`.
* `src/produtos.controller.ts`: Controller com injeção do serviço, instância do `Logger` e validação com exceções HTTP.
* `src/app.module.ts`: Registro do `ProdutosController` e `ProdutosService`.
* `src/main.ts`: Inicialização da aplicação.

---

## 🧪 Testando no Insomnia, Postman ou Thunder Client

### 1. Buscar Produto por ID Válido
* **Método:** `GET`
* **URL:** `http://localhost:3000/produtos/1`

#### 🟢 Resposta (`200 OK`):
```json
{
  "id": 1,
  "nome": "Teclado Mecânico",
  "preco": 199.99
}

2. Buscar com ID Não Numérico
Método: GET

URL: http://localhost:3000/produtos/abc

🔴 Resposta (400 Bad Request):
JSON
{
  "message": "ID inválido. Deve ser um número inteiro!",
  "error": "Bad Request",
  "statusCode": 400
}
3. Buscar Produto Inexistente
Método: GET

URL: http://localhost:3000/produtos/99

🔴 Resposta (404 Not Found):
JSON
{
  "message": "Produto com ID 99 não encontrado.",
  "error": "Not Found",
  "statusCode": 404
}