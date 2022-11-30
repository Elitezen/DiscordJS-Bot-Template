import { Events } from 'discord.js';

const event = {
  name: Events.InteractionCreate,
	once: false,
	async execute(client, interaction) {
		if (interaction.isChatInputCommand()) {
      const command = interaction.client.slashCommands
        .get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    } else if (interaction.isUserContextMenuCommand()) {
      const command = interaction.client.contextMenuCommands
        .get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: `An Error Occured: \`${JSON.stringify(error)}\``, ephemeral: true });
      }
    } else if (interaction.isModalSubmit()) {
      const int = interaction;
      const command = int.client
        .modals.get(int.customId);
      if (!command) return;

        try {
          await command.execute(client, interaction);
        } catch (error) {
          console.error(error);
        }
    } else if (interaction.isButton()) {
      const int = interaction;
      const command = int.client
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