import { sourcesById } from "@/content/sources";
import type { SourceRecord } from "@/content/types";

export function resolveSources(ids: string[]): SourceRecord[] {
  return ids.map((id) => {
    const source = sourcesById.get(id);
    if (!source) throw new Error(`Unknown source id: ${id}`);
    return source;
  });
}
