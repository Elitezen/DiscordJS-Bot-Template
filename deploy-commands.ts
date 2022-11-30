import { MessageContextMenuCommandInteraction, REST, Routes, UserContextMenuCommandInteraction } from 'discord.js';
import { config } from 'dotenv'; 
import { join } from 'node:path';
import { readdirSync } from 'node:fs';
import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';
import type { CustomClientContextMenu, CustomClientSlashCommand } from './Typings/interfaces';

config();

const { CLIENT_ID, CLIENT_GUILD_ID, CLIENT_TOKEN } = process.env;

if (CLIENT_ID == undefined) throw TypeError('CLIENT_ID missing');
if (CLIENT_GUILD_ID == undefined) throw TypeError('CLIENT_GUILD_ID missing');
if (CLIENT_TOKEN == undefined) throw TypeError('CLIENT_TOKEN missing');

const rest = new REST({ version: '10' }).setToken(CLIENT_TOKEN);

const commands: any[] = [];
const slashCommandsPath = join(__dirname, 'SlashCommands');
const slashCommandFiles = readdirSync(slashCommandsPath).filter(file => file.endsWith('.ts'));

for (const file of slashCommandFiles) {
  const filePath = join(slashCommandsPath, file);
  const command = require(filePath).default as CustomClientSlashCommand;
  commands.push(command.data.toJSON());
}

const contextMenuPath = join(__dirname, 'ContextMenus');
const contextMenuFiles = readdirSync(contextMenuPath).filter(file => file.endsWith('.ts'));

for (const file of contextMenuFiles) {
  const filePath = join(contextMenuPath, file);
  const command = require(filePath).default as CustomClientContextMenu<UserContextMenuCommandInteraction | MessageContextMenuCommandInteraction>;
  commands.push(command.data.toJSON());
}

rest.put(Routes.applicationGuildCommands(CLIENT_ID, CLIENT_GUILD_ID), { body: commands })
	.then(_ => console.log(`Successfully registered ${commands.length} application commands.`))
	.catch(console.error);