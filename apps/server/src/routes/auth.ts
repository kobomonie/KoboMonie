import { auth } from "@kobomonie/auth";
import { Hono } from "hono";

const authRoute = new Hono();

authRoute.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));

export default authRoute;
