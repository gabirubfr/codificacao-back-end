# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework

Este repositório documenta a evolução prática da construção de APIs em Node.js, partindo dos conceitos mais fundamentais de servidores HTTP nativos até a estruturação de uma API robusta e modular em **NestJS** com TypeScript, DTOs, Pipes de transformação (`ParseIntPipe`), upload de mídias com Multer e validações avançadas.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules)
* **Linguagem:** TypeScript / JavaScript
* **Framework Backend:** NestJS v12
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

---

## 🚦 Endpoints da Aplicação

| Método | Rota | Descrição | Status Code | Payload / Params |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/status` | Verifica a integridade da API | `200 OK` | N/A |
| `GET` | `/convidados` | Lista todos os convidados | `200 OK` | N/A |
| `POST` | `/convidados` | Cadastra um novo convidado | `201 Created` | Body: `{"nome": "Yuri", "idade": 21}` |
| `PATCH` | `/convidados` | Atualiza a idade de um convidado | `200 OK` | Query: `id`, Body: `{"idade": 21}` |
| `DELETE` | `/convidados/:id` | Remove um convidado pelo ID | `204 No Content` | Route Param: `id` |
| `GET` | `/livros/:id` | Busca um livro específico pelo ID | `200 OK` | Route Param: `id` (numérico) |
| `POST` | `/midia/upload` | Realiza upload de uma imagem | `201 Created` | Multipart Form: `arquivo` |

---

## 🧪 Testando as Rotas no Insomnia

### 1. Consultar Integridade da API
* **`GET http://localhost:3000/status`**

### 2. Gerenciamento de Convidados (`/convidados`)
* **`GET http://localhost:3000/convidados`**
* **`POST http://localhost:3000/convidados`** ➔ Body JSON: `{"nome": "Yuri Marques", "idade": 21}`
* **`PATCH http://localhost:3000/convidados?id=1`** ➔ Body JSON: `{"idade": 21}`
* **`DELETE http://localhost:3000/convidados/1`**

### 3. Acervo de Livros (`/livros`)
* **`GET http://localhost:3000/livros/1`** (Validação via `ParseIntPipe`)

### 4. Upload de Mídia (`/midia`)
* **`POST http://localhost:3000/midia/upload`**
  * **Body:** `Multipart Form`
  * **Key:** `arquivo` (Tipo: File)
  * **Value:** Imagem local (`.png`, `.jpg`, etc.)

---

## 💻 Como Executar o Projeto

```bash
# 1. Instalar as dependências
npm install

# 2. Executar em modo de desenvolvimento
npm run start:dev

# 3. Executar os testes unitários
npm run test