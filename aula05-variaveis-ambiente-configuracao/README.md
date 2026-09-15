# ⚙️ Gerenciamento de Variáveis de Ambiente com Dotenv (Node.js)

Esta etapa do projeto demonstra a **centralização** e a **validação** de configurações sensíveis em aplicações **Node.js** utilizando o pacote `dotenv`. O foco é garantir que chaves de API, URLs de banco de dados e portas do servidor sejam carregadas com segurança a partir de arquivos de ambiente (`.env`), evitando credenciais expostas no código-fonte.

---

## 📁 Estrutura dos Arquivos

* `app.js` ➔ Script principal de inicialização do serviço. Carrega as variáveis de ambiente, valida a presença de credenciais obrigatórias (como a chave de API de pagamentos) e exibe o status de configuração do servidor.
* `.env` *(não versionado)* ➔ Arquivo local contendo as variáveis de ambiente (`PORT`, `API_KEY_PAGAMENTO`, `DATABASE_URL`).
* `package.json` ➔ Configuração do projeto contendo a dependência do `dotenv` e suporte a ES Modules (`"type": "module"`).

---

## 🚀 Como Executar

> **1. Configurar o arquivo de ambiente**  
> Crie um arquivo `.env` na raiz do diretório com a seguinte estrutura:

```env
PORT=3000
API_KEY_PAGAMENTO=sua_chave_secreta_aqui
DATABASE_URL=mongodb://localhost:27017/meubanco

** 2. Instalar as dependências**
npm install

** 3. Iniciar a aplicação**
node app.js

🛠️ Destaques de Implementação
⚡ Carregamento Dinâmico (dotenv.config()) ➔ Lê o arquivo .env e injeta os pares chave-valor no objeto global process.env na inicialização.

🛡️ Validação de Credenciais Críticas ➔ Checa se a chave API_KEY_PAGAMENTO foi informada. Caso ausente, o sistema interrompe o processo (process.exit(1)) exibindo um log de erro crítico.

🔄 Valores Fallback ➔ Garante o funcionamento da porta (process.env.PORT || 8080) utilizando um valor padrão caso a variável não seja especificada no ambiente.