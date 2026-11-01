import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "2 November: Launcher updates",
    "Launcher 0.12.0 belongs to 1 November and 0.13.0 to 2 November Beijing time. Both were checked here on 2 November. The latest notes add TextureCraft and a setting to hide community apps. Package metadata checked; no independent installation test. Community access remains limited."
  ],
  "zh-Hant": [
    "11 月 2 日：Launcher 更新",
    "依北京時間，Launcher 0.12.0 歸入 11 月 1 日，0.13.0 歸入 11 月 2 日，均於 11 月 2 日核查。最新說明新增 TextureCraft 與隱藏社群應用的設定。已核對套件資料，未獨立安裝實測；社群來源存取仍受限制。"
  ],
  "de": [
    "2. November: Launcher-Updates",
    "Launcher 0.12.0 gehört zum 1., 0.13.0 zum 2. November in Pekinger Zeit; beide hier am 2. November geprüft. Neu: TextureCraft und eine Einstellung zum Ausblenden von Community-Apps. Paketmetadaten geprüft, kein eigener Installationstest; Community-Zugriff eingeschränkt."
  ],
  "pl": [
    "2 listopada: aktualizacje Launchera",
    "Launcher 0.12.0 przypada na 1, a 0.13.0 na 2 listopada czasu pekińskiego; oba sprawdzono 2 listopada. Nowości to TextureCraft i ukrywanie aplikacji społeczności. Sprawdzono metadane, bez własnego testu instalacji; dostęp do społeczności ograniczony."
  ],
  "ja": [
    "11月2日：Launcher更新",
    "北京時間でLauncher 0.12.0は11月1日、0.13.0は11月2日に該当し、両方を11月2日に確認しました。最新版はTextureCraftとコミュニティアプリを非表示にする設定を追加。パッケージ情報のみ確認し、独自のインストール試験は未実施。コミュニティ確認には制限があります。"
  ],
  "ko": [
    "11월 2일: Launcher 업데이트",
    "베이징 시간으로 Launcher 0.12.0은 11월 1일, 0.13.0은 11월 2일이며 모두 11월 2일 확인했습니다. 최신 버전은 TextureCraft와 커뮤니티 앱 숨기기 설정을 추가합니다. 패키지 정보만 확인했으며 자체 설치 시험은 하지 않았습니다. 커뮤니티 접근은 제한됩니다."
  ],
  "fr": [
    "2 novembre : mises à jour du Launcher",
    "Launcher 0.12.0 date du 1er novembre et 0.13.0 du 2 novembre à Pékin ; vérifiés ici le 2 novembre. Nouveautés : TextureCraft et masquage des applications communautaires. Métadonnées vérifiées, sans test indépendant d’installation ; accès communautaire limité."
  ],
  "hi": [
    "2 नवंबर: Launcher अपडेट",
    "बीजिंग समय में Launcher 0.12.0 की तारीख 1 नवंबर और 0.13.0 की 2 नवंबर है; दोनों की जाँच 2 नवंबर को हुई। नवीनतम में TextureCraft और सामुदायिक ऐप छिपाने की सेटिंग है। पैकेज जानकारी जाँची गई, स्वतंत्र इंस्टॉलेशन परीक्षण नहीं हुआ। समुदाय तक पहुँच सीमित है।"
  ]
};
export function november2Digest(locale: Locale): LocalizedSection | undefined {
 const c=copy[locale]; return c ? {id:"update-2026-11-02",heading:c[0],paragraphs:[c[1]],links:[{label:"1 November (English)",href:"https://opensourceadobe.com/updates/2026-11-01/"},{label:"2 November (English)",href:"https://opensourceadobe.com/updates/2026-11-02/"}]} : undefined;
}
