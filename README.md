# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework

Este repositório documenta a evolução prática da construção de APIs em Node.js, partindo dos conceitos mais fundamentais de servidores HTTP nativos até a adoção do framework **NestJS** com TypeScript, arquitetura em camadas (Controller + Service) e operações completas de CRUD.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules)
* **Linguagem:** TypeScript / JavaScript
* **Framework Backend:** NestJS v12
* **Gerenciamento de Ambiente:** `dotenv`
* **Testes e Qualidade:** Vitest, Prettier, Oxlint

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
  * `ConvidadosController`: Responsável por expor as rotas HTTP e validar requisições.
  * `ConvidadosService`: Concentra a regra de negócio e manipulação dos dados armazenados em memória.
* **Contrato de Dados (DTO):** Validação de entrada via `CriarConvidadoDto` (`nome` e `idade`).
* **Tratamento de Exceções:** Uso de `NotFoundException` para tratar buscas por IDs inexistentes.
* **Status HTTP:** Implementação do status `204 No Content` para deleções de recursos.

---

## 🚦 Endpoints da Aplicação

| Método | Rota | Descrição | Status Code | Payload (Body) / Params |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/status` | Verifica a integridade da API | `200 OK` | N/A |
| `GET` | `/convidados` | Lista todos os convidados | `200 OK` | N/A |
| `POST` | `/convidados` | Cadastra um novo convidado | `201 Created` | `{"nome": "Yuri", "idade": 21}` |
| `PATCH` | `/convidados` | Atualiza a idade de um convidado | `200 OK` | Query/Param: `id`, Body: `{"idade": 21}` |
| `DELETE` | `/convidados/:id` | Remove um convidado pelo ID | `204 No Content` | Param: `id` |

---

## 💻 Como Executar o Projeto

```bash
# 1. Instalar as dependências
npm install

# 2. Executar em modo de desenvolvimento
npm run start:dev

# 3. Executar os testes unitários
npm run test