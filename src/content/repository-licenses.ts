// Each named repository's three files was retrieved and read on 2026-10-15.
// This allowlist is evidence for these repositories, not a default for new apps.
const verifiedRepositories = [
  "photocraft", "vectorcraft", "filmcraft", "lightcraft", "pdfcraft",
  "effectcraft", "designcraft", "figcraft", "wordcraft", "soundcraft",
  "deckcraft", "cadcraft", "gridcraft",
] as const;

export type RepositoryLicenseRecord = {
  slug: string;
  checkedAt: string;
  files: { name: string; url: string }[];
};

export const repositoryLicenses: RepositoryLicenseRecord[] = verifiedRepositories.map((slug) => ({
  slug,
  checkedAt: "2026-10-15",
  files: ["LICENSE-MIT", "LICENSE-APACHE", "NOTICE"].map((name) => ({ name, url: `https://github.com/storytold/${slug}/blob/main/${name}` })),
}));

export function repositoryLicenseLabel(slug: string, records = repositoryLicenses) {
  const record = records.find((item) => item.slug === slug);
  return record && ["LICENSE-MIT", "LICENSE-APACHE", "NOTICE"].every((name) => record.files.some((file) => file.name === name))
    ? "MIT OR Apache-2.0" : "License not verified";
}
