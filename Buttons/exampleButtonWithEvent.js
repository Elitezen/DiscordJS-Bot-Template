import { ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";


// Look at SlashCommands/slashCommandWithButton.js
// To see how to show a button

export const myButton = new ButtonBuilder()
  .setCustomId('button')
  .setStyle(ButtonStyle.Primary)
  .setLabel('Button')
export const buttonRow = new ActionRowBuilder()
  .addComponents(myButton);
export const buttonCommand = {
  customId: 'button',
  async execute(client, interaction) {
    await interaction.reply('Button Clicked!');
  }
}