// src/index.ts
import { Telegraf } from 'telegraf';
import { setupBot } from './core/bot.js';
import dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
    console.error('❌ Erro: Token do bot não foi encontrado no arquivo .env');
    process.exit(1);
}

const bot = new Telegraf(botToken);
setupBot(bot);

// Inicia o bot
bot.launch();

console.log('Bot rodando...');

// Habilita a interrupção do bot com Ctrl+C
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));