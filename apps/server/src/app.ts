import 'dotenv/config';
import { env } from '@kobomonie/env';
import { Scalar } from '@scalar/hono-api-reference';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { openAPIRouteHandler } from 'hono-openapi';
import authRoute from './routes/auth';
import healthRoute from './routes/health';
import sseRoute from './routes/sse';

const app = new Hono();

app.use(logger());

// Custom Security Middleware: Enforce App Secret for non-browser clients (Mobile/Server-to-Server)
app.use('/*', async (c, next) => {
  const origin = c.req.header('Origin');
  const appSecret = c.req.header('x-kobomonie-app-secret');
  const expectedSecret = env.APP_SECRET;

  // If no Origin (likely mobile or server-to-server), require the app secret
  if (!origin) {
    if (appSecret !== expectedSecret) {
      return c.text('Unauthorized Client: Missing or Invalid Secret', 403);
    }
  }
  // Proceed to next middleware (CORS will handle Origin presence if it exists)
  await next();
});

app.use(
  '/*',
  cors({
    origin: (origin) => {
      // If origin exists (browser), validate it against allowed origins
      // we allow the configured CORS_ORIGIN
      return origin === env.CORS_ORIGIN ? origin : null;
    },
    allowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'x-kobomonie-app-secret'],
    credentials: true,
  })
);

// Mount routes
app.route('/api/auth', authRoute);
app.route('/health', healthRoute);
app.route('/sse', sseRoute);

app.get(
  '/openapi.json',
  openAPIRouteHandler(app, {
    documentation: {
      info: {
        title: 'Kobomonie API',
        version: '1.0.0',
        description: 'API for Kobomonie',
      },
    },
  })
);

app.get(
  '/docs',
  Scalar({
    theme: 'saturn',
    url: '/openapi.json',
  })
);

export default app;
