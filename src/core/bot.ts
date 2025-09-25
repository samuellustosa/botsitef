// src/core/bot.ts
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { errosSitef } from '../data/erros.js';

export function setupBot(bot: Telegraf) {

    // Responde ao comando /start
    bot.start((ctx) => {
        ctx.reply('👋 Olá! Sou o seu bot de ajuda com erros do Sitef. Você pode me enviar o código do erro diretamente (ex: 51) ou usar o comando /erro <código>.');
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