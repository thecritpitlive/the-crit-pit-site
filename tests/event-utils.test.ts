import { describe, it, expect } from "vitest";
import { parseEvents, nextUpcomingEvent } from "@/lib/utils";

describe("event utils", () => {
  it("finds next upcoming", () => {
    const now = new Date("2025-01-01T00:00:00-06:00");
    const events = parseEvents([
      { id: "a", title: "A", platform: "x", start: "2025-01-02T01:00:00-06:00", end: "2025-01-02T02:00:00-06:00", url: "#" },
      { id: "b", title: "B", platform: "x", start: "2024-12-01T01:00:00-06:00", end: "2024-12-01T02:00:00-06:00", url: "#" },
    ] as any);
    const next = nextUpcomingEvent(events, now);
    expect(next.id).toBe("a");
  });
});
