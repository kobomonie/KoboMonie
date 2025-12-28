import { env } from "@kobomonie/env";
import { defineConfig } from "orval";

export default defineConfig({
	api: {
		output: {
			mode: "tags-split",
			target: "src/gen/api.ts",
			schemas: "src/gen/models",
			client: "react-query",
			baseUrl: env.VITE_SERVER_URL,
			mock: false,
			prettier: true,
			override: {
				mutator: {
					path: "./src/custom-fetch.ts",
					name: "customFetch",
				},
			},
		},
		input: {
			target: "../../apps/server/docs/openapi.json",
		},
	},
});
