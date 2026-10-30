import type { Locale } from "@/i18n/config";
import type { LocalizedSection } from "./types";
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "31 October check: Launcher 0.10.0",
    "Launcher 0.10.0 was published on 30 October Beijing time and checked here on 31 October. Version selection has platform limits; no independent installation test. Selected development documentation is separate from released features.",
    "Full English dated review"
  ],
  "zh-Hant": [
    "10 月 31 日核查：Launcher 0.10.0",
    "Launcher 0.10.0 於北京時間 10 月 30 日發布，本站於 31 日核查並補錄。版本選擇有平台限制，未進行獨立安裝測試；開發文件變更不等於已發布功能。",
    "英文完整日期簡報"
  ],
  "de": [
    "Prüfung vom 31. Oktober: Launcher 0.10.0",
    "Launcher 0.10.0 erschien am 30. Oktober nach Pekinger Zeit; geprüft am 31. Oktober. Die Versionswahl hat Plattformgrenzen. Kein unabhängiger Installationstest; Entwicklungsdokumentation bestätigt keine veröffentlichten Funktionen.",
    "Vollständiger Bericht auf Englisch"
  ],
  "pl": [
    "Kontrola 31 października: Launcher 0.10.0",
    "Launcher 0.10.0 wydano 30 października czasu pekińskiego; sprawdzono 31 października. Wybór wersji ma ograniczenia platformowe. Bez niezależnego testu instalacji; dokumentacja rozwojowa nie potwierdza wydanych funkcji.",
    "Pełny raport po angielsku"
  ],
  "fr": [
    "Vérification du 31 octobre : Launcher 0.10.0",
    "Launcher 0.10.0 est paru le 30 octobre, heure de Pékin ; vérifié ici le 31. Le choix de version a des limites selon la plateforme. Aucun test indépendant d’installation ; la documentation de développement ne confirme pas des fonctions livrées.",
    "Rapport complet en anglais"
  ],
  "ja": [
    "10月31日の確認：Launcher 0.10.0",
    "Launcher 0.10.0 は北京時間10月30日公開、当サイトでは31日に確認・追記しました。バージョン選択には環境別の制限があります。独自のインストール検証は未実施。開発文書の変更は公開版の機能を保証しません。",
    "英語の詳細日報"
  ],
  "ko": [
    "10월 31일 확인: Launcher 0.10.0",
    "Launcher 0.10.0은 베이징 시간 10월 30일 공개되었으며 31일 확인해 보충했습니다. 버전 선택에는 플랫폼별 제한이 있습니다. 독립 설치 테스트는 하지 않았으며 개발 문서 변경은 출시 기능을 보장하지 않습니다.",
    "영어 전체 일지"
  ],
  "hi": [
    "31 अक्टूबर की जाँच: Launcher 0.10.0",
    "Launcher 0.10.0 बीजिंग समय के अनुसार 30 अक्टूबर को जारी हुआ और यहाँ 31 अक्टूबर को जाँचा गया। संस्करण चयन में प्लेटफ़ॉर्म सीमाएँ हैं। स्वतंत्र इंस्टॉलेशन परीक्षण नहीं किया गया; विकास दस्तावेज़ जारी सुविधाओं की पुष्टि नहीं हैं।",
    "पूरा अंग्रेज़ी विवरण"
  ]
};
export function october31Digest(locale: Locale): LocalizedSection | undefined { const c=copy[locale]; return c ? {id:"update-2026-10-31",heading:c[0],paragraphs:[c[1]],links:[{label:c[2],href:"https://opensourceadobe.com/updates/2026-10-30/"}]} : undefined; }
