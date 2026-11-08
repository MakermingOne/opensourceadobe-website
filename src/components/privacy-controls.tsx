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
  en: ['Privacy choices', 'Allow optional analytics cookies to help us understand how these guides are used? You can read every guide without them.', 'Reject analytics', 'Allow analytics', 'Privacy policy'],
  'en-AU': ['Privacy choices', 'Allow optional analytics cookies to help us understand how these guides are used? You can read every guide without them.', 'Reject analytics', 'Allow analytics', 'Privacy policy'],
  'zh-Hant': ['隱私選擇', '是否允許選用的分析 Cookie，協助我們了解指南的使用情況？拒絕後仍可閱讀所有內容。', '拒絕分析', '允許分析', '隱私政策（英文）'],
  pl: ['Ustawienia prywatności', 'Czy zezwalasz na opcjonalne pliki cookie analityczne? Wszystkie poradniki są dostępne także bez nich.', 'Odrzuć analitykę', 'Zezwól na analitykę', 'Polityka prywatności (angielski)'],
  de: ['Datenschutzeinstellungen', 'Optionale Analyse-Cookies erlauben, damit wir die Nutzung unserer Anleitungen verstehen? Alle Inhalte sind auch ohne verfügbar.', 'Analyse ablehnen', 'Analyse erlauben', 'Datenschutz (Englisch)'],
  ja: ['プライバシー設定', 'ガイドの利用状況を把握するため、任意の解析 Cookie を許可しますか？拒否してもすべての内容を読めます。', '解析を拒否', '解析を許可', 'プライバシーポリシー（英語）'],
  ko: ['개인정보 설정', '가이드 이용 현황을 파악하기 위한 선택적 분석 쿠키를 허용할까요? 거부해도 모든 내용을 읽을 수 있습니다.', '분석 거부', '분석 허용', '개인정보 처리방침 (영어)'],
  fr: ['Choix de confidentialité', 'Autoriser les cookies de mesure d’audience facultatifs ? Tous les guides restent accessibles sans ces cookies.', 'Refuser la mesure', 'Autoriser la mesure', 'Confidentialité (anglais)'],
  hi: ['गोपनीयता विकल्प', 'क्या आप गाइड के उपयोग को समझने के लिए वैकल्पिक एनालिटिक्स कुकी की अनुमति देंगे? इनके बिना भी सभी गाइड पढ़ सकते हैं।', 'एनालिटिक्स अस्वीकार करें', 'एनालिटिक्स की अनुमति दें', 'गोपनीयता नीति (अंग्रेज़ी)'],
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
    <button className="privacy-settings" onClick={() => setOpen(!open)} aria-expanded={open || choice === 'unset'}>{title}</button>
    {open || choice === 'unset' ? <section className="privacy-panel" aria-label={title}>
      <h2>{title}</h2><p>{description}</p><Link href="/privacy/">{policy}</Link>
      <div className="privacy-actions"><button onClick={() => choose('rejected')}>{reject}</button><button onClick={() => choose('accepted')}>{accept}</button></div>
    </section> : null}
  </div>;
}
