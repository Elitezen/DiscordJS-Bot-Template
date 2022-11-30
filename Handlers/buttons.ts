import { CustomClient } from "../Typings/types";
import { join } from 'path';
import { readdirSync } from 'fs';
import {CustomClientButton } from "../Typings/interfaces";

export default function setupButtonHandler(client:CustomClient, rootPath:string) {
  const commandsPath = join(rootPath, 'Buttons');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).buttonCommand as CustomClientButton;

    if (command) client.buttons.set(command.customId, command);
  }
}