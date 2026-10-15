import { z } from "zod";

export const evidenceStateSchema = z.enum([
  "verified-official",
  "partially-tested",
  "reported",
  "not-verified",
]);

export const appStatusSchema = z.enum([
  "early-alpha",
  "in-development",
  "not-verified",
]);

export const sourceRecordSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["official-page", "official-repository", "third-party"]),
  title: z.string().min(1),
  url: z.string().url(),
  accessedAt: z.iso.date(),
});

export const appRecordSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  category: z.string().min(1),
  adobeCounterpart: z.string().min(1),
  status: appStatusSchema,
  evidenceState: evidenceStateSchema,
  platforms: z.array(z.string().min(1)).min(1),
  license: z.string().min(1),
  version: z.string().min(1),
  officialPage: z.string().url(),
  repository: z.string().url(),
  detailPublished: z.boolean(),
  summary: z.string().min(1),
  supportedTasks: z.array(z.string().min(1)).min(1),
  limitations: z.array(z.string().min(1)).min(1),
  unknowns: z.array(z.string().min(1)).min(1),
  sourceIds: z.array(z.string().min(1)).min(1),
  lastVerified: z.iso.date(),
});

export type EvidenceState = z.infer<typeof evidenceStateSchema>;
export type AppStatus = z.infer<typeof appStatusSchema>;
export type SourceRecord = z.infer<typeof sourceRecordSchema>;
export type AppRecord = z.infer<typeof appRecordSchema>;
