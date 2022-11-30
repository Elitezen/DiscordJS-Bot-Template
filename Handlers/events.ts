import { join } from "path";
import { readdirSync } from "fs";
import { CustomClient } from "../Typings/types";
import { CustomClientEvent } from "../Typings/interfaces";
import { ClientEvents } from "discord.js";

export default function setupEventHandler(
	client: CustomClient,
	rootPath: string
) {
	const eventsPath = join(rootPath, "Events");
	const eventFiles = readdirSync(eventsPath).filter(file =>
		file.endsWith(".ts")
	);

	for (const file of eventFiles) {
		const filePath = join(eventsPath, file);
		const event = require(filePath).default as CustomClientEvent;
		if (event.once) {
			client.once(event.name as string, (...args) =>
				event.execute(client, ...args)
			);
		} else {
			client.on(event.name as string, (...args) =>
				event.execute(client, ...args)
			);
		}
	}
}
