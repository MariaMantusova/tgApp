import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const token = '7148831470:AAHAlvHH_c55Li1vJDk5BpYuyuZ_VtEAq50';
const webUrl = 'https://angular-tg-app-27c6c.web.app/feedback';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                "Отправить сообщение", 
                webUrl
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? "empty message");
})

bot.launch();