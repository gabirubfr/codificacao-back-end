//! Importando o módulo 'os' do Node.js para obter informações sobre o Servidor

const os = require('os');
//! Exibindo informações sobre o sistema operacional e h
console.log('=== DIAGNÓSTICO DO SERVIDOR ===\n');

const plataforma = os.platform(); //! Obtendo a plataforma do sistema operacional
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2); //! Obtendo a memória total em GB
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2); //! Obtendo a memória livre em GB
const cpus = os.cpus(); //! Obtendo informações sobre os processadores

//! Exibindo informações sobre o sistema operacional e hardware do computador
console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM Total: ${memoriaTotal} GB`);
console.log(`Memória RAM Livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);