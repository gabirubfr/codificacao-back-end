# 🚀 Jornada Backend: Do Node.js Nativo ao NestJS Framework

Este repositório documenta a evolução prática da construção de APIs em Node.js, partindo dos conceitos mais fundamentais de servidores HTTP nativos até a adoção do framework **NestJS** com TypeScript, DTOs e arquitetura modular.

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

### 🟣 Parte 8: Route Handlers, DTOs e Gestão de Recursos
* **Endpoint de Status (`/status`):** Endpoint de checagem de saúde da API (`AppController`).
* **Gerenciamento de Convidados (`/convidados`):**
  * **GET `/convidados`:** Retorna a lista de convidados cadastrados.
  * **POST `/convidados`:** Processa e valida o recebimento de novos convidados usando `@Body()`.
* **Data Transfer Object (DTO):** Criação do `CriarConvidadoDto` (`nome` e `idade`) para garantir a tipagem do contrato de entrada.

---

## 🚦 Endpoints da Aplicação

| Método | Rota | Descrição | Payload (Body) |
| :--- | :--- | :--- | :--- |
| `GET` | `/status` | Verifica a integridade e status da API | N/A |
| `GET` | `/convidados` | Lista os convidados | N/A |
| `POST` | `/convidados` | Cadastra um novo convidado | `{"nome": "Yuri", "idade": 21}` |

---

## 💻 Como Executar o Projeto

```bash
# 1. Instalar as dependências
npm install

# 2. Executar em modo de desenvolvimento
npm run start:dev

# 3. Executar os testes unitários
npm run test