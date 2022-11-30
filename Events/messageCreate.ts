import { Events, Message } from "discord.js";
import { CustomClientEvent } from "../Typings/interfaces";
import { CustomClient } from "../Typings/types";

const prefix = '!';
const event: CustomClientEvent = {
	name: Events.MessageCreate,
	once: false,
	async execute(client: CustomClient, message:Message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args[0].toLowerCase();

    if (!client.messageCommands.has(command)) return;

    try {
      client.messageCommands.get(command)!.execute(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
	}
};

export default event;
