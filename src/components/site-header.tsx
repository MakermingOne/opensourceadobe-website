import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/apps/", label: "Apps" },
  { href: "/alternatives/", label: "Alternatives" },
  { href: "/vs-adobe/", label: "Compare" },
  { href: "/download/", label: "Download" },
  { href: "/tutorials/", label: "Tutorials" },
  { href: "/updates/", label: "Updates" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/github/", label: "GitHub" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="identity-bar">
        <div className="container identity-bar__inner">
          <span className="identity-mark" aria-hidden="true" />
          <span>Unofficial · Independent guide</span>
        </div>
      </div>
      <div className="container header-main">
        <Link href="/" className="wordmark" aria-label="OpenSourceAdobe home">
          OpenSource<span>Adobe</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="primary-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
