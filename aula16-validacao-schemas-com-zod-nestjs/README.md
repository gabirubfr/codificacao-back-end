# 🟡 Parte 16: Validação de DTOs com Schemas do Zod e Custom Validation Pipe (`/colaboradores`)

Nesta etapa, implementamos a validação declarativa de payloads HTTP utilizando a biblioteca **Zod** integrada ao NestJS através de um **Custom Pipe** (`ZodValidationPipe`). Essa abordagem garante tipagem estática rigorosa e tratamento amigável de erros de validação antes que a requisição alcance a camada do controller.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **Schema Validation com Zod:** Definição do contrato `colaboradorSchema` com regras de mínimo/máximo, formato de e-mail e valores permitidos (`z.enum`).
* **Inferência de Tipos Nativa:** Geração do tipo `Colaborador` diretamente do schema usando `z.infer<typeof colaboradorSchema>`.
* **Custom Pipe (`ZodValidationPipe`):** Implementação da interface `PipeTransform` para interceptar e validar o `@Body()` com `schema.safeParse()`.
* **Formatação Amigável de Erros:** Mapeamento de falhas do Zod para um formato estruturado contendo `campo` e `mensagem` em um `BadRequestException` (HTTP 400).

---

## 📂 Arquivos Criados/Alterados

* `src/colaborador.schema.ts`: Definição do schema Zod e inferência da tipagem `Colaborador`.
* `src/zod-validation.pipe.ts`: Pipe customizado para validação de dados via Zod.
* `src/colaboradores.controller.ts`: Controller com a rota `@Post()` decorada por `@UsePipes(new ZodValidationPipe(colaboradorSchema))`.
* `src/app.controller.ts`: Atualização da rota do AppController para o prefixo `/Status`.
* `src/app.module.ts`: Registro dos controllers e imports da aplicação.

---

## 🧪 Testando no Insomnia

### 1. Criar Colaborador com Sucesso (`POST /colaboradores`)
* **Método:** `POST`
* **URL:** `http://localhost:3000/colaboradores`
* **Body (JSON):**
```json
{
  "nome": "Carlos Silva",
  "email": "carlos@empresa.com",
  "idade": 30,
  "departamento": "TI"
}

🟢 Resposta (201 Created):
JSON
{
  "message": "Colaborador criado com sucesso!",
  "colaborador": {
    "nome": "Carlos Silva",
    "email": "carlos@empresa.com",
    "idade": 30,
    "departamento": "TI"
  }
}
2. Payload Inválido (Erro de Validação Zod)
Método: POST

URL: http://localhost:3000/colaboradores

Body (JSON):

JSON
{
  "nome": "Ana",
  "email": "email-invalido",
  "idade": 15,
  "departamento": "Vendas"
}
🔴 Resposta (400 Bad Request):
JSON
{
  "statusCode": 400,
  "erros": [
    {
      "campo": "nome",
      "mensagem": "O nome deve conter no mínimo 3 letras!"
    },
    {
      "campo": "email",
      "mensagem": "O email é inválido!"
    },
    {
      "campo": "idade",
      "mensagem": "A idade mínima é 18 anos!"
    },
    {
      "campo": "departamento",
      "mensagem": "O departamento deve ser obrigatoriamente TI, RH ou Financeiro!"
    }
  ]
}
