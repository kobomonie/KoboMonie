import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { describeRoute } from 'hono-openapi';

const sseRoute = new Hono();
//TODO: clean up
sseRoute.get(
  '/events',
  describeRoute({
    description: 'Server-Sent Events (SSE) endpoint for real-time updates.',
    responses: {
      200: {
        description: 'A stream of events.',
        content: {
          'text/event-stream': {
            schema: {
              type: 'string',
              example:
                'event: message\ndata: {"type":"update","value":"hello"}\n\n',
            },
          },
        },
      },
    },
  }),
  async (c) => {
    return streamSSE(c, async (stream) => {
      // Send a greeting event
      await stream.writeSSE({
        event: 'greeting',
        data: 'Welcome to the SSE stream!',
        id: '1',
      });

      let count = 0;
      const intervalId = setInterval(async () => {
        count++;
        // Send a ping event every 3 seconds
        await stream.writeSSE({
          event: 'ping',
          data: `Ping event ${count}`,
          id: `ping-${count}`,
        });
        if (count >= 5) {
          clearInterval(intervalId);
          await stream.writeSSE({
            event: 'end',
            data: 'Stream finished after 5 pings.',
            id: 'final',
          });
          await stream.close();
        }
      }, 3000);

      // Clean up on client disconnect
      c.req.raw.signal.onabort = () => {
        console.log('SSE client disconnected');
        clearInterval(intervalId);
      };
    });
  }
);

export default sseRoute;
