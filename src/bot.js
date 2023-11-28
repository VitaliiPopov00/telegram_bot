import { session, Telegraf } from 'telegraf';
import { getConfg } from "./config";
import

class Bot {
    constructor() {
        this.config = getConfg();
        this.bot = new Telegraf(this.config.tg_token);
        this.bot.use(session());
        this.bot.carch((err, ctx) => {
            console.log('Error');
        });    
    }

    init() {
        this.commands = [new StartCommand(this.bot), new HelpCommand(this.bot)];

        for (const command of this.commands) {
            command.exec();
        }

        this.bot.launch();
    }
}

const bot = new Bot();
bot.init();

console.log('Bot has been started');