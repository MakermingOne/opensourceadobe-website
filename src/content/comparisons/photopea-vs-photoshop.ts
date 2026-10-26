import type { ComparisonGuide } from "./types";

const accessedAt = "2026-10-26";

export const photopeaComparison: ComparisonGuide = {
  path: "/vs/photopea-vs-photoshop/",
  title: "Photopea vs Photoshop: PSD Editing, Privacy & Free Use",
  description: "Compare Photopea and Photoshop for PSD editing, photography, design and print. Learn how Photopea handles files, why it is free and when offline use works.",
  h1: "Photopea vs Photoshop: which fits your work?",
  introduction: "Photopea is a free-to-use, proprietary image editor in the browser. Photoshop is a paid Adobe product with a broader desktop production ecosystem. Photopea can be a convenient way to edit layered PSDs on a computer where installing an app is inconvenient. Photoshop is often easier to retain for advanced retouching, established automation and Adobe team handoffs. Choose by testing the files and revisions you actually need to deliver.",
  verdicts: [
    "Choose Photopea for occasional PSD edits, browser-based work and fast access on a shared or managed computer, subject to the organization’s software policy.",
    "Choose Photoshop for established desktop workflows built around Adobe plug-ins, complex documents and production handoffs that must remain Photoshop-native.",
    "Photopea is free with advertising and offers paid Premium access. It is closed source; local document processing does not mean every website feature works without a network.",
  ],
  table: {
    caption: "Photopea and desktop Photoshop compared by workflow",
    columns: ["Criterion", "Photopea", "Photoshop"],
    rows: [
      { label: "Price", cells: ["Price", "Free with ads; paid Premium removes ads", "Paid subscription; check the plan, region and billing term"] },
      { label: "License", cells: ["License", "Proprietary, closed source; free use and commercial output permitted by its terms", "Proprietary Adobe license under the selected plan"] },
      { label: "Feature coverage", cells: ["Feature coverage", "Layers, masks, adjustment layers, text, vectors and Smart Objects in a browser", "Broad desktop editing, RAW workflow, automation and Adobe integrations"] },
      { label: "PSD compatibility", cells: ["PSD compatibility", "PSD-oriented editing; verify complex effects, fonts and round trips", "Native PSD workflow; external fonts, assets and plug-ins still need attention"] },
      { label: "Performance", cells: ["Performance", "Uses local hardware through the browser; memory and tab behavior matter", "Native desktop app; performance varies with hardware, document and settings"] },
      { label: "Learning curve", cells: ["Learning curve", "Familiar layout for Photoshop users; browser shortcuts and feature differences need testing", "Extensive learning resources; advanced features and team conventions take practice"] },
      { label: "Community and ecosystem", cells: ["Community and ecosystem", "Official tutorials, scripts and a web plug-in API", "Adobe training, commercial plug-ins, actions and broader production integrations"] },
      { label: "Platforms", cells: ["Platforms", "Modern browser on Windows, macOS, Linux and other devices", "Desktop Windows and macOS, with separate web and mobile offerings"] },
    ],
  },
  scenarios: [
    { heading: "Photography and retouching", paragraphs: [
      "Photopea suits an occasional correction, crop, mask or composite when opening a browser is the simplest route to the finished image. Work on a copy, save locally during the edit and inspect the final export at full size. A larger screen and suitable input device are more comfortable for detailed work than a phone.",
      "Photoshop suits photographers with established Camera Raw processing, reusable automation and demanding revision workflows. If you edit daily, measure the time needed for the whole job, including saving and later changes. An editor that handles one quick correction may still be inconvenient for a large repeated workload.",
    ] },
    { heading: "Graphic design and PSD templates", paragraphs: [
      "Photopea is useful for changing text, replacing images and preparing web assets from PSD templates. It supports Smart Objects and common layered editing, but that is not a promise of complete Photoshop parity. Check installed fonts, masks, effects and object contents before returning an editable file.",
      "Photoshop is the more direct option for designs tied to Adobe plug-ins, complex PSD conventions or a studio’s documented production process. Test an actual template through an edit-save-reopen cycle in both tools. For flattened web output, the choice is more flexible; for editable handoffs, agree on acceptable differences first.",
    ] },
    { heading: "Professional printing and color delivery", paragraphs: [
      "Do not select a prepress editor solely because it opens the artwork. Test the required color mode, ICC profiles, resolution, transparency and export in the printer’s actual workflow. A browser preview is insufficient evidence of a correct printed result, and neither editor replaces final layout and preflight tools.",
      "Photopea can be practical for preparing assets when the print provider accepts the exported file and verifies it. Photoshop is usually a more direct fit for teams already using its color and print-production tools. Ask for a proof and preserve an editable original whichever application you use.",
    ] },
  ],
  sections: [
    { id: "safety", heading: "Is Photopea safe? Why is it free?", paragraphs: [
      "Photopea’s published policy says ordinary local files are processed on your device rather than uploaded to its servers. Optional cloud-storage access transfers files to and from the provider you authorize; signing in and paying also create account records. These distinctions matter when assessing confidential work. This is the publisher’s stated policy, not an independent security audit.",
      "Advertising funds free access, and Premium removes ads. Photopea remains closed source: free use does not grant source-code rights. Use the official website and review any optional integration before enabling it. For sensitive work, follow your organization’s browser, advertising and cloud-storage rules.",
    ] },
    { id: "switching", heading: "What to check before relying on Photopea", paragraphs: [
      "Try a representative PSD with its real fonts, masks, Smart Objects and effects, then save a copy and reopen it in the recipient’s editor. Confirm dimensions, transparency, color and all elements that must remain editable. Keep the original while testing and save progress regularly rather than treating an open tab as a backup.",
      "Compare performance using the same task on the same machine. Browser memory limits, extensions and tab suspension can affect a long session; desktop Photoshop also needs suitable hardware and storage. There is no universal speed winner. Identify essential plug-ins and scripts individually rather than assuming a similar interface guarantees compatibility.",
    ] },
  ],
  faqs: [
    { question: "Can Photopea work offline?", answer: "Photopea’s manual says you can load the editor, disconnect and continue local editing. Load it before going offline and keep the tab open. A fresh launch, cloud storage or other online features may need a connection. Save locally and test your intended offline workflow in advance." },
    { question: "Can I use Photopea for commercial work for free?", answer: "Yes. Photopea’s terms permit free use for any purpose and selling work you create without paying Photopea a share. You still need appropriate rights for any third-party images, fonts, stock assets or other material included in the result." },
    { question: "Can Photopea open and save Photoshop PSD files?", answer: "Yes. PSD editing is a central Photopea workflow. Complex Photoshop features, fonts and effects still need testing; do not promise a perfect round trip from the file extension alone. Save a separate copy and check the edited document in the recipient’s Photoshop version if editable delivery matters." },
    { question: "Does Photopea work on a Mac?", answer: "Yes, Photopea runs in a modern browser on macOS, as well as other operating systems. No native desktop installation is needed for browser use. Check keyboard behavior, local fonts, available memory and file saving on the particular Mac and browser you plan to use." },
    { question: "Can I use Photoshop plug-ins in Photopea?", answer: "Do not assume that Photoshop extensions or plug-ins work in Photopea. It has its own web plug-in API and scripting features. Check each required integration and automation independently, including its output and permissions. A similar interface does not guarantee a compatible extension system." },
    { question: "Which is better for team collaboration?", answer: "Photopea can simplify access to a shared PSD, but browser availability is not the same as simultaneous document collaboration. Define file ownership, saving and review separately. Photoshop is usually easier for a team already standardized on Adobe-native documents, linked assets and Adobe review workflows." },
    { question: "What alternatives are similar to Photopea?", answer: "GIMP is an open source desktop choice for raster editing; Krita focuses on painting and illustration. Photoshop fits Adobe-centered production. The best alternative depends on whether you need browser access, source-code freedom, brushes or editable PSD handoffs. Compare those requirements in our Photoshop alternatives guide." },
  ],
  related: { href: "/vs/gimp-vs-photoshop/", label: "Related: GIMP vs Photoshop →" },
  sources: [
    { id: "photopea-vs-home", type: "official-page", title: "Photopea official editor and local processing", url: "https://www.photopea.com/", accessedAt },
    { id: "photopea-vs-terms", type: "official-page", title: "Photopea terms, privacy and optional cloud access", url: "https://www.photopea.com/privacy.html", accessedAt },
    { id: "photopea-vs-offline", type: "official-page", title: "Photopea manual: device support and offline editing", url: "https://www.photopea.com/learn/", accessedAt },
    { id: "photopea-vs-saving", type: "official-page", title: "Photopea manual: opening and saving files", url: "https://www.photopea.com/learn/opening-saving", accessedAt },
    { id: "photopea-vs-smart", type: "official-page", title: "Photopea manual: Smart Objects", url: "https://www.photopea.com/learn/smart-objects", accessedAt },
    { id: "photopea-vs-plugins", type: "official-page", title: "Photopea web plug-in API", url: "https://www.photopea.com/api/plugins", accessedAt },
    { id: "photopea-vs-accounts", type: "official-page", title: "Photopea Free and Premium accounts", url: "https://www.photopea.com/api/accounts", accessedAt },
    { id: "photopea-vs-ads", type: "official-page", title: "Photopea explains its advertising model", url: "https://www.photopea.com/tuts/ads-in-photopea-do-not-work-what-to-do/", accessedAt },
    { id: "photopea-vs-adobe", type: "official-page", title: "Adobe Photoshop features and plans", url: "https://www.adobe.com/products/photoshop.html", accessedAt },
  ],
};
