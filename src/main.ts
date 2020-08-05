import { app } from "./App.ts";

const PORT = 1991;

console.log(`App listening on http://localhost:${PORT}`);
await app.listen({ port: PORT });
