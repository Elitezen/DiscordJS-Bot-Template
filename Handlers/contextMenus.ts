import { CustomClient } from "../Typings/types";
import { join } from 'path';
import { readdirSync } from 'fs';
import { CustomClientContextMenu } from "../Typings/interfaces";
import { MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";

export default function setupContextMenuHandler(client:CustomClient, rootPath:string) {
  const commandsPath = join(rootPath, 'ContextMenus');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).default as CustomClientContextMenu<UserContextMenuCommandInteraction | MessageContextMenuCommandInteraction>;

    client.contextMenuCommands.set(command.data.name, command);
  }
}