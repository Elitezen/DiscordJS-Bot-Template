import { ApplicationCommandType, ContextMenuCommandBuilder, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";
import { CustomClientContextMenu } from "../Typings/interfaces";

const contextMenu:CustomClientContextMenu<MessageContextMenuCommandInteraction> = {
  data: new ContextMenuCommandBuilder()
    .setName('Echo')
    .setType(ApplicationCommandType.Message)
    .setDMPermission(false),
  async execute(client, interaction) {
    await interaction.reply(interaction.targetMessage.content);
  },
};

export default contextMenu;