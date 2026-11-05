import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "6 November: patches checked",
    "Seventeen further official releases belong to 5 November Beijing time and were checked on 6 November. PhotoCraft 0.20.2, PdfCraft 0.18.2 and DesignCraft 0.17.2 are current. Most patch notes only link a changelog; no new features or readiness are inferred. No November 6 release found at this early check."
  ],
  "zh-Hant": [
    "11 月 6 日：修補版本核查",
    "新增核對的 17 個官方版本依北京時間歸入 11 月 5 日，實際核查日為 11 月 6 日。現為 PhotoCraft 0.20.2、PdfCraft 0.18.2、DesignCraft 0.17.2。多數修補說明僅連結變更紀錄，不推斷新功能或成熟度；本次凌晨核查未發現 11 月 6 日發布。"
  ],
  "de": [
    "6. November: Korrekturversionen geprüft",
    "17 weitere offizielle Veröffentlichungen gehören zum 5. November Pekinger Zeit, geprüft am 6. November. Aktuell: PhotoCraft 0.20.2, PdfCraft 0.18.2, DesignCraft 0.17.2. Meist nur ein Changelog-Link; keine neuen Funktionen oder Reife abgeleitet. Bei dieser frühen Prüfung keine Veröffentlichung vom 6. November gefunden."
  ],
  "pl": [
    "6 listopada: sprawdzone poprawki",
    "17 kolejnych oficjalnych wydań przypada na 5 listopada czasu pekińskiego; sprawdzono 6 listopada. Aktualne: PhotoCraft 0.20.2, PdfCraft 0.18.2, DesignCraft 0.17.2. Zwykle podano tylko odnośnik do zmian, bez wniosków o nowych funkcjach lub dojrzałości. Wczesna kontrola nie wykazała wydań z 6 listopada."
  ],
  "ja": [
    "11月6日：修正版を確認",
    "追加の公式17リリースは北京時間11月5日分で、確認日は11月6日です。現在はPhotoCraft 0.20.2、PdfCraft 0.18.2、DesignCraft 0.17.2。多くの説明は変更履歴へのリンクのみで、新機能や成熟度は推測しません。今回の早朝確認では11月6日分の公開は見つかりませんでした。"
  ],
  "ko": [
    "11월 6일: 패치 확인",
    "추가 공식 출시 17건은 베이징 시간 11월 5일에 해당하며 11월 6일 확인했습니다. 현재 PhotoCraft 0.20.2, PdfCraft 0.18.2, DesignCraft 0.17.2입니다. 대부분 변경 기록 링크만 있어 새 기능이나 성숙도를 추정하지 않습니다. 이번 새벽 확인에서 11월 6일 출시는 발견하지 못했습니다."
  ],
  "fr": [
    "6 novembre : correctifs vérifiés",
    "17 publications officielles supplémentaires datent du 5 novembre à Pékin, vérifiées le 6 novembre. Versions actuelles : PhotoCraft 0.20.2, PdfCraft 0.18.2, DesignCraft 0.17.2. La plupart renvoient seulement au journal des modifications, sans déduire de nouvelles fonctions ni maturité. Aucun lancement du 6 novembre trouvé lors de ce contrôle matinal."
  ],
  "hi": [
    "6 नवंबर: पैच की जाँच",
    "17 अतिरिक्त आधिकारिक रिलीज़ बीजिंग समय में 5 नवंबर की हैं; जाँच 6 नवंबर को हुई। वर्तमान संस्करण: PhotoCraft 0.20.2, PdfCraft 0.18.2, DesignCraft 0.17.2। अधिकांश विवरण केवल बदलावों की कड़ी देते हैं; नई सुविधाओं या परिपक्वता का निष्कर्ष नहीं निकाला गया। इस सुबह की जाँच में 6 नवंबर की रिलीज़ नहीं मिली।"
  ]
};
export function november6Digest(locale: Locale): LocalizedSection | undefined {
const c=copy[locale]; return c ? {id:"update-2026-11-06",heading:c[0],paragraphs:[c[1]],links:[{label:"5 November (English)",href:"https://opensourceadobe.com/updates/2026-11-05/"},{label:"6 November (English)",href:"https://opensourceadobe.com/updates/2026-11-06/"}]} : undefined;
}
