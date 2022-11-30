import { join } from 'path';
import { readdirSync } from 'fs';

export default function setupButtonHandler(client, rootPath) {
  const commandsPath = join(rootPath, 'Buttons');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).buttonCommand;

    if (command) client.buttons.set(command.customId, command);
  }
}