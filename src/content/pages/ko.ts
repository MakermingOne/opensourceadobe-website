import type { LocalizedPage } from "./types";

const official = { label: "ArtCraft 공식 도구 목록(영어)", href: "https://getartcraft.com/apps" };
const photo = { label: "PhotoCraft 공식 제품 설명(영어)", href: "https://getartcraft.com/apps/photocraft" };
const photoRepo = { label: "PhotoCraft 소스 코드와 문서(영어)", href: "https://github.com/storytold/photocraft" };
const launcher = { label: "ArtCraft Launcher 공식 문서(영어)", href: "https://github.com/storytold/craft-launcher" };
const photoReleases = { label: "PhotoCraft 공식 릴리스와 설치 파일(영어)", href: "https://github.com/storytold/photocraft/releases" };
const launcherReleases = { label: "ArtCraft Launcher 공식 릴리스(영어)", href: "https://github.com/storytold/craft-launcher/releases" };
const brushSource = { label: "PhotoCraft 브러시 간격 사용자 제보(영어)", href: "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/" };
const brushDocs = { label: "PhotoCraft 0.9.0 공식 브러시 문서(영어)", href: "https://github.com/storytold/photocraft/blob/v0.9.0/docs/brush-parity.md" };
const homeLink = { label: "어도비 대체 오픈소스 도구 전체 보기", href: "/" };
const photoLink = { label: "PhotoCraft 다운로드와 설치 방법", href: "/apps/photocraft/" };
const alternativeLink = { label: "포토샵 대체 프로그램 기능과 한계 비교", href: "/alternatives/photoshop/" };
const downloadLink = { label: "ArtCraft Launcher 다운로드 안내", href: "/download/" };

export const koPages: Record<string, LocalizedPage> = {
  "/": {
    path: "/",
    title: "어도비 대체 오픈소스 프로그램: 무료 ArtCraft 도구 13종",
    description: "사진 편집부터 벡터 그래픽, 동영상 편집까지. 무료 오픈소스 ArtCraft 도구 13종의 Adobe 대응 제품, 개발 상태와 공식 다운로드 경로를 정리했습니다.",
    h1: "어도비 대체 오픈소스 프로그램, 작업에 맞게 고르세요",
    intro: ["어도비 대체 프로그램을 찾을 때는 익숙한 화면보다 실제로 해야 할 작업을 먼저 살펴보세요. 사진 보정, 벡터 그림, 동영상 편집, PDF 정리에 맞춰 ArtCraft 도구 13종과 대응하는 Adobe 제품을 비교할 수 있습니다.", "OpenSourceAdobe는 Adobe 및 ArtCraft와 제휴하지 않은 독립 가이드입니다. 공식 제품 설명과 저장소를 바탕으로 정리했으며 직접 수행한 성능 평가나 파일 호환성 실험을 뜻하지 않습니다. 설치 파일이 있어도 업무에 바로 쓸 수 있는 완성도를 보장하지는 않습니다."],
    sections: [
      { id: "update-2026-10-17", heading: "10월 17일 기록: 개발 문서와 사용자 제보", paragraphs: ["10월 17일 저녁 확인 기록에서는 13종 앱과 Launcher의 추가 공식 릴리스를 찾지 못했습니다. 당시 VectorCraft 0.12.0의 원래 공개 날짜는 10월 16일 UTC였고, FigCraft 설치 버전은 0.6.0이었습니다. FigCraft 개발 문서의 선택적 에이전트 파일 읽기·쓰기 범위는 해당 설치 파일에 포함됐다고 확인된 기능이 아니며 운영체제 전체의 샌드박스도 아닙니다.", "PhotoCraft 사용자는 끊기는 붓 자국을 Spacing 설정과 연결했습니다. PdfCraft의 흰색 커서와 MacBook Pro에서 EffectCraft 로토스코핑 전파 중 멈춤도 개인 제보로 기록됐습니다. 환경 정보가 부족하고 이 사이트가 재현한 결과가 아닙니다. 해당 조사에서는 X, YouTube 업로드 목록과 Google 검색 결과 접근에 제한이 있어 전체 확인을 주장하지 않습니다."], links: [{ label: "10월 17일 업데이트와 항목별 출처(영어)", href: "https://opensourceadobe.com/updates/2026-10-17/" }, { label: "PhotoCraft 브러시 간격 제보 읽기", href: "/apps/photocraft/#brush-spacing-report" }] },
      { id: "workflows", heading: "무료 창작 프로그램, 작업별로 찾아보기", paragraphs: ["레이어를 사용하는 사진 편집에는 PhotoCraft, 사진 라이브러리 관리와 RAW 현상에는 LightCraft가 해당합니다. VectorCraft는 벡터 그래픽, DesignCraft는 페이지 레이아웃을 다룹니다. 동영상과 소리는 FilmCraft, EffectCraft, SoundCraft로 나뉘므로 한 프로그램이 모든 작업을 대신한다고 생각하기보다 작업 단위로 비교하는 편이 좋습니다.", "PdfCraft는 PDF 문서, FigCraft는 UI 디자인을 위한 도구입니다. WordCraft, DeckCraft, GridCraft, CADCraft는 문서 작성, 발표 자료, 표 계산, 도면 작업으로 범위를 넓힙니다. 모든 도구에 정확히 대응하는 Adobe 제품이 있는 것은 아닙니다. 아래 표의 대응 관계는 용도를 설명하기 위한 것이며 기능이 같다는 뜻은 아닙니다."] },
      { id: "comparison", heading: "ArtCraft 도구 13종과 Adobe 제품 비교표", paragraphs: ["이 표는 사이트 전체가 공유하는 도구 정보를 사용합니다. 플랫폼 표시는 공식 대상 플랫폼이며, 원하는 운영체제와 CPU용 설치 파일이 실제로 있는지는 각 릴리스에서 확인해야 합니다. PhotoCraft 외의 한국어 제품 안내가 아직 없는 도구는 공식 제품 페이지로 연결됩니다."], kind: "apps" },
      { id: "boundaries", heading: "어도비를 대체하기 전에 확인할 네 가지", paragraphs: ["첫째는 파일 호환성입니다. 파일이 열린다는 사실만으로 레이어, 글꼴, 효과가 보존되는 것은 아닙니다. 복사본을 열고 작은 수정을 한 뒤 다른 이름으로 저장하고 다시 열어 보세요. 협업 중이라면 전달받는 사람이 사용하는 프로그램에서도 확인해야 합니다.", "둘째는 색상과 출력 조건입니다. 인쇄용 프로파일, 교정 화면, 납품 파일 규격은 실제 인쇄소의 요구사항과 맞아야 합니다. 셋째는 플러그인과 자동화입니다. 특정 Photoshop 플러그인이나 작업 스크립트에 의존한다면 각각 대체 가능한지 확인하세요. 넷째는 안정성입니다. 초기 버전은 짧은 개인 작업부터 시작하고 기존 작업 경로를 유지하는 편이 현실적입니다.", "오픈소스 라이선스와 작업물의 이용 권한도 구분하세요. 프로그램을 무료로 내려받을 수 있어도 글꼴, 사진, 템플릿의 상업적 사용 권한까지 포함되지는 않습니다. 프로젝트 라이선스와 사용한 소재의 조건을 각각 확인해야 합니다."] },
      { id: "guides", heading: "비교부터 다운로드까지 이어서 확인하기", paragraphs: ["사진 편집이 목적이라면 포토샵 대체 안내에서 기능과 제약을 먼저 비교하세요. PhotoCraft 설치 안내는 공식 파일을 찾는 방법과 설치 후 확인할 항목을 다룹니다. 여러 도구를 관리하고 싶다면 다운로드 안내에서 Launcher와 개별 설치의 차이를 확인할 수 있습니다.", "한국어 안내는 우선 이 네 가지 주요 페이지로 구성했습니다. 아직 번역하지 않은 도구 소개나 업데이트는 영어 페이지임을 표시해 연결합니다. 다른 언어의 홈페이지를 같은 내용의 번역 페이지인 것처럼 안내하지 않습니다."], links: [alternativeLink, photoLink, downloadLink] },
      { id: "updates", heading: "최신 버전과 개발 상태 확인 방법", paragraphs: ["제품 소개와 GitHub 릴리스는 갱신 시점이 다를 수 있습니다. 실제 설치 시에는 선택한 릴리스의 버전, 날짜, 변경 사항과 설치 파일을 기준으로 판단하세요. 버전 번호가 올라갔다고 해서 필요한 기능이나 특정 오류가 해결됐다고 단정할 수는 없습니다.", "업데이트 전에는 원본과 기존 설치 파일을 보관하고, 같은 예제 파일로 다시 확인하세요. 영어 업데이트 페이지에는 출처와 함께 변경 내용을 기록합니다. 별도 웹 빌드가 있다고 해서 즉시 사용할 수 있는 공개 온라인 편집기가 제공되는 것도 아니므로 배포 방법을 확인해야 합니다."], links: [{ label: "출처가 있는 업데이트 기록(영어)", href: "https://opensourceadobe.com/updates/" }, { label: "전체 도구별 상세 안내(영어)", href: "https://opensourceadobe.com/apps/" }] },
    ],
    faq: [
      { question: "ArtCraft 프로그램은 모두 무료인가요?", answer: "여기서 다루는 Craft Apps는 공식적으로 무료 오픈소스 도구로 소개됩니다. ArtCraft 이름을 쓰는 다른 AI 서비스의 요금과는 구분해야 합니다. 구체적인 제품과 라이선스를 확인하세요." },
      { question: "이 도구들로 Adobe를 완전히 대체할 수 있나요?", answer: "작업과 파일에 따라 다릅니다. 기능 목록만으로 복잡한 문서, 인쇄 조건, 플러그인까지 대체할 수 있다고 보장할 수 없습니다. 자신의 파일 복사본으로 저장과 출력까지 확인하세요." },
      { question: "한국어 인터페이스를 지원하나요?", answer: "한국어 웹 가이드가 있다는 사실은 프로그램의 한국어 인터페이스를 보장하지 않습니다. 각 앱의 버전별 공식 문서와 언어 설정을 확인해야 하며 Launcher의 지원 언어를 다른 앱에 그대로 적용하면 안 됩니다." },
      { question: "ArtCraft Launcher는 꼭 설치해야 하나요?", answer: "필수는 아닙니다. 여러 Craft Apps를 설치하고 업데이트하는 관리 도구이며, 개별 앱의 공식 GitHub Releases에서도 직접 설치 파일을 받을 수 있습니다." },
      { question: "Windows, macOS, Linux에서 모두 사용할 수 있나요?", answer: "여러 프로젝트가 세 운영체제를 대상으로 하지만 버전별 설치 파일, CPU 아키텍처와 시스템 요구사항은 다릅니다. 표의 플랫폼 표기만으로 모든 컴퓨터에서 작동한다고 판단할 수 없습니다." },
    ],
    sources: [official, photo, launcher],
  },
  "/alternatives/photoshop/": {
    path: "/alternatives/photoshop/",
    title: "포토샵 대체 PhotoCraft: 무료 사진 편집 기능과 한계",
    description: "무료 포토샵 대체 프로그램 PhotoCraft의 레이어, PSD 호환성과 설치 방법을 살펴봅니다. 인쇄 색상, 플러그인, AI 기능의 확인 범위도 함께 정리했습니다.",
    h1: "포토샵 대체 프로그램 PhotoCraft, 어디까지 가능할까요?",
    intro: ["포토샵 대체 프로그램은 무료인지보다 내 파일과 작업을 끝까지 처리할 수 있는지가 중요합니다. PhotoCraft는 레이어 기반 사진 편집을 위한 무료 오픈소스 프로젝트이며 공식 도구 목록에서는 초기 알파로 소개합니다.", "이 페이지는 공식 설명에 기반한 비교 안내입니다. 직접 수행한 Photoshop 대조 실험이나 PSD 무손실 호환성 인증은 아닙니다. 제품이 설명하는 기능과 자신의 작업에서 확인해야 할 부분을 나누어 살펴보세요."],
    sections: [
      { id: "why", heading: "무료 포토샵 대체 프로그램을 찾는 이유", paragraphs: ["정기 지출을 줄이고 싶거나 파일을 로컬에서 편집하고 싶을 때, 또는 소스 코드를 확인할 수 있는 프로그램이 필요할 때 대안을 살펴볼 수 있습니다. 먼저 보정, 누끼 따기, 합성, 텍스트 작업, 인쇄 납품 중 자주 하는 작업을 적어 보세요. 거의 쓰지 않는 고급 기능과 매번 필요한 기능을 구분하면 선택이 쉬워집니다.", "Adobe 구독을 이용 중이라면 실제 계약의 기간과 해지 조건을 먼저 확인하세요. 일반적인 요금 사례를 자신의 계약에 그대로 적용하거나 대안이 준비되기 전에 해지할 필요는 없습니다. 새 프로그램에서 중요한 작업을 마칠 수 있는지 검증한 뒤 전환 범위를 정하는 편이 좋습니다."] },
      { id: "what", heading: "PhotoCraft란? Rust로 개발하는 오픈소스 사진 편집기", paragraphs: ["PhotoCraft는 ArtCraft의 창작 도구 중 하나입니다. 공식 자료는 Rust 기반 네이티브 앱, 레이어와 마스크, 텍스트, 조정 기능과 PSD·PSB 지원을 소개합니다. 익숙한 개념이 있어도 단축키, 도구 동작과 결과가 Photoshop과 모두 같은 것은 아닙니다.", "처음에는 많은 기능을 한꺼번에 확인하기보다 새 문서를 만들고 저장하고 다시 여는 기본 과정부터 살펴보세요. 초기 개발 단계에서는 이런 과정의 안정성이 기능 개수보다 작업에 더 큰 영향을 줄 수 있습니다."], links: [photoLink] },
      { id: "features", heading: "PhotoCraft와 Photoshop 비교: 핵심 항목 9가지", paragraphs: ["공식 PhotoCraft 설명에 있는 항목과 Photoshop 작업을 옮길 때 확인할 내용을 정리했습니다. 같은 기능 이름이 있어도 표시 결과와 파일 교환까지 같다고 보장하지 않습니다."], table: { caption: "포토샵 작업을 PhotoCraft로 옮길 때 확인할 사항", headers: ["작업 항목", "PhotoCraft 공식 설명 범위", "직접 확인할 부분"], rows: [["레이어와 마스크", "관련 편집 기능 소개", "그룹, 혼합 모드, 불투명도와 마스크 경계"], ["PSD·PSB 파일", "레이어 문서 열기와 저장 소개", "수정·저장·다시 열기 후 레이어 보존"], ["텍스트", "텍스트 도구 소개", "글꼴, 줄바꿈, 자간과 문단 배치"], ["조정 레이어", "비파괴 조정 기능 소개", "설정값과 화면 결과의 차이"], ["스마트 오브젝트", "관련 기능 소개", "포함·연결된 내용과 필터 유지"], ["색상 관리", "ICC 프로파일과 소프트 프루핑 소개", "프로파일 처리와 실제 인쇄 결과"], ["선택과 누끼 따기", "기기 내 선택 기능 소개", "머리카락, 반투명 영역과 미세한 경계"], ["플러그인·자동화", "Photoshop 전체 호환을 보장하지 않음", "필수 확장 기능, 액션과 스크립트"], ["생성형 AI", "Adobe 서비스와 동등하다고 판단할 근거 없음", "필요한 기능, 모델, 이용 조건과 비용"]] } },
      { id: "psd", heading: "PSD 파일을 열 수 있나요? 호환성 확인 순서", paragraphs: ["공식 제품 설명은 레이어가 있는 PSD와 PSB 파일의 열기·저장을 안내합니다. 이 가이드에서 독립적으로 모든 파일을 시험한 것은 아닙니다. 복잡한 텍스트, 레이어 스타일, 스마트 오브젝트는 별도 확인이 필요하며 파일이 열리는 것만으로 검사가 끝나지 않습니다.", "평소 사용하는 파일을 복사하고 원래 화면을 기록하세요. PhotoCraft에서 사소한 수정을 한 뒤 새 이름으로 저장하고 다시 엽니다. 협업 파일이라면 상대방의 프로그램에서도 비교하세요. 내보낸 이미지의 크기, 투명도와 색상까지 확인해야 실제로 쓸 수 있는 범위를 판단할 수 있습니다."] },
      { id: "limits", heading: "인쇄 색상, 플러그인과 생성형 AI의 한계", paragraphs: ["CMYK 모드가 있다는 것과 인쇄 납품을 그대로 맡길 수 있다는 것은 다릅니다. 인쇄소가 요구하는 프로파일과 출력 규격, 교정 결과를 확인해야 합니다. 공식 색상 기능은 시험을 시작할 근거이며 특정 인쇄 작업의 품질 보증은 아닙니다.", "특정 Photoshop 플러그인, 팀 공용 액션, 생성형 기능이 꼭 필요하다면 각각 대안을 확인하세요. PhotoCraft와 별도 ArtCraft AI 제품은 같은 프로그램이 아닙니다. 비슷한 이름만으로 기능, 이용 권한이나 과금 조건을 같다고 볼 수 없습니다." ] },
      { id: "decision", heading: "어떤 사용자에게 전환 시험이 적합할까요?", paragraphs: ["학습, 개인 이미지 작업, 초기 시안처럼 원본을 보관하고 시행착오를 감당할 수 있는 작업부터 시작할 수 있습니다. 작은 작업 하나를 끝까지 진행하면서 저장과 재열기, 내보내기가 안정적인지 기록하세요. 이후 필요한 범위만 점차 넓히면 됩니다.", "급한 납품, 복잡한 PSD 교환, 엄격한 인쇄 조건이 있다면 검증된 기존 작업 경로를 유지하세요. 영어 비교 안내에서는 GIMP와 Krita 등도 다룹니다. 무료로 접속할 수 있는 서비스와 오픈소스 라이선스가 있는 프로그램은 구분해서 비교해야 합니다."], links: [{ label: "다른 포토샵 대체 도구 비교(영어)", href: "https://opensourceadobe.com/alternatives/photoshop/" }] },
      { id: "install", heading: "다운로드와 설치: 운영체제에 맞는 파일 선택", paragraphs: ["PhotoCraft는 직접 내려받거나 ArtCraft Launcher로 관리할 수 있습니다. Windows에서는 CPU 아키텍처, macOS에서는 지원 프로세서와 OS 버전, Linux에서는 패키지 형식과 의존성을 확인하세요. 해당 릴리스의 파일 목록이 최종 기준입니다.", "설치 후에는 고객 원본을 바로 열지 말고 작은 새 문서를 먼저 만들어 보세요. 제공되는 체크섬과 공식 설치 문서를 확인하면 파일 출처와 환경을 함께 점검할 수 있습니다."], links: [photoLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft는 포토샵을 완전히 대체하나요?", answer: "일괄적으로 보장할 수 없습니다. 초기 알파 프로젝트이므로 파일 구조, 효과, 색상, 플러그인과 납품 조건에 맞춰 직접 확인해야 합니다." },
      { question: "PSD 레이어가 모두 유지되나요?", answer: "공식 자료는 PSD와 PSB 레이어 문서 지원을 설명하지만 모든 Photoshop 파일의 무손실 교환이 입증되는 것은 아닙니다. 대표 파일 복사본으로 저장과 재열기까지 확인하세요." },
      { question: "무료 사진 편집 프로그램이면 모두 오픈소스인가요?", answer: "아닙니다. 무료는 가격에 관한 설명이고 오픈소스는 소스 코드와 라이선스에 관한 설명입니다. 웹 서비스와 설치형 프로그램 모두 두 조건을 따로 확인하세요." },
      { question: "상업 작업에 사용해도 되나요?", answer: "프로젝트의 소프트웨어 라이선스와 글꼴·사진 등 소재의 이용 조건을 각각 확인해야 합니다. 사용 권한이 있어도 기술적 호환성과 납품 품질이 자동으로 보장되지는 않습니다." },
      { question: "PhotoCraft는 한국어 메뉴를 제공하나요?", answer: "이 페이지에서는 특정 버전의 한국어 인터페이스를 공식 확인했다고 안내하지 않습니다. 설치한 앱의 언어 설정과 해당 버전의 공식 설명을 확인하세요. Launcher의 언어 지원은 별개입니다." },
    ],
    sources: [photo, photoRepo, photoReleases],
  },
  "/apps/photocraft/": {
    path: "/apps/photocraft/",
    title: "PhotoCraft 다운로드와 설치: Windows·Mac·Linux 안내",
    description: "PhotoCraft 공식 다운로드 경로와 운영체제별 설치 방법을 정리했습니다. Launcher와 개별 설치 비교, 한국어 지원 확인, 첫 실행 점검까지 안내합니다.",
    h1: "PhotoCraft 다운로드와 설치 방법",
    intro: ["PhotoCraft 다운로드는 공식 제품 페이지 또는 GitHub의 storytold/photocraft Releases에서 시작하세요. ArtCraft에 속한 무료 오픈소스 사진 편집기로, 초기 알파 단계인 만큼 중요한 원본 대신 복사본으로 작업을 시작하는 것이 좋습니다.", "이 가이드는 공식 설치 파일로 안내하며 재포장한 설치 프로그램을 배포하지 않습니다. 파일 형식과 요구사항은 버전에 따라 바뀌므로 실제로 선택한 릴리스의 설명을 함께 읽으세요."],
    sections: [
      { id: "brush-spacing-report", heading: "브러시가 늦게 그려지나요? Spacing부터 확인하세요", paragraphs: ["10월 17일 확인한 사용자 글에서는 펜을 어느 정도 움직인 뒤에야 선이 나타났고 작성자는 이후 원인을 Spacing 설정으로 설명했습니다. F5도 언급했지만 앱 버전과 운영체제 정보는 없었습니다. 이 사이트가 재현한 문제가 아니며 해당 단축키가 모든 플랫폼에서 동일하다고 확인하지 않았습니다.", "PhotoCraft 0.9.0 공식 브러시 문서에는 간격 설정이 나옵니다. 작은 캔버스에서 Spacing을 확인한 뒤 실제 성능 지연인지 구분해 보세요. 이는 새 패치 안내나 모든 브러시 지연의 해결책이 아닙니다. 문제가 계속되면 버전, 입력 장치와 브러시 설정을 기록해 프로젝트에 제보하세요."], links: [brushSource, brushDocs, { label: "사용자 제보의 근거와 확인 한계(영어)", href: "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/" }] },
      { id: "overview", heading: "PhotoCraft 기능과 개발 상태", paragraphs: ["PhotoCraft는 Rust로 개발하는 레이어 기반 편집기입니다. 공식 설명은 마스크, 텍스트, 조정과 PSD·PSB 파일 기능을 소개합니다. 포토샵 사용자에게 익숙한 개념이 있지만 문서 교환이 완전히 동일하다는 보장은 아닙니다.", "아직 프로그램을 고르는 단계라면 기능 비교 안내를 먼저 살펴보세요. 여기서는 다운로드 출처, 설치 환경과 첫 실행 순서를 중심으로 설명합니다. 사이트가 직접 수행한 사용 후기나 벤치마크는 아닙니다."], links: [alternativeLink] },
      { id: "platforms", heading: "운영체제와 시스템 요구사항 확인", paragraphs: ["목표 플랫폼과 실제로 받을 수 있는 설치 파일은 구분해야 합니다. 릴리스의 Assets에서 운영체제, CPU와 패키지 형식을 확인하세요. 그래픽 드라이버나 런타임도 필요할 수 있습니다. WebAssembly 압축 파일이 있다는 사실만으로 공개 온라인 편집기가 제공되는 것은 아닙니다."], table: { caption: "PhotoCraft 설치 전 운영체제별 확인 사항", headers: ["플랫폼", "공식 릴리스에서 확인할 파일", "확인 항목"], rows: [["Windows", "MSI, 릴리스에 따른 휴대용 ZIP", "x64·ARM64·x86 중 컴퓨터에 맞는 아키텍처"], ["macOS", "Universal DMG 등 제공 파일", "지원 macOS 버전, Apple silicon·Intel 안내"], ["Linux", "Flatpak·AppImage·DEB·RPM 등 제공 파일", "CPU, 배포판과 런타임·패키지 의존성"], ["Web", "제공되는 경우 WebAssembly 빌드", "자체 호스팅 방법과 브라우저 요구사항"]] } },
      { id: "routes", heading: "Launcher와 직접 다운로드 중 선택하기", paragraphs: ["여러 Craft Apps를 한곳에서 관리하려면 ArtCraft Launcher를 사용할 수 있습니다. PhotoCraft만 설치하거나 특정 버전의 설치 파일을 보관하려면 직접 다운로드도 가능합니다. 어느 경로든 실제 설치되는 앱의 버전과 요구사항을 확인해야 합니다.", "GitHub에서는 소유자가 storytold이고 저장소 이름이 photocraft인지 확인하세요. 비슷한 이름의 AI 서비스나 커뮤니티 이식판, 제삼자가 묶어 배포하는 프로그램을 공식 데스크톱 릴리스와 혼동하지 마세요."], links: [photoReleases, downloadLink, launcherReleases] },
      { id: "steps", heading: "Windows·macOS·Linux 설치 순서", paragraphs: ["Windows: 공식 릴리스의 Assets를 펼치고 CPU에 맞는 설치 파일을 선택하세요. MSI를 실행하고 설치가 끝나면 앱을 시작합니다. 해당 버전에 휴대용 ZIP이 있다면 압축을 푼 뒤 포함된 실행 안내를 따르세요. x64와 ARM64, x86은 같은 파일이 아닙니다.", "macOS: 공식 DMG를 열고 표시되는 안내에 따라 응용 프로그램 폴더로 옮깁니다. 첫 실행 경고가 나오면 출처와 버전, 공식 문서를 먼저 확인하세요. 시스템 보호 기능 전체를 끄는 방법을 일반적인 설치 절차로 삼지 마세요.", "Linux: 배포판과 CPU에 맞는 패키지를 선택하세요. AppImage는 실행 권한이 필요할 수 있고 Flatpak은 해당 런타임이 필요합니다. DEB와 RPM은 패키지 관리자를 사용하면 의존성 확인에 도움이 됩니다. 오류가 나면 먼저 원문 메시지를 기록하고 임의로 시스템 라이브러리를 교체하지 마세요."] },
      { id: "language", heading: "PhotoCraft 한국어 인터페이스 지원 확인", paragraphs: ["한국어 다운로드 안내가 있다는 사실은 PhotoCraft 프로그램에 한국어 메뉴가 완비됐다는 뜻이 아닙니다. 이 페이지에서 확인한 공식 제품 정보만으로 특정 릴리스의 완전한 한국어 번역을 보장할 수 없습니다.", "설치한 앱의 언어 설정과 해당 버전의 공식 릴리스 노트를 확인하세요. 후기나 화면 캡처는 다른 버전 또는 플랫폼에서 촬영됐을 수 있습니다. 프로젝트에 문의할 때는 앱 버전, 운영체제와 선택한 언어를 함께 기록하면 도움이 됩니다.", "ArtCraft Launcher에는 별도의 문서와 언어 설정이 있습니다. Launcher가 어떤 언어를 지원한다고 해서 PhotoCraft나 다른 Craft Apps도 같은 언어를 지원한다고 추정해서는 안 됩니다."] },
      { id: "first-run", heading: "첫 실행 후 확인할 편집·저장 기능", paragraphs: ["작은 새 문서에 레이어, 텍스트와 마스크를 추가하고 조정 기능을 시험해 보세요. 저장한 뒤 앱을 닫았다가 다시 열어 같은 상태인지 확인합니다. 평소 사용하는 출력 형식으로 내보낸 다음 이미지 크기, 투명도와 색상을 비교하세요. 권장 확인 순서이며 이 사이트의 실험 결과를 보고하는 문장은 아닙니다.", "다음으로 평소 쓰는 PSD의 복사본을 열어 글꼴, 레이어 스타일과 혼합 모드를 확인하세요. 인쇄용 파일이나 큰 문서라면 용도에 맞는 추가 예제가 필요합니다. 버전과 이상 현상을 기록해 두면 업데이트 후 같은 절차로 비교할 수 있습니다.", "원본은 보관하고 시험 파일은 다른 이름으로 저장하세요. 한 번 열리는 것과 긴 편집 작업 및 협업 전달이 안정적인 것은 다릅니다. 필요한 작업을 처음부터 끝까지 완료한 결과를 기준으로 사용 범위를 정하세요."], links: [alternativeLink, downloadLink, homeLink] },
    ],
    faq: [
      { question: "PhotoCraft 공식 다운로드는 어디서 받나요?", answer: "getartcraft.com의 PhotoCraft 제품 페이지 또는 GitHub의 storytold/photocraft Releases를 이용하세요. 이 사이트는 공식 경로를 안내하며 자체 설치 파일을 배포하지 않습니다." },
      { question: "Launcher를 먼저 설치해야 하나요?", answer: "아닙니다. Launcher는 선택 사항입니다. PhotoCraft용 설치 파일만 직접 받고 업데이트를 직접 관리할 수도 있습니다." },
      { question: "PhotoCraft 한글판이 있나요?", answer: "이 가이드는 특정 버전의 완전한 한국어 인터페이스를 공식 확인한 자료가 아닙니다. 앱의 언어 설정과 릴리스 설명을 확인하세요. 한국어 웹 가이드와 Launcher의 지원 언어는 별개입니다." },
      { question: "설치했는데 실행되지 않으면 어떻게 하나요?", answer: "다운로드 출처, CPU 아키텍처와 선택한 버전의 OS 요구사항을 확인하고 오류 메시지를 기록하세요. Linux에서는 실행 권한과 의존성, Windows와 macOS에서는 시스템 안내와 공식 문서를 함께 살펴보세요." },
      { question: "설치 후 바로 PSD 납품에 사용해도 되나요?", answer: "앱 실행 성공만으로 파일 호환성을 확인할 수 없습니다. 대표 문서 복사본을 수정·저장·재열기하고 상대방 프로그램에서도 확인해야 합니다. 효과, 글꼴과 색상도 납품 조건에 맞춰 비교하세요." },
    ],
    sources: [photo, photoRepo, photoReleases, launcher, brushSource, brushDocs],
  },
  "/download/": {
    path: "/download/",
    title: "ArtCraft 다운로드: Launcher 설치와 개별 앱 받는 방법",
    description: "ArtCraft와 Launcher, Craft Apps의 차이부터 공식 다운로드와 설치까지. Windows·Mac·Linux 파일 선택, 개별 설치와 개발 상태를 안내합니다.",
    h1: "ArtCraft 다운로드와 Launcher 설치 방법",
    intro: ["ArtCraft 다운로드를 찾는다면 먼저 어떤 제품이 필요한지 구분하세요. PhotoCraft 같은 오픈소스 창작 도구는 ArtCraft Launcher로 관리하거나 앱별로 직접 받을 수 있습니다. 별도의 ArtCraft AI 창작 서비스와 동일한 제품은 아닙니다.", "이 페이지는 공식 프로젝트로 연결하는 독립 안내입니다. 도구 이름을 확인한 뒤 원하는 버전과 운영체제용 파일을 선택하세요. 이름이 비슷하다는 이유만으로 제삼자의 설치 파일을 공식 배포본으로 판단하면 안 됩니다."],
    sections: [
      { id: "names", heading: "ArtCraft·Launcher·Craft Apps·ArtCraft App의 차이", paragraphs: ["검색 결과에서는 브랜드와 앱 모음, 설치 관리 프로그램을 모두 ArtCraft라고 부르기도 합니다. 이름이나 로고보다 제품의 용도와 연결되는 공식 저장소를 확인하면 혼동을 줄일 수 있습니다."], table: { caption: "혼동하기 쉬운 ArtCraft 이름 네 가지", headers: ["이름", "의미", "확인할 곳"], rows: [["ArtCraft", "브랜드와 제품군을 포괄하는 이름", "공식 사이트의 개별 제품 설명"], ["ArtCraft Launcher", "Craft Apps를 설치·업데이트·실행하는 관리 도구", "storytold/craft-launcher"], ["Craft Apps / Crafting Apps", "PhotoCraft를 포함한 창작 도구 13종", "공식 도구 목록과 각 저장소"], ["ArtCraft App", "별도의 AI 창작 제품 접근 경로", "해당 제품의 기능 설명과 요금 조건"]] }, links: [photoLink, alternativeLink, homeLink] },
      { id: "launcher", heading: "ArtCraft Launcher 공식 다운로드", paragraphs: ["GitHub의 storytold/craft-launcher Releases에서 제공하는 파일을 확인하세요. macOS용 DMG, Windows용 MSI, Linux용 AppImage 등은 릴리스에 따라 제공 범위가 달라질 수 있습니다. 운영체제 이름뿐 아니라 CPU 아키텍처도 맞아야 합니다.", "목록에서 처음 보이는 파일을 바로 받기보다 파일명과 설명을 읽으세요. 소스 코드 압축 파일은 설치 프로그램과 다릅니다. SHA-256 체크섬이 제공되면 내려받은 파일의 무결성을 확인할 수 있습니다."], links: [launcherReleases, launcher] },
      { id: "use", heading: "다운로드 후 첫 앱을 설치하는 순서", paragraphs: ["macOS에서는 DMG를 열고 안내에 따라 Launcher를 응용 프로그램 폴더로 옮깁니다. Windows에서는 맞는 설치 프로그램을 실행하고 Linux에서는 선택한 패키지 형식의 안내를 따르세요. 앱을 폴더로 드래그하는 단계가 모든 운영체제에 공통으로 적용되는 것은 아닙니다.", "Launcher를 연 뒤 원하는 도구를 찾아 버전과 개발 상태를 읽고 Install을 선택하세요. 설치된 앱은 작은 새 문서로 먼저 실행해 보세요. 관리가 편해져도 초기 개발 중인 앱이 완성된 업무용 프로그램으로 바뀌는 것은 아닙니다.", "업데이트 전에는 작업 파일과 기존 버전을 기록해 두세요. 파일 처리 방식이나 사용법이 달라질 수 있으므로 같은 예제 파일을 다시 검사하면 변경 여부를 판단하기 쉽습니다." ] },
      { id: "standalone", heading: "Launcher 없이 GitHub에서 앱별로 다운로드", paragraphs: ["PhotoCraft만 필요하다면 storytold/photocraft Releases에서 직접 설치 파일을 받으면 됩니다. 특정 버전을 선택하고 파일을 보관하기 쉬운 대신 새 릴리스를 직접 확인해야 합니다. 검색 결과의 출처가 의심되면 공식 제품 페이지에서 저장소로 이동하세요.", "다른 Craft Apps도 각각의 공식 프로젝트를 기준으로 확인합니다. 커뮤니티 이식판이나 모바일 버전은 책임 주체와 요구사항이 다를 수 있습니다. 같은 브랜드 이름만으로 공식 데스크톱 배포본과 동일하다고 판단하지 마세요."], links: [photoReleases, photoLink] },
      { id: "status", heading: "도구 13종의 현재 개발 상태", paragraphs: ["공유 도구 데이터의 상태를 표시합니다. 초기 알파와 개발 중이라는 표시는 변경과 오류를 예상하며 시험해야 한다는 뜻입니다. 설치 파일이 준비됐다는 안내는 모든 기능이 업무 요구를 충족한다는 확인이 아닙니다. 한국어 제품 안내가 없는 도구의 링크는 공식 제품 페이지로 연결합니다."], kind: "apps" },
      { id: "requirements", heading: "운영체제와 시스템 요구사항 확인 방법", paragraphs: ["Launcher의 요구사항이 모든 앱에 그대로 적용되는 것은 아닙니다. 선택한 릴리스에서 OS 버전, CPU, 그래픽 지원과 런타임을 확인하세요. Windows, macOS, Linux라는 일반적인 표시만으로 모든 컴퓨터가 지원된다고 볼 수 없습니다.", "Linux는 CPU와 빌드 환경, 패키지 형식에 따라 조건이 달라집니다. Flatpak은 자체 런타임을 사용하고 네이티브 패키지는 추가 라이브러리를 요구할 수 있습니다. 모든 도구에 하나의 glibc 최소 버전을 적용하는 식으로 단정하지 말고 실제 파일의 문서를 기준으로 확인하세요.", "문제가 생기면 OS 버전, CPU와 원래 오류 메시지를 기록한 뒤 해당 프로젝트의 문서와 Issues를 확인하세요. 설치와 시험 파일을 저장할 공간도 확보하세요. 출처가 불분명한 다른 설치 파일로 바꾸는 것보다 원인을 확인하는 편이 좋습니다."], links: [launcher, photoRepo, alternativeLink] },
    ],
    faq: [
      { question: "ArtCraft와 ArtCraft Launcher는 같은 프로그램인가요?", answer: "아닙니다. ArtCraft는 브랜드와 제품군을 뜻하고 Launcher는 Craft Apps를 관리하는 별도 프로그램입니다. ArtCraft App이라는 AI 제품과도 구분해야 합니다." },
      { question: "다운로드에 Launcher가 필수인가요?", answer: "필수는 아닙니다. 각 프로젝트의 공식 GitHub Releases에서 앱별 설치 파일을 받을 수 있습니다. 여러 도구와 업데이트를 함께 관리하려면 Launcher를 선택할 수 있습니다." },
      { question: "Launcher를 설치하면 13종이 모두 자동 설치되나요?", answer: "필요한 도구를 선택해 설치할 수 있습니다. 실제로 제공되는 앱과 버전은 현재 Launcher 및 각 프로젝트의 릴리스에 따라 달라집니다." },
      { question: "모든 Linux 배포판에서 작동하나요?", answer: "보장할 수 없습니다. CPU 아키텍처, 패키지 형식, 라이브러리와 그래픽 의존성, 필요한 Flatpak 런타임이 각 앱과 맞아야 합니다." },
      { question: "무료로 받으면 Adobe를 바로 대체할 수 있나요?", answer: "다운로드 가격과 오픈소스 여부는 파일 호환성이나 안정성과 다른 문제입니다. 필요한 기능을 먼저 정리하고 복사본으로 편집부터 저장·출력까지 확인한 뒤 사용 범위를 결정하세요." },
    ],
    sources: [official, launcher, launcherReleases, photoReleases],
  },
};
