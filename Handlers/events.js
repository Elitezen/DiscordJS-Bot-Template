import { join } from "path";
import { readdirSync } from "fs";

export default function setupEventHandler(
	client,
	rootPath
) {
	const eventsPath = join(rootPath, "Events");
	const eventFiles = readdirSync(eventsPath).filter(file =>
		file.endsWith(".ts")
	);

	for (const file of eventFiles) {
		const filePath = join(eventsPath, file);
		const event = require(filePath).default;
		if (event.once) {
			client.once(event.name, (...args) =>
				event.execute(client, ...args)
			);
		} else {
			client.on(event.name, (...args) =>
				event.execute(client, ...args)
			);
		}
	}
}
