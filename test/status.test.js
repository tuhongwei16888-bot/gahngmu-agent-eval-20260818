import test from "node:test";
import assert from "node:assert/strict";
import { status } from "../src/status.js";

test("reports the agent evaluation service as healthy", () => {
  assert.deepEqual(status(), { status: "ok", service: "agent-eval" });
});
