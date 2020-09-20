import { Application, Router, ReactDomServer } from './serverDeps.ts';
import { React } from './deps.ts';
import App from './client/app.tsx';
import { staticFileMiddleware } from './staticFileMiddleware.ts';

const PORT = 3000;

// Create a new server
const app = new Application();

// Router for base path
const router = new Router();

router.get('/', handlePage);

// Bundle the client-side code
const [_, clientJS] = await Deno.bundle('./client/client.tsx');

// Router for bundle
const serverrouter = new Router();
serverrouter.get('/static/client.js', (context) => {
  context.response.headers.set('Content-Type', 'text/html');
  context.response.body = clientJS;
});

// Implement the routes on the server
app.use(staticFileMiddleware);
app.use(router.routes());
app.use(serverrouter.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
await app.listen({ port: PORT });

// Function to render entire application as a string
function handlePage(ctx: any) {
  try {
    const body = (ReactDomServer as any).renderToString(<App />);
    ctx.response.body = `<!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>Rick and Morty</title>
    </head>
  <body >
    <div id="root">${body}</div>

    <script  src="/static/client.js" defer></script>
  </body>
  </html>`;
  } catch (error) {
    console.error(error);
  }
}
