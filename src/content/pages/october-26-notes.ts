import type { Locale } from '@/i18n/config';
import type { LocalizedSection } from './types';
const copy: Partial<Record<Locale, string[]>> = {
  "zh-Hant": [
    "10 月 26 日核查：14 個版本補錄至 25 日",
    "14 個官方版本均於北京時間 25 日發布，包括 PhotoCraft 0.16.0、PdfCraft 0.14.0、Launcher 0.8.1；實際核查與本站補錄為 26 日。已核實上傳檔案，FreeBSD aarch64 安裝包仍缺失。版本增加不代表成熟度升級，PhotoCraft 的 Generative Fill／Expand 與 PdfCraft 的多語言 OCR 仍有限制。PdfCraft 固定側邊面板文件於 26 日 00:06:36 合併，晚於安裝包發布；不能視為安裝版功能。社群更新討論缺少精確時間，歸入核查日；未作本站實測。X、Google 與 YouTube 影片閱讀受限，僅讀到 YouTube 頻道資料。",
    "25 日發布與文件（英文）",
    "26 日核查與來源（英文）"
  ],
  "en-AU": [
    "26 October check: fourteen releases belong to 25 October",
    "Fourteen official releases belong to 25 October Beijing time, including PhotoCraft 0.16.0, PdfCraft 0.14.0 and Launcher 0.8.1; checked and supplemented here on 26 October. Uploaded files were confirmed, but FreeBSD aarch64 packages remain absent. Version increases do not change development status. PhotoCraft generative tools and PdfCraft multilingual OCR remain limited. PdfCraft fixed side-panel docs merged at 00:06:36 Beijing time on 26 October, after the installer release, and describe development behavior. A community update discussion lacks an exact time and stays on the check date; no independent test. X, Google and YouTube video reading were restricted; YouTube channel metadata was readable.",
    "25 October releases and docs (English)",
    "26 October check and sources (English)"
  ],
  "de": [
    "Prüfung am 26. Oktober: vierzehn Releases vom 25.",
    "Vierzehn offizielle Releases gehören zum 25. Oktober in Peking, darunter PhotoCraft 0.16.0, PdfCraft 0.14.0 und Launcher 0.8.1; geprüft und hier ergänzt am 26. Oktober. Hochgeladene Dateien wurden bestätigt; FreeBSD-aarch64-Pakete fehlen weiterhin. Höhere Versionsnummern ändern den Entwicklungsstatus nicht. Generative Werkzeuge in PhotoCraft und mehrsprachige OCR in PdfCraft bleiben eingeschränkt. Die PdfCraft-Dokumentation zu festen Seitenleisten wurde am 26. um 00:06:36 Uhr Pekinger Zeit nach dem Installer-Release zusammengeführt; sie beschreibt die Entwicklungsversion. Eine Community-Diskussion ohne genaue Uhrzeit bleibt beim Prüftag; kein eigener Test. X, Google und YouTube-Videos waren eingeschränkt zugänglich; Kanalmetadaten waren lesbar.",
    "Releases und Dokumentation vom 25. Oktober (Englisch)",
    "Prüfung und Quellen vom 26. Oktober (Englisch)"
  ],
  "pl": [
    "Kontrola 26 października: czternaście wydań z 25 października",
    "Czternaście oficjalnych wydań należy do 25 października według czasu w Pekinie, w tym PhotoCraft 0.16.0, PdfCraft 0.14.0 i Launcher 0.8.1; sprawdzenie i uzupełnienie tutaj nastąpiły 26 października. Potwierdzono przesłane pliki; pakietów FreeBSD aarch64 nadal brak. Numer wersji nie zmienia etapu rozwoju. Narzędzia generatywne PhotoCraft i wielojęzyczny OCR PdfCraft nadal mają ograniczenia. Dokumentację stałych paneli PdfCraft scalono 26 października o 00:06:36 w Pekinie, po wydaniu instalatora; dotyczy wersji rozwojowej. Dyskusja społeczności bez dokładnego czasu pozostaje pod datą kontroli; nie jest naszym testem. X, Google i filmy YouTube miały ograniczony dostęp; metadane kanału były czytelne.",
    "Wydania i dokumentacja z 25 października (angielski)",
    "Kontrola i źródła z 26 października (angielski)"
  ],
  "ja": [
    "10月26日確認：14件の公開版は25日に分類",
    "PhotoCraft 0.16.0、PdfCraft 0.14.0、Launcher 0.8.1を含む公式14件の公開版は北京時間25日です。実際の確認と当サイトの追記は26日です。アップロード済みファイルを確認しましたが、FreeBSD aarch64版はありません。版番号によって開発段階は変わりません。PhotoCraftの生成機能とPdfCraftの多言語OCRには制限が残ります。PdfCraftの固定サイドパネル資料は26日00:06:36北京時間に統合され、公開版より後の開発資料です。正確な時刻のない更新に関するコミュニティ報告は確認日に記録し、独自の実測とは区別します。X、Google、YouTube動画の閲覧は制限され、チャンネル情報のみ読めました。",
    "25日の公開版と資料（英語）",
    "26日の確認と出典（英語）"
  ],
  "ko": [
    "10월 26일 확인: 공식 버전 14개는 25일에 기록",
    "PhotoCraft 0.16.0, PdfCraft 0.14.0, Launcher 0.8.1을 포함한 공식 버전 14개는 베이징 시간 25일 공개됐으며 실제 확인과 이 사이트 보충 게시일은 26일입니다. 업로드 파일을 확인했지만 FreeBSD aarch64 패키지는 없습니다. 버전 번호가 개발 단계를 바꾸지는 않습니다. PhotoCraft 생성 기능과 PdfCraft 다국어 OCR에는 제한이 남아 있습니다. PdfCraft 고정 측면 패널 문서는 26일 00:06:36 베이징 시간에 병합됐으며 설치 버전보다 나중의 개발 문서입니다. 정확한 시각이 없는 커뮤니티 업데이트 토론은 확인일에 기록하며 자체 실측이 아닙니다. X, Google, YouTube 영상 읽기는 제한됐고 채널 정보만 읽을 수 있었습니다.",
    "25일 공개 버전과 문서(영어)",
    "26일 확인과 출처(영어)"
  ],
  "fr": [
    "Vérification du 26 octobre : quatorze versions publiées le 25",
    "Quatorze versions officielles relèvent du 25 octobre à Pékin, dont PhotoCraft 0.16.0, PdfCraft 0.14.0 et Launcher 0.8.1 ; vérifiées et ajoutées ici le 26. Les fichiers téléversés ont été confirmés ; les paquets FreeBSD aarch64 restent absents. Les numéros de version ne changent pas le stade de développement. Les outils génératifs de PhotoCraft et la reconnaissance multilingue de PdfCraft restent limités. La documentation des panneaux fixes de PdfCraft a été fusionnée le 26 à 00:06:36 à Pékin, après la version publiée ; elle concerne le développement. Une discussion communautaire sans heure précise reste au jour du contrôle ; ce n’est pas notre test. Accès à X, Google et aux vidéos YouTube limité ; métadonnées de la chaîne lisibles.",
    "Versions et documentation du 25 octobre (anglais)",
    "Contrôle et sources du 26 octobre (anglais)"
  ],
  "hi": [
    "26 अक्टूबर की जाँच: 14 रिलीज़ 25 अक्टूबर की हैं",
    "PhotoCraft 0.16.0, PdfCraft 0.14.0 और Launcher 0.8.1 सहित 14 आधिकारिक रिलीज़ बीजिंग समय 25 अक्टूबर की हैं; वास्तविक जाँच और यहाँ पूरक प्रकाशन 26 अक्टूबर को हुआ। अपलोड फ़ाइलें पुष्ट हैं, पर FreeBSD aarch64 पैकेज उपलब्ध नहीं हैं। संस्करण संख्या विकास की स्थिति नहीं बदलती। PhotoCraft के जनरेटिव टूल और PdfCraft के बहुभाषी OCR में सीमाएँ बनी हैं। PdfCraft के स्थिर साइड पैनल दस्तावेज़ 26 अक्टूबर 00:06:36 बीजिंग समय पर मर्ज हुए, इंस्टॉलर रिलीज़ के बाद; वे विकास संस्करण का वर्णन हैं। सटीक समय के बिना सामुदायिक अपडेट चर्चा जाँच के दिन रखी गई है; यह हमारा परीक्षण नहीं है। X, Google और YouTube वीडियो पढ़ने पर सीमाएँ थीं; चैनल मेटाडेटा पढ़ा जा सका।",
    "25 अक्टूबर की रिलीज़ और दस्तावेज़ (English)",
    "26 अक्टूबर की जाँच और स्रोत (English)"
  ]
};
export function october26Digest(locale: Locale): LocalizedSection | undefined {
 const c = copy[locale];
 return c ? { id: 'update-2026-10-26', heading: c[0], paragraphs: [c[1]], links: [{label:c[2],href:'https://opensourceadobe.com/updates/2026-10-25/'},{label:c[3],href:'https://opensourceadobe.com/updates/2026-10-26/'}] } : undefined;
}
