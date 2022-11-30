import { join } from 'path';
import { readdirSync } from 'fs';

export default function setupContextMenuHandler(client, rootPath) {
  const commandsPath = join(rootPath, 'ContextMenus');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath).default;

    client.contextMenuCommands.set(command.data.name, command);
  }
}