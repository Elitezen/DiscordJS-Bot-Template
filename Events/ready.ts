import { Events } from "discord.js";
import { CustomClientEvent } from "../Typings/interfaces";
import { CustomClient } from "../Typings/types";

const event: CustomClientEvent = {
	name: Events.ClientReady,
	once: true,
	async execute(client: CustomClient) {
		console.log(`${client.user?.username || 'Client'} has logged in!`);
	}
};

export default event;
