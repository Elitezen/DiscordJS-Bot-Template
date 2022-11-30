import { Events } from "discord.js";

const event = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`${client.user?.username || 'Client'} has logged in!`);
	}
};

export default event;
