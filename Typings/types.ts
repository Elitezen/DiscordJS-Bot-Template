import type { Client, Collection, UserContextMenuCommandInteraction, MessageContextMenuCommandInteraction } from "discord.js";
import type { CustomClientSlashCommand, CustomClientContextMenu, CustomClientModal, CustomClientButton, CustomClientMessageCommand } from "./interfaces";

export type CustomClient = Client & {
	slashCommands: Collection<string, CustomClientSlashCommand>;
	messageCommands: Collection<string, CustomClientMessageCommand>;
	contextMenuCommands: Collection<
		string,
		CustomClientContextMenu<
			UserContextMenuCommandInteraction | MessageContextMenuCommandInteraction
		>
	>;
	modals: Collection<string, CustomClientModal>;
	buttons: Collection<string, CustomClientButton>;
};