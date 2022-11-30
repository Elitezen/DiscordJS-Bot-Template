import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

// Look at SlashCommands/slashCommandWithModal.js
// To see how to show a modal

const modalId = 'example_modal';
const modal = new ModalBuilder()
  .setCustomId(modalId)
  .setTitle('Test out a modal!');
const modalDescription = new TextInputBuilder()
  .setCustomId('text')
  .setLabel("Enter some text")
  .setMinLength(3)
  .setMaxLength(300)
  .setRequired(true)
  .setPlaceholder("Hello World!")
  .setStyle(TextInputStyle.Paragraph);
const actionRow = new ActionRowBuilder()
  .addComponents(modalDescription);
modal.addComponents(actionRow);

const modalCommand = {
  customId: modalId,
  async execute(client, interaction) {
    const text = interaction.fields.getTextInputValue('text');
    
    if (interaction.channel === null) throw 'Channel is not cached';
    await interaction.channel.send(`${interaction.user.username} sent "${text}"`);
    await interaction.reply({
      content: 'Finished',
      ephemeral: true
    });
  }
}

export {
  modalCommand,
  modal
};