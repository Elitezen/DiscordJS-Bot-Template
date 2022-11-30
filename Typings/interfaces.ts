import type { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder, ChatInputCommandInteraction, UserContextMenuCommandInteraction, MessageContextMenuCommandInteraction, ContextMenuCommandBuilder, ModalSubmitInteraction, ButtonInteraction, ClientEvents, Message } from "discord.js";
import type { CustomClient } from "./types";

export interface CustomClientEvent {
	name: keyof ClientEvents;
	once: boolean;
	execute: (client: CustomClient, ...args: any[]) => any;
}

export interface CustomClientSlashCommand {
	data:
		| SlashCommandBuilder
		| SlashCommandSubcommandsOnlyBuilder
		| Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
	execute: (
		client: CustomClient,
		interaction: ChatInputCommandInteraction
	) => any;
}

export interface CustomClientMessageCommand {
	name: string;
	description: string;
	execute: (client: CustomClient, message: Message, args: string[]) => any;
}

export interface CustomClientContextMenu<
	T extends
		| UserContextMenuCommandInteraction
		| MessageContextMenuCommandInteraction
> {
	data: ContextMenuCommandBuilder;
	execute: (client: CustomClient, interaction: T) => any;
}

export interface CustomClientModal {
	customId: string;
	execute: (client: CustomClient, interaction: ModalSubmitInteraction) => any;
}

export interface CustomClientButton {
	customId: string;
	execute: (client: CustomClient, interaction: ButtonInteraction) => any;
}