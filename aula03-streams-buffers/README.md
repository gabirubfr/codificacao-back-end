# Parte 3: Processamento de Grandes Arquivos de Log com Streams (Node.js)

Este módulo do projeto demonstra o processamento e a filtragem de arquivos de log de grande porte utilizando **Streams** e o módulo **Readline** no Node.js. O objetivo principal é otimizar o uso da memória RAM ao manipular volumes expressivos de dados, evitando o carregamento do arquivo completo na memória.


## 📁 Estrutura dos Arquivos

- **`geraLogGigante.js`**: Script responsável por gerar o arquivo de simulação `servidor.log`. Escreve 200.000 linhas de log contendo mensagens intercaladas entre `INFO` e `ERROR`.
- **`processarLogs.js`**: Script principal de filtragem. Realiza a leitura sequencial linha por linha do `servidor.log` via Streams, grava os registros do tipo `ERROR` no arquivo `apenas_erros.log` e exibe métricas de uso de memória (`RSS` e `Heap Used`) no início e no fim da execução.
- **`package.json`**: Arquivo de manifesto do projeto configurado com `"type": "module"` para permitir o uso de sintaxe ES Modules (`import/export`).


## 🚀 Como Executar

### 1. Gerar o arquivo de log inicial
Execute o comando abaixo para gerar o arquivo `servidor.log` com 200.000 linhas:

```bash
node geraLogGigante.js