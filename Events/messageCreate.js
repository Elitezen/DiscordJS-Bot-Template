import { Events } from "discord.js";

const prefix = '!';
const event = {
	name: Events.MessageCreate,
	once: false,
	async execute(client, message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args[0].toLowerCase();

    if (!client.messageCommands.has(command)) return;

    try {
      client.messageCommands.get(command).execute(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
	}
};

export default event;
