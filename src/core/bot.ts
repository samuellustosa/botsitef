// src/core/bot.ts
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { errosSitef } from '../data/erros.ts';

export function setupBot(bot: Telegraf) {

    // Responde ao comando /start
    bot.start((ctx) => {
        ctx.reply('Olá! Sou o seu bot de ajuda com erros do Sitef. Você pode me enviar o código do erro diretamente (ex: 51), usar o comando /erro <código> ou usar /listar para ver todos os códigos disponíveis.');
    });

    // Novo comando para listar todos os códigos de erro
    bot.command('listar', (ctx) => {
        const codigos = Object.keys(errosSitef);
        const listaDeCodigos = codigos.join(', ');
        ctx.reply(`Esses são os códigos de erro disponíveis:\n\n${listaDeCodigos}`);
    });

    // Responde a qualquer mensagem de texto
    bot.on(message('text'), (ctx) => {
        const textoMensagem = ctx.message.text.trim();
        const codigo = textoMensagem.replace('/erro ', '').toUpperCase();
    
        const erro = errosSitef[codigo];
    
        if (erro) {
            let resposta = `*Detalhes do Erro:* 📄\n\n`;
            resposta += `*Código:* \`${codigo}\`\n`;
            resposta += `*Descrição:* ${erro.descricao}\n\n`;
            resposta += `*Ação Recomendada:* 🛠️\n${erro.acao}\n\n`;
            
            if (erro.permiteRetentativa === 'Sim') {
                resposta += `*Permite Retentativa:* ✅ Sim\n`;
            } else if (erro.permiteRetentativa === 'Não') {
                resposta += `*Permite Retentativa:* ❌ Não\n`;
            } else {
                resposta += `*Permite Retentativa:* 🤷‍♂️ ${erro.permiteRetentativa}\n`;
            }

            ctx.replyWithMarkdown(resposta);
        } else {
            ctx.reply(`Não entendi. 😕\n\nPor favor, envie um código de erro do Sitef.`);
        }
    });
}