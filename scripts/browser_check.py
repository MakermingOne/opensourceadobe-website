from pathlib import Path
from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:4173"
ROUTES = [
    "/",
    "/apps/",
    "/vs-adobe/",
    "/apps/photocraft/",
    "/apps/vectorcraft/",
    "/apps/filmcraft/",
    "/apps/lightcraft/",
    "/about/",
    "/contact/",
    "/disclaimer/",
    "/privacy/",
]
VIEWPORTS = [375, 768, 1024, 1280]


def launch_browser(playwright):
    try:
        return playwright.chromium.launch(headless=True)
    except Exception:
        chrome = Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
        if not chrome.exists():
            raise
        return playwright.chromium.launch(headless=True, executable_path=str(chrome))


def main():
    evidence_dir = Path("output/browser")
    evidence_dir.mkdir(parents=True, exist_ok=True)
    errors = []

    with sync_playwright() as playwright:
        browser = launch_browser(playwright)
        try:
            for width in VIEWPORTS:
                context = browser.new_context(viewport={"width": width, "height": 900})
                page = context.new_page()
                console_errors = []
                requests = []
                failed_responses = []
                page.on("console", lambda message: console_errors.append(f"{message.text} @ {message.location}") if message.type == "error" else None)
                page.on("request", lambda request: requests.append(request.url))
                page.on("response", lambda response: failed_responses.append(f"{response.status} {response.url}") if response.status >= 400 else None)
                response = page.goto(BASE_URL, wait_until="networkidle")
                assert response and response.status == 200, f"home failed at {width}px"
                document_width = page.evaluate("document.documentElement.scrollWidth")
                assert document_width <= width, f"page overflow at {width}px: {document_width}px"
                assert page.locator("h1").count() == 1
                assert page.get_by_text("Unofficial · Independent guide").count() == 1
                if width == 375:
                    table = page.locator(".table-scroll")
                    assert table.evaluate("element => element.scrollWidth > element.clientWidth"), "mobile comparison table is not scrollable"
                if width in (375, 1280):
                    page.screenshot(path=str(evidence_dir / f"home-{width}.png"), full_page=True)
                ga_requests = [url for url in requests if "googletagmanager.com" in url or "google-analytics.com" in url]
                assert not ga_requests, f"local build sent analytics at {width}px: {ga_requests}"
                font_requests = [url for url in requests if ".woff2" in url]
                assert font_requests and all(url.startswith(BASE_URL) for url in font_requests), "font request was not same-origin"
                assert not console_errors, f"console errors at {width}px: {console_errors}; failed responses: {failed_responses}"
                context.close()

            context = browser.new_context(viewport={"width": 1280, "height": 900})
            page = context.new_page()
            for route in ROUTES:
                response = page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
                assert response and response.status == 200, f"{route} returned {response.status if response else 'no response'}"
                assert page.locator("h1").count() == 1, f"{route} does not have one H1"
            page.goto(BASE_URL, wait_until="networkidle")
            page.keyboard.press("Tab")
            assert page.locator(":focus").get_attribute("href") == "#main-content", "skip link is not the first focus target"
            page.get_by_role("link", name="Apps", exact=True).click()
            page.wait_for_url(f"{BASE_URL}/apps/")
            assert "Seven different maturity questions" in page.locator("h1").inner_text()
            context.close()

            no_js = browser.new_context(java_script_enabled=False, viewport={"width": 375, "height": 900})
            page = no_js.new_page()
            response = page.goto(BASE_URL, wait_until="load")
            assert response and response.status == 200
            assert page.locator("h1").is_visible()
            assert page.locator("table").is_visible()
            no_js.close()
        finally:
            browser.close()

    print(f"Browser validation passed for {len(ROUTES)} routes and {len(VIEWPORTS)} viewport widths.")


if __name__ == "__main__":
    main()
