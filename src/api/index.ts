// src/api/index.ts
import { Telegraf } from 'telegraf';
import { setupBot } from '../core/bot.ts';
import dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
    console.error('❌ Erro: Token do bot não foi encontrado no arquivo .env');
    process.exit(1);
}

const bot = new Telegraf(botToken);
setupBot(bot);

// A Vercel irá chamar esta função com as atualizações do Telegram
export default async (req: any, res: any) => {
    try {
        // Processa a atualização do Telegram
        await bot.handleUpdate(req.body);
        
        res.status(200).send('OK');
    } catch (err) {
        console.error('❌ Erro no webhook:', err);
        res.status(500).send(err);
    }
};

console.log('Bot configurado para webhooks...');