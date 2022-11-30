import { SlashCommandBuilder } from "discord.js";
import { CustomClientSlashCommand } from "../Typings/interfaces";

import { modal } from "../Modals/exampleModal";

const command:CustomClientSlashCommand = {
  data: new SlashCommandBuilder()
    .setName('testmodal')
    .setDescription('Test out a modal')
    .setDMPermission(true),
  async execute(client, interaction) {
    await interaction.showModal(modal);
  }
}

export default command;