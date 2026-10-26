import type { Locale } from '@/i18n/config';
import type { LocalizedSection } from './types';
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "27 October check: development docs, no new release",
    "No newer official release was found. Four documentation events belong to 26 October Beijing time: LightCraft’s Sony profile, WordCraft installer scope, and FigCraft plugin saving and examples. FigCraft Vue documentation merged on 27 October at 01:48:54 Beijing time. Checked and published here on 27 October. These docs follow the current installers; WordCraft 0.11.0 has no windows-user MSI. No independent app test. Reddit originals were readable; X and Google were restricted. YouTube metadata was readable, but video coverage is incomplete.",
    "26 October documentation (English)",
    "27 October check and sources (English)"
  ],
  "zh-Hant": [
    "10 月 27 日核查：開發文件更新，未發現新版本",
    "四項文件事件歸入北京時間 26 日：LightCraft 的 Sony 描述檔、WordCraft 安裝範圍，以及 FigCraft 外掛儲存與範例。FigCraft Vue 文件於 27 日 01:48:54 合併。實際核查與本站補錄均為 27 日；文件晚於目前安裝版，WordCraft 0.11.0 並無 windows-user MSI。未作本站實測。Reddit 原帖可讀，X 與 Google 存取受限；YouTube 僅讀取資料，影片覆蓋不完整。",
    "26 日文件（英文）",
    "27 日核查與來源（英文）"
  ],
  "de": [
    "Prüfung am 27. Oktober: Entwicklungsdokumentation",
    "Kein neueres offizielles Release gefunden. Vier Dokumentationsereignisse gehören zum 26. Oktober in Peking: Sony-Profil in LightCraft, Installationsumfang in WordCraft sowie Plugin-Speicherung und Beispiele in FigCraft. Die Vue-Dokumentation wurde am 27. um 01:48:54 Uhr Pekinger Zeit zusammengeführt. Prüfung und Veröffentlichung hier am 27. Die Dokumente folgen den aktuellen Installern; WordCraft 0.11.0 enthält keine windows-user-MSI. Kein eigener App-Test. Reddit lesbar, X und Google eingeschränkt; YouTube-Metadaten lesbar, Videoabdeckung unvollständig.",
    "Dokumentation vom 26. Oktober (Englisch)",
    "Prüfung und Quellen vom 27. Oktober (Englisch)"
  ],
  "pl": [
    "Kontrola 27 października: dokumentacja rozwojowa",
    "Nie znaleziono nowszej oficjalnej wersji. Cztery zmiany dokumentacji należą do 26 października w Pekinie: profil Sony w LightCraft, zakres instalacji WordCraft oraz zapis plików przez wtyczki i przykłady FigCraft. Dokumentację Vue scalono 27 października o 01:48:54 w Pekinie. Sprawdzenie i publikacja tutaj: 27 października. Dokumenty są późniejsze niż obecne instalatory; WordCraft 0.11.0 nie ma windows-user MSI. Bez własnych testów aplikacji. Reddit był czytelny, X i Google ograniczone; metadane YouTube czytelne, przegląd filmów niepełny.",
    "Dokumentacja z 26 października (angielski)",
    "Kontrola i źródła z 27 października (angielski)"
  ],
  "ja": [
    "10月27日確認：開発資料の更新",
    "新しい公式リリースは見つかりませんでした。LightCraftのSonyプロファイル、WordCraftのインストール範囲、FigCraftのプラグイン保存と例の4件は北京時間26日です。FigCraftのVue資料は27日01:48:54に統合されました。実際の確認と当サイトの掲載は27日です。資料は現行インストーラーより後のもので、WordCraft 0.11.0にはwindows-user MSIがありません。独自のアプリ実測は行っていません。Reddit原文は読めましたがXとGoogleは制限されました。YouTubeはメタデータを読めた範囲で、動画の確認は不完全です。",
    "26日の資料（英語）",
    "27日の確認と出典（英語）"
  ],
  "ko": [
    "10월 27일 확인: 개발 문서 변경",
    "더 새로운 공식 릴리스는 발견하지 못했습니다. LightCraft Sony 프로필, WordCraft 설치 범위, FigCraft 플러그인 저장과 예시 등 네 문서 사건은 베이징 시간 26일입니다. FigCraft Vue 문서는 27일 01:48:54에 병합됐습니다. 실제 확인과 이 사이트 게시일은 27일입니다. 문서들은 현재 설치 버전보다 나중이며 WordCraft 0.11.0에는 windows-user MSI가 없습니다. 자체 앱 실측은 하지 않았습니다. Reddit 원문은 읽었지만 X와 Google은 제한됐습니다. YouTube 메타데이터는 읽을 수 있었으나 영상 확인은 불완전합니다.",
    "26일 문서(영어)",
    "27일 확인과 출처(영어)"
  ],
  "fr": [
    "Contrôle du 27 octobre : documentation de développement",
    "Aucune version officielle plus récente trouvée. Quatre événements documentaires relèvent du 26 octobre à Pékin : profil Sony de LightCraft, portée des installateurs WordCraft, sauvegarde par plugin et exemples FigCraft. La documentation Vue a été fusionnée le 27 à 01:48:54 à Pékin. Vérification et publication ici le 27. Ces documents suivent les installateurs actuels ; WordCraft 0.11.0 ne contient pas de MSI windows-user. Aucun test indépendant des applications. Reddit lisible, X et Google limités ; métadonnées YouTube lisibles, couverture vidéo incomplète.",
    "Documentation du 26 octobre (anglais)",
    "Contrôle et sources du 27 octobre (anglais)"
  ],
  "hi": [
    "27 अक्टूबर की जाँच: विकास दस्तावेज़ बदले",
    "कोई नई आधिकारिक रिलीज़ नहीं मिली। LightCraft Sony प्रोफ़ाइल, WordCraft इंस्टॉलर का दायरा, FigCraft प्लगइन से फ़ाइल सहेजना और उदाहरण—ये चार घटनाएँ बीजिंग समय 26 अक्टूबर की हैं। FigCraft Vue दस्तावेज़ 27 अक्टूबर 01:48:54 पर मर्ज हुए। वास्तविक जाँच और यहाँ प्रकाशन 27 अक्टूबर को हुआ। दस्तावेज़ वर्तमान इंस्टॉलर के बाद के हैं; WordCraft 0.11.0 में windows-user MSI नहीं है। अपना ऐप परीक्षण नहीं किया। Reddit मूल पोस्ट पढ़े गए; X और Google सीमित रहे। YouTube मेटाडेटा पढ़ा गया, पर वीडियो कवरेज अधूरा है।",
    "26 अक्टूबर के दस्तावेज़ (English)",
    "27 अक्टूबर की जाँच और स्रोत (English)"
  ]
};
export function october27Digest(locale: Locale): LocalizedSection | undefined {
 const c = copy[locale];
 return c ? { id: 'update-2026-10-27', heading: c[0], paragraphs: [c[1]], links: [{label:c[2],href:'https://opensourceadobe.com/updates/2026-10-26/'},{label:c[3],href:'https://opensourceadobe.com/updates/2026-10-27/'}] } : undefined;
}
