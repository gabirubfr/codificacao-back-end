# 🟠 Parte 10: Consolidação de Endpoints, Acervo de Livros e Pipes

Esta etapa finaliza a estruturação do backend com NestJS focando na implementação de rotas dinâmicas, validação de tipos em tempo de execução com **Pipes** nativos e tratamento uniforme de exceções HTTP.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **NestJS Controllers & Services:** Separação da camada de transporte e lógica de aplicação para o recurso `/livros`.
* **Pipes de Validação (`ParseIntPipe`):** Conversão automática do parâmetro de URL (`:id`) de `string` para `number` antes da execução do método do controller.
* **Mapeamento de Exceções HTTP:** Uso de `NotFoundException` para tratar buscas por identificadores inexistentes no acervo.

---

## 📂 Arquivos Criados/Alterados

* `src/livros.controller.ts`: Endpoint `GET /livros/:id` com validação via `ParseIntPipe`.
* `src/livro.service.ts`: Gerenciamento do acervo em memória e lógica de busca por ID (`findById`).
* `src/app.module.ts`: Registro do `LivrosController` e `LivrosService`.

---

## 🧪 Testes no Insomnia (`/livros`)

### 1. Buscar Livro Por ID Existente
* **Método:** `GET`
* **URL:** `http://localhost:3000/livros/1`
* **Status:** `200 OK`
* **Resposta:**
  ```json
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R Tolkien"
  }

  2. Buscar ID Inexistente
  
Método: GET

URL: http://localhost:3000/livros/999

Status: 404 Not Found

Resposta:

JSON
{
  "statusCode": 404,
  "message": "Livro com ID 999 não localizado em nosso acervo.",
  "error": "Not Found"
}

3. Passar ID Não Numérico (Validação do ParseIntPipe)
Método: GET

URL: http://localhost:3000/livros/abc

Status: 400 Bad Request

Resposta:

JSON
{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}