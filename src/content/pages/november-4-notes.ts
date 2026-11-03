import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "4 November: dated releases and agent docs",
    "Sixteen official releases belong to 3 November Beijing time and were checked here on 4 November, including PhotoCraft 0.20.1, Launcher 0.14.0 and MaterialCraft 0.1.0 (in development). Today’s Craft Anything Copilot guide is development documentation after 0.3.0. Package metadata checked; no independent installation test. Community coverage is partial."
  ],
  "zh-Hant": [
    "11 月 4 日：版本補錄與代理文件",
    "16 個正式版本依北京時間歸入 11 月 3 日，於 11 月 4 日核查，包括 PhotoCraft 0.20.1、Launcher 0.14.0 與仍在開發中的 MaterialCraft 0.1.0。今天 Craft Anything 的 Copilot 指南屬於 0.3.0 之後的開發文件。已核對套件資料，未獨立安裝實測；社群核查範圍有限。"
  ],
  "de": [
    "4. November: Veröffentlichungen und Agenten-Dokumentation",
    "Sechzehn offizielle Versionen gehören zum 3. November Pekinger Zeit; geprüft am 4. November, darunter PhotoCraft 0.20.1, Launcher 0.14.0 und MaterialCraft 0.1.0 (in Entwicklung). Die heutige Copilot-Anleitung für Craft Anything ist Entwicklungsdokumentation nach 0.3.0. Paketmetadaten geprüft, kein eigener Installationstest; Community-Abdeckung teilweise."
  ],
  "pl": [
    "4 listopada: wydania i dokumentacja agentów",
    "Szesnaście oficjalnych wydań przypada na 3 listopada czasu pekińskiego; sprawdzono je 4 listopada, w tym PhotoCraft 0.20.1, Launcher 0.14.0 i MaterialCraft 0.1.0 (w rozwoju). Dzisiejszy przewodnik Copilot dla Craft Anything to dokumentacja rozwojowa po 0.3.0. Sprawdzono metadane, bez własnego testu instalacji; dostęp do społeczności częściowy."
  ],
  "ja": [
    "11月4日：リリース補記とエージェント文書",
    "16件の正式リリースは北京時間11月3日に該当し、11月4日に確認しました。PhotoCraft 0.20.1、Launcher 0.14.0、開発中のMaterialCraft 0.1.0を含みます。本日のCraft Anything Copilotガイドは0.3.0以降の開発文書です。パッケージ情報を確認しましたが、独自のインストール試験は未実施。コミュニティ確認は限定的です。"
  ],
  "ko": [
    "11월 4일: 출시 기록 보완과 에이전트 문서",
    "공식 출시 16건은 베이징 시간 11월 3일이며 11월 4일 확인했습니다. PhotoCraft 0.20.1, Launcher 0.14.0, 개발 중인 MaterialCraft 0.1.0이 포함됩니다. 오늘 Craft Anything Copilot 안내는 0.3.0 이후의 개발 문서입니다. 패키지 정보만 확인했으며 자체 설치 시험은 하지 않았습니다. 커뮤니티 확인 범위는 제한적입니다."
  ],
  "fr": [
    "4 novembre : publications et documentation des agents",
    "Seize versions officielles datent du 3 novembre à Pékin, vérifiées le 4 novembre, dont PhotoCraft 0.20.1, Launcher 0.14.0 et MaterialCraft 0.1.0 (en développement). Le guide Copilot de Craft Anything est une documentation de développement après 0.3.0. Métadonnées vérifiées, sans test indépendant d’installation ; couverture communautaire partielle."
  ],
  "hi": [
    "4 नवंबर: रिलीज़ रिकॉर्ड और एजेंट दस्तावेज़",
    "16 आधिकारिक रिलीज़ बीजिंग समय में 3 नवंबर के हैं; जाँच 4 नवंबर को हुई। इनमें PhotoCraft 0.20.1, Launcher 0.14.0 और विकासाधीन MaterialCraft 0.1.0 शामिल हैं। आज का Craft Anything Copilot गाइड 0.3.0 के बाद का विकास दस्तावेज़ है। पैकेज जानकारी जाँची गई, स्वतंत्र इंस्टॉलेशन परीक्षण नहीं हुआ। समुदाय की जाँच आंशिक है।"
  ]
};
export function november4Digest(locale: Locale): LocalizedSection | undefined {
 const c=copy[locale]; return c ? {id:"update-2026-11-04",heading:c[0],paragraphs:[c[1]],links:[{label:"3 November (English)",href:"https://opensourceadobe.com/updates/2026-11-03/"},{label:"4 November (English)",href:"https://opensourceadobe.com/updates/2026-11-04/"}]} : undefined;
}
