import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";

const contextMenu = {
  data: new ContextMenuCommandBuilder()
    .setName('Echo')
    .setType(ApplicationCommandType.Message)
    .setDMPermission(false),
  async execute(client, interaction) {
    await interaction.reply(interaction.targetMessage.content);
  },
};

export default contextMenu;