import streams from "@/content/streams.json";
import { parseEvents, StreamEvent } from "@/lib/utils";

export function getAllStreams() {
  return parseEvents(streams as unknown as StreamEvent[]);
}
[
  {
    "id": "critcon-2025-01",
    "title": "The Crit Pit Launch",
    "platform": "Whatnot",
    "url": "https://whatnot.com/some-link",
    "startDate": "2025-12-01T18:00:00Z"
  }
]
