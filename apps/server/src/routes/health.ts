import { db } from "@kobomonie/db";
import { sql } from "drizzle-orm";
import { Hono } from "hono";
import { describeRoute, resolver } from "hono-openapi";
import { z } from "zod";

const healthRoute = new Hono();

const HealthResponseSchema = z.object({
	status: z.literal("ok").or(z.literal("error")),
	database: z.literal("connected").or(z.literal("disconnected")),
	timestamp: z.string().datetime().optional(),
	error: z.string().optional(),
});

healthRoute.get(
	"/",
	describeRoute({
		description: "Health check",
		responses: {
			200: {
				description: "System is healthy",
				content: {
					"application/json": {
						schema: resolver(HealthResponseSchema),
					},
				},
			},
			503: {
				description: "Service Unavailable",
				content: {
					"application/json": {
						schema: resolver(HealthResponseSchema),
					},
				},
			},
		},
	}),
	async (c) => {
		try {
			// Check database connection
			await db.execute(sql`SELECT 1` as any);

			return c.json(
				HealthResponseSchema.parse({
					status: "ok",
					database: "connected",
					timestamp: new Date().toISOString(),
				}),
			);
		} catch (error) {
			console.error("Health check failed:", error);
			return c.json(
				HealthResponseSchema.parse({
					status: "error",
					database: "disconnected",
					error: "Database connection failed",
				}),
				503,
			);
		}
	},
);

export default healthRoute;
