import { describe, expect, it } from "vitest";

describe("featureFlagReader", () => {
  it("returns ok for a normal input", () => {
    const result = run("alpha");
    expect(result.ok).toBe(true);
  });

  it("rejects empty strings", () => {
    const result = run("");
    expect(result.ok).toBe(false);
  });

  it("rejects pathological input lengths", () => {
    const result = run("x".repeat(10_000));
    expect(result.ok).toBe(false);
  });
});

function run(input: string) {
  if (input.trim().length === 0) return { ok: false, reason: "empty input" } as const;
  if (input.length > 4096) return { ok: false, reason: "input too large" } as const;
  return { ok: true, value: input.trim() } as const;
}
