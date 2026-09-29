# 🟣 Parte 13: Middlewares e Controle de Acesso Baseado em Funções (`x-user-role`)

Nesta etapa, exploramos a implementação de **Middlewares** no NestJS para interceptar requisições HTTP antes que cheguem aos controllers, realizando logging automático de acesso e validação de permissão através do header customizado `x-user-role`.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **NestMiddleware:** Implementação da interface `NestMiddleware` com a assinatura `use(req, res, next)`.
* **Logging de Requisições:** Registro em tempo real no console exibindo o Método HTTP e a Rota acessada (`[LOG] Método: GET | Rota: /admin`).
* **Validação por Header (`x-user-role`):** Verificação de privilégios para restrição de rotas administrativas.
* **Interrupção de Fluxo:** Bloqueio imediato da requisição com retorno `403 Forbidden` quando o privilégio do usuário for insuficiente.

---

## 📂 Arquivos Criados/Alterados

* `src/logger.middleware.ts`: Middleware responsável por logar o tráfego e validar a role do usuário.
* `src/app.controller.ts`: Atualizado com a rota pública (`GET /`) e a rota restrita (`GET /admin`).
* `src/app.module.ts`: Configuração do consumo do `LoggerMiddleware`.

---

## 🧪 Testando no Insomnia

### 1. Rota Pública (`GET /`)
* **Método:** `GET`
* **URL:** `http://localhost:3000/`

#### 🟢 Resposta (`200 OK`):
```json
{
  "message": "Rota Pública acessada com sucesso!",
  "data": "2026-09-29T19:49:00.000Z"
}