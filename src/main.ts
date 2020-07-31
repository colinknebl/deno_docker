import { serve } from '../deps.ts';

const PORT = 1991;

const s = serve({ port: PORT });
console.log(`http://localhost:${PORT}/`);

for await (const req of s) {
    req.respond({ body: 'Hello World\n' });
}
