# 🛡️ Parte 6: Servidor HTTP Nativo e Enfileiramento de Cabeçalhos de Segurança (Node.js)

Esta etapa do projeto explora a criação de um **servidor HTTP nativo** utilizando o módulo interno `http` do Node.js. O foco principal é o roteamento básico de requisições (`/status`), a estruturação de respostas JSON e a aplicação manual de **cabeçalhos de segurança HTTP** (Security Headers) para mitigar vulnerabilidades comuns na web.

---

## 📁 Estrutura dos Arquivos

* `servidor.js` ➔ Script do servidor HTTP nativo. Intercepta requisições, registra logs de acesso, aplica cabeçalhos de proteção e responde às rotas em formato JSON.
* `package.json` ➔ Configuração do projeto contendo o suporte a ES Modules (`"type": "module"`).

---

## 🚀 Como Executar

> **1. Iniciar o servidor**
```bash
node servidor.js

> **2. Testar os endpoints no navegador ou terminal**
# Rota de status (Retorna 200 OK)
curl -i http://localhost:3000/status

# Rota inexistente (Retorna 404 Not Found)
curl -i http://localhost:3000/rota-invalida

🛠️ Destaques de Implementação
🌐 Servidor Nativo (http.createServer) ➔ Implementação sem dependência de frameworks externos (como Express), manipulando diretamente os objetos req (request) e res (response).

🔒 Cabeçalhos de Segurança (Security Headers) ➔ Injeção do objeto cabecalhoPadrao em todas as respostas HTTP:

X-Content-Type-Options: nosniff ➔ Impede que navegadores tentem adivinhar (sniffing) o tipo de conteúdo enviando MIME Types incorretos.

X-Frame-Options: DENY ➔ Protege a aplicação contra ataques de Clickjacking, proibindo a renderização da página dentro de <frame>, <iframe> ou <object>.

🛣️ Roteamento e Tratamento de Erros ➔ Retorna respostas em JSON estruturadas com seus respectivos códigos de status HTTP (200 para sucesso e 404 para recursos não encontrados).