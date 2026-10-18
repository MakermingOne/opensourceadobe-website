import type { LocalizedPage } from "./types";

const official = { label: "ArtCraft 公式ツール一覧（英語）", href: "https://getartcraft.com/apps" };
const photo = { label: "PhotoCraft 公式製品ページ（英語）", href: "https://getartcraft.com/apps/photocraft" };
const photoRepo = { label: "PhotoCraft のソースコード・公式資料（英語）", href: "https://github.com/storytold/photocraft" };
const launcher = { label: "ArtCraft Launcher の公式資料（英語）", href: "https://github.com/storytold/craft-launcher" };
const photoReleases = { label: "PhotoCraft の公式リリース（英語）", href: "https://github.com/storytold/photocraft/releases" };
const launcherReleases = { label: "Launcher の公式リリース（英語）", href: "https://github.com/storytold/craft-launcher/releases" };
const photoLink = { label: "PhotoCraft のダウンロードとインストール方法", href: "/apps/photocraft/" };
const alternativeLink = { label: "Photoshop の代替として PhotoCraft を比較する", href: "/alternatives/photoshop/" };
const downloadLink = { label: "ArtCraft Launcher と個別ダウンロードの選び方", href: "/download/" };
const homeLink = { label: "Adobe の代替ツールを用途別に探す", href: "/" };

export const jaPages: Record<string, LocalizedPage> = {
  "/": {
    path: "/",
    title: "Adobe の無料オープンソース代替ソフト：ArtCraft 全13ツール",
    description: "Adobe の代替候補を用途別に紹介。ArtCraft の13ツールについて、画像編集・動画編集などの用途、開発状況、互換性の注意点と公式ダウンロードを確認できます。",
    h1: "Adobe のオープンソース代替ソフトを、制作の用途から探す",
    intro: ["Adobe の代替ソフトを選ぶなら、まず自分が行う作業から考えましょう。写真のレタッチ、イラスト制作、動画編集、PDF の整理では、必要な機能もファイルも異なります。このページでは ArtCraft の13ツールを用途別に整理し、対応する Adobe 製品と開発状況を一覧で紹介します。", "OpenSourceAdobe は Adobe、ArtCraft とは関係のない独立したガイドです。説明は公式資料に基づいており、当サイトの実機検証結果ではありません。インストーラーが公開されていても、仕事で必要な機能や安定性まで確認されたとは限りません。"],
    sections: [
      { id: "update-2026-10-17", heading: "10月17日の記録：開発資料と利用者の報告", paragraphs: ["10月17日の更新記録では、FigCraft の開発資料にエージェントのファイル読み書き範囲を任意で制限する説明が追加されています。同記録で確認したインストーラーは 0.6.0 であり、資料上の機能が配布版に含まれるとは判断していません。OS 全体のサンドボックスを意味するものでもありません。", "PhotoCraft のブラシ間隔、PdfCraft の白いカーソル、MacBook Pro での EffectCraft の停止について、個別の利用者報告もまとめています。これらは当サイトの再現テストや、すべての環境に当てはまる診断ではありません。バージョンや環境の情報が不足している例もあります。"], links: [{ label: "10月17日の更新記録と個別の出典（英語）", href: "https://opensourceadobe.com/updates/2026-10-17/" }, { label: "PhotoCraft のブラシ間隔を確認する", href: "/apps/photocraft/#brush-spacing-report" }] },
      { id: "workflows", heading: "無料の制作ソフトを、やりたいことから選ぶ", paragraphs: ["レイヤーを使う画像編集には PhotoCraft、写真管理と RAW 現像には LightCraft が位置づけられています。ベクターイラストは VectorCraft、紙面のレイアウトは DesignCraft、動画編集は FilmCraft、映像合成は EffectCraft、音声編集は SoundCraft が担当します。見慣れた画面かどうかに加え、完成品を必要な形式で書き出せるかを確認してください。", "PdfCraft は PDF、FigCraft は UI デザイン、WordCraft は文書、DeckCraft はスライド、GridCraft は表計算、CADCraft は製図を対象とします。すべてに Adobe の直接の対応製品があるわけではありません。下の対応表は用途を理解するためのもので、同等の機能や交換可能なファイルを保証するものではありません。"] },
      { id: "comparison", heading: "ArtCraft 全13ツールと Adobe 製品の対応表", paragraphs: ["この表はサイト共通の製品データを参照しています。対象プラットフォームは公式の開発対象であり、すべての OS・CPU 向けの実行ファイルが必ず存在するという意味ではありません。ダウンロード時には個別リリースのファイル一覧も確認してください。日本語の製品ガイドが未公開のツールは、公式製品ページへ案内します。"], kind: "apps" },
      { id: "boundaries", heading: "乗り換える前に確認したい互換性と制限", paragraphs: ["初期アルファ版や開発中のソフトは、学習や個人制作から試すと判断しやすくなります。元ファイルを残し、コピーを開く、編集する、別名で保存する、再度開く、書き出す、という一連の手順を確認しましょう。開けたという事実だけでは、編集内容を維持して戻せることまでは分かりません。", "納品に使う場合は、フォント、リンク画像、効果、カラープロファイル、共同作業先での表示も重要です。印刷入稿や複雑な PSD の受け渡し、専用プラグインが必要な仕事では、代表的なファイルで確認が終わるまで既存の制作環境を維持してください。", "オープンソースのライセンスと、素材の利用条件は別です。ソフトのライセンスだけで、使用するフォント、写真、テンプレートの商用利用可否が決まるわけではありません。制作内容に応じてそれぞれの条件を確認しましょう。"] },
      { id: "guides", heading: "比較からダウンロードまで、目的別の日本語ガイド", paragraphs: ["Photoshop からの移行を検討している場合は、機能比較とファイル互換性の確認項目から読み進めてください。導入を決めたら PhotoCraft のインストールガイドへ、複数のツールをまとめて管理したい場合は Launcher の案内へ進めます。", "日本語版はまずこの4ページを公開しています。ほかの製品の詳しい説明や更新履歴は、英語版へのリンクであることを明記しています。詳しい仕様は公式資料もあわせて確認してください。"], links: [alternativeLink, photoLink, downloadLink] },
      { id: "updates", heading: "最新版と開発状況の確かめ方", paragraphs: ["公式製品ページ、ツール一覧、GitHub の情報は更新のタイミングが異なることがあります。インストールするバージョンのリリース説明と配布ファイルを優先し、バージョン番号、日付、OS、CPU を控えておきましょう。最新版というだけで、必要な不具合修正が含まれるとは限りません。", "更新後も同じテスト用ファイルで保存・再読み込み・出力を確認すると、以前との違いが分かります。英語版の更新一覧には出典付きの変更情報をまとめています。新機能の紹介と、独立した実機テストの結果は区別して読んでください。"], links: [{ label: "出典付きの更新情報（英語）", href: "https://opensourceadobe.com/updates/" }, { label: "各ツールの詳細ガイド（英語）", href: "https://opensourceadobe.com/apps/" }] },
    ],
    faq: [
      { question: "ArtCraft の制作ソフトは無料ですか？", answer: "ここで扱う Craft Apps は公式に無料・オープンソースと説明されています。ArtCraft 名義の別の AI サービスとは区別し、利用する製品の説明や料金を確認してください。" },
      { question: "Adobe のソフトを完全に置き換えられますか？", answer: "仕事内容によります。ファイル形式、必要な機能、納品条件、安定性を確認する必要があります。公式の機能一覧だけでは完全な置き換えを保証できません。まず自分のファイルのコピーで試してください。" },
      { question: "日本語の画面で使えますか？", answer: "この日本語ガイドは、各アプリの日本語 UI 対応を保証するものではありません。対象バージョンの公式資料と実際の設定を確認してください。Launcher の対応言語を PhotoCraft の対応言語とみなすこともできません。" },
      { question: "ArtCraft Launcher は何をするソフトですか？", answer: "Craft Apps のインストール、更新、起動を管理するソフトです。必須ではなく、各アプリの公式 GitHub Releases から個別にダウンロードすることもできます。" },
      { question: "Windows、Mac、Linux で全部使えますか？", answer: "複数の OS が開発対象ですが、配布形式や CPU、必要なライブラリはアプリとバージョンで異なります。自分の環境に合うファイルがあるか、リリースごとに確認してください。" },
    ],
    sources: [official, photo, launcher],
  },
  "/alternatives/photoshop/": {
    path: "/alternatives/photoshop/",
    title: "Photoshop の無料代替 PhotoCraft：機能比較と互換性の注意点",
    description: "Photoshop の代替候補 PhotoCraft を公式資料で確認。PSD、レイヤー、マスク、色管理の比較と、プラグイン・印刷・納品で注意したい制限を解説します。",
    h1: "Photoshop の無料代替 PhotoCraft は、どこまで使える？",
    intro: ["Photoshop の代替を探すとき、無料であることと、必要な作業を最後まで行えることは分けて考える必要があります。PhotoCraft は Rust で開発されるオープンソースの画像編集ソフトで、公式一覧では初期アルファ版とされています。レイヤーや PSD 対応の記載があっても、あらゆる Photoshop ファイルの互換性を意味するわけではありません。", "この比較は公式資料に基づく導入判断のための整理です。当サイトで実機比較や PSD の往復テストを行ったという説明ではありません。自分の作業に必要な機能を絞り、その範囲をファイルのコピーで検証してください。"],
    sections: [
      { id: "why", heading: "無料の画像編集ソフトに移行する前に", paragraphs: ["継続費用を減らしたい、ローカルで作業したい、ソースコードを確認できるソフトを使いたい、といった目的を整理しましょう。背景の切り抜き、写真のレタッチ、合成、文字入れ、印刷用の画像制作では、必要な確認事項が異なります。毎日の必須機能と、ときどき使う機能を分けると比較しやすくなります。", "Adobe の契約を変更する場合は、自分のプランの期間と解約条件を確認してください。このページでは一律の節約額や解約費用を示していません。先に移行先で一連の作業を完了できるかを確認し、その後で契約を判断する順番が現実的です。"] },
      { id: "overview", heading: "PhotoCraft とは：レイヤー編集に対応する開発中のソフト", paragraphs: ["PhotoCraft は ArtCraft の画像編集ツールです。公式資料にはレイヤー、マスク、調整レイヤー、テキスト、ブラシ、PSD・PSB の読み書きなどが紹介されています。Photoshop 利用者が用途を理解しやすい構成ですが、同じ機能名でも動作や仕上がりが一致するとは限りません。", "導入時にはショートカット、パネル、保存形式も確認しましょう。作業を覚えやすいことと、長時間の編集や共同作業に耐えられることは別の問題です。初期段階では、機能の数よりも保存と再読み込みの確実さを優先して判断してください。"], links: [photoLink] },
      { id: "features", heading: "Photoshop と PhotoCraft：9項目の機能比較", paragraphs: ["以下は公式の説明と、移行前に自分で確かめたい項目を並べた表です。Photoshop と同じ結果が得られるという検証済みの判定表ではありません。"], table: { caption: "PhotoCraft を Photoshop の代替にする際の確認項目", headers: ["用途・機能", "PhotoCraft の公式説明", "移行前の確認事項"], rows: [
        ["レイヤー・マスク", "レイヤーとマスクの編集を紹介", "グループ、描画モード、透明度、マスクの境界"],
        ["PSD・PSB", "レイヤー付きファイルの読み書きを紹介", "保存前後と元のソフトでの表示"],
        ["文字入れ", "テキスト機能を紹介", "日本語フォント、改行、字間、代替フォント"],
        ["調整レイヤー", "非破壊編集の機能を紹介", "調整値と見た目の一致"],
        ["スマートオブジェクト", "関連機能とフィルターを紹介", "埋め込み・リンク素材とフィルターの保持"],
        ["色管理", "ICC、複数のカラーモード、ソフトプルーフを紹介", "指定プロファイル、変換、実際の印刷結果"],
        ["選択・切り抜き", "端末内で動作する選択ツールを紹介", "髪の毛、半透明の境界、細部の修正"],
        ["プラグイン・自動化", "Photoshop 用資産の全面互換は確認できない", "必須のプラグイン、アクション、スクリプト"],
        ["生成 AI", "Adobe のサービスとの同等性は確認できない", "提供機能、モデル、利用条件、処理方法"],
      ] } },
      { id: "psd", heading: "PSD は開ける？互換性を確かめる手順", paragraphs: ["公式にはレイヤー付き PSD・PSB の読み書きが紹介されています。ただし、このサイトでは任意の PSD が完全に保たれるという独立検証は行っていません。文字、レイヤー効果、スマートオブジェクトなどは、実際の受け渡しを通して確認が必要です。", "代表的な PSD のコピーと元の見本画像を用意します。PhotoCraft で開き、小さな変更を加え、別名保存して再度開いてください。共同作業があるなら相手側のソフトでも確認します。画像サイズ、色、透明度、レイヤー構成まで照合すると、利用できる範囲を具体的に判断できます。"] },
      { id: "limits", heading: "印刷・プラグイン・生成 AI で注意したいこと", paragraphs: ["CMYK が選べるだけで、印刷入稿に必要な条件を満たすとは限りません。印刷会社が指定する ICC プロファイル、変換方法、書き出し設定、確認用データを使い、実際の入稿先と照合してください。PhotoCraft の公式色管理機能は確認の出発点であり、個別案件の品質保証ではありません。", "Photoshop 専用プラグイン、共有アクション、生成 AI に依存する作業は、項目ごとの確認が必要です。PhotoCraft と ArtCraft の別の AI 製品、Adobe のオンラインサービスを混同しないでください。似た名称や用途から、同じ機能、料金、利用条件を推測することはできません。"] },
      { id: "decision", heading: "試しやすい人と、既存環境を残したい人", paragraphs: ["学習や個人制作で、確認に時間を使え、元データを保管できる人には試す余地があります。小さな課題から始め、保存・再読み込み・出力が完了してから用途を広げてください。日本語の文字を使う場合は、実際のフォントと縦横の組み方も含めて確認しましょう。", "厳しい納期、複雑な PSD の納品、必須のプラグインや印刷条件がある場合は、確認済みの制作環境を維持するのが適切です。英語版ではほかの代替候補も扱っています。無料サービスであることと、オープンソースであることも区別して比較してください。"], links: [{ label: "ほかの Photoshop 代替候補も比較する（英語）", href: "https://opensourceadobe.com/alternatives/photoshop/" }] },
      { id: "install", heading: "PhotoCraft のダウンロードと導入", paragraphs: ["PhotoCraft は単体でダウンロードする方法と、ArtCraft Launcher を使う方法があります。Windows は CPU に合う配布ファイル、Mac は対応 OS と CPU、Linux はパッケージ形式と依存関係を確認してください。WebAssembly の配布ファイルは、公開済みのオンライン編集サービスと同義ではありません。", "インストール後は小さな新規文書から始め、その後に既存 PSD のコピーを試します。公式配布元、バージョン、可能ならチェックサムも記録しておくと、問題の切り分けや更新後の再確認に役立ちます。"], links: [photoLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft は Photoshop の完全な代替になりますか？", answer: "一律には判断できません。初期アルファ版であり、必要なファイル形式、効果、色、プラグイン、出力を自分の作業で確認する必要があります。" },
      { question: "PSD のレイヤーはすべて維持されますか？", answer: "公式にはレイヤー付き PSD・PSB の読み書きが紹介されていますが、任意のファイルの完全保持を保証する説明ではありません。文字や効果を含むコピーで、保存と再読み込みまで試してください。" },
      { question: "無料の画像編集ソフトはすべてオープンソースですか？", answer: "いいえ。無料は料金、オープンソースはソースコードとライセンスの話です。両方を分けて確認してください。" },
      { question: "日本語の文字を入れられますか？", answer: "公式のテキスト機能の紹介だけでは、すべての日本語フォントや組版の結果までは確認できません。使用するフォント、改行、字間を実際の文書で確かめてください。日本語 UI 対応とも別の確認事項です。" },
      { question: "仕事で使ってもよいですか？", answer: "ソフトのライセンスと素材の権利を確認してください。利用条件を満たしていても、納品に必要な互換性や安定性が自動的に保証されるわけではありません。" },
    ],
    sources: [photo, photoRepo, photoReleases],
  },
  "/apps/photocraft/": {
    path: "/apps/photocraft/",
    title: "PhotoCraft のダウンロードと使い方：Windows・Mac・Linux",
    description: "PhotoCraft を公式配布元からダウンロード。Launcher と単体版の違い、OS 別のインストール方法、日本語対応の確認、初回の保存テストを解説します。",
    h1: "PhotoCraft のダウンロードとインストール方法",
    intro: ["PhotoCraft のダウンロードは、公式製品ページまたは GitHub の storytold/photocraft Releases から行えます。ArtCraft に属する無料のオープンソース画像編集ソフトですが、公式一覧では初期アルファ版です。大切なデータをそのまま使わず、最初は新規文書やコピーで試してください。", "このガイドは公式配布先を案内するもので、独自のインストーラーや再配布パッケージは提供していません。対応環境とファイル形式は更新されるため、実際に導入するリリースの説明を確認しましょう。"],
    sections: [
      { id: "brush-spacing-report", heading: "ブラシが遅く見えるときは Spacing を確認", paragraphs: ["10月17日の更新記録で紹介した投稿では、ペンを一定距離動かすまで線が出ないと利用者が報告し、後からブラシの Spacing 設定が原因だったと追記しています。F5 への言及もありますが、OS とバージョンは示されていません。当サイトでは再現しておらず、すべての環境で同じショートカットが使えるとは確認していません。", "PhotoCraft 0.9.0 の公式ブラシ資料にも間隔の設定が記載されています。小さなキャンバスで Spacing を確認してから、処理の遅延かどうかを切り分けてください。新しい修正版の発表でも、すべてのブラシ遅延を解決する方法でもありません。問題が残る場合は、バージョン、入力機器、ブラシ設定を記録して公式プロジェクトに報告しましょう。"], links: [{ label: "Spacing に関する利用者の投稿（英語）", href: "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/" }, { label: "PhotoCraft 0.9.0 の公式ブラシ資料（英語）", href: "https://github.com/storytold/photocraft/blob/v0.9.0/docs/brush-parity.md" }] },
      { id: "overview", heading: "PhotoCraft でできることと確認したいこと", paragraphs: ["PhotoCraft は Rust で開発されるレイヤー型の画像編集ソフトです。公式にはマスク、調整、テキスト、ブラシ、PSD・PSB などが紹介されています。機能の説明と実際のファイル交換の結果は区別し、必要な用途で確認してください。", "Photoshop からの移行判断には機能比較を、インストール後の操作確認にはこのページを利用できます。特に日本語の文字を使う作業では、フォント、改行、保存後の表示を代表的な文書で確認しましょう。"], links: [alternativeLink] },
      { id: "platforms", heading: "対応 OS と配布形式の確認", paragraphs: ["対象 OS の名前だけでなく、CPU、OS バージョン、グラフィックス環境、ライブラリも確認してください。配布形式はリリースによって変わります。Web 向けアーカイブがあっても、ログインせずすぐ使えるオンラインサービスが提供されているとは限りません。"], table: { caption: "PhotoCraft を導入する前の環境チェック", headers: ["環境", "公式で案内される配布形式の例", "確認事項"], rows: [["Windows", "MSI、リリースによってポータブル ZIP", "x64・ARM64・x86 と OS の対応条件"], ["macOS", "Universal DMG", "対応 macOS、Apple silicon・Intel の条件"], ["Linux", "AppImage、DEB、RPM、Flatpak など", "CPU、依存ライブラリ、実行権限、Runtime"], ["Web", "WebAssembly 用アーカイブ", "自分での配信設定とブラウザーの要件"]] } },
      { id: "routes", heading: "Launcher と単体版、どちらを選ぶ？", paragraphs: ["複数の Craft Apps をまとめて導入・更新したいなら Launcher が便利です。PhotoCraft だけを試す場合や、確認済みバージョンのインストーラーを保存しておきたい場合は、単体の公式リリースを選べます。どちらを使っても、実際のアプリのバージョンを把握しておくことが重要です。", "GitHub では所有者が storytold、プロジェクトが photocraft であることを確認してください。同名に近い AI サービス、モバイル向け移植、第三者のパッケージは、公式デスクトップ版と同じものとは限りません。"], links: [photoReleases, launcherReleases, downloadLink] },
      { id: "steps", heading: "Windows・Mac・Linux へのインストール手順", paragraphs: ["Windows：公式リリースの Assets を開き、自分の CPU に合う MSI を選びます。インストーラーを実行し、完了後にアプリを起動してください。ポータブル ZIP がある場合は展開して付属の説明に従います。x64、x86、ARM64 は同じ意味ではありません。", "Mac：公式 DMG を開き、表示された案内に従って Applications フォルダーへ移動します。初回起動時に警告が出た場合は、配布元とバージョン、公式説明を確認してください。保護機能を一括で無効にする操作を標準手順にする必要はありません。", "Linux：ディストリビューションと CPU に適した形式を選びます。AppImage では実行権限、Flatpak では対応 Runtime が必要な場合があります。DEB・RPM はパッケージ管理を利用して依存関係も確認してください。起動エラーがあっても、システムの基幹ライブラリを推測で置き換えないようにします。"] },
      { id: "language", heading: "日本語 UI の対応状況はどう確認する？", paragraphs: ["このページが日本語であることは、PhotoCraft の日本語 UI 対応を示すものではありません。参照した公式情報だけでは、特定の配布版について画面全体の日本語対応を保証できません。実際の言語設定と、そのバージョンの公式説明を確認してください。", "第三者の記事やスクリーンショットは、別のバージョンや OS の情報かもしれません。問い合わせる際はバージョン番号、OS、選択した言語を伝えると、対象を特定しやすくなります。日本語入力と日本語メニューも別々に確認しましょう。", "ArtCraft Launcher には独自の言語設定があります。Launcher の翻訳状況を PhotoCraft やほかの Craft Apps にそのまま当てはめることはできません。日本語が必須の作業では、導入の早い段階で確かめてください。"] },
      { id: "first-run", heading: "最初に試したい保存・編集・書き出し", paragraphs: ["小さな新規文書にレイヤー、文字、マスク、調整を追加し、保存して閉じ、再度開きます。その後いつも使う形式に書き出し、画像の大きさ、色、透明度を確認しましょう。これは推奨する確認手順であり、当サイトの実機テストの報告ではありません。", "次に、普段の PSD のコピーを使って文字、描画モード、レイヤー効果を確認します。大きな画像や印刷データには、それぞれを代表する別のサンプルが必要です。バージョンと結果を記録しておけば、更新後も同じ条件で比較できます。", "元データは上書きせず、テストは別名で保存してください。一度開けたことだけで、長時間編集や納品に問題がないとは判断できません。必要な一連の作業が完了する範囲から、利用を少しずつ広げるのが適切です。"], links: [alternativeLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft の公式ダウンロード先はどこですか？", answer: "getartcraft.com の PhotoCraft 製品ページ、または GitHub の storytold/photocraft Releases です。このサイトは公式配布先へのリンクを案内しています。" },
      { question: "Launcher のインストールは必須ですか？", answer: "必須ではありません。PhotoCraft の単体インストーラーを公式リリースから取得できます。Launcher は複数のツールと更新を管理したい場合の選択肢です。" },
      { question: "PhotoCraft は日本語で使えますか？", answer: "特定の PhotoCraft リリースの完全な日本語 UI は、このガイドでは公式確認済みとしていません。アプリの設定と公式のリリース情報を確認してください。Launcher の言語一覧だけでは判断できません。" },
      { question: "起動しない場合は何を確認しますか？", answer: "CPU、OS、配布形式、公式の必要条件とエラーメッセージを確認します。Linux では実行権限や依存ライブラリも対象です。バージョン番号と環境を記録して公式資料を参照してください。" },
      { question: "インストールできたら仕事の PSD をそのまま使えますか？", answer: "起動の成功は互換性の確認とは別です。元ファイルを残してコピーを使い、編集、保存、再読み込み、受け渡し先での表示まで確認してください。" },
    ],
    sources: [photo, photoRepo, photoReleases, launcher, { label: "ブラシ間隔の利用者報告（英語）", href: "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/" }, { label: "PhotoCraft 0.9.0 の公式ブラシ資料（英語）", href: "https://github.com/storytold/photocraft/blob/v0.9.0/docs/brush-parity.md" }],
  },
  "/download/": {
    path: "/download/",
    title: "ArtCraft のダウンロード方法：Launcher の導入と個別インストール",
    description: "ArtCraft Launcher の公式ダウンロードと使い始め方を解説。Craft Apps と ArtCraft App の違い、単体版の入手方法、Windows・Mac・Linux の確認事項を整理。",
    h1: "ArtCraft のダウンロードとインストール方法",
    intro: ["ArtCraft のダウンロードを探すときは、最初に製品名を確かめましょう。PhotoCraft などのオープンソース制作ソフトが目的なら、ArtCraft Launcher を使う方法と、各アプリを個別にダウンロードする方法があります。別の AI 制作サービスを指す ArtCraft App と同一視しないことが大切です。", "この独立ガイドでは公式の配布元を案内します。まず使いたいツールを決め、その後に対象 OS と CPU、バージョンを選んでください。配布ファイルがあることと、日常の仕事に十分な安定性があることは別です。"],
    sections: [
      { id: "names", heading: "ArtCraft・Launcher・Craft Apps・ArtCraft App の違い", paragraphs: ["検索結果ではブランド名、ツール群、管理アプリが同じように略されることがあります。名前だけで選ばず、そのページで説明されている用途と公式リポジトリを確かめてください。"], table: { caption: "混同しやすい4つの名称", headers: ["名称", "何を指すか", "確認する場所"], rows: [["ArtCraft", "ブランド・製品群の名称。単一の編集ソフトとは限らない", "公式サイトの製品説明"], ["ArtCraft Launcher", "Craft Apps のインストール・更新・起動を管理するアプリ", "storytold/craft-launcher"], ["Craft Apps / Crafting Apps", "PhotoCraft など13の制作ツール", "公式のツール一覧と各プロジェクト"], ["ArtCraft App", "別の AI 制作製品への入り口。PhotoCraft の別名ではない", "その製品の公式機能・料金説明"]] }, links: [photoLink, alternativeLink, homeLink] },
      { id: "launcher", heading: "ArtCraft Launcher の公式ダウンロード", paragraphs: ["GitHub の storytold/craft-launcher Releases で配布ファイルを確認します。Mac 向け DMG、Windows 向け MSI、Linux 向け AppImage など、OS と CPU に適したものを選んでください。実際の形式と対応範囲はリリースごとに確認する必要があります。", "Assets の先頭にあるファイルを無条件に選ばないでください。ソースコードのアーカイブは完成済みのデスクトップ用インストーラーではありません。ファイル名と説明を照合し、チェックサムが公開されている場合は取得したファイルの整合性確認に利用できます。"], links: [launcherReleases, launcher] },
      { id: "use", heading: "ダウンロードから最初のアプリ起動まで", paragraphs: ["Mac は DMG を開き、画面の案内に従って Launcher を Applications へ移動します。Windows は対応するインストーラーを実行し、Linux は選んだパッケージの公式手順に従います。フォルダーへドラッグする操作がすべての OS で共通というわけではありません。", "Launcher を開いたら目的のツールを探し、バージョンと開発状況を確認して Install を選択します。導入後は小さな新規ファイルで動作を試しましょう。管理が簡単になることと、開発中の個別アプリが完成品になることは別です。", "更新前には作業データをバックアップし、使用していたバージョンを記録してください。同じサンプルで再確認できるようにしておくと、操作やファイルの扱いが変わった場合に判断しやすくなります。"] },
      { id: "standalone", heading: "Launcher を使わずに個別ダウンロードする", paragraphs: ["PhotoCraft だけが必要なら、公式の storytold/photocraft Releases から直接入手できます。バージョンと配布形式を自分で選び、インストーラーを保存しておけますが、更新情報も自分で確認する必要があります。検索結果に迷ったときは、公式製品ページからリポジトリに進みましょう。", "ほかの Craft Apps も各プロジェクトの公式配布先を確認してください。第三者による移植、モバイルアプリ、似た名称の Launcher は、運営元や要件が異なる場合があります。同じブランド名が含まれるだけで、公式のデスクトップ版とは判断できません。"], links: [photoReleases, photoLink, alternativeLink] },
      { id: "status", heading: "13ツールの開発状況を確認する", paragraphs: ["以下の一覧はサイト共通の製品データから生成しています。初期アルファ版や開発中のツールは、変更や不具合を想定して試す段階です。配布が始まっていても、すべての用途で安定して使えることを意味しません。日本語ガイドがある PhotoCraft 以外は公式の製品ページへ案内します。"], kind: "apps" },
      { id: "requirements", heading: "OS・CPU・ライブラリの必要条件", paragraphs: ["Launcher の要件をすべての Craft Apps に当てはめないでください。対象バージョンの OS、CPU、GPU、実行環境をそれぞれ確認します。単に Windows、Mac、Linux と書かれていても、あらゆる端末が対応するという意味ではありません。", "Linux の必要条件は CPU、ビルド環境、パッケージ形式にも左右されます。Flatpak は専用 Runtime を使い、ネイティブのパッケージには別途ライブラリが必要な場合があります。全ツール共通の glibc 最低バージョンを決めつけず、選んだアプリの説明を優先してください。", "問題が起きたら OS バージョン、CPU、アプリのバージョン、エラーメッセージを控え、公式の説明と Issues を確認しましょう。配布元の分からないインストーラーへ切り替えるより、同じ条件で原因を切り分ける方が有効です。"], links: [launcher, photoRepo, homeLink] },
    ],
    faq: [
      { question: "ArtCraft と ArtCraft Launcher は同じものですか？", answer: "同じではありません。ArtCraft はブランドと製品群を指し、Launcher は Craft Apps を管理するアプリです。別の AI 制作サービスとも区別してください。" },
      { question: "Launcher なしでもダウンロードできますか？", answer: "はい。各アプリの公式 GitHub Releases から単体版を入手できます。複数のツールや更新を一か所で管理したい場合に Launcher を選べます。" },
      { question: "13のツールがすべて自動で入りますか？", answer: "必要なツールを選択して導入できます。実際に選べるアプリとバージョンは、その時点の Launcher と各プロジェクトの公開状況によります。" },
      { question: "どの Linux でも使えますか？", answer: "保証されません。CPU、パッケージ形式、依存ライブラリ、グラフィックス環境、必要な Runtime が各アプリに合うかを確認してください。" },
      { question: "無料なら Adobe を解約しても問題ありませんか？", answer: "料金と互換性は別です。自分のファイルで必要な編集と納品を完了できるかを先に確認し、契約条件も自分のプランで確認してから判断してください。" },
    ],
    sources: [official, launcher, launcherReleases, photoReleases],
  },
};
