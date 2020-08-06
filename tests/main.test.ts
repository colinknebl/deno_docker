import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
    name: "example test",
    fn(): void {
        assertEquals("world", "world");
    },
});