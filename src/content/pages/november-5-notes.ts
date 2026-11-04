import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "5 November: patch releases and dated documentation",
    "TextureCraft 0.3.1 and MaterialCraft 0.1.1 belong to 5 November Beijing time. PdfCraft 0.18.1 and WordCraft 0.15.1 belong to 4 November; all were checked here on 5 November. WordCraft release notes now include the mirrored Arabic interface. New PhotoCraft action-history documentation follows 0.20.1 and does not establish installer support. Package metadata checked; no independent installation test. Community coverage is partial."
  ],
  "zh-Hant": [
    "11 月 5 日：修補版本與分日文件",
    "TextureCraft 0.3.1、MaterialCraft 0.1.1 依北京時間歸入 11 月 5 日；PdfCraft 0.18.1、WordCraft 0.15.1 歸入 11 月 4 日，皆於 11 月 5 日核查。WordCraft 發布說明已列出阿拉伯語鏡像介面。PhotoCraft 動作歷史文件晚於 0.20.1，不能視為該安裝包功能。已核對套件資料，未獨立安裝實測；社群核查有限。"
  ],
  "de": [
    "5. November: Korrekturversionen und datierte Dokumentation",
    "TextureCraft 0.3.1 und MaterialCraft 0.1.1 gehören zum 5. November Pekinger Zeit; PdfCraft 0.18.1 und WordCraft 0.15.1 zum 4. November. Alle wurden am 5. November geprüft. WordCraft nennt nun die gespiegelte arabische Oberfläche. PhotoCrafts neue Aktionshistorie ist Entwicklungsdokumentation nach 0.20.1, kein Nachweis für den Installer. Paketmetadaten geprüft, kein eigener Installationstest; Community-Abdeckung teilweise."
  ],
  "pl": [
    "5 listopada: poprawki i dokumentacja według dat",
    "TextureCraft 0.3.1 i MaterialCraft 0.1.1 przypadają na 5 listopada czasu pekińskiego, a PdfCraft 0.18.1 i WordCraft 0.15.1 na 4 listopada. Wszystkie sprawdzono 5 listopada. WordCraft wymienia teraz lustrzany interfejs arabski. Nowa historia akcji PhotoCraft to dokumentacja rozwojowa po 0.20.1, bez potwierdzenia w instalatorze. Sprawdzono metadane, bez własnego testu instalacji; dostęp do społeczności częściowy."
  ],
  "ja": [
    "11月5日：修正版と日付別の文書",
    "TextureCraft 0.3.1とMaterialCraft 0.1.1は北京時間11月5日、PdfCraft 0.18.1とWordCraft 0.15.1は11月4日です。すべて11月5日に確認しました。WordCraftのリリースノートにはアラビア語の左右反転UIが含まれます。PhotoCraftのアクション履歴文書は0.20.1以降の開発文書で、インストーラーの機能を保証しません。パッケージ情報のみ確認し、独自のインストール試験は未実施。コミュニティ確認は限定的です。"
  ],
  "ko": [
    "11월 5일: 패치 출시와 날짜별 문서",
    "TextureCraft 0.3.1과 MaterialCraft 0.1.1은 베이징 시간 11월 5일, PdfCraft 0.18.1과 WordCraft 0.15.1은 11월 4일입니다. 모두 11월 5일 확인했습니다. WordCraft 출시 노트에는 아랍어 좌우 반전 UI가 포함됩니다. PhotoCraft 작업 기록 문서는 0.20.1 이후 개발 문서이며 설치 파일 기능을 보장하지 않습니다. 패키지 정보만 확인했고 자체 설치 시험은 하지 않았습니다. 커뮤니티 확인은 제한적입니다."
  ],
  "fr": [
    "5 novembre : correctifs et documentation datée",
    "TextureCraft 0.3.1 et MaterialCraft 0.1.1 datent du 5 novembre à Pékin ; PdfCraft 0.18.1 et WordCraft 0.15.1 du 4 novembre. Tous ont été vérifiés le 5 novembre. WordCraft mentionne désormais l’interface arabe en miroir. L’historique des actions PhotoCraft est documenté après 0.20.1, sans preuve pour cet installateur. Métadonnées vérifiées, sans test indépendant d’installation ; couverture communautaire partielle."
  ],
  "hi": [
    "5 नवंबर: पैच रिलीज़ और तारीख़वार दस्तावेज़",
    "TextureCraft 0.3.1 और MaterialCraft 0.1.1 बीजिंग समय में 5 नवंबर के हैं; PdfCraft 0.18.1 और WordCraft 0.15.1, 4 नवंबर के हैं। सभी की जाँच 5 नवंबर को हुई। WordCraft रिलीज़ नोट में अब अरबी का दाएँ-से-बाएँ इंटरफ़ेस है। PhotoCraft का नया एक्शन इतिहास 0.20.1 के बाद का विकास दस्तावेज़ है, उस इंस्टॉलर की पुष्टि नहीं। पैकेज जानकारी जाँची गई; स्वतंत्र इंस्टॉलेशन परीक्षण नहीं हुआ। समुदाय की जाँच आंशिक है।"
  ]
};
export function november5Digest(locale: Locale): LocalizedSection | undefined {
 const c=copy[locale]; return c ? {id:"update-2026-11-05",heading:c[0],paragraphs:[c[1]],links:[{label:"4 November (English)",href:"https://opensourceadobe.com/updates/2026-11-04/"},{label:"5 November (English)",href:"https://opensourceadobe.com/updates/2026-11-05/"}]} : undefined;
}
