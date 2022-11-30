import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";

const contextMenu = {
  data: new ContextMenuCommandBuilder()
    .setName('Say Hello')
    .setType(ApplicationCommandType.User)
    .setDMPermission(false),
  async execute(client, interaction) {
    await interaction.reply(`Hello ${interaction.targetUser.toString()}!`);
  },
};

export default contextMenu;