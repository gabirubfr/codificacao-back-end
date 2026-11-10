`README.md` Geral Consolidado (Partes 1 à 16 + Projeto À Parte: Escola API)

```markdown
# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework, Serverless & Projeto Escola API

Este repositório consolida a trajetória prática de aprendizado em desenvolvimento backend com Node.js, evoluindo de servidores HTTP nativos até a construção de arquiteturas modulares em **NestJS v12**, upload de mídias, Edge Functions serverless, validação por Zod e a **Escola API** com **MongoDB (Mongoose)** e **Swagger (OpenAPI)**.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules) & Vercel Edge Runtime
* **Framework Backend:** NestJS v12
* **Banco de Dados / ODM:** MongoDB & Mongoose (`@nestjs/mongoose`)
* **Documentação de API:** Swagger / OpenAPI (`@nestjs/swagger`)
* **Linguagem:** TypeScript / JavaScript
* **Validação & Sanitização:** `class-validator`, `class-transformer`, `Zod`, `ValidationPipe` global
* **Upload e Mídia:** Multer, `uuid`
* **Testes:** Vitest, Prettier, Oxlint
* **Cliente HTTP:** Insomnia / Postman / Swagger UI

---

## 📚 Estrutura e Evolução do Repositório

### 🟢 Parte 1 a 4: Fundamentos do Node.js Nativo
* Servidor HTTP nativo com módulo `http`, roteamento manual, headers de segurança e ES Modules (`"type": "module"`).

### 🟡 Parte 5 & 6: Configuração, Segurança e Exceções
* Gerenciamento de variáveis de ambiente com `dotenv` e middlewares de tratamento de exceções.

### 🔵 Parte 7: Migração para o NestJS Framework
* Bootstrapping com a infraestrutura do NestJS e Injeção de Dependência (`@Injectable()`, `@Module()`, `@Controller()`).

### 🟣 Parte 08-09: CRUD & Camada de Serviço (`/convidados`)
* Separação de responsabilidades com `ConvidadosController` e `ConvidadosService`, DTOs e `NotFoundException`.

### 🟠 Parte 10: Pipes Nativos (`/livros`)
* Uso do `ParseIntPipe` para transformação e validação automática de parâmetros de URL.

### 🔴 Parte 11: Upload de Mídia com Multer (`/midia`)
* Upload via `FileInterceptor`, validação de extensão MIME, limite de 2MB e nomes únicos com `uuidv4`.

### 🟡 Parte 12: Autenticação por Headers (`/secreto`)
* Validação manual de cabeçalhos (`x-api-key`) e controle de resposta HTTP com `@Res()`.

### 🟣 Parte 13: Middlewares e Controle de Privilégios (`LoggerMiddleware`)
* Interceptação global de requisições com `req.originalUrl` e restrição de acesso por rotas (`api-key-dog` e `api-key-admin`).

### ⚡ Parte 14: Edge Serverless Functions (`/api/hora-servidor`)
* Execução leve e instantânea no Vercel Edge Runtime com leitura de datacenter (`x-vercel-id`).

### 🟢 Parte 15: Logger Nativo e Exceções HTTP (`/produtos`)
* Emissão de registros com `this.logger.warn` e exceções explícitas (`BadRequestException`, `NotFoundException`).

### 🟡 Parte 16: Validação de Schemas com Zod (`/colaboradores`)
* Validação declarativa com schemas Zod e custom pipe `ZodValidationPipe`.

---

### 🎒 Projeto À Parte: Escola API (`/alunos`)
* **Configuração e Instalação (Aulas 01 a 05):** Estruturação completa do ecossistema NestJS com MongoDB.
* **Persistência NoSQL Real:** Banco MongoDB gerenciado via **Mongoose** (`AlunoSchema` com campo único `matricula`).
* **Documentação Swagger UI:** Rota `/api` com `@ApiTags`, `@ApiOperation`, `@ApiResponse` e `@ApiProperty`.
* **ValidationPipe Global:** Sanitização estrita (`whitelist`, `forbidNonWhitelisted`, `transform`).

---

## 🚦 Tabela Global de Endpoints

| Método | Rota | Origem | Descrição | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/alunos` | Projeto Escola API | Cria a matrícula do aluno no MongoDB | `201` / `400` / `500` |
| `GET` | `/alunos` | Projeto Escola API | Lista todos os alunos do banco | `200` / `404` / `500` |
| `GET` | `/alunos/:id` | Projeto Escola API | Busca um aluno pelo `_id` | `200` / `404` / `500` |
| `PATCH` | `/alunos/:id` | Projeto Escola API | Atualiza dados de um aluno pelo `_id` | `200` / `404` / `500` |
| `DELETE` | `/alunos/:id` | Projeto Escola API | Remove um aluno do banco | `200` / `404` / `500` |
| `GET` | `/api` | Projeto Escola API | Interface gráfica Swagger / OpenAPI | `200 OK` |
| `POST` | `/colaboradores` | Parte 16 | Cadastra colaborador validador por Zod | `201 Created` / `400` |
| `GET` | `/produtos/:id` | Parte 15 | Busca produto com Logger e tratamento | `200 OK` / `400` / `404` |
| `GET` | `/api/hora-servidor`| Parte 14 | Edge Function serverless | `200 OK` |
| `GET` | `/admin` | Parte 13 | Rota protegida por `api-key-admin` | `200 OK` / `403` |
| `GET` | `/secret` | Parte 13 | Rota secreta protegida por `api-key-dog` | `200 OK` / `403` |
| `GET` | `/secreto` | Parte 12 | Rota protegida por `x-api-key` | `200 OK` / `403` |
| `POST` | `/midia/upload` | Parte 11 | Upload de arquivo com Multer | `201 Created` / `400` |
| `GET` | `/livros/:id` | Parte 10 | Busca de livro via `ParseIntPipe` | `200 OK` / `400` |
| `GET` | `/convidados` | Parte 08-09 | Lista convidados em memória | `200 OK` |
| `GET` | `/Status` | Parte 07-16 | Endpoint de status da API | `200 OK` |

---

## 💻 Como Executar o Repositório

```bash
# 1. Instalar as dependências
npm install

# 2. Executar o servidor em modo de desenvolvimento
npm run start:dev

# 3. Executar a suíte de testes
npm run test