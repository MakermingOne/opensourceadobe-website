'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';

declare global {
  interface Window {
    sitePrivacy?: { get: () => string; set: (choice: string) => void; pageView: () => void };
  }
}
const labels: Record<Locale, [string, string, string, string, string]> = {
  en: ['Privacy choices', 'Analytics helps us understand how readers use these guides.', 'Turn off analytics', 'Turn on analytics', 'Privacy policy'],
  'en-AU': ['Privacy choices', 'Analytics helps us understand how readers use these guides.', 'Turn off analytics', 'Turn on analytics', 'Privacy policy'],
  'zh-Hant': ['隱私選擇', '我們使用網站分析來了解讀者如何使用這些指南。', '關閉分析', '開啟分析', '隱私政策（英文）'],
  pl: ['Ustawienia prywatności', 'Analityka pomaga nam zrozumieć, jak czytelnicy korzystają z poradników.', 'Wyłącz analitykę', 'Włącz analitykę', 'Polityka prywatności (angielski)'],
  de: ['Datenschutzeinstellungen', 'Mit der Webanalyse erfahren wir, wie unsere Anleitungen genutzt werden.', 'Webanalyse deaktivieren', 'Webanalyse aktivieren', 'Datenschutz (Englisch)'],
  ja: ['プライバシー設定', 'アクセス解析は、ガイドの利用状況を把握するために使います。', '解析をオフにする', '解析をオンにする', 'プライバシーポリシー（英語）'],
  ko: ['개인정보 설정', '사이트 분석을 통해 독자가 가이드를 어떻게 이용하는지 파악합니다.', '분석 끄기', '분석 켜기', '개인정보 처리방침 (영어)'],
  fr: ['Choix de confidentialité', 'La mesure d’audience nous aide à comprendre comment les guides sont utilisés.', 'Désactiver la mesure', 'Activer la mesure', 'Confidentialité (anglais)'],
  hi: ['गोपनीयता विकल्प', 'एनालिटिक्स से हमें पता चलता है कि पाठक इन गाइड का उपयोग कैसे करते हैं।', 'एनालिटिक्स बंद करें', 'एनालिटिक्स चालू करें', 'गोपनीयता नीति (अंग्रेज़ी)'],
};
const subscribe = (callback: () => void) => {
  window.addEventListener('site-privacy-change', callback);
  return () => window.removeEventListener('site-privacy-change', callback);
};
const snapshot = () => window.sitePrivacy?.get() ?? 'loading';
const serverSnapshot = () => 'loading';

export function PrivacyControls({ locale }: { locale: Locale }) {
  const choice = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [title, description, reject, accept, policy] = labels[locale];
  useEffect(() => { window.sitePrivacy?.pageView(); }, [pathname]);
  const choose = (value: string) => { setOpen(false); window.sitePrivacy?.set(value); };
  return <div className="privacy-controls">
    <button className="privacy-settings" onClick={() => setOpen(!open)} aria-expanded={open}>{title}</button>
    {open ? <section className="privacy-panel" aria-label={title}>
      <h2>{title}</h2><p>{description}</p><Link href="/privacy/">{policy}</Link>
      <div className="privacy-actions">
        <button onClick={() => choose('rejected')} disabled={choice !== 'accepted'}>{reject}</button>
        <button onClick={() => choose('accepted')} disabled={choice !== 'rejected'}>{accept}</button>
      </div>
    </section> : null}
  </div>;
}
