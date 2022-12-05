import { ButtonInteraction, CommandInteraction, Events, MessageContextMenuCommandInteraction, ModalSubmitInteraction, UserContextMenuCommandInteraction } from 'discord.js';
import { CustomClientContextMenu, CustomClientEvent, CustomClientSlashCommand } from "../Typings/interfaces";
import { CustomClient } from '../Typings/types';

const event:CustomClientEvent = {
  name: Events.InteractionCreate,
	once: false,
	async execute(client:CustomClient, interaction:CommandInteraction) {
		if (interaction.isChatInputCommand()) {
      const command = (interaction.client as CustomClient).slashCommands
        .get(interaction.commandName) as CustomClientSlashCommand;

      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    } else if (interaction.isUserContextMenuCommand() || interaction.isMessageContextMenuCommand()) {
      const command = (interaction.client as CustomClient).contextMenuCommands
        .get(interaction.commandName) as CustomClientContextMenu<UserContextMenuCommandInteraction | MessageContextMenuCommandInteraction>;

      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: `An Error Occured: \`${JSON.stringify(error)}\``, ephemeral: true });
      }
    } else if (interaction.isModalSubmit()) {
      const int = interaction as ModalSubmitInteraction;
      const command = (int.client as CustomClient)
        .modals.get(int.customId);
      if (!command) return;

        try {
          await command.execute(client, interaction);
        } catch (error) {
          console.error(error);
        }
    } else if (interaction.isButton()) {
      const int = interaction as ButtonInteraction;
      const command = (int.client as CustomClient)
        .buttons.get(int.customId);
      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
      }
    }
	},
}

export default event;
