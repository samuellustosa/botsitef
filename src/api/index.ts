// src/index.ts
import { Telegraf } from 'telegraf';
import { setupBot } from '../core/bot.ts';
import dotenv from 'dotenv';
import safeCompare from 'safe-compare';

dotenv.config();

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
    console.error('❌ Erro: Token do bot não foi encontrado no arquivo .env');
    process.exit(1);
}

const bot = new Telegraf(botToken);
setupBot(bot);

// Configura o bot para usar webhooks
// A Vercel irá chamar esta função com as atualizações do Telegram
export default async (req: any, res: any) => {
    try {
        const { VERCEL_URL, BOT_TOKEN } = process.env;
        
        if (!VERCEL_URL || !BOT_TOKEN) {
            throw new Error('As variáveis de ambiente VERCEL_URL e BOT_TOKEN devem ser configuradas.');
        }

        // Define a URL do webhook no Telegram, se ainda não estiver configurada
        await bot.telegram.setWebhook(`${VERCEL_URL}/api/index`);

        // Processa a atualização do Telegram
        await bot.handleUpdate(req.body);
        
        res.status(200).send('OK');
    } catch (err) {
        console.error('❌ Erro no webhook:', err);
        res.status(500).send(err);
    }
};

console.log('Bot configurado para webhooks...');