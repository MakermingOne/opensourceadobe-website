import type { Locale } from '@/i18n/config';
import type { LocalizedSection } from './types';
const copy: Partial<Record<Locale, string[]>> = {
  "zh-Hant": [
    "10 月 25 日核查：PhotoCraft 0.15.1 歸入 24 日",
    "PhotoCraft 0.15.1 發布於北京時間 24 日 06:44:33（UTC 23 日 22:44:33），實際核查與本站補錄日為 25 日。28 個上傳檔案已核實。標籤文件仍稱 early alpha，Generative Fill 與 Expand 仍缺失。24 日另有 FilmCraft、SoundCraft、CADCraft 和 DeckCraft 的開發文件更新，不能視為目前安裝包功能。25 日凌晨截至本次核查未發現當日新版本。社群本機模型回報缺少精確時間，留在 25 日；不是本站實測。X、YouTube、Google 直接存取受限。",
    "24 日發布與文件（英文）",
    "25 日核查與社群回報（英文）"
  ],
  "pl": [
    "Kontrola 25 października: PhotoCraft 0.15.1 z 24 października",
    "PhotoCraft 0.15.1 opublikowano 24 października o 06:44:33 w Pekinie (23 października 22:44:33 UTC); sprawdzenie i uzupełnienie tutaj nastąpiły 25 października. Potwierdzono 28 plików. Dokumentacja wersji nadal określa ją jako early alpha, bez Generative Fill i Expand. Zmiany dokumentacji rozwojowej FilmCraft, SoundCraft, CADCraft i DeckCraft z 24 października nie potwierdzają funkcji aktualnych instalatorów. Do wczesnej kontroli nie znaleziono wydania z 25 października. Relacja o lokalnych modelach bez dokładnego czasu pozostaje pod datą kontroli; nie jest naszym testem. Dostęp do X, YouTube i Google był ograniczony.",
    "Wydanie i dokumentacja z 24 października (angielski)",
    "Kontrola i relacja społeczności z 25 października (angielski)"
  ],
  "de": [
    "Prüfung am 25. Oktober: PhotoCraft 0.15.1 gehört zum 24.",
    "PhotoCraft 0.15.1 erschien am 24. Oktober um 06:44:33 Uhr in Peking (23. Oktober 22:44:33 UTC); geprüft und hier ergänzt am 25. Oktober. 28 Dateien wurden bestätigt. Die Versionsdokumentation nennt weiterhin early alpha; Generative Fill und Expand fehlen. Entwicklungsdokumentation von FilmCraft, SoundCraft, CADCraft und DeckCraft wurde am 24. geändert und belegt keine Funktionen der aktuellen Installer. Bis zur frühen Prüfung gab es kein gefundenes Release vom 25. Oktober. Ein Bericht über lokale Modelle ohne genaue Uhrzeit bleibt beim Prüftag; kein eigener Test. X, YouTube und Google waren eingeschränkt zugänglich.",
    "Release und Dokumentation vom 24. Oktober (Englisch)",
    "Prüfung und Community-Bericht vom 25. Oktober (Englisch)"
  ],
  "ja": [
    "10月25日確認：PhotoCraft 0.15.1は24日の公開版",
    "PhotoCraft 0.15.1の公開は北京時間24日06:44:33（UTC 23日22:44:33）で、当サイトの確認と追記は25日です。アップロード済み28ファイルを確認しました。版の資料は引き続き early alpha とし、Generative Fill と Expand は未対応です。24日のFilmCraft、SoundCraft、CADCraft、DeckCraft開発資料の変更は、現在のインストーラーの機能を保証しません。25日未明の確認までに25日の新規公開版は見つかりませんでした。正確な時刻がないローカルモデルの体験談は25日に記録し、当サイトの実測とは区別します。X、YouTube、Googleへの直接アクセスは制限されました。",
    "24日の公開版と資料（英語）",
    "25日の確認とコミュニティ報告（英語）"
  ],
  "ko": [
    "10월 25일 확인: PhotoCraft 0.15.1은 24일 공개",
    "PhotoCraft 0.15.1은 베이징 시간 24일 06:44:33(UTC 23일 22:44:33)에 공개됐으며 실제 확인과 이 사이트 보충 게시일은 25일입니다. 업로드된 파일 28개를 확인했습니다. 버전 문서는 여전히 early alpha이며 Generative Fill과 Expand는 미지원입니다. 24일 FilmCraft, SoundCraft, CADCraft, DeckCraft 개발 문서 변경은 현재 설치 버전의 기능을 보장하지 않습니다. 25일 새벽 확인까지 25일 새 공개 버전은 찾지 못했습니다. 정확한 시각이 없는 로컬 모델 경험담은 확인일 25일에 기록하며 자체 실측이 아닙니다. X, YouTube, Google 직접 접근은 제한됐습니다.",
    "24일 공개 버전과 문서(영어)",
    "25일 확인과 커뮤니티 보고(영어)"
  ],
  "fr": [
    "Vérification du 25 octobre : PhotoCraft 0.15.1 publié le 24",
    "PhotoCraft 0.15.1 a été publié le 24 octobre à 06:44:33 à Pékin (23 octobre 22:44:33 UTC), puis vérifié et ajouté ici le 25. Les 28 fichiers ont été confirmés. La documentation de cette version indique toujours early alpha, sans Generative Fill ni Expand. Les modifications du 24 aux documents de développement de FilmCraft, SoundCraft, CADCraft et DeckCraft ne prouvent pas leur présence dans les installateurs actuels. Aucune version du 25 n’a été trouvée lors du contrôle matinal. Un témoignage sur des modèles locaux sans heure précise reste au jour du contrôle ; ce n’est pas notre test. Accès direct à X, YouTube et Google limité.",
    "Version et documentation du 24 octobre (anglais)",
    "Contrôle et témoignage du 25 octobre (anglais)"
  ],
  "hi": [
    "25 अक्टूबर की जाँच: PhotoCraft 0.15.1 की रिलीज़ 24 अक्टूबर की है",
    "PhotoCraft 0.15.1 बीजिंग समय 24 अक्टूबर 06:44:33 (UTC 23 अक्टूबर 22:44:33) पर जारी हुआ; वास्तविक जाँच और इस साइट पर पूरक प्रकाशन 25 अक्टूबर को हुआ। अपलोड की गई 28 फ़ाइलें पुष्ट हैं। संस्करण के दस्तावेज़ अब भी early alpha कहते हैं; Generative Fill और Expand अनुपलब्ध हैं। 24 अक्टूबर के FilmCraft, SoundCraft, CADCraft और DeckCraft विकास दस्तावेज़ों के बदलाव वर्तमान इंस्टॉलर में सुविधा होने का प्रमाण नहीं हैं। 25 अक्टूबर की तड़के जाँच तक उस दिन की नई रिलीज़ नहीं मिली। सटीक समय के बिना स्थानीय मॉडल का सामुदायिक अनुभव जाँच के दिन रखा गया है; यह हमारा परीक्षण नहीं है। X, YouTube और Google तक सीधी पहुँच सीमित थी।",
    "24 अक्टूबर की रिलीज़ और दस्तावेज़ (English)",
    "25 अक्टूबर की जाँच और सामुदायिक रिपोर्ट (English)"
  ],
  "en-AU": [
    "25 October check: PhotoCraft 0.15.1 belongs to 24 October",
    "PhotoCraft 0.15.1 was published at 06:44:33 Beijing time on 24 October (23 October 22:44:33 UTC), checked and supplemented here on 25 October. All 28 uploaded files were confirmed. Tagged docs still say early alpha, with Generative Fill and Expand missing. The 24 October development documentation changes for FilmCraft, SoundCraft, CADCraft and DeckCraft do not establish features in current installers. No 25 October release was found by the early check. A local-model community report without an exact timestamp stays on the check date; it is not our own test. Direct X, YouTube and Google access was limited.",
    "24 October release and documentation (English)",
    "25 October check and community report (English)"
  ]
};
export function october25Digest(locale: Locale): LocalizedSection | undefined {
 const c = copy[locale];
 return c ? { id: 'update-2026-10-25', heading: c[0], paragraphs: [c[1]], links: [{label:c[2],href:'https://opensourceadobe.com/updates/2026-10-24/'},{label:c[3],href:'https://opensourceadobe.com/updates/2026-10-25/'}] } : undefined;
}
