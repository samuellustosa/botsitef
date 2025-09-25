// src/setWebhook.ts
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const vercelUrl = process.env.VERCEL_URL;

if (!botToken || !vercelUrl) {
    console.error('❌ Erro: BOT_TOKEN ou VERCEL_URL não foi encontrado no arquivo .env');
    process.exit(1);
}

const bot = new Telegraf(botToken);
const webhookUrl = `${vercelUrl}/api/index`;

async function setWebhook() {
    try {
        await bot.telegram.setWebhook(webhookUrl);
        console.log(`✅ Webhook definido para: ${webhookUrl}`);
    } catch (error) {
        console.error('❌ Erro ao definir o webhook:', error);
    }
}

setWebhook();
