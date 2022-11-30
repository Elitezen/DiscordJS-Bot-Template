import { SlashCommandBuilder } from "discord.js";
import { CustomClientSlashCommand } from "../Typings/interfaces";

import { buttonRow } from "../Buttons/exampleButtonWithEvent";

const command:CustomClientSlashCommand = {
  data: new SlashCommandBuilder()
    .setName('testbutton')
    .setDescription('Test out a button')
    .setDMPermission(true),
  async execute(client, interaction) {
    await interaction.reply({
      content: 'Click the button!',
      components: [buttonRow]
    });
  }
}

export default command;