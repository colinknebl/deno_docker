console.log('hello world!');

import { serve } from 'https://deno.land/std@0.62.0/http/server.ts';

const s = serve({ port: 1991 });
console.log('http://localhost:1991/');

for await (const req of s) {
    req.respond({ body: 'Hello World\n' });
}
