import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";

const summaries: Partial<Record<Locale, [string, string, string, string]>> = {
  "en-AU": [
    "17 November ArtCraft check",
    "The early check found no new release. On main, DesignCraft corrected labels for right-to-left spreads. The 16 November brief covers the PhotoCraft Windows start-up fix and PdfCraft cross-page text selection on main. The official Wiki also added an AniCraft beginner guide.",
    "Read the 17 November brief (English)",
    "Read the 16 November brief (English)",
  ],
  "zh-Hant": [
    "11 月 17 日 ArtCraft 更新",
    "凌晨查核未發現新版本。DesignCraft 主分支修正了由右至左跨頁的頁碼標籤。11 月 16 日簡報也補上兩項主分支變更，分別是 PhotoCraft 的 Windows 啟動修正，以及 PdfCraft 的跨頁文字選取。官方 Wiki 也新增了 AniCraft 入門指南。",
    "閱讀 11 月 17 日簡報（英文）",
    "閱讀 11 月 16 日簡報（英文）",
  ],
  de: [
    "ArtCraft-Update vom 17. November",
    "Bei der frühen Prüfung gab es keine neue Veröffentlichung. Im Hauptzweig korrigiert DesignCraft die Seitenbeschriftung bei Rechts-nach-links-Bindung. Der Bericht vom 16. November beschreibt außerdem eine Windows-Startkorrektur für PhotoCraft und die seitenübergreifende Textauswahl in PdfCraft, jeweils im Hauptzweig. Im offiziellen Wiki gibt es jetzt einen AniCraft-Einstiegsleitfaden.",
    "Bericht vom 17. November lesen (Englisch)",
    "Bericht vom 16. November lesen (Englisch)",
  ],
  pl: [
    "Aktualizacja ArtCraft z 17 listopada",
    "Poranna kontrola nie wykazała nowego wydania. W głównej gałęzi DesignCraft poprawiono etykiety rozkładówek z oprawą od prawej do lewej. Raport z 16 listopada opisuje też poprawkę uruchamiania PhotoCraft w Windows i zaznaczanie tekstu na wielu stronach w PdfCraft. Obie zmiany są w głównych gałęziach. Oficjalna wiki zawiera też nowy przewodnik po AniCraft dla początkujących.",
    "Raport z 17 listopada (po angielsku)",
    "Raport z 16 listopada (po angielsku)",
  ],
  ja: [
    "11月17日のArtCraft更新情報",
    "早朝の確認では新しいリリースは見つかりませんでした。DesignCraftのメインブランチでは、右綴じの見開きのページ番号表示が修正されました。11月16日のレポートでは、PhotoCraftのWindowsでの起動修正とPdfCraftのページをまたぐテキスト選択を紹介しています。いずれもメインブランチでの変更です。公式WikiにはAniCraftの初心者向けガイドも追加されました。",
    "11月17日のレポートを読む（英語）",
    "11月16日のレポートを読む（英語）",
  ],
  ko: [
    "11월 17일 ArtCraft 업데이트",
    "새벽 확인에서는 새 릴리스를 찾지 못했습니다. DesignCraft의 메인 브랜치에서는 오른쪽에서 왼쪽으로 묶는 펼침면의 페이지 표기를 수정했습니다. 11월 16일 소식에는 PhotoCraft의 Windows 실행 문제 수정과 PdfCraft의 여러 페이지에 걸친 텍스트 선택이 추가됐습니다. 두 변경 사항 모두 메인 브랜치에 반영됐습니다. 공식 위키에는 AniCraft 입문 가이드도 추가됐습니다.",
    "11월 17일 소식 읽기(영어)",
    "11월 16일 소식 읽기(영어)",
  ],
  fr: [
    "Actualité ArtCraft du 17 novembre",
    "La vérification du matin n’a relevé aucune nouvelle version. Sur sa branche principale, DesignCraft corrige les libellés des doubles pages reliées de droite à gauche. Le bulletin du 16 novembre détaille aussi le correctif de démarrage de PhotoCraft sous Windows et la sélection de texte sur plusieurs pages dans PdfCraft, sur leurs branches principales. Le wiki officiel propose aussi un nouveau guide pour débuter avec AniCraft.",
    "Lire le bulletin du 17 novembre (en anglais)",
    "Lire le bulletin du 16 novembre (en anglais)",
  ],
  hi: [
    "17 नवंबर का ArtCraft अपडेट",
    "सुबह की जाँच में कोई नया रिलीज़ नहीं मिला। DesignCraft की मुख्य शाखा में दाएँ से बाएँ बाइंडिंग वाले आमने-सामने के पन्नों के लेबल सुधारे गए हैं। 16 नवंबर के बुलेटिन में PhotoCraft के Windows पर शुरू होने से जुड़ा सुधार और PdfCraft में कई पन्नों पर टेक्स्ट चुनने की सुविधा भी दर्ज है। दोनों बदलाव मुख्य शाखाओं में हैं। आधिकारिक विकी में AniCraft की शुरुआती गाइड भी जुड़ी है।",
    "17 नवंबर का बुलेटिन पढ़ें (अंग्रेज़ी)",
    "16 नवंबर का बुलेटिन पढ़ें (अंग्रेज़ी)",
  ],
};

export function november17Digest(locale: Locale): LocalizedSection | undefined {
  const summary = summaries[locale];
  if (!summary) return undefined;
  const [heading, paragraph, todayLabel, priorLabel] = summary;
  return {
    id: "update-2026-11-17",
    heading,
    paragraphs: [paragraph, {"en": "", "en-AU": "TextureCraft’s roadmap follow-up, checked 18 November, says .spp import is still a future goal, not an implemented reader.", "zh-Hant": "11 月 18 日補查：TextureCraft 路線圖說明，.spp 匯入仍屬未來目標，目前尚未實作讀取功能。", "de": "Nachprüfung am 18. November: Laut TextureCraft-Roadmap bleibt der .spp-Import ein Zukunftsziel; ein Reader ist nicht implementiert.", "pl": "Kontrola 18 listopada: plan TextureCraft nadal określa import .spp jako przyszły cel; czytnik nie jest zaimplementowany.", "ja": "11月18日の追加確認：TextureCraftのロードマップでは、.sppの読み込みは今後の目標で、まだ実装されていません。", "ko": "11월 18일 추가 확인: TextureCraft 로드맵에 따르면 .spp 가져오기는 향후 목표이며 아직 구현되지 않았습니다.", "fr": "Suivi du 18 novembre : la feuille de route TextureCraft indique que l’import .spp reste un objectif futur, sans lecteur implémenté.", "hi": "18 नवंबर की अतिरिक्त जाँच: TextureCraft की योजना में .spp आयात भविष्य का लक्ष्य है; रीडर अभी लागू नहीं है।"}[locale] ?? ""],
    links: [
      { label: todayLabel, href: "https://opensourceadobe.com/updates/2026-11-17/" },
      { label: priorLabel, href: "https://opensourceadobe.com/updates/2026-11-16/" },
    ],
  };
}
