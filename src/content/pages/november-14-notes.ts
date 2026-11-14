import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";

const summaries: Partial<Record<Locale, [string, string, string]>> = {
  "en-AU": [
    "14 November ArtCraft update",
    "The release archive covers 77 official releases from 6 to 12 November, Beijing time. GitHub lists PhotoCraft 0.23.1 and Launcher 0.19.2. AniCraft 0.2.1 is early alpha and its release assets include desktop packages. No new version appeared in the early 14 November check.",
    "Read the early check and linked daily briefs (English)",
  ],
  "zh-Hant": [
    "11 月 14 日 ArtCraft 更新",
    "依北京時間補錄 11 月 6 日至 12 日的 77 個正式版本。GitHub 列出 PhotoCraft 0.23.1 與 Launcher 0.19.2。AniCraft 0.2.1 仍在早期 Alpha 階段，已提供桌面安裝套件。11 月 14 日凌晨核查時未發現新版本。",
    "閱讀凌晨核查與各日簡報（英文）",
  ],
  de: [
    "ArtCraft-Update vom 14. November",
    "Das Archiv ergänzt 77 offizielle Veröffentlichungen vom 6. bis 12. November nach Pekinger Zeit. GitHub führt PhotoCraft 0.23.1 und Launcher 0.19.2. AniCraft 0.2.1 ist eine frühe Alpha mit Desktop-Paketen. Bei der frühen Prüfung am 14. November erschien keine neue Version.",
    "Frühe Prüfung und verlinkte Tagesberichte lesen (Englisch)",
  ],
  pl: [
    "Aktualizacja ArtCraft z 14 listopada",
    "Archiwum obejmuje 77 oficjalnych wydań z 6–12 listopada czasu pekińskiego. GitHub podaje PhotoCraft 0.23.1 i Launcher 0.19.2. AniCraft 0.2.1 to wczesna wersja alfa z pakietami na komputery. Poranna kontrola 14 listopada nie wykazała nowego wydania.",
    "Przeczytaj poranny przegląd i raporty dzienne (po angielsku)",
  ],
  ja: [
    "11月14日のArtCraft更新情報",
    "北京時間11月6日から12日までの公式リリース77件を収録しました。GitHubにはPhotoCraft 0.23.1とLauncher 0.19.2が掲載されています。AniCraft 0.2.1は早期アルファ版で、デスクトップ用パッケージがあります。11月14日早朝の確認では新しいバージョンは見つかりませんでした。",
    "早朝の確認結果と日別レポートを読む（英語）",
  ],
  ko: [
    "11월 14일 ArtCraft 업데이트",
    "베이징 시간 11월 6일부터 12일까지의 공식 출시 77건을 기록했습니다. GitHub에는 PhotoCraft 0.23.1과 Launcher 0.19.2가 올라와 있습니다. AniCraft 0.2.1은 초기 알파이며 데스크톱용 패키지를 제공합니다. 11월 14일 새벽 확인에서는 새 버전을 찾지 못했습니다.",
    "새벽 확인 결과와 날짜별 보고서 읽기(영어)",
  ],
  fr: [
    "Actualité ArtCraft du 14 novembre",
    "Les archives recensent 77 versions officielles du 6 au 12 novembre, heure de Pékin. GitHub indique PhotoCraft 0.23.1 et Launcher 0.19.2. AniCraft 0.2.1 est en alpha précoce et propose des paquets pour ordinateur. La vérification du 14 novembre au matin n’a relevé aucune nouvelle version.",
    "Lire la vérification du matin et les bulletins associés (en anglais)",
  ],
  hi: [
    "14 नवंबर का ArtCraft अपडेट",
    "बीजिंग समय के अनुसार 6 से 12 नवंबर के 77 आधिकारिक रिलीज़ दर्ज किए गए। GitHub पर PhotoCraft 0.23.1 और Launcher 0.19.2 सूचीबद्ध हैं। AniCraft 0.2.1 शुरुआती अल्फ़ा है और इसके डेस्कटॉप पैकेज उपलब्ध हैं। 14 नवंबर की सुबह की जाँच में कोई नया संस्करण नहीं मिला।",
    "सुबह की जाँच और तारीख़वार रिपोर्ट पढ़ें (अंग्रेज़ी)",
  ],
};

export function november14Digest(locale: Locale): LocalizedSection | undefined {
  const summary = summaries[locale];
  if (!summary) return undefined;
  const [heading, paragraph, label] = summary;
  return {
    id: "update-2026-11-14",
    heading,
    paragraphs: [paragraph],
    links: [{ label, href: "https://opensourceadobe.com/updates/2026-11-14/" }],
  };
}
