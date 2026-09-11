# 📝 Sistema de Logs com Node.js

Um sistema simples, assíncrono e eficiente para registro de logs em arquivo, desenvolvido em **Node.js** utilizando o moderno padrão **ES Modules (`import/export`)**.

A aplicação formata mensagens com a data e hora exatas da ocorrência e as grava de forma incremental no arquivo `logs/system.log`.

---

## 🚀 Funcionalidades

* 📅 **Formatação Automática:** Adiciona *timestamp* (Data `AAAA-MM-DD` e Hora `HH:MM:SS`) em cada registro.
* 📁 **Criação Dinâmica de Diretorios:** Garante a criação automática da pasta `logs/` se ela ainda não existir (`recursive: true`).
* ⚡ **I/O Assíncrono:** Utiliza `fs/promises` para garantir operações sem bloqueio (*non-blocking*).
* ✍️ **Persistência Dinâmica:** Adiciona novos eventos ao final do arquivo (`appendFile`) sem sobrescrever dados anteriores.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (Suporte nativo a ES Modules)
* Módulo Nativo `fs/promises`
* Módulo Nativo `path`
* Módulo Nativo `url`

---

## 📂 Estrutura do Projeto

```text
.
├── index.js          # Script principal de execução e salvamento
├── utils.js          # Função utilitária para formatação das mensagens
└── logs/
    └── system.log    # Arquivo de saída com os registros gerados