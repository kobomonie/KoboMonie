import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		BETTER_AUTH_SECRET: z.string().min(1),
		BETTER_AUTH_URL: z.string().url(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		CORS_ORIGIN: z.string().url().default("http://localhost:5173"),

		// Notifications
		RESEND_API_KEY: z.string().optional(),
		FIREBASE_PROJECT_ID: z.string().optional(),
		FIREBASE_CLIENT_EMAIL: z.string().optional(),
		FIREBASE_PRIVATE_KEY: z.string().optional(),

		// OAuth Providers
		GOOGLE_CLIENT_ID: z.string().optional(),
		GOOGLE_CLIENT_SECRET: z.string().optional(),
		APPLE_CLIENT_ID: z.string().optional(),
		APPLE_CLIENT_SECRET: z.string().optional(),
		MICROSOFT_CLIENT_ID: z.string().optional(),
		MICROSOFT_CLIENT_SECRET: z.string().optional(),

		// Mobile App Secret
		APP_SECRET: z.string().min(1).default("kobomonie-secret"),
	},
	clientPrefix: "VITE_",
	client: {
		VITE_SERVER_URL: z.string().url().default("http://localhost:3000"),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
