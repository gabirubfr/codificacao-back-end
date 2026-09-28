# 🟡 Parte 12: Autenticação via Headers e Controle de Acesso (`/secreto`)

Nesta etapa, implementamos uma camada simples de segurança baseada na verificação de cabeçalhos da requisição HTTP (`Headers`), validando uma **API Key** personalizada e manipulando diretamente a resposta através do objeto `@Res()` do Express.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **Manipulação de Headers (`@Headers`):** Leitura do cabeçalho customizado `x-api-key` enviado pelo cliente.
* **Injeção do Objeto de Resposta (`@Res`):** Controle direto da resposta HTTP utilizando a interface `Response` do Express.
* **Headers Customizados na Resposta (`setHeader`):** Injeção do cabeçalho `x-auth-status: verificado` para confirmação de autorização.
* **Controle de Status HTTP:** Retorno de status `200 OK` para acessos válidos e `403 Forbidden` para chaves ausentes ou incorretas.

---

## 📂 Arquivos Criados/Alterados

* `src/seguranca.controller.ts`: Endpoint `GET /secreto` responsável por validar a chave de API e conceder acesso.
* `src/app.module.ts`: Registro do `SegurancaController`.

---

## 🧪 Testando no Insomnia

### 1. Acesso Concedido (Chave Válida)
* **Método:** `GET`
* **URL:** `http://localhost:3000/secreto`
* **Header:**
  * **Key:** `x-api-key`
  * **Value:** `neyma`

#### 🟢 Resposta (`200 OK`):
* **Header na Resposta:** `x-auth-status: verificado`
* **Body (JSON):**
  ```json
  {
    "mensagem": "Acesso concedido ao conteúdo secreto!",
    "timestamp": "2026-09-28T18:00:00.000Z"
  }