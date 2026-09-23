# 🔴 Parte 11: Manipulação e Upload de Arquivos de Mídia

Nesta etapa, implementamos a capacidade de envio e manipulação de arquivos estáticos (upload de imagens) utilizando o suporte nativo do NestJS ao **Multer**, garantindo persistência em disco, nomenclatura única via UUID e validações de segurança.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **Upload Interceptor (`FileInterceptor`):** Captura do campo do formulário Multipart (`arquivo`).
* **Armazenamento em Disco (`diskStorage`):** Salvamento local no diretório `./uploads`.
* **UUID v4 (`uuid`):** Renomeação de arquivos recebidos para evitar sobrescrita de arquivos com nomes idênticos.
* **Filtro de Tipo MIME (`fileFilter`):** Restrição para aceitar apenas formatos de imagem (`jpg`, `jpeg`, `png`, `gif`, `webp`).
* **Limite de Tamanho (`limits`):** Trava de segurança permitindo arquivos de no máximo **2MB** (`2 * 1024 * 1024` bytes).

---

## 📂 Arquivos Criados/Alterados

* `src/midia.controller.ts`: Endpoint `POST /midia/upload` com interceptor de arquivo e validações.
* `src/midia.module.ts`: Módulo isolado para o recurso de mídias.
* `src/app.module.ts`: Registro do `MidiaController`.

---

## 🧪 Testando o Upload no Insomnia

### Upload de Imagem (`POST`)
* **Método:** `POST`
* **URL:** `http://localhost:3000/midia/upload`
* **Body Type:** `Multipart Form`
* **Campos do Formulário:**
  * **Key (Name):** `arquivo` (Selecione o tipo `File`)
  * **Value:** *Escolha uma imagem no seu computador (PNG, JPG, etc.)*

#### 🟢 Resposta de Sucesso (`201 Created`):
```json
{
  "filename": "arquivo",
  "size": 1048576,
  "url": "http://localhost:3000/api/uploads/"
}

🔴 Erro por Tipo Inválido (400 Bad Request):
Tentar enviar um PDF ou executável:

JSON
{
  "statusCode": 400,
  "message": "Apenas arquivos do tipo: jpg, jpeg, png, gif e webp",
  "error": "Bad Request"
}