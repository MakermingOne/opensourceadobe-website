import { appsBySlug } from "@/content/apps";
import { appGuideHref } from "@/i18n/app-links";
import type { Locale } from "@/i18n/config";

const labels: Record<Locale, { title: string; tasks: string[] }> = {
  en: { title: "Choose a task", tasks: ["Edit photos", "Edit video", "Work with PDFs", "Draw vectors", "Develop RAW", "Edit audio"] },
  "en-AU": { title: "Choose a task", tasks: ["Edit photos", "Edit video", "Work with PDFs", "Draw vectors", "Develop RAW", "Edit audio"] },
  "zh-Hant": { title: "選擇工作項目", tasks: ["相片編輯", "影片剪輯", "PDF 處理", "向量繪圖", "RAW 顯影", "音訊編輯"] },
  fr: { title: "Choisir une tâche", tasks: ["Retouche photo", "Montage vidéo", "Documents PDF", "Dessin vectoriel", "Développement RAW", "Montage audio"] },
  de: { title: "Aufgabe wählen", tasks: ["Fotos bearbeiten", "Videos schneiden", "PDFs bearbeiten", "Vektoren zeichnen", "RAW entwickeln", "Audio bearbeiten"] },
  pl: { title: "Wybierz zadanie", tasks: ["Edycja zdjęć", "Montaż wideo", "Praca z PDF", "Grafika wektorowa", "Wywoływanie RAW", "Edycja dźwięku"] },
  ja: { title: "作業から選ぶ", tasks: ["写真編集", "動画編集", "PDF の操作", "ベクター描画", "RAW 現像", "音声編集"] },
  ko: { title: "작업 선택", tasks: ["사진 편집", "영상 편집", "PDF 작업", "벡터 드로잉", "RAW 현상", "오디오 편집"] },
  hi: { title: "काम चुनें", tasks: ["फ़ोटो संपादन", "वीडियो संपादन", "PDF पर काम", "वेक्टर चित्रण", "RAW प्रोसेसिंग", "ऑडियो संपादन"] },
};
const slugs = ["photocraft", "filmcraft", "pdfcraft", "vectorcraft", "lightcraft", "soundcraft"];
export function TaskShortcuts({ locale = "en" }: { locale?: Locale }) {
  const copy = labels[locale];
  return <nav className="task-shortcuts" aria-label={copy.title}>{slugs.map((slug, index) => {
    const app = appsBySlug.get(slug)!;
    return <a key={slug} href={appGuideHref(locale, app)}><span>{copy.tasks[index]}</span><small>{app.name} →</small></a>;
  })}</nav>;
}
