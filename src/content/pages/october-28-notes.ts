import type { Locale } from '@/i18n/config';
import type { LocalizedSection } from './types';
const copy: Partial<Record<Locale, string[]>> = {
  "en-AU": [
    "28 October check: development docs, no new release",
    "Nine documentation events were checked and published here on 28 October. DesignCraft panels and VectorCraft taskbar docs belong to 27 October Beijing time; PhotoCraft MCP write boundaries, FilmCraft CPU export benchmarking, WordCraft pagination, CADCraft layouts/viewports and DesignCraft typography belong to 28 October. These changes follow the current installers; no new release or independent app test is established. X and Google access was limited; YouTube coverage is metadata only and incomplete.",
    "27 October documentation (English)",
    "28 October check and sources (English)"
  ],
  "zh-Hant": [
    "10 月 28 日核查：開發文件更新，未發現新版本",
    "九項文件事件於 28 日實際核查並補錄。DesignCraft 面板與 VectorCraft 工作列文件歸入北京時間 27 日；PhotoCraft MCP 寫入邊界、FilmCraft CPU 匯出基準、WordCraft 分頁、CADCraft 配置與視埠，以及 DesignCraft 排版文件歸入 28 日。均晚於目前安裝版，不代表新版本或本站實測。X 與 Google 存取受限；YouTube 僅讀取資料，影片覆蓋不完整。",
    "27 日文件（英文）",
    "28 日核查與來源（英文）"
  ],
  "de": [
    "Prüfung am 28. Oktober: Entwicklungsdokumentation",
    "Neun Dokumentationsereignisse wurden hier am 28. Oktober geprüft und veröffentlicht. DesignCraft-Panels und die VectorCraft-Taskleiste gehören zum 27. Oktober in Peking; PhotoCraft-MCP-Schreibrechte, FilmCraft-CPU-Exportbenchmarks, WordCraft-Seitenumbruch, CADCraft-Layouts/Ansichtsfenster und DesignCraft-Typografie zum 28. Die Änderungen folgen den aktuellen Installern; kein neues Release oder eigener App-Test. X und Google eingeschränkt; YouTube nur Metadaten, unvollständige Videoabdeckung.",
    "Dokumentation vom 27. Oktober (Englisch)",
    "Prüfung und Quellen vom 28. Oktober (Englisch)"
  ],
  "pl": [
    "Kontrola 28 października: dokumentacja rozwojowa",
    "Dziewięć zmian dokumentacji sprawdzono i opublikowano tutaj 28 października. Panele DesignCraft i pasek zadań VectorCraft należą do 27 października w Pekinie; uprawnienia zapisu MCP PhotoCraft, benchmark eksportu CPU FilmCraft, podział stron WordCraft, układy i rzutnie CADCraft oraz typografia DesignCraft do 28. Zmiany są późniejsze niż obecne instalatory; bez nowej wersji ani własnych testów aplikacji. X i Google ograniczone; YouTube tylko metadane, przegląd filmów niepełny.",
    "Dokumentacja z 27 października (angielski)",
    "Kontrola i źródła z 28 października (angielski)"
  ],
  "ja": [
    "10月28日確認：開発資料の更新",
    "9件の資料更新を28日に確認・掲載しました。DesignCraftのパネルとVectorCraftのタスクバー資料は北京時間27日です。PhotoCraft MCPの書き込み権限、FilmCraft CPU書き出しベンチマーク、WordCraftの改ページ、CADCraftのレイアウトとビューポート、DesignCraftの組版資料は28日です。いずれも現行インストーラーより後の資料で、新リリースや独自のアプリ実測を示しません。XとGoogleは制限され、YouTubeはメタデータのみで動画確認は不完全です。",
    "27日の資料（英語）",
    "28日の確認と出典（英語）"
  ],
  "ko": [
    "10월 28일 확인: 개발 문서 변경",
    "문서 변경 9건을 28일 확인하고 게시했습니다. DesignCraft 패널과 VectorCraft 작업 표시줄 문서는 베이징 시간 27일입니다. PhotoCraft MCP 쓰기 권한, FilmCraft CPU 내보내기 벤치마크, WordCraft 페이지 나누기, CADCraft 배치·뷰포트, DesignCraft 조판 문서는 28일입니다. 모두 현재 설치 버전 이후의 문서이며 새 릴리스나 자체 앱 실측을 뜻하지 않습니다. X와 Google은 제한됐고 YouTube는 메타데이터만 읽어 영상 확인이 불완전합니다.",
    "27일 문서(영어)",
    "28일 확인과 출처(영어)"
  ],
  "fr": [
    "Contrôle du 28 octobre : documentation de développement",
    "Neuf événements documentaires vérifiés et publiés ici le 28 octobre. Les panneaux DesignCraft et la barre des tâches VectorCraft relèvent du 27 octobre à Pékin ; les droits d’écriture MCP PhotoCraft, le benchmark CPU FilmCraft, la pagination WordCraft, les présentations/fenêtres CADCraft et la typographie DesignCraft du 28. Ces changements suivent les installateurs actuels ; aucune nouvelle version ni test indépendant. X et Google limités ; YouTube, métadonnées seulement et couverture vidéo incomplète.",
    "Documentation du 27 octobre (anglais)",
    "Contrôle et sources du 28 octobre (anglais)"
  ],
  "hi": [
    "28 अक्टूबर की जाँच: विकास दस्तावेज़ बदले",
    "नौ दस्तावेज़ी घटनाएँ 28 अक्टूबर को जाँची और यहाँ प्रकाशित की गईं। DesignCraft पैनल और VectorCraft टास्कबार दस्तावेज़ बीजिंग समय 27 अक्टूबर के हैं। PhotoCraft MCP लिखने के अधिकार, FilmCraft CPU निर्यात बेंचमार्क, WordCraft पृष्ठ विभाजन, CADCraft लेआउट/व्यूपोर्ट और DesignCraft टाइपोग्राफ़ी 28 अक्टूबर के हैं। ये वर्तमान इंस्टॉलर के बाद के बदलाव हैं; नई रिलीज़ या अपना ऐप परीक्षण नहीं। X और Google सीमित रहे; YouTube में केवल मेटाडेटा पढ़ा गया, वीडियो कवरेज अधूरा है।",
    "27 अक्टूबर के दस्तावेज़ (English)",
    "28 अक्टूबर की जाँच और स्रोत (English)"
  ]
};
export function october28Digest(locale: Locale): LocalizedSection | undefined {
 const c = copy[locale];
 return c ? { id: 'update-2026-10-28', heading: c[0], paragraphs: [c[1]], links: [{label:c[2],href:'https://opensourceadobe.com/updates/2026-10-27/'},{label:c[3],href:'https://opensourceadobe.com/updates/2026-10-28/'}] } : undefined;
}
