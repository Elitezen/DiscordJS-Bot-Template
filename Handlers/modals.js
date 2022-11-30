import { join } from 'path';
import { readdirSync } from 'fs';

export default function setupModalHandler(client, rootPath) {
  const commandsPath = join(rootPath, 'Modals');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).modalCommand;

    client.modals.set(command.customId, command);
  }
}