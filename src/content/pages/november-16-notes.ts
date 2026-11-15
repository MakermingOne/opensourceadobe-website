import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";

const summaries: Partial<Record<Locale, [string, string, string]>> = {
  "en-AU": [
    "16 November ArtCraft check",
    "The early check found no new release. PhotoCraft's main branch adds three Classic Actions commands, and VectorCraft's main branch adds a spelling dialog. Check your installed release before relying on either change.",
    "Read the daily brief (English)",
  ],
  "zh-Hant": [
    "11 月 16 日 ArtCraft 更新",
    "凌晨核查未發現新版本。PhotoCraft 主分支新增三項傳統動作指令，VectorCraft 主分支加入拼字檢查視窗。使用前請先確認已安裝的版本是否包含這些功能。",
    "閱讀每日簡報（英文）",
  ],
  de: [
    "ArtCraft-Update vom 16. November",
    "Bei der frühen Prüfung gab es keine neue Veröffentlichung. Im Hauptzweig von PhotoCraft sind drei Befehle für klassische Aktionen hinzugekommen, bei VectorCraft ein Dialog zur Rechtschreibprüfung. Prüfen Sie vor der Nutzung die installierte Version.",
    "Tagesbericht lesen (Englisch)",
  ],
  pl: [
    "Aktualizacja ArtCraft z 16 listopada",
    "Poranna kontrola nie wykazała nowego wydania. W głównej gałęzi PhotoCraft dodano trzy polecenia klasycznych akcji, a w VectorCraft okno sprawdzania pisowni. Przed użyciem sprawdź, czy zmiany są dostępne w zainstalowanej wersji.",
    "Przeczytaj raport dzienny (po angielsku)",
  ],
  ja: [
    "11月16日のArtCraft更新情報",
    "早朝の確認では新しいリリースは見つかりませんでした。PhotoCraftのメインブランチにクラシックアクションのコマンドが3つ、VectorCraftのメインブランチにスペルチェックのダイアログが追加されました。利用前にインストール済みのバージョンをご確認ください。",
    "日別レポートを読む（英語）",
  ],
  ko: [
    "11월 16일 ArtCraft 업데이트",
    "새벽 확인에서는 새 릴리스가 없었습니다. PhotoCraft의 메인 브랜치에는 클래식 액션 명령 세 가지가, VectorCraft의 메인 브랜치에는 맞춤법 검사 창이 추가되었습니다. 사용하기 전에 설치한 버전에 해당 기능이 포함되어 있는지 확인하세요.",
    "일일 소식 읽기(영어)",
  ],
  fr: [
    "Actualité ArtCraft du 16 novembre",
    "La vérification du matin n’a relevé aucune nouvelle version. La branche principale de PhotoCraft ajoute trois commandes pour les actions classiques. Celle de VectorCraft ajoute une boîte de dialogue de correction orthographique. Vérifiez votre version installée avant de vous appuyer sur ces changements.",
    "Lire le bulletin du jour (en anglais)",
  ],
  hi: [
    "16 नवंबर का ArtCraft अपडेट",
    "सुबह की जाँच में कोई नया रिलीज़ नहीं मिला। PhotoCraft की मुख्य शाखा में Classic Actions के तीन कमांड और VectorCraft की मुख्य शाखा में वर्तनी जाँच का डायलॉग जोड़ा गया है। इस्तेमाल करने से पहले अपने इंस्टॉल किए गए संस्करण में इनकी उपलब्धता देखें।",
    "आज का बुलेटिन पढ़ें (अंग्रेज़ी)",
  ],
};

export function november16Digest(locale: Locale): LocalizedSection | undefined {
  const summary = summaries[locale];
  if (!summary) return undefined;
  const [heading, paragraph, label] = summary;
  return {
    id: "update-2026-11-16",
    heading,
    paragraphs: [paragraph],
    links: [{ label, href: "https://opensourceadobe.com/updates/2026-11-16/" }],
  };
}
