import { Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome, this is the API skeleton.";
  })
  .get("/pipeline-test-message", (context) => {
    context.response.body = "Pipeline test message! TEST";
  })
  .get("/books", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (
      context.params &&
      context.params.id &&
      books.has(context.params.id)
    ) {
      context.response.body = books.get(context.params.id);
    }
  });

export { router };
