# 🏫 Escola API — Gestão Escolar com NestJS, MongoDB & Swagger

O **escola-api** é um projeto desenvolvido à parte focado na configuração, instalação e gerenciamento de uma API RESTful utilizando **NestJS v12** integrado ao banco de dados NoSQL **MongoDB (Mongoose)**, com documentação interativa via **Swagger / OpenAPI** e sanitização rigorosa de payloads (`class-validator`).

---

## 🛠️ Tecnologias & Recursos Aplicados

* **Runtime:** Node.js (ES Modules)
* **Framework Backend:** NestJS v12
* **Banco de Dados / ODM:** MongoDB & Mongoose (`@nestjs/mongoose`)
* **Documentação Interativa:** OpenAPI / Swagger (`@nestjs/swagger`) acessível na rota `/api`.
* **Sanitização Global (`main.ts`):** `ValidationPipe` configurado com `whitelist: true`, `forbidNonWhitelisted: true` e `transform: true`.
* **Validação de Payloads (`CreateAlunoDto`):** Regras de validação declarativa (`class-validator`) mapeadas com exemplos no Swagger (`@ApiProperty`).
* **Modelagem NoSQL (`AlunoSchema`):** Persistência no MongoDB com índice único na propriedade `matricula` (`unique: true`).

---

## 📂 Arquivos do Módulo `/alunos`

* `src/main.ts`: Bootstrapping da aplicação, `ValidationPipe` global e inicialização do `SwaggerModule` na rota `/api`.
* `src/schemas/aluno.schema.ts`: Schema do Mongoose para a coleção de alunos.
* `src/create.aluno.dto.ts`: DTO com validações e decorators de documentação OpenAPI (`@ApiProperty`).
* `src/aluno.controller.ts`: Controller REST documentado com `@ApiTags`, `@ApiOperation` e respostas HTTP (`@ApiResponse`).
* `src/alunos.service.ts`: Camada de serviço com operações CRUD integradas ao `alunoModel`.

---

## 📖 Documentação Interativa (Swagger)

Acesse a interface gráfica do Swagger para testar as rotas e visualizar os schemas diretamente pelo navegador:

* **URL do Swagger:** `http://localhost:3000/api`

---

## 🚦 Endpoints da API (`/alunos`)

| Método | Rota | Descrição | Status Code | Respostas HTTP Mapeadas |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/alunos` | Cria a matrícula do aluno | `201 Created` | `201` (Sucesso), `400` (Dados inválidos), `500` (Matrícula duplicada) |
| `GET` | `/alunos` | Retorna a lista de alunos cadastrados | `200 OK` | `200` (Sucesso), `404` (Não encontrado), `500` (Erro interno) |
| `GET` | `/alunos/:id` | Retorna um aluno específico pelo ID | `200 OK` | `200` (Sucesso), `404` (Não encontrado), `500` (Erro interno) |
| `PATCH` | `/alunos/:id` | Atualiza os dados de um aluno pelo ID | `200 OK` | `200` (Sucesso), `404` (Não encontrado), `500` (Erro interno) |
| `DELETE` | `/alunos/:id` | Remove um aluno específico pelo ID | `200 OK` | `200` (Sucesso), `404` (Não encontrado), `500` (Erro interno) |

---

## 🧪 Exemplo de Payload (`POST /alunos`)

```json
{
  "nome": "João da Silva",
  "idade": 21,
  "matricula": "1234",
  "cursos": [
    "Ciência da Computação",
    "Recursos Humanos"
  ]
}