import { ButtonBuilder } from "@discordjs/builders";
import { ActionRowBuilder, ButtonStyle } from "discord.js";

export const helloButton = new ButtonBuilder()
  .setCustomId('hello')
  .setLabel('Hello')
  .setStyle(ButtonStyle.Primary);
export const byeButton = new ButtonBuilder()
  .setCustomId('bye')
  .setLabel('Bye')
  .setStyle(ButtonStyle.Danger)
export const buttonRow = new ActionRowBuilder<ButtonBuilder>()
  .addComponents(helloButton, byeButton);