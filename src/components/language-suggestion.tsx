"use client";
import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { dictionaries } from "@/i18n/dictionaries";
import { switchLocalePath, type Locale } from "@/i18n/config";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("languagechange", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("languagechange", callback); };
};
function wantsSuggestion() {
  const wanted = navigator.languages.some((language) => language.toLowerCase().startsWith("zh"));
  try { return wanted && localStorage.getItem("language-suggestion-dismissed") !== "1"; }
  catch { return wanted; }
}
export function LanguageSuggestion({ locale }: { locale: Locale }) {
  const [dismissed, setDismissed] = useState(false);
  const preferred = useSyncExternalStore(subscribe, wantsSuggestion, () => false);
  const pathname = usePathname();
  if (!preferred || dismissed || locale !== "en") return null;
  return <aside className="language-suggestion" lang="zh-Hant"><a href={switchLocalePath(pathname, "zh-Hant")}>{dictionaries[locale].suggestion}</a><button aria-label={dictionaries[locale].dismissSuggestion} onClick={() => { setDismissed(true); try { localStorage.setItem("language-suggestion-dismissed", "1"); } catch {} }}>×</button></aside>;
}
