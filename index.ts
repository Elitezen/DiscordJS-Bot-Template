import { Client, GatewayIntentBits, Collection } from "discord.js";
import setupSlashCommandsHandler from "./Handlers/slashCommands";
import setupEventHandler from "./Handlers/events";
import setupContextMenuHandler from "./Handlers/contextMenus";
import setupModalHandler from "./Handlers/modals";
import setupButtonHandler from "./Handlers/buttons";
import setupMessageCommandHandler from "./Handlers/messageCommands";

import { CustomClient } from "./Typings/types";

import { config } from "dotenv";
config();

const { Guilds, GuildMessages, GuildMembers, MessageContent } = GatewayIntentBits;
const { CLIENT_TOKEN } = process.env;

const client = new Client({
	intents: [Guilds, GuildMessages, GuildMembers, MessageContent]
}) as CustomClient;

client.slashCommands = new Collection();
client.messageCommands = new Collection();
client.contextMenuCommands = new Collection();
client.modals = new Collection();
client.buttons = new Collection();

async function setup() {
	try {
		if (CLIENT_TOKEN == undefined) throw TypeError("CLIENT_TOKEN missing");

		setupEventHandler(client, __dirname);
		setupSlashCommandsHandler(client, __dirname);
		setupContextMenuHandler(client, __dirname);
		setupModalHandler(client, __dirname);
		setupButtonHandler(client, __dirname);
		setupMessageCommandHandler(client, __dirname);

		await client.login(CLIENT_TOKEN);
	} catch (err) {
		throw err;
	}
}

setup();
