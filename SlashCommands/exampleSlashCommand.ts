import { SlashCommandBuilder } from "discord.js";
import { CustomClientSlashCommand } from "../Typings/interfaces";

const command:CustomClientSlashCommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Test out a slash command')
    .setDMPermission(true),
  async execute(client, interaction) {
    await interaction.reply("Pong!");
  }
}

export default command;