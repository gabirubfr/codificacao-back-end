# Parte 4: Tratamento Global de Exceções no Express (Node.js)

Esta etapa do projeto foca na construção de uma API com **Express** preparada para lidar com erros síncronos e assíncronos de forma centralizada, além de capturar falhas no nível do processo do Node.js, impedindo que a aplicação caia inesperadamente.

---

## 📁 Estrutura dos Arquivos

- **`server.js`**: Aplicação principal da API Express. Implementa rotas de teste (sucesso, erro síncrono e erro assíncrono), middleware global de tratamento de erros e manipuladores para eventos do processo (`uncaughtException` e `unhandledRejection`).
- **`package.json`**: Configuração das dependências do projeto contendo o **Express v5** e suporte nativo a ES Modules (`"type": "module"`).

---

## 🚀 Como Executar

### 1. Instalar as dependências
```bash
npm install