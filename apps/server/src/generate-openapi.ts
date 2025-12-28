import fs from "node:fs";
import { generateSpecs } from "hono-openapi";
import app from "./app";

async function main() {
	const specs = await generateSpecs(app, {
		documentation: {
			info: {
				title: "Kobomonie API",
				version: "1.0.0",
				description: "API for Kobomonie",
			},
		},
	});

	// Ensure docs directory exists
	const docsDir = "./docs";
	if (!fs.existsSync(docsDir)) {
		fs.mkdirSync(docsDir);
	}

	fs.writeFileSync("./docs/openapi.json", JSON.stringify(specs, null, 2));
	console.log("OpenAPI spec generated at ./docs/openapi.json");
}

main();
