import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const summaries: Partial<Record<Locale, string>> = {
  "en-AU": "20 November check: no new release found. The 19 November development notes cover PdfCraft audit coverage and Bosnian translation in Launcher source. Installer availability is unconfirmed.",
  "zh-Hant": "11 月 20 日查核未發現新版本。11 月 19 日開發紀錄包括 PdfCraft 遮蓋文字檢查及 Launcher 波士尼亞語翻譯；尚未確認已納入安裝包。",
  "de": "Prüfung am 20. November: keine neue Version gefunden. Die Entwicklungsnotizen vom 19. November behandeln PdfCraft-Prüfungen und die bosnische Launcher-Übersetzung. Nicht als Installer-Funktionen bestätigt.",
  "pl": "Kontrola 20 listopada: brak nowego wydania. Notatki z 19 listopada opisują audyt PdfCraft i bośniackie tłumaczenie Launchera w kodzie. Nie potwierdzono ich w instalatorach.",
  "ja": "11月20日の確認では新リリースはありません。19日の開発記録はPdfCraftの監査とLauncherのボスニア語翻訳です。配布版への収録は未確認です。",
  "ko": "11월 20일 확인에서 새 릴리스는 없었습니다. 19일 개발 기록은 PdfCraft 감사와 Launcher 보스니아어 번역입니다. 설치 파일 포함 여부는 확인되지 않았습니다.",
  "fr": "Vérification du 20 novembre : aucune nouvelle version. Les notes du 19 novembre concernent l’audit PdfCraft et la traduction bosnienne du Launcher dans le code. Leur présence dans les installateurs n’est pas confirmée.",
  "hi": "20 नवंबर की जाँच में नया रिलीज़ नहीं मिला। 19 नवंबर के विकास नोट में PdfCraft ऑडिट और Launcher के बोस्नियाई अनुवाद का स्रोत बदलाव है। इंस्टॉलर में उपलब्धता की पुष्टि नहीं हुई है।"
};
export function november20Digest(locale: Locale): LocalizedSection | undefined {
 const paragraph = summaries[locale];
 return paragraph ? { id: "update-2026-11-20", heading: "ArtCraft · 2026-11-20", paragraphs: [paragraph], links: [{ label: "2026-11-19 (English)", href: "https://opensourceadobe.com/updates/2026-11-19/" }, { label: "2026-11-20 (English)", href: "https://opensourceadobe.com/updates/2026-11-20/" }] } : undefined;
}
