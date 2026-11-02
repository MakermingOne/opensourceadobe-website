import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "3 November: releases backfilled",
    "Thirteen app releases belong to 2 November Beijing time and were checked here on 3 November, including PhotoCraft 0.19.0. Today’s SoundCraft README change is development documentation after 0.16.0. Package metadata checked; no independent installation test. Community access remains limited. Also checked: TextureCraft 0.2.0 and Craft Anything 0.3.0; earlier releases are backfilled on their event dates."
  ],
  "zh-Hant": [
    "11 月 3 日：補錄正式版本",
    "13 個應用版本依北京時間歸入 11 月 2 日，於 11 月 3 日核查，包括 PhotoCraft 0.19.0。今天的 SoundCraft README 改動屬於 0.16.0 之後的開發文件。已核對套件資料，未獨立安裝實測；社群來源存取仍受限制。 另已核查 TextureCraft 0.2.0 與 Craft Anything 0.3.0；較早版本按事件日期補錄。"
  ],
  "de": [
    "3. November: Veröffentlichungen nachgetragen",
    "Dreizehn App-Versionen gehören zum 2. November Pekinger Zeit und wurden am 3. November geprüft, darunter PhotoCraft 0.19.0. Die heutige SoundCraft-README-Änderung ist Entwicklungsdokumentation nach 0.16.0. Paketmetadaten geprüft, kein eigener Installationstest; Community-Zugriff eingeschränkt. Zusätzlich geprüft: TextureCraft 0.2.0 und Craft Anything 0.3.0; frühere Versionen sind nach Ereignisdatum ergänzt."
  ],
  "pl": [
    "3 listopada: uzupełnione wydania",
    "Trzynaście wydań aplikacji przypada na 2 listopada czasu pekińskiego; sprawdzono je 3 listopada, w tym PhotoCraft 0.19.0. Dzisiejsza zmiana README SoundCraft to dokumentacja rozwojowa po 0.16.0. Sprawdzono metadane, bez własnego testu instalacji; dostęp do społeczności ograniczony. Sprawdzono też TextureCraft 0.2.0 i Craft Anything 0.3.0; starsze wydania uzupełniono według dat zdarzeń."
  ],
  "ja": [
    "11月3日：正式リリースを補記",
    "13アプリのリリースは北京時間で11月2日に該当し、PhotoCraft 0.19.0を含め11月3日に確認しました。本日のSoundCraft README変更は0.16.0以降の開発文書です。パッケージ情報のみ確認し、独自のインストール試験は未実施。コミュニティ確認には制限があります。 TextureCraft 0.2.0とCraft Anything 0.3.0も確認し、過去のリリースは発生日に補記しました。"
  ],
  "ko": [
    "11월 3일: 정식 출시 기록 보완",
    "PhotoCraft 0.19.0을 포함한 앱 13개의 출시는 베이징 시간 11월 2일이며 11월 3일 확인했습니다. 오늘 SoundCraft README 변경은 0.16.0 이후의 개발 문서입니다. 패키지 정보만 확인했으며 자체 설치 시험은 하지 않았습니다. 커뮤니티 접근은 제한됩니다. TextureCraft 0.2.0과 Craft Anything 0.3.0도 확인했으며 이전 출시는 발생 날짜별로 보완했습니다."
  ],
  "fr": [
    "3 novembre : publications ajoutées",
    "Treize versions datent du 2 novembre à Pékin, vérifiées le 3 novembre, dont PhotoCraft 0.19.0. La modification du README SoundCraft est une documentation de développement après 0.16.0. Métadonnées vérifiées, sans test indépendant d’installation ; accès communautaire limité. TextureCraft 0.2.0 et Craft Anything 0.3.0 ont aussi été vérifiés ; les anciennes versions sont classées par date réelle."
  ],
  "hi": [
    "3 नवंबर: पुराने दिन के रिलीज़ जोड़े गए",
    "PhotoCraft 0.19.0 सहित 13 ऐप रिलीज़ बीजिंग समय में 2 नवंबर के हैं; जाँच 3 नवंबर को हुई। आज का SoundCraft README बदलाव 0.16.0 के बाद का विकास दस्तावेज़ है। पैकेज जानकारी जाँची गई, स्वतंत्र इंस्टॉलेशन परीक्षण नहीं हुआ। समुदाय तक पहुँच सीमित है। TextureCraft 0.2.0 और Craft Anything 0.3.0 भी जाँचे गए; पुराने रिलीज़ वास्तविक घटना की तारीख पर जोड़े गए हैं।"
  ]
};
export function november3Digest(locale: Locale): LocalizedSection | undefined {
 const c=copy[locale]; return c ? {id:"update-2026-11-03",heading:c[0],paragraphs:[c[1]],links:[{label:"25 October (English)",href:"https://opensourceadobe.com/updates/2026-10-25/"},{label:"1 November (English)",href:"https://opensourceadobe.com/updates/2026-11-01/"},{label:"2 November (English)",href:"https://opensourceadobe.com/updates/2026-11-02/"},{label:"3 November (English)",href:"https://opensourceadobe.com/updates/2026-11-03/"}]} : undefined;
}
