# 🏫 Escola API — Gestão Escolar com NestJS, MongoDB (Mongoose) e ValidationPipe Global

O **escola-api** é um projeto desenvolvido à parte da jornada principal para aplicar a integração do NestJS v12 com o banco de dados NoSQL **MongoDB** através do Mongoose. Além da persistência real de dados, o projeto implementa um **ValidationPipe global** com travas rígidas de sanitização e validação declarativa de payloads via `class-validator`.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **Persistência NoSQL com Mongoose:** Modelagem de documentos utilizando `@Schema()`, `@Prop()`, `SchemaFactory` e a tipagem `AlunoDocument`.
* **Matrícula Única (`unique: true`):** Criação de índice único diretamente no schema do MongoDB para evitar duplicidade de registros.
* **ValidationPipe Global (`main.ts`):**
  * `whitelist: true` — Remove campos que não pertençam ao DTO.
  * `forbidNonWhitelisted: true` — Lança exceção `400 Bad Request` se a requisição contiver propriedades não mapeadas.
  * `transform: true` — Converte tipos e instancia objetos DTO automaticamente.
* **Validação de DTOs (`CreateAlunoDto`):** Decorators como `@IsString()`, `@IsInt()`, `@Min(0)`, `@IsArray()`, `@ArrayMinSize(1)` e mensagens customizadas em português.

---

## 📂 Arquivos do Projeto

* `src/main.ts`: Configuração do `ValidationPipe` global.
* `src/schemas/aluno.schema.ts`: Schema do Mongoose para a coleção de alunos.
* `src/dto/create-aluno.dto.ts`: DTO contendo validações e contrato de dados para cadastro.
* `src/alunos.service.ts`: Serviço contendo as operações CRUD integradas ao `alunoModel`.

---

## 🚦 Endpoints do Módulo (`/alunos`)

| Método | Rota | Descrição | Status Code | Payload / Params |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/alunos` | Cadastra um novo aluno | `201 Created` / `400` | Body: `CreateAlunoDto` |
| `GET` | `/alunos` | Lista todos os alunos do MongoDB | `200 OK` | N/A |
| `GET` | `/alunos/:id` | Busca um aluno pelo `_id` do MongoDB | `200 OK` / `404` | Route Param: `id` |
| `PATCH` | `/alunos/:id` | Atualiza dados de um aluno pelo `_id` | `200 OK` / `404` | Route Param: `id`, Body: `UpdateAlunoDto` |
| `DELETE` | `/alunos/:id` | Remove um aluno pelo `_id` do banco | `200 OK` / `404` | Route Param: `id` |

---

## 🧪 Testando no Insomnia

### 1. Criar Aluno (`POST /alunos`)
* **Método:** `POST`
* **URL:** `http://localhost:3000/alunos`
* **Body (JSON):**
```json
{
  "nome": "Yuri Marques",
  "idade": 21,
  "matricula": "2026001",
  "cursos": ["NestJS v12", "MongoDB"]
}