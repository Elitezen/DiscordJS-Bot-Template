import { CustomClient } from "../Typings/types";
import { join } from 'path';
import { readdirSync } from 'fs';
import {CustomClientModal } from "../Typings/interfaces";

export default function setupModalHandler(client:CustomClient, rootPath:string) {
  const commandsPath = join(rootPath, 'Modals');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).modalCommand as CustomClientModal;

    client.modals.set(command.customId, command);
  }
}