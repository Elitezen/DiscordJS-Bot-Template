import { ButtonBuilder, ButtonStyle, ButtonInteraction, ActionRowBuilder } from "discord.js";
import { CustomClientButton } from "../Typings/interfaces";
import { CustomClient } from "../Typings/types";

// Look at SlashCommands/slashCommandWithButton.ts
// To see how to show a button

export const myButton = new ButtonBuilder()
  .setCustomId('button')
  .setStyle(ButtonStyle.Primary)
  .setLabel('Button')
export const buttonRow = new ActionRowBuilder<ButtonBuilder>()
  .addComponents(myButton);
export const buttonCommand:CustomClientButton = {
  customId: 'button',
  async execute(client:CustomClient, interaction:ButtonInteraction) {
    await interaction.reply('Button Clicked!');
  }
}