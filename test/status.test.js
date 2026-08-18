import test from "node:test";
import assert from "node:assert/strict";
import { status } from "../src/status.js";

test("returns ok status for agent-eval", () => {
  assert.deepEqual(status(), { status: "ok", service: "agent-eval" });
});
