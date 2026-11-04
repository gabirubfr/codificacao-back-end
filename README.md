```markdown
# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework, Edge Serverless & Projeto Escola API

Este repositório documenta a evolução prática da construção de APIs em Node.js, partindo dos servidores HTTP nativos até a arquitetura modular em **NestJS v12**, upload de arquivos, Edge Functions, validações avançadas (Zod / class-validator) e o **Projeto À Parte: Escola API** com **MongoDB (Mongoose)**.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules) & Vercel Edge Runtime
* **Framework Backend:** NestJS v12
* **Banco de Dados / ODM:** MongoDB & Mongoose (`@nestjs/mongoose`)
* **Linguagem:** TypeScript / JavaScript
* **Validação de DTOs:** `class-validator`, `class-transformer`, `Zod`
* **Upload e Mídia:** Multer, `uuid`
* **Testes e Qualidade:** Vitest, Prettier, Oxlint
* **Cliente HTTP:** Insomnia / Postman

---

## 📚 Módulos e Evolução do Repositório

### 🟢 Parte 1 a 4: Fundamentos do Node.js Nativo
* Servidor HTTP nativo com módulo `http`, roteamento manual, headers de segurança e ES Modules (`"type": "module"`).

### 🟡 Parte 5 & 6: Variáveis de Ambiente e Exceções
* Gerenciamento de variáveis com `dotenv` e middlewares nativos de tratamento de exceções.

### 🔵 Parte 7: Migração para a Arquitetura NestJS
* Transição para a infraestrutura moderna do NestJS com Injeção de Dependências (`@Injectable()`, `@Module()`, `@Controller()`).

### 🟣 Parte 08-09: CRUD & Camada de Serviço (`/convidados`)
* Arquitetura em camadas, gerenciamento em memória e tratamento com `NotFoundException`.

### 🟠 Parte 10: Pipes do NestJS (`/livros`)
* Uso do `ParseIntPipe` nativo para transformação e validação de parâmetros numéricos de rota.

### 🔴 Parte 11: Upload de Arquivos e Interceptors (`/midia`)
* Upload de imagens via Multer com `FileInterceptor`, validação MIME (2MB) e UUIDs.

### 🟡 Parte 12: Autenticação por Headers (`/secreto`)
* Validação via header `x-api-key` e controle fino de resposta HTTP com `@Res()`.

### 🟣 Parte 13: Middlewares e Controle de Privilégios (`LoggerMiddleware`)
* Interceptação com `req.originalUrl` e restrição multi-rota (`api-key-dog` e `api-key-admin`).

### ⚡ Parte 14: Serverless & Edge Functions (`/api/hora-servidor`)
* Funções de altíssima performance no Vercel Edge Runtime inspecionando o datacenter (`x-vercel-id`).

### 🟢 Parte 15: Logger Nativo e Exceções HTTP (`/produtos`)
* Uso de `this.logger.warn` combinado com exceções explícitas (`BadRequestException`, `NotFoundException`).

### 🟡 Parte 16: Validação Schema-First com Zod (`/colaboradores`)
* Validação declarativa com schemas do Zod e o pipe customizado `ZodValidationPipe`.

---

### 🎒 Escola API (`/alunos`)
* **Persistência Real NoSQL:** Integração com **MongoDB & Mongoose** (`AlunoSchema` com índice único em `matricula`).
* **Segurança e Sanitização Global:** Ativação do **ValidationPipe** no `main.ts` (`whitelist`, `forbidNonWhitelisted`, `transform`).
* **DTOs com Class-Validator:** Contrato estrito no `CreateAlunoDto` com validações para nome, idade, matrícula e lista de cursos.

---

## 🚦 Endpoints da Aplicação

| Método | Rota | Origem | Descrição | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/alunos` | Projeto Escola API | Cadastra um novo aluno no MongoDB | `201 Created` / `400` |
| `GET` | `/alunos` | Projeto Escola API | Lista todos os alunos do banco | `200 OK` |
| `GET` | `/alunos/:id` | Projeto Escola API | Busca um aluno pelo `_id` | `200 OK` / `404` |
| `PATCH` | `/alunos/:id` | Projeto Escola API | Atualiza dados de um aluno | `200 OK` / `404` |
| `DELETE` | `/alunos/:id` | Projeto Escola API | Remove um aluno do banco | `200 OK` / `404` |
| `POST` | `/colaboradores` | Parte 16 | Cadastra colaborador com validação Zod | `201 Created` / `400` |
| `GET` | `/produtos/:id` | Parte 15 | Busca produto com Logger e tratamento | `200 OK` / `400` / `404` |
| `GET` | `/api/hora-servidor`| Parte 14 | Edge Function serverless | `200 OK` |
| `GET` | `/admin` | Parte 13 | Rota protegida por `api-key-admin` | `200 OK` / `403` |
| `GET` | `/secret` | Parte 13 | Rota secreta protegida por `api-key-dog` | `200 OK` / `403` |
| `GET` | `/secreto` | Parte 12 | Rota protegida por `x-api-key` | `200 OK` / `403` |
| `POST` | `/midia/upload` | Parte 11 | Upload de imagem com Multer | `201 Created` / `400` |
| `GET` | `/livros/:id` | Parte 10 | Busca de livro via `ParseIntPipe` | `200 OK` / `400` |
| `GET` | `/convidados` | Parte 08-09 | Lista convidados em memória | `200 OK` |
| `GET` | `/Status` | Parte 07-16 | Endpoint de verificação de status | `200 OK` |

---

## 💻 Como Executar o Repositório

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor em modo de desenvolvimento
npm run start:dev

# 3. Executar os testes unitários
npm run test