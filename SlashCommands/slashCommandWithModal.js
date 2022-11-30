import { SlashCommandBuilder } from "discord.js";
import { modal } from "../Modals/exampleModal";

const command = {
  data: new SlashCommandBuilder()
    .setName('testmodal')
    .setDescription('Test out a modal')
    .setDMPermission(true),
  async execute(client, interaction) {
    await interaction.showModal(modal);
  }
}

export default command;