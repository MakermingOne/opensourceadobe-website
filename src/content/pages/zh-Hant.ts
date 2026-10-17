import type { LocalizedPage } from "./types";
import { brushNotes, brushSources, currentDigest } from "./update-notes";

const official = { label: "ArtCraft 官方工具目錄", href: "https://getartcraft.com/apps" };
const photo = { label: "PhotoCraft 官方功能說明", href: "https://getartcraft.com/apps/photocraft" };
const photoRepo = { label: "PhotoCraft 官方原始碼與安裝文件", href: "https://github.com/storytold/photocraft" };
const launcher = { label: "ArtCraft Launcher 官方說明與系統需求", href: "https://github.com/storytold/craft-launcher" };
const photoReleases = { label: "PhotoCraft 官方 GitHub Releases", href: "https://github.com/storytold/photocraft/releases" };
const launcherReleases = { label: "ArtCraft Launcher 官方 GitHub Releases", href: "https://github.com/storytold/craft-launcher/releases" };
const photoLink = { label: "PhotoCraft 下載與安裝教學", href: "/apps/photocraft/" };
const alternativeLink = { label: "Photoshop 替代方案與相容性比較", href: "/alternatives/photoshop/" };
const downloadLink = { label: "ArtCraft 下載與名稱釐清", href: "/download/" };
const homeLink = { label: "開源 Adobe 替代軟體總覽", href: "/" };

export const zhHantPages: Record<string, LocalizedPage> = {
  "/": {
    path: "/",
    title: "開源 Adobe 替代軟體：13 款免費 ArtCraft 工具對照與下載",
    description: "整理 13 款 ArtCraft 開源工具對應的 Adobe 軟體，含 PhotoCraft、VectorCraft、FilmCraft。附功能對照、適用情境、平台資訊與官方下載入口。",
    h1: "用工作流程找到你的開源 Adobe 替代方案",
    intro: ["開源 Adobe 替代軟體怎麼選？先從每天要完成的工作開始：修圖、向量繪圖、影片剪輯、相片整理，或是 PDF 與排版。本站將 ArtCraft 家族的 13 款工具放進同一份對照表，協助你找到值得試用的方向。", "OpenSourceAdobe 是獨立整理站，與 Adobe、ArtCraft 均無隸屬關係。以下功能與開發狀態依官方資料整理，並非本站的獨立實測；有下載檔，也不代表已適合正式交付。"],
    sections: [
      currentDigest["zh-Hant"],
      { id: "workflows", heading: "13 款開源創作工具，依工作流程分類", paragraphs: ["影像工作可先看 PhotoCraft 與 LightCraft：前者偏向圖層式修圖，後者處理相片資料庫與 RAW 顯影。向量繪圖與版面編排則分別看 VectorCraft、DesignCraft；製作影片、動態圖像與音訊，可進一步了解 FilmCraft、EffectCraft、SoundCraft。", "PdfCraft 處理 PDF，FigCraft 偏向介面設計與原型。WordCraft、DeckCraft、GridCraft 與 CADCraft 則延伸到文件、簡報、試算表及技術製圖。這些工具並非每一款都有直接對應的 Adobe 產品，也不應只憑介面相似就推定檔案相容。"] },
      { id: "comparison", heading: "ArtCraft 與 Adobe 全對照表", paragraphs: ["工具名稱、平台與開發狀態沿用本站共用目錄。平台欄代表官方列出的目標平台，各版本的安裝檔與處理器架構仍須到官方 Releases 核對。Early alpha 表示早期測試，開發中也不等同可穩定取代現有工作流程。"], kind: "apps" },
      { id: "boundaries", heading: "哪些工作可以交給開源工具，哪些還不行", paragraphs: ["學習圖層、整理個人素材、試做小型作品，都適合從檔案副本開始。正式轉移前，請保留原始檔，測試開啟、編輯、儲存、關閉後重開，以及最後輸出。畫面看起來相近，只是驗收的第一步。", "需要與客戶交換複雜 PSD、使用特定外掛、交付印刷色彩，或維護長篇剪輯專案時，應另外驗證字型、色彩描述檔、效果、連結素材及輸出結果。本站不把官方功能清單當成完整相容的保證，也不建議只因為免費就立刻停用原本的交付工具。", "開源授權與素材使用權也要分開理解。工具原始碼的授權，不會自動授予字型、圖庫、範本或客戶素材的使用權；商業專案仍應逐項確認。"] },
      { id: "evidence", heading: "從類別到功能與相容性證據", paragraphs: ["如果主要工作是修圖，先讀 Photoshop 替代方案，再到 PhotoCraft 產品頁核對下載與安裝方式。前者幫你判斷是否適合轉換，後者協助你開始試用，兩頁各有不同用途。", "目前繁體中文首批只涵蓋首頁、Photoshop 比較、PhotoCraft 與下載引導。其他工具的深入比較仍在英文版，尚未建立的中文頁面不會以空白翻譯頁代替。"], links: [alternativeLink, photoLink, downloadLink] },
      { id: "updates", heading: "最新版本與更新", paragraphs: ["工具更新快速，同一天的產品介紹頁、目錄與 GitHub Releases 也可能顯示不同版本。選擇安裝檔時，請以官方發行頁的版本、日期與資產清單為準，並記下自己實際測試的版本。", "本站英文更新頁保留發布日期、官方來源及功能限制。新版本值得重新測試，但版本號增加不能證明舊問題都已解決；若工作仰賴某項功能，請用相同樣本重新驗證。"], links: [{ label: "版本發布與更新紀錄（英文）", href: "https://opensourceadobe.com/updates/" }, { label: "完整工具目錄（英文）", href: "https://opensourceadobe.com/apps/" }] },
    ],
    faq: [
      { question: "ArtCraft 是免費的嗎？", answer: "此處整理的 Craft Apps 是官方標示免費、開源的創作工具。ArtCraft 同名的 AI 創作產品可能有不同服務與計費安排，不能把兩者混為一談。" },
      { question: "可以直接取代 Adobe 嗎？", answer: "要看工作內容及交付格式。初步學習與個人試作可先嘗試，正式案子的複雜檔案、色彩、外掛和穩定性，仍需逐一驗證；本站未完成獨立實測。" },
      { question: "支援繁體中文介面嗎？", answer: "本站提供繁體中文內容，不代表每款工具都有繁體中文介面。請依各專案及版本的官方語言清單確認，不能用 Launcher 的語言推定 PhotoCraft 的語言。" },
      { question: "ArtCraft Launcher 是什麼？", answer: "它是安裝、更新與開啟 Craft Apps 的獨立管理工具。你也能略過 Launcher，到單一工具的官方 GitHub Releases 下載。" },
      { question: "Windows、macOS、Linux 都能裝嗎？", answer: "多款工具列出這些平台，但實際可用安裝檔、處理器架構及最低需求依工具與版本而異。請先核對官方發行資產，不要只看目錄上的平台名稱。" },
    ],
    sources: [official, launcher, photo],
  },
  "/alternatives/photoshop/": {
    path: "/alternatives/photoshop/",
    title: "Photoshop 替代方案：PhotoCraft 免費開源修圖功能與限制",
    description: "找 Photoshop 或 PS 替代軟體？比較 PhotoCraft 的圖層、PSD、色彩與外掛工作流程，說明官方功能、尚待驗證的相容性，以及 Windows、macOS、Linux 下載方式。",
    h1: "Photoshop 替代方案：免費開源的 PhotoCraft 能做到什麼",
    intro: ["Photoshop 替代方案不能只看有沒有圖層或能不能開 PSD。真正影響轉換成本的，是原來的字型、遮罩、調整、色彩和輸出能否保留。PhotoCraft 是值得追蹤的免費開源修圖工具，但仍屬早期測試階段。", "本頁依官方文件整理功能與決策方法，未進行獨立相容性實測。官方展示與專案自己的測試數字，不等於本站已驗證你的檔案可以無損往返。"],
    sections: [
      { id: "why", heading: "為什麼要找 Photoshop 替代方案", paragraphs: ["想降低固定支出、偏好本機作業、希望查看原始碼，或只需要裁切、圖層合成與簡單修圖，都是尋找 PS 替代工具的合理起點。先列出自己真正會用到的操作，再比較工具，比照著最長的功能清單選擇更有效。", "若已有 Adobe 訂閱，請先查看自己的方案、合約期與取消條款。不同方案的費用與取消條件不同，本站不以一個金額概括所有使用者，也不建議在驗證替代流程之前就取消工作所需的服務。"] },
      { id: "what", heading: "PhotoCraft 是什麼：以 Rust 開發的開源修圖軟體", paragraphs: ["PhotoCraft 是 ArtCraft 家族的圖層式影像編輯專案，以 Rust 開發。官方列出 PSD／PSB、遮罩、調整圖層與文字等功能；這些資訊描述產品方向，並不是對每個版本、每種文件的完整品質保證。", "熟悉 Photoshop 的使用者可從相近的編輯概念開始，但快捷鍵、面板行為及特定工具仍要實際確認。對早期測試工具而言，可靠儲存與重新開啟，通常比展示畫面的豐富程度更值得先檢查。"], links: [photoLink] },
      { id: "features", heading: "功能對照：PhotoCraft 與 Photoshop 差在哪", paragraphs: ["下表以工作需求比較，PhotoCraft 欄區分官方列出與仍需驗證的部分，不將功能名稱相同解讀為結果相同。"], table: { caption: "PhotoCraft 與 Photoshop 工作流程對照", headers: ["需求", "PhotoCraft", "Photoshop 使用者應核對的項目"], rows: [
        ["圖層與遮罩", "官方列出相關功能", "群組、混合模式、遮罩邊緣與透明度"],
        ["PSD／PSB", "官方宣稱可開啟與儲存分層檔", "開啟後再儲存，逐層核對內容"],
        ["文字編輯", "官方列出文字工具", "字型替換、換行、字距與段落"],
        ["調整圖層", "官方列出非破壞式調整", "參數與渲染結果是否一致"],
        ["智慧型物件", "官方列出相關能力", "嵌入、連結及濾鏡的往返結果"],
        ["色彩管理", "官方列出 ICC 與多種色彩模式", "描述檔、軟打樣與實際印刷輸出"],
        ["去背與選取", "官方列出本機選取功能", "髮絲、半透明物件與細節邊緣"],
        ["外掛與自動化", "不可推定相容 Photoshop 外掛", "必用外掛、動作與腳本是否能重建"],
        ["生成式 AI", "不可視為 Adobe 生成式功能的等價替代", "模型、操作方式、授權及工作流程"],
      ] } },
      { id: "psd", heading: "可以開 PSD 嗎？檔案相容性應如何驗證", paragraphs: ["官方列出分層 PSD／PSB 的開啟與儲存能力，但本站尚未建立獨立測試樣本。『能打開』只代表第一步，不代表智慧型物件、圖層樣式、文字與色彩能完整保留。", "請複製一份具代表性的檔案，記錄原始畫面與圖層，再用 PhotoCraft 開啟、修改、另存新檔並重開；若還需與他人協作，也要回到對方原用工具檢查。把字型、效果、檔案大小與輸出差異記下來，才有足夠依據判斷可用範圍。"] },
      { id: "limits", heading: "還差什麼：印刷色彩、外掛生態與生成式 AI", paragraphs: ["印刷案件需要檢查的不只是 CMYK 選項，而是指定色彩描述檔、軟打樣、輸出規格與印刷端的實際要求。PhotoCraft 官方有列出色彩能力，但這不足以替你的特定印前流程背書。", "如果每天依賴特定 Photoshop 外掛、團隊共用動作或生成式工具，請把它們各列成一項必要條件。PhotoCraft、ArtCraft AI 產品與 Adobe 的服務是不同專案，不能因為名稱或宣傳接近就假定功能、權利及費用一致。"] },
      { id: "decision", heading: "誰適合換、誰不適合換", paragraphs: ["願意使用副本測試、能接受早期版本問題、以學習或個人作品為主的人，可以先試 PhotoCraft。把第一次試用限制在一個小專案，確認每一步都能重做與復原，再逐步增加檔案複雜度。", "需要準時交付、完整交換複雜 PSD、使用既有外掛或遵循印前規範的人，應保留已驗證的工具。若重點是成熟的開源修圖流程，也可閱讀英文比較中的 GIMP 與 Krita；Photopea 則須另行區分免費服務與開源授權。"], links: [{ label: "其他 Photoshop 替代工具比較（英文）", href: "https://opensourceadobe.com/alternatives/photoshop/" }, { label: "VectorCraft 向量繪圖指南（英文）", href: "https://opensourceadobe.com/apps/vectorcraft/" }] },
      { id: "install", heading: "下載與安裝：先選平台，再選安裝路徑", paragraphs: ["需要管理多款工具可使用 ArtCraft Launcher；只想試修圖則可直接從 PhotoCraft 官方 Releases 下載。Windows 核對處理器架構，macOS 核對 Apple silicon 或 Intel，Linux 核對套件格式與執行需求。", "不要以副檔名或檔名猜測相容性。發行頁若提供校驗檔，請核對下載；安裝後先建立新檔、儲存並重開，再開始測試原有文件。"], links: [photoLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft 可以完全取代 Photoshop 嗎？", answer: "目前不宜做完整取代的承諾。PhotoCraft 仍屬早期測試，能否使用取決於你的 PSD、色彩、外掛與交付需求，本站尚未完成獨立相容性測試。" },
      { question: "PhotoCraft 可以開啟有圖層的 PSD 嗎？", answer: "官方列出分層 PSD／PSB 開啟與儲存能力，但複雜效果、字型及智慧型物件仍應以副本進行往返測試，不應推定所有 Photoshop 文件都能無損保留。" },
      { question: "免費修圖軟體一定是開源嗎？", answer: "不一定。免費描述使用費用，開源描述原始碼與授權條件。選擇替代工具時應分別確認，不能把免費網頁服務一律稱作開源。" },
      { question: "適合拿來做商業案件嗎？", answer: "請分別確認工具授權、素材權利及技術可靠度。即使授權允許使用，也不表示特定文件或客戶交付流程已經驗證；正式案件應先完成自己的測試。" },
      { question: "想要繁體中文修圖介面應該看哪裡？", answer: "請查看 PhotoCraft 對應版本的官方語言說明或設定。本站繁體中文內容、媒體截圖與 Launcher 的語言清單，都不能替代 PhotoCraft 本身的官方確認。" },
    ],
    sources: [photo, photoRepo, photoReleases],
  },
  "/apps/photocraft/": {
    path: "/apps/photocraft/",
    title: "PhotoCraft 下載與安裝教學：免費開源 Photoshop 替代軟體",
    description: "PhotoCraft 下載與安裝教學，整理 Launcher 與 GitHub Releases 兩種路徑、Windows／macOS／Linux 安裝要點、介面語言確認方法與首次試用清單。",
    h1: "PhotoCraft 下載與安裝教學",
    intro: ["PhotoCraft 下載請從官方產品頁或 storytold/photocraft 的 GitHub Releases 開始。它是 ArtCraft 家族的開源修圖工具，仍屬早期測試；建議先用檔案副本試操作，再評估是否加入日常流程。", "本頁整理安裝前要確認的資訊，不提供重新封裝的安裝檔。官方資料與安裝資產會更新，請以你選定版本的文件為準。"],
    sections: [
      brushNotes["zh-Hant"],
      { id: "overview", heading: "PhotoCraft 是什麼", paragraphs: ["PhotoCraft 是以 Rust 開發的圖層式影像編輯專案，官方列出圖層、遮罩、文字、調整與 PSD／PSB 等功能。它面向熟悉 Photoshop 類型操作的使用者，但相近的操作概念不代表完整格式相容。", "如果你正在決定是否轉換工具，請先看功能與限制比較；若已確定要試用，再依本頁選擇安裝方式。本站未完成獨立實測，不把官方宣稱改寫為已驗證結果。"], links: [alternativeLink] },
      { id: "platforms", heading: "系統需求與支援平台", paragraphs: ["官方列出桌面及 Web 等目標，但發行資產才決定該版本能直接下載什麼。處理器架構、顯示驅動與套件依賴也會影響能否執行；Web 建置檔不一定是可直接開啟的線上編輯器。"], table: { caption: "PhotoCraft 各平台下載前檢查", headers: ["平台", "常見發行格式", "安裝前確認"], rows: [["Windows", "MSI；部分版本另有可攜式 ZIP", "x64、ARM64、x86 是否符合電腦與該版本資產"], ["macOS", "Universal DMG", "官方列出的系統版本、Apple silicon／Intel 支援"], ["Linux", "AppImage、DEB、RPM、Flatpak 等依版本提供", "處理器、執行環境及套件依賴"], ["Web", "WebAssembly 建置依版本提供", "是否需要自行架設、瀏覽器支援與部署說明"]] } },
      { id: "routes", heading: "下載方式：Launcher 或 GitHub 兩種路徑", paragraphs: ["ArtCraft Launcher 適合想管理多款 Craft Apps 的人，由同一工具處理安裝與更新。直接下載則適合只想安裝 PhotoCraft，或希望自行保留指定版本與安裝包的人。兩者最後安裝的工具仍要按實際版本確認。", "下載前查看儲存庫擁有者是否為 storytold，以及專案名稱是否為 photocraft。網路上的同名 AI 服務、社群移植與第三方整合包不能視為相同的官方桌面發行。"], links: [photoReleases, downloadLink, launcherReleases] },
      { id: "steps", heading: "安裝步驟（Windows／macOS／Linux）", paragraphs: ["Windows：在官方 Releases 展開 Assets，選擇符合架構的 MSI，執行安裝後開啟 PhotoCraft。若該版提供可攜式 ZIP，可解壓縮後依官方說明執行；不要把 ARM64、x64 與 x86 當成可以互換。", "macOS：下載官方 DMG，開啟映像檔後依畫面將 PhotoCraft 移到 Applications。第一次開啟若遇到系統提示，先核對來源、版本與官方安裝文件；不建議以停用整體系統防護當成通用安裝步驟。", "Linux：依發行版與架構選擇官方提供的格式。AppImage 通常需要先設定可執行權限，Flatpak 可能需要對應 runtime；DEB／RPM 則應由系統套件工具處理依賴。遇到缺少函式庫的錯誤，先看該版本文件，切勿任意替換系統核心函式庫。"] },
      { id: "language", heading: "介面語言支援情況", paragraphs: ["本站提供繁體中文教學，不代表你下載的 PhotoCraft 版本一定有繁體中文介面。本次核對的 PhotoCraft 官方產品介紹與 README，未提供足以確認特定發行版完整繁體中文介面的清單，因此本站不做已支援的承諾。", "第三方文章或截圖若顯示中文，可能與版本、平台或測試環境有關。請以 PhotoCraft 本身的設定選單、該版發行說明及官方回覆核對；若要回報問題，附上版本、作業系統與語言設定，較容易判斷。", "ArtCraft Launcher 是另一個專案，它的官方 README 列有自己的介面語言及自動選擇規則。這份清單不能套用到 PhotoCraft，也不能把簡體中文選項當成完整繁體中文支援。"] },
      { id: "first-run", heading: "第一次使用先試這些功能", paragraphs: ["先建立小型文件，新增圖層、輸入文字、加入遮罩及一項調整；儲存後關閉並重開，確認內容仍然可編輯。接著匯出常用格式，比較透明度、尺寸與顏色。這是一份建議驗收順序，並非本站測試結果。", "再選一份具代表性的 PSD 副本，檢查字型、圖層樣式及混合模式。若你需要印刷或大型檔案，另外建立對應測試。每次記下版本及問題，升級後就能用同一樣本確認變化，而不只憑感覺判斷更穩定。", "正式檔案請保留原始版本，另存新的測試文件。找到可用範圍之後，再決定是否逐步轉換；一次成功開啟，不足以證明整個工作流程已經可靠。"], links: [alternativeLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft 官方下載在哪裡？", answer: "從 getartcraft.com 的 PhotoCraft 產品頁，或 GitHub 的 storytold/photocraft Releases 下載。本站提供入口與資訊，不重新封裝或代管安裝檔。" },
      { question: "一定要安裝 ArtCraft Launcher 嗎？", answer: "不用。Launcher 是管理多款工具的選項；你可以直接下載 PhotoCraft 的單獨安裝包，之後自行留意新版本。" },
      { question: "PhotoCraft 有繁體中文介面嗎？", answer: "本站目前沒有足夠的官方版本資料可確認完整繁體中文介面。請查看 PhotoCraft 本身設定與發行說明，不能用媒體描述或 Launcher 的語言推定。" },
      { question: "下載後不能開啟怎麼辦？", answer: "先核對安裝包架構、系統需求與官方發行說明，保留錯誤訊息及版本。Linux 另檢查執行權限及依賴；macOS 與 Windows 請核對來源及系統提示。" },
      { question: "安裝成功就能拿來交付 PSD 嗎？", answer: "安裝成功只表示工具能啟動。請用代表性檔案副本測試開啟、另存與往返，確認客戶所需的字型、效果與色彩後，再決定可用範圍。" },
    ],
    sources: [photo, photoRepo, photoReleases, launcher, ...brushSources["zh-Hant"]],
  },
  "/download/": {
    path: "/download/",
    title: "ArtCraft 下載與安裝教學：Launcher 管理 13 款開源工具",
    description: "ArtCraft 下載從哪裡開始？釐清 ArtCraft、Launcher、Craft Apps 與 ArtCraft App，整理官方下載、各平台安裝教學、單獨下載及早期測試注意事項。",
    h1: "ArtCraft 下載與安裝教學",
    intro: ["ArtCraft 下載前，先確認你要找的是開源創作工具，還是同品牌的 AI 創作產品。想管理 PhotoCraft 等 Craft Apps，可使用 ArtCraft Launcher；只需要一款工具，也可以從該專案的官方 GitHub Releases 下載。", "本站是獨立資訊站，下載連結導向官方，不提供第三方封裝。以下按選擇路徑、平台與版本核對說明，避免裝到名稱相近但用途不同的產品。"],
    sections: [
      { id: "names", heading: "先釐清名稱：ArtCraft、ArtCraft Launcher、Craft Apps、ArtCraft App 的差別", paragraphs: ["搜尋結果常把品牌、工具家族與下載管理器混在一起。判斷方式是看產品用途與官方儲存庫，而不是只看名稱是否包含 ArtCraft。"], table: { caption: "四個容易混淆的 ArtCraft 名稱", headers: ["名稱", "指的是什麼", "應前往哪裡"], rows: [["ArtCraft", "品牌及其創作產品脈絡；名稱本身不能代表特定工具", "官方網站核對產品類型"], ["ArtCraft Launcher", "安裝、更新與開啟 Craft Apps 的管理工具", "storytold/craft-launcher"], ["Craft Apps／Crafting Apps", "PhotoCraft 等 13 款創作工具的家族稱呼", "官方工具目錄或個別專案"], ["ArtCraft App", "官網另有 AI 創作產品入口，並非 PhotoCraft 的同義詞", "依官方產品說明確認功能及計費"]] }, links: [photoLink, alternativeLink, homeLink] },
      { id: "launcher", heading: "下載 ArtCraft Launcher（分平台）", paragraphs: ["請到 storytold/craft-launcher 的官方 Releases，選擇符合自己作業系統與處理器的資產。macOS 常見 DMG，Windows 常見 MSI，Linux 則依該版本提供 AppImage 或其他格式；不同版本的資產清單可能改變。", "不要只下載清單最上面的檔案，也不要把原始碼壓縮包當成桌面安裝器。先看檔名的系統與架構，再看發行說明；若提供 SHA-256 校驗資訊，可用來核對檔案完整性。"], links: [launcherReleases, launcher] },
      { id: "use", heading: "使用教學：下載 → 安裝 → 開啟 → Install", paragraphs: ["macOS 下載 DMG 後，依畫面把 Launcher 拖曳到 Applications，再開啟；Windows 執行對應架構的安裝器；Linux 依官方文件設定可執行權限或使用套件管理工具。『拖曳』是 macOS 常見步驟，不能套用到所有平台。", "開啟 Launcher 後找到想試用的工具，查看狀態及版本，再選擇 Install。完成後開啟工具，先用新建的小文件確認儲存與重開。Launcher 能管理安裝流程，並不會讓仍在測試中的工具自動變成熟。", "更新前先備份專案，記下現用版本。若新版本改變文件格式或操作方式，有原始檔與測試紀錄，才較容易判斷是否適合立即升級。"] },
      { id: "standalone", heading: "略過 Launcher：從 GitHub Releases 單獨下載", paragraphs: ["只需要 PhotoCraft 時，可直接到 storytold/photocraft 的 Releases。單獨下載讓你自己選版本與檔案格式，也代表需要自行留意更新。請從官方產品頁追到儲存庫，避免使用無法確認來源的重新上傳。", "其他 Craft Apps 也應回到各自的官方專案確認。社群移植、Android 版本或名字相近的啟動器，不會因為使用同一品牌字樣就成為官方桌面發行；平台與維護責任都可能不同。"], links: [photoReleases, photoLink] },
      { id: "status", heading: "各工具目前狀態", paragraphs: ["下表沿用本站共用工具資料。『早期測試』與『開發中』是選擇時的重要資訊，有可下載安裝包也不代表所有功能已經可交付。請先找符合自己工作的小樣本驗證，再投入時間轉移專案。"], kind: "apps" },
      { id: "requirements", heading: "系統需求：依 Launcher、工具與發行格式分別確認", paragraphs: ["不要把 Launcher 能執行的環境直接當成每款 Craft App 的最低需求。Windows 10／11、macOS 版本、Linux 的 glibc 與圖形函式庫，以及處理器架構，都應以選定專案和版本的文件核對。", "尤其 Linux 不宜宣稱所有安裝包都只需要同一個 glibc 版本：建置環境與 CPU 架構可能不同，Flatpak 也有自己的 runtime。若官方未明確列出某環境可用，本站不把它寫成已保證支援。", "開始安裝前，記錄作業系統版本與 CPU，預留安裝及測試文件空間。若首次啟動失敗，請保留原始錯誤訊息，回到該工具的官方文件與 Issues 查找，比反覆更換不明安裝包更有幫助。"], links: [launcher, photoRepo, downloadLink] },
    ],
    faq: [
      { question: "ArtCraft 與 ArtCraft Launcher 是同一款程式嗎？", answer: "不是。ArtCraft 是品牌及產品脈絡，Launcher 是管理 Craft Apps 的獨立工具；官網的 ArtCraft App 另有 AI 創作用途。請依用途及官方儲存庫辨認。" },
      { question: "一定要透過 Launcher 下載嗎？", answer: "不用。你可以從各款工具的官方 GitHub Releases 單獨下載。Launcher 適合想在同一處管理多款工具與更新的人。" },
      { question: "Launcher 會一次安裝全部 13 款工具嗎？", answer: "Launcher 提供工具目錄與安裝管理，你可選擇需要的工具。實際列表與可用版本依當前 Launcher 及各專案發布情況而異。" },
      { question: "所有工具都能在我的 Linux 電腦上執行嗎？", answer: "不能一概保證。請逐一核對處理器、套件格式、glibc、圖形依賴或 Flatpak runtime。不同工具與版本可能有不同需求。" },
      { question: "免費下載就代表能完全取代 Adobe 嗎？", answer: "免費與開源描述費用及授權，不能保證功能、檔案相容性或交付品質。請先閱讀對應比較，再用副本驗證自己的工作流程。" },
    ],
    sources: [official, launcher, launcherReleases, photoReleases],
  },
};
