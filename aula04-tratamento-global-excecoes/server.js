import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ', err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PREMISE REJEITADA - unhandledRejection]: ', reason);
});

app.get('/sucesso', (req, res) => {
    res.json({success: true, message: 'Operação Realizada com Sucesso!'});
});

app.get('/erro-sincrono', (req, res, next) => {
    try{
        throw new Error('Falha ao Processar a Regra de Negócio');
    }catch(erro){
        next(erro);
    }
});

app.get('/erro-assincrono', async (req, res, next) => {
    try{
        await Promise.reject(new Error('Erro ao Consultar Banco de Dados Externo!'));
    }catch(erro){
        next(erro);
    }
});

app.use((err, req, next) => {
    console.error(`[LOG DE ERRO INTERNO]: ${err.stack}`);

    const status = err.status || 500;
    req.status(status).json({
        success: false,
        message: err.message || 'ERRO INTERNO DO SERVIDOR'
    });
});

app.listen(3000, () => {
    console.log('Servidor Imortal Rodando na Porta 3000');
    console.log('Teste 1: localhost:3000/sucesso');
    console.log('Teste 2: localhost:3000/erro-sincrono');
    console.log('Teste 3: localhost:3000/erro-assincrono');
});