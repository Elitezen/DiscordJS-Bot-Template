import { CustomClient } from "../Typings/types";
import { join } from 'path';
import { readdirSync } from 'fs';
import { CustomClientSlashCommand } from "../Typings/interfaces";

export default function setupSlashCommandsHandler(client:CustomClient, rootPath:string) {
  const commandsPath = join(rootPath, 'SlashCommands');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).default as CustomClientSlashCommand;

    client.slashCommands.set(command.data.name, command);
  }
}