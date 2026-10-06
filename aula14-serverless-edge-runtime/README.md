# ⚡ Parte 14: Serverless e Edge Functions (`/api/hora-servidor`)

Nesta etapa, exploramos a execução de **Edge Functions (Serverless)** para obter respostas de altíssima performance e baixíssima latência. A função é executada diretamente nas bordas da rede (Vercel Edge Network), inspecionando cabeçalhos de infraestrutura (`x-vercel-id`) e retornando dados dinâmicos do servidor.

---

## 🛠️ Tecnologias e Recursos Aplicados

* **Edge Runtime (`runtime: 'edge'`):** Configuração para execução leve e instantânea na rede Edge sem inicializar um ambiente Node.js pesado.
* **Inspeção de Infraestrutura (`x-vercel-id`):** Extração e parsing da região física/datacenter onde a função foi instanciada (ex: `gru1` para São Paulo, ou `local-dev` no ambiente local).
* **`Response` Nativa (Fetch API):** Retorno de respostas no padrão HTTP nativo com cabeçalho `content-type: application/json`.
* **Métricas de Servidor:** Formatação de horário local (`pt-BR`) e dados de tempo de execução.

---

## 📂 Arquivos Criados/Alterados

* `api/hora-servidor.ts`: Edge Function para inspeção de horário e região do servidor.

---

## 🧪 Testando no Insomnia / Navegador

### Request: Obter Horário e Região do Servidor
* **Método:** `GET`
* **URL:** `http://localhost:3000/api/hora-servidor` (Local) ou `https://seu-dominio.vercel.app/api/hora-servidor` (Produção)

#### 🟢 Resposta Esperada (`200 OK`):
```json
{
  "message": "Função executada com sucesso",
  "horarioServidor": "06/10/2026, 16:04:53",
  "regiao": "local-dev"
}