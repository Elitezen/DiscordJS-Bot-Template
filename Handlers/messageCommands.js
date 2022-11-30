import { join } from 'path';
import { readdirSync } from 'fs';

export default function setupSlashCommandsHandler(client, rootPath) {
  const commandsPath = join(rootPath, 'MessageCommands');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).default;

    client.messageCommands.set(command.name, command);
  }
}