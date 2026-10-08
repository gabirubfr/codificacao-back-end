---

### 📄 2. README Geral do Projeto (Raiz - Parte 1 à Parte 16)

```markdown
# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework & Edge Serverless

Este repositório documenta a evolução prática da construção de APIs em Node.js, partindo dos conceitos mais fundamentais de servidores HTTP nativos até a estruturação de uma API robusta e modular em **NestJS** com TypeScript, DTOs, Pipes de transformação (`ParseIntPipe`), upload de mídias com Multer, autenticação por Headers, Middlewares, Edge Serverless, Logger e **Validação Schema-First com Zod**.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules) & Vercel Edge Runtime
* **Linguagem:** TypeScript / JavaScript
* **Framework Backend:** NestJS v12
* **Validação de Schemas:** Zod
* **Upload e Mídia:** Multer, `uuid`
* **Testes e Qualidade:** Vitest, Prettier, Oxlint
* **Cliente de Testes HTTP:** Insomnia / Postman

---

## 📚 Módulos e Evolução do Projeto

### 🟢 Parte 1 a 4: Fundamentos do Node.js Nativo
* **Servidor HTTP Nativo:** Criação de servidores sem frameworks adicionais utilizando o módulo `http`.
* **Roteamento e Cabeçalhos:** Manipulação manual de URLs, métodos HTTP e inclusão de headers de segurança (`X-Content-Type-Options`, `X-Frame-Options`).
* **ES Modules:** Configuração nativa com `"type": "module"` no `package.json`.

### 🟡 Parte 5 & 6: Configuração, Variáveis de Ambiente e Segurança
* **Gerenciamento de Variáveis:** Integração da biblioteca `dotenv` para isolar dados sensíveis e portas da aplicação.
* **Refatoração Avançada:** Organização de middlewares e tratamento preventivo de exceções em rotas HTTP.

### 🔵 Parte 7: Migração para a Arquitetura NestJS
* **Bootstrapping com NestJS:** Transição do servidor nativo para a infraestrutura moderna do Nest.
* **Injeção de Dependência (DI):** Estruturação de componentes usando decorators como `@Injectable()`, `@Module()` e `@Controller()`.
* **Suíte de Testes:** Execução e validação de testes unitários base (`app.controller.spec.ts`).

### 🟣 Parte 08-09: Arquitetura CRUD e Camada de Serviço (`/convidados`)
* **Separação de Responsabilidades:**
  * `ConvidadosController`: Exposição e gerenciamento de rotas HTTP.
  * `ConvidadosService`: Regras de negócio, busca e manipulação de estado em memória.
* **Contrato de Dados (DTO):** Validação e tipagem das requisições via `CriarConvidadoDto` (`nome` e `idade`).
* **Tratamento de Exceções:** Uso do `NotFoundException` do NestJS para buscas de recursos inexistentes.

### 🟠 Parte 10: Acervo de Livros e Pipes de Validação (`/livros`)
* **Recurso de Livros:** Lógica de busca por identificador único (`findById`).
* **Pipes do NestJS (`ParseIntPipe`):** Transformação e validação automática do parâmetro da URL (`id`) de `string` para `number` antes da execução do controller.

### 🔴 Parte 11: Upload de Mídia e Interceptors (`/midia`)
* **Upload de Arquivos:** Integração do `FileInterceptor` e `diskStorage` via Multer para salvar imagens em `./uploads`.
* **UUID e Segurança:** Identificadores únicos (`uuidv4`) para evitar colisão de nomes.
* **Filtros e Limites:** Validação de tipo MIME (apenas `jpg`, `jpeg`, `png`, `gif`, `webp`) e restrição de tamanho máximo para 2MB.

### 🟡 Parte 12: Autenticação por Headers (`/secreto`)
* **Validação via Headers:** Extração do parâmetro `x-api-key` da requisição com `@Headers()`.
* **Injeção de Resposta (`@Res`):** Manipulação direta de respostas HTTP e cabeçalhos customizados (`x-auth-status`).
* **Tratamento de Permissão:** Status `200 OK` para acessos válidos e `403 Forbidden` para acessos não autorizados.

### 🟣 Parte 13: Middlewares e Controle Multi-Rota (`LoggerMiddleware`)
* **Middlewares Customizados:** Interceptação global utilizando `NestMiddleware` e leitura de `req.originalUrl`.
* **Verificação Condicional por Rota:**
  * Rota `/secret`: Exige o header `api-key-dog: cachorro`.
  * Rota `/admin`: Exige o header `api-key-admin: administrator`.

### ⚡ Parte 14: Serverless e Edge Functions (`/api/hora-servidor`)
* **Edge Runtime:** Execução sem servidor persistente para alta performance e baixa latência.
* **Inspeção de Infraestrutura:** Identificação da região física de execução (`x-vercel-id`) e horário local do servidor.

### 🟢 Parte 15: Módulo de Produtos e Logger Nativo (`/produtos`)
* **Gerenciamento de Produtos:** Consulta de itens eletrônicos via `ProdutosService`.
* **NestJS Logger:** Emissão de logs de aviso (`this.logger.warn`) para falhas de validação.
* **Exceções HTTP Explícitas:** Lançamento direto de `BadRequestException` e `NotFoundException`.

### 🟡 Parte 16: Validação de Schemas com Zod (`/colaboradores`)
* **Validação Declarativa:** Criação de schemas com Zod (`colaboradorSchema`).
* **Custom Validation Pipe:** Implementação de `ZodValidationPipe` para interceptar e validar o `@Body()`.
* **Formatação de Erros:** Respostas com status `400 Bad Request` contendo lista de campos e mensagens amigáveis.

---

## 🚦 Endpoints da Aplicação

| Método | Rota | Descrição | Status Code | Payload / Params / Headers |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/Status` | Verifica a integridade da API | `200 OK` | N/A |
| `POST` | `/colaboradores` | Cadastra um colaborador validador por Zod | `201 Created` / `400` | Body: `{"nome", "email", "idade", "departamento"}` |
| `GET` | `/admin` | Painel administrativo protegido | `200 OK` / `403` | Header: `api-key-admin: administrator` |
| `GET` | `/secret` | Rota secreta do sistema | `200 OK` / `403` | Header: `api-key-dog: cachorro` |
| `GET` | `/convidados` | Lista todos os convidados | `200 OK` | N/A |
| `POST` | `/convidados` | Cadastra um novo convidado | `201 Created` | Body: `{"nome": "Yuri", "idade": 21}` |
| `PATCH` | `/convidados` | Atualiza a idade de um convidado | `200 OK` | Query: `id`, Body: `{"idade": 21}` |
| `DELETE` | `/convidados/:id` | Remove um convidado pelo ID | `204 No Content` | Route Param: `id` |
| `GET` | `/livros/:id` | Busca um livro específico pelo ID | `200 OK` | Route Param: `id` (numérico) |
| `POST` | `/midia/upload` | Realiza upload de uma imagem | `201 Created` | Multipart Form: `arquivo` |
| `GET` | `/secreto` | Rota protegida por chave | `200 OK` / `403` | Header: `x-api-key: neyma` |
| `GET` | `/api/hora-servidor` | Edge Function: Horário e Região | `200 OK` | N/A |
| `GET` | `/produtos/:id` | Busca um produto pelo ID | `200 OK` / `400` / `404` | Route Param: `id` (numérico) |

---

## 🧪 Testando as Rotas no Insomnia

### 1. Validação com Zod (`/colaboradores`)
* **`POST http://localhost:3000/colaboradores`**
  * **Body Sucesso:** `{"nome": "Carlos Silva", "email": "carlos@empresa.com", "idade": 30, "departamento": "TI"}`
  * **Body Erro:** `{"nome": "Ana", "email": "invalido", "idade": 12, "departamento": "Vendas"}`

### 2. Status da Aplicação (`/Status`)
* **`GET http://localhost:3000/Status`**

### 3. Módulo de Produtos (`/produtos`)
* **`GET http://localhost:3000/produtos/1`**

### 4. Edge Function (`/api/hora-servidor`)
* **`GET http://localhost:3000/api/hora-servidor`**

---

## 💻 Como Executar o Projeto

```bash
# 1. Instalar as dependências (incluindo o Zod)
npm install

# 2. Executar em modo de desenvolvimento NestJS
npm run start:dev

# 3. Executar os testes unitários
npm run test