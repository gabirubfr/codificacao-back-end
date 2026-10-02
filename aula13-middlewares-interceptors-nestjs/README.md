# 🟣 Parte 13: Middlewares e Controle de Acesso Multi-Rota (`/secret` e `/admin`)

Nesta etapa, implementamos a interceptação global de requisições através do **`LoggerMiddleware`** para registrar logs detalhados e proteger rotas específicas (`/secret` e `/admin`) utilizando verificação de cabeçalhos HTTP personalizados.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **NestMiddleware:** Interceptação de requisições HTTP antes de atingirem os controllers.
* **Logging com `req.originalUrl`:** Rastreamento do método HTTP e do caminho original acessado.
* **Validação Condicional de Acesso:**
  * **Rota `/secret` (`GET /secret`):** Exige o header `api-key-dog` com o valor `cachorro`.
  * **Rota `/admin` (`GET /admin`):** Exige o header `api-key-admin` com o valor `administrator`.
* **Tratamento de Exceções:** Retorno imediato de status `403 Forbidden` com timestamp quando os privilégios forem insuficientes ou ausentes.

---

## 📂 Arquivos Alterados

* `src/app.controller.ts`: Implementa as rotas `GET /` (Pública), `GET /admin` e `GET /secret`.
* `src/logger.middleware.ts`: Middleware com regras de validação e exibição de logs.
* `src/app.module.ts`: Configuração do middleware na esteira da aplicação.

---

## 🧪 Testando no Insomnia

### 1. Rota Pública (`GET /`)
* **Método:** `GET`
* **URL:** `http://localhost:3000/`

#### 🟢 Resposta (`200 OK`):
```json
{
  "message": "Rota Pública acessada com sucesso!",
  "data": "2026-10-02T19:20:00.000Z"
}

2. Rota Secreta (GET /secret)
Método: GET

URL: http://localhost:3000/secret

Header: api-key-dog: cachorro

🟢 Resposta (200 OK):
JSON
{
  "message": "Bem-vindo a rota secreta do cachorro!",
  "data": "2026-10-02T19:20:00.000Z"
}
🔴 Sem Header ou Chave Incorreta (403 Forbidden):
JSON
{
  "statusCode": 403,
  "message": "Acesso Negado: Privilégio de cachorro necessário.",
  "log": "2026-10-02T19:20:00.000Z"
}
3. Rota Admin (GET /admin)
Método: GET

URL: http://localhost:3000/admin

Header: api-key-admin: administrator

🟢 Resposta (200 OK):
JSON
{
  "message": "Bem-Vindo ao painel administrativo!",
  "data": "2026-10-02T19:20:00.000Z"
}
🔴 Sem Header ou Chave Incorreta (403 Forbidden):
JSON
{
  "statusCode": 403,
  "message": "Acesso Negado: Privilégio de administrator necessário.",
  "log": "2026-10-02T19:20:00.000Z"
}