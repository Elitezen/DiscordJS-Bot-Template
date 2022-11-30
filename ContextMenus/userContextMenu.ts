import { ApplicationCommandType, ContextMenuCommandBuilder, UserContextMenuCommandInteraction } from "discord.js";
import { CustomClientContextMenu } from "../Typings/interfaces";

const contextMenu:CustomClientContextMenu<UserContextMenuCommandInteraction> = {
  data: new ContextMenuCommandBuilder()
    .setName('Say Hello')
    .setType(ApplicationCommandType.User)
    .setDMPermission(false),
  async execute(client, interaction) {
    await interaction.reply(`Hello ${interaction.targetUser.toString()}!`);
  },
};

export default contextMenu;