import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("next build emits a build id", async () => {
  const buildId = await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8");
  assert.ok(buildId.trim().length > 0);
});
