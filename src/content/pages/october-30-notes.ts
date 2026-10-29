import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "30 October check: fourteen releases dated 29 October",
    "Fourteen official releases belong to 29 October Beijing time and were checked and published here on 30 October. PhotoCraft 0.17.0 and Craft Launcher 0.9.0 are included. Package metadata was checked; no independent installation test or maturity upgrade. X, YouTube and Google coverage remains limited.",
    "29 October releases (English)",
    "30 October check (English)"
  ],
  "zh-Hant": [
    "10 月 30 日核查：補錄 29 日十四個正式版本",
    "十四個官方版本依精確發布時間歸入北京時間 29 日，本站於 30 日核查並發布，包括 PhotoCraft 0.17.0 與 Craft Launcher 0.9.0。已核對安裝包中繼資料，未進行獨立安裝實測，也不提高成熟度評級。X、YouTube 與 Google 核查仍受限制。",
    "29 日版本與來源（英文）",
    "30 日核查（英文）"
  ],
  "de": [
    "Prüfung am 30. Oktober: vierzehn Releases vom 29.",
    "Vierzehn offizielle Releases gehören nach Pekinger Zeit zum 29. Oktober; hier geprüft und veröffentlicht am 30., darunter PhotoCraft 0.17.0 und Craft Launcher 0.9.0. Paketmetadaten geprüft, kein eigener Installationstest und keine höhere Reifeeinstufung. X, YouTube und Google nur eingeschränkt zugänglich.",
    "Releases vom 29. (Englisch)",
    "Prüfung vom 30. (Englisch)"
  ],
  "pl": [
    "Kontrola 30 października: czternaście wydań z 29.",
    "Czternaście oficjalnych wydań przypada na 29 października w Pekinie; sprawdzono i opublikowano je tutaj 30., w tym PhotoCraft 0.17.0 i Craft Launcher 0.9.0. Sprawdzono metadane pakietów, bez własnego testu instalacji ani zmiany oceny dojrzałości. Dostęp do X, YouTube i Google ograniczony.",
    "Wydania z 29. (angielski)",
    "Kontrola z 30. (angielski)"
  ],
  "ja": [
    "10月30日確認：29日の正式リリース14件",
    "北京時間29日の正式リリース14件を30日に確認・掲載しました。PhotoCraft 0.17.0とCraft Launcher 0.9.0を含みます。パッケージ情報を確認しましたが、独自のインストール試験や成熟度評価の引き上げは行っていません。X、YouTube、Googleの確認は制限されています。",
    "29日のリリース（英語）",
    "30日の確認（英語）"
  ],
  "ko": [
    "10월 30일 확인: 29일 공식 릴리스 14건",
    "베이징 시간 29일의 공식 릴리스 14건을 30일 확인하고 게시했습니다. PhotoCraft 0.17.0과 Craft Launcher 0.9.0을 포함합니다. 패키지 정보를 확인했으며 자체 설치 시험이나 성숙도 평가 상향은 없습니다. X, YouTube, Google 확인에는 제한이 있습니다.",
    "29일 릴리스(영어)",
    "30일 확인(영어)"
  ],
  "fr": [
    "Contrôle du 30 octobre : quatorze versions du 29",
    "Quatorze versions officielles datent du 29 octobre à Pékin ; vérifiées et publiées ici le 30, dont PhotoCraft 0.17.0 et Craft Launcher 0.9.0. Métadonnées des paquets vérifiées, sans test indépendant d’installation ni réévaluation de maturité. Accès limité à X, YouTube et Google.",
    "Versions du 29 (anglais)",
    "Contrôle du 30 (anglais)"
  ],
  "hi": [
    "30 अक्टूबर की जाँच: 29 तारीख की चौदह रिलीज़",
    "बीजिंग समय के अनुसार 29 अक्टूबर की चौदह आधिकारिक रिलीज़ यहाँ 30 तारीख को जाँची और प्रकाशित की गईं। इनमें PhotoCraft 0.17.0 और Craft Launcher 0.9.0 हैं। पैकेज मेटाडेटा जाँचा गया; स्वतंत्र इंस्टॉलेशन परीक्षण या परिपक्वता आकलन में वृद्धि नहीं। X, YouTube और Google की जाँच सीमित रही।",
    "29 अक्टूबर की रिलीज़ (English)",
    "30 अक्टूबर की जाँच (English)"
  ]
};
export function october30Digest(locale: Locale): LocalizedSection | undefined {
 const c=copy[locale]; return c ? {id:"update-2026-10-30",heading:c[0],paragraphs:[c[1]],links:[{label:c[2],href:"https://opensourceadobe.com/updates/2026-10-29/"},{label:c[3],href:"https://opensourceadobe.com/updates/2026-10-30/"}]} : undefined;
}
