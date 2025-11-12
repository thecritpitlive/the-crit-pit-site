import streams from "@/content/streams.json";
import { parseEvents, StreamEvent } from "@/lib/utils";

export function getAllStreams() {
  return parseEvents(streams as unknown as StreamEvent[]);
}
