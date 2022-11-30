import { SlashCommandBuilder } from "discord.js";

const command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Test out a slash command')
    .setDMPermission(true),
  async execute(client, interaction) {
    await interaction.reply("Pong!");
  }
}

export default command;