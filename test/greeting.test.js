import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/greeting.js";

test("formats a greeting", () => {
  assert.equal(greeting("Gahngmu"), "Hello, Gahngmu!");
});
