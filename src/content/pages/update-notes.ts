import type { LocalizedLink, LocalizedSection } from "./types";

// Localized additions use the same evidence boundaries as the dated English brief.
export const brushReportUrl = "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/";
const brushDocsUrl = "https://github.com/storytold/photocraft/blob/v0.9.0/docs/brush-parity.md";
const issueUrl = "https://opensourceadobe.com/updates/2026-10-17/";
type Translation = "zh-Hant" | "pl" | "de" | "hi";

export const brushSources: Record<Translation, LocalizedLink[]> = {
  "zh-Hant": [{ label: "社群回報：PhotoCraft 畫筆 Spacing（英文）", href: brushReportUrl }, { label: "PhotoCraft 0.9.0 官方畫筆文件（英文）", href: brushDocsUrl }],
  pl: [{ label: "Relacja użytkownika: odstępy pędzla PhotoCraft (po angielsku)", href: brushReportUrl }, { label: "Oficjalna dokumentacja pędzli PhotoCraft 0.9.0 (po angielsku)", href: brushDocsUrl }],
  de: [{ label: "Community-Bericht zu PhotoCraft-Pinselabständen (Englisch)", href: brushReportUrl }, { label: "Offizielle Pinseldokumentation für PhotoCraft 0.9.0 (Englisch)", href: brushDocsUrl }],
  hi: [{ label: "PhotoCraft ब्रश Spacing पर उपयोगकर्ता की रिपोर्ट (English)", href: brushReportUrl }, { label: "PhotoCraft 0.9.0 के आधिकारिक ब्रश दस्तावेज़ (English)", href: brushDocsUrl }],
};

export const currentDigest: Record<Translation, LocalizedSection> = {
  "zh-Hant": {
    id: "update-2026-10-17", heading: "10 月 17 日追蹤：開發文件與社群使用回饋",
    paragraphs: ["今天晚間核查未發現 13 款工具或 Launcher 的新官方版本。今天簡報已收錄的 VectorCraft 0.12.0 仍是目前版本，原始發布日是 10 月 16 日 UTC。FigCraft 今天的開發文件新增可選的代理檔案讀寫範圍；最新安裝版仍是 0.6.0，不能推定這些選項已隨安裝包提供，也不是完整的作業系統沙箱。", "社群方面，PhotoCraft 發帖者將自己遇到的畫筆間斷歸因於 Spacing 設定；另有 PdfCraft 白色游標及 EffectCraft 在 MacBook Pro 傳播逐格遮罩時凍結的個人回報。這些都不是本站實測或通用故障結論，版本與環境資料仍不完整。X、YouTube 上傳列表及 Google 搜尋頁本輪存取受限，不能宣稱已完整核查。"],
    links: [{ label: "閱讀 10 月 17 日完整更新與逐項來源（英文）", href: issueUrl }, { label: "查看 PhotoCraft 畫筆回報說明", href: "/apps/photocraft/#brush-spacing-report" }],
  },
  pl: {
    id: "update-2026-10-17", heading: "17 października: dokumentacja rozwojowa i relacje użytkowników",
    paragraphs: ["Wieczorna kontrola nie wykazała nowszych oficjalnych wydań 13 aplikacji ani Launchera. Opisany już VectorCraft 0.12.0 opublikowano 16 października UTC. Dzisiejsza dokumentacja rozwojowa FigCraft opisuje opcjonalne granice odczytu i zapisu plików przez agentów. Najnowszy instalator nadal ma numer 0.6.0; nie zakładamy, że zawiera te opcje. Nie jest to pełna piaskownica systemu operacyjnego.", "Autor wpisu o pędzlu PhotoCraft przypisał przerwy w kresce ustawieniu Spacing. Pojawiły się też pojedyncze zgłoszenia białego kursora w PdfCraft oraz zawieszania EffectCraft podczas propagacji rotoskopii na MacBooku Pro. Brakuje szczegółów wersji i środowiska; nie są to nasze testy ani wnioski dotyczące wszystkich instalacji. Dostęp do X, listy nowych filmów YouTube i strony wyników Google był ograniczony, więc nie deklarujemy pełnej kontroli tych kanałów."],
    links: [{ label: "Pełny raport z 17 października i źródła (po angielsku)", href: issueUrl }, { label: "Wskazówka dotycząca odstępów pędzla PhotoCraft", href: "/apps/photocraft/#brush-spacing-report" }],
  },
  de: {
    id: "update-2026-10-17", heading: "17. Oktober: Entwicklungsdokumentation und Community-Berichte",
    paragraphs: ["Die abendliche Prüfung ergab keine neuere offizielle Veröffentlichung für die 13 Apps oder den Launcher. Der bereits behandelte VectorCraft 0.12.0 wurde am 16. Oktober UTC veröffentlicht. FigCrafts heutige Entwicklungsdokumentation beschreibt optionale Lese- und Schreibgrenzen für Agenten. Der aktuelle Installer bleibt bei 0.6.0; die Optionen sind damit nicht für diesen Installer belegt. Sie sind auch keine vollständige Betriebssystem-Sandbox.", "Ein PhotoCraft-Nutzer führt unterbrochene Pinselstriche auf die Einstellung Spacing zurück. Weitere Einzelberichte betreffen einen weißen PdfCraft-Cursor und ein Einfrieren von EffectCraft bei der Rotoskopie-Propagation auf einem MacBook Pro. Versions- und Umgebungsangaben fehlen teilweise; dies sind weder eigene Tests noch allgemeine Fehlerdiagnosen. X, die YouTube-Uploadliste und Googles Ergebnisseite waren nur eingeschränkt zugänglich. Eine vollständige Prüfung dieser Kanäle können wir deshalb nicht bestätigen."],
    links: [{ label: "Vollständiger Bericht vom 17. Oktober mit Quellen (Englisch)", href: issueUrl }, { label: "Hinweis zu PhotoCraft-Pinselabständen", href: "/apps/photocraft/#brush-spacing-report" }],
  },
  hi: {
    id: "update-2026-10-17", heading: "17 अक्टूबर: विकास दस्तावेज़ और उपयोगकर्ताओं की रिपोर्ट",
    paragraphs: ["शाम की जाँच में 13 ऐप या Launcher का कोई नया आधिकारिक संस्करण नहीं मिला। पहले शामिल VectorCraft 0.12.0 की मूल रिलीज़ तारीख 16 अक्टूबर UTC है। FigCraft के आज के विकास दस्तावेज़ एजेंट के फ़ाइल पढ़ने और लिखने के लिए वैकल्पिक सीमाएँ बताते हैं। नवीनतम इंस्टॉलर अभी 0.6.0 है; उसमें ये विकल्प उपलब्ध मानना सही नहीं होगा। ये पूरे ऑपरेटिंग सिस्टम का सैंडबॉक्स भी नहीं हैं।", "PhotoCraft के एक उपयोगकर्ता ने रुक-रुककर बनती ब्रश लाइन को Spacing सेटिंग से जोड़ा। अलग रिपोर्ट में PdfCraft का सफ़ेद कर्सर और MacBook Pro पर EffectCraft में रोटोस्कोप फ़्रेम आगे बढ़ाते समय फ़्रीज़ होने की बात है। संस्करण और सेटअप की जानकारी अधूरी है; ये हमारे परीक्षण या सभी मशीनों पर लागू निष्कर्ष नहीं हैं। इस जाँच में X, YouTube की नई अपलोड सूची और Google परिणाम पेज तक पहुँच सीमित रही, इसलिए उन चैनलों की पूरी जाँच का दावा नहीं है।"],
    links: [{ label: "17 अक्टूबर की पूरी रिपोर्ट और स्रोत (English)", href: issueUrl }, { label: "PhotoCraft ब्रश Spacing पर जानकारी", href: "/apps/photocraft/#brush-spacing-report" }],
  },
};

export const brushNotes: Record<Translation, LocalizedSection> = {
  "zh-Hant": {
    id: "brush-spacing-report", heading: "畫筆看似延遲？先檢查 Spacing",
    paragraphs: ["10 月 17 日核查的一則社群回報中，發帖者說筆尖移動一段距離才出墨，之後補充原因是畫筆的 Spacing 設定。對方提到 F5，但未交代版本與作業系統；本站未重現，也不把該快捷鍵視為所有平台都適用。", "PhotoCraft 0.9.0 官方畫筆文件確實列出間距設定。可先在小畫布檢查 Spacing，再判斷是否真的有延遲。這不是新版本修復公告，也不是所有畫筆效能問題的解法；若仍有問題，記錄版本、輸入裝置及畫筆參數再向官方回報。"],
    links: [...brushSources["zh-Hant"], { label: "相關更新與證據限制（英文）", href: `${issueUrl}#community-photocraft-brush-spacing` }],
  },
  pl: {
    id: "brush-spacing-report", heading: "Pędzel wygląda na opóźniony? Sprawdź Spacing",
    paragraphs: ["W relacji sprawdzonej 17 października użytkownik opisał kreskę pojawiającą się dopiero po przesunięciu piórka na pewną odległość. Później przypisał ten efekt ustawieniu Spacing. Wspomniał o F5, ale nie podał wersji aplikacji ani systemu. Nie odtworzyliśmy tego przypadku i nie potwierdzamy tego skrótu dla każdej platformy.", "Oficjalna dokumentacja PhotoCraft 0.9.0 wymienia odstępy pędzla. Sprawdź ustawienie Spacing na małym płótnie, zanim uznasz zjawisko za spowolnienie aplikacji. Nie jest to informacja o nowej poprawce ani rozwiązanie każdego problemu z opóźnieniem. Jeśli problem pozostaje, do zgłoszenia dołącz wersję, urządzenie wejściowe i parametry pędzla."],
    links: [...brushSources.pl, { label: "Aktualizacja i ograniczenia dowodów (po angielsku)", href: `${issueUrl}#community-photocraft-brush-spacing` }],
  },
  de: {
    id: "brush-spacing-report", heading: "Verzögerte Pinselstriche? Zuerst Spacing prüfen",
    paragraphs: ["In einem am 17. Oktober geprüften Community-Beitrag erschien Farbe laut Verfasser erst nach einer gewissen Stiftbewegung. Später führte er dies auf die Einstellung Spacing zurück. Er nennt F5, aber weder App-Version noch Betriebssystem. Wir haben den Fall nicht reproduziert und bestätigen das Tastenkürzel nicht für jede Plattform.", "Die offizielle Pinseldokumentation zu PhotoCraft 0.9.0 führt den Pinselabstand auf. Prüfe Spacing auf einer kleinen Testfläche, bevor du von einem Leistungsproblem ausgehst. Das ist keine Meldung über einen neuen Patch und keine Lösung für jede Verzögerung. Bleibt das Problem, halte Version, Eingabegerät und Pinseleinstellungen für einen nachvollziehbaren Fehlerbericht fest."],
    links: [...brushSources.de, { label: "Zugehöriger Bericht und Grenzen der Belege (Englisch)", href: `${issueUrl}#community-photocraft-brush-spacing` }],
  },
  hi: {
    id: "brush-spacing-report", heading: "ब्रश देर से चलता दिखे तो पहले Spacing जाँचें",
    paragraphs: ["17 अक्टूबर को जाँची गई एक सामुदायिक रिपोर्ट में पेन कुछ दूरी चलने के बाद ही रंग दिखने की बात थी। लेखक ने बाद में इसे ब्रश की Spacing सेटिंग से जोड़ा। उन्होंने F5 बताया, पर ऐप का संस्करण या ऑपरेटिंग सिस्टम नहीं बताया। हमने इसे दोहराकर नहीं जाँचा और इस शॉर्टकट को हर प्लैटफ़ॉर्म के लिए पुष्ट नहीं मानते।", "PhotoCraft 0.9.0 के आधिकारिक ब्रश दस्तावेज़ में spacing मौजूद है। ऐप धीमा मानने से पहले छोटे कैनवस पर Spacing देखें। यह नए संस्करण में सुधार का ऐलान नहीं, न ही हर ब्रश लैग का समाधान है। समस्या बनी रहे तो संस्करण, इनपुट डिवाइस और ब्रश सेटिंग के साथ आधिकारिक प्रोजेक्ट में रिपोर्ट करें।"],
    links: [...brushSources.hi, { label: "संबंधित अपडेट और साक्ष्य की सीमाएँ (English)", href: `${issueUrl}#community-photocraft-brush-spacing` }],
  },
};
