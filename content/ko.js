/* 서울 착륙 — 한국어
   구조: ui(공통 문구) · home · before(여행 전) · during(여행 중) · tips(여행 TIP) · where(여행지 소개 문구)
   카드 공통 순서: WHAT(lead) → STEP BY STEP(blocks) → FOREIGNER TIP(tips) → REAL TIP(real) → WATCH(watch) → OFFICIAL INFO(links) → NEXT(next)
   REAL TIP 에는 외국인 팀원이 직접 겪은 이야기만 넣어 주세요. */
window.SL = window.SL || {};
window.SL.ko = {
  meta: { htmlLang: "ko", title: "서울 착륙 SEOUL LANDING" },
  ui: {
    skip: "본문으로 이동",
    langLabel: "언어 선택",
    nav: { before: "여행 전", during: "여행 중", tips: "여행 TIP", where: "여행지" },
    back: "← 처음으로",
    backHome: "처음으로 돌아가기",
    onPage: "바로가기",
    tipsSub: "외국인이 자주 놓치는 것",
    realSub: "직접 겪은 경험",
    realBy: "서울착륙 외국인 팀원의 경험",
    watchSub: "영상으로 먼저 보기",
    officialSub: "공식 정보 확인하기",
    caution: "주의",
    short: "쇼츠",
    video: "영상",
    mapSearch: "네이버지도",
    map: "지도",
    copy: "복사",
    copied: "복사됨",
    newTab: "새 탭에서 열림",
    nextStep: "NEXT",
    nextStage: "다음 단계",
    journeyLabel: "여행 단계",
    help: "HELP",
    helpOpen: "급할 때 도움 메뉴 열기",
    close: "닫기",
    show: "크게 보기",
    quickSub: "여행 중 급할 때 필요한 정보 바로 찾기",
    quick: { card: "교통카드", subway: "지하철", bus: "버스", taxi: "택시", food: "맛집", reserve: "예약", popup: "팝업", where: "여행지", sos: "문제 상황별 도움 (SOS)" },
    emergency: "긴급 · 도움 전화 (누르면 바로 연결)",
    emgList: [["112", "경찰"], ["119", "화재 · 구급"], ["1330", "관광 통역 · 안내"], ["02-120", "서울 생활 문의 (외국어 9번)"]],
    footerTag: "한국 여행, 준비부터 귀국까지 함께.",
    footerNote: "외국인을 위한 한국 여행 과정 가이드 · 정보 기준 2026년 11월",
    app: { use: "주요 용도", lang: "외국어", signup: "회원가입", phone: "한국 번호", when: "이럴 때", open: "공식 사이트" },
    where: {
      listHead: "여행지 9곳",
      listSub: "여행 기간별로 모은 추천 여행지. 마음에 드는 곳은 '비교 담기'로 나란히 비교 가능.",
      groups: ["당일치기", "1박 2일", "2박 3일"],
      detail: "상세보기", add: "비교 담기", added: "담김", remove: "비교에서 빼기",
      cmpHead: "여행지 비교하기",
      cmpSub: "여행지 2~3곳을 한눈에 비교",
      cmpHint: "여행지 카드나 Trip Finder 결과에서 '비교 담기'로 2~3곳을 선택하면 아래에 비교표 표시.",
      cmpNow: "지금 담은 곳:",
      cmpFull: "최대 3곳까지 비교 가능. 새 여행지를 담으려면 기존 선택 중 한 곳을 제외한 뒤 추가.",
      cmpClear: "비교 비우기",
      rows: { duration: "여행기간", time: "이동시간", transport: "이동수단", theme: "테마", sights: "대표 관광지", experience: "체험", access: "교통 편의성", style: "여행스타일" },
      hour: "시간", min: "분"
    },
    place: {
      back: "← 여행지 목록",
      basicSub: "떠나기 전 기본 정보",
      period: "추천 기간", time: "이동 시간", transport: "교통수단", fare: "편도 요금", difficulty: "현지 이동 난이도", theme: "테마",
      levels: ["쉬움", "보통", "어려움"],
      arrive: "도착역",
      beforeGo: "가기 전에",
      beforeLinks: [["#before-card", "교통카드 준비"], ["#before-apps", "지도 앱 깔기"], ["#during-subway", "지하철 타는 법"]],
      whySub: "왜 외국인에게 추천할까?",
      courseSub: "추천 여행 순서",
      mustSub: "지도 버튼으로 바로 길찾기, 복사 버튼으로 한국어 이름 저장",
      foodSub: "이 지역 대표 음식",
      findFoodSub: "현지 맛집 직접 찾기",
      findFoodSteps: ["네이버지도에서 '지역 + 음식'으로 검색", "리뷰 수 · 최근 사진 확인", "영업시간 · 휴무일 확인 후 출발"],
      findFoodBtn: "네이버지도에서 '{q}' 검색",
      moreFood: "맛집 찾는 법 자세히 보기",
      videoSub: "여행 Vlog",
      vlogSearch: "YouTube에서 여행 Vlog 찾기",
      vlogPending: "추천 Vlog 선정 중. YouTube 검색으로 여행지 분위기 먼저 살펴보기.",
      korail: "코레일 기차 예매",
      finder: "다른 여행지 추천받기",
      more: "다른 여행지"
    }
  },

  home: {
    eyebrow: "KOREA TRAVEL GUIDE",
    title: "한국 여행,\n입국부터 출국까지",
    sub: "공항 도착부터 교통, 맛집, 문화체험, 아플 때 도움, 출국까지.\n한국 여행 중 실제로 생기는 상황을 한곳에서.",
    ctaStart: "여행 준비 시작하기",
    ctaFinder: "나에게 맞는 여행지 찾기",
    guideHead: "현재 여행 단계 선택",
    guideSub: "여행 순서에 맞춘 단계별 안내",
    cards: {
      before: { title: "여행 전", desc: "일정 짜기, 필수 앱, 교통카드까지. 떠나기 전에 준비할 것." },
      during: { title: "여행 중 도움", desc: "지하철 · 버스 · 택시 타는 법, 급할 때 SOS, 현장 한국어." },
      tips: { title: "여행 TIP", desc: "맛집 · 카페 · 팝업 · 공연을 찾는 법과 예약 · 웨이팅까지." },
      where: { title: "여행지", desc: "질문 4개로 TOP 3 추천. 여행지 비교부터 상세 코스까지." }
    },
    /* 2026.11 보완: 입국 → 준비 → 이동 → 탐색 → 체험 → 문제 해결 → 출국 */
    journey: {
      eyebrow: "FROM ARRIVAL TO DEPARTURE",
      head: "한국 여행, 처음부터 끝까지 서울착륙과 함께",
      sub: "입국부터 출국까지. 지금 여행 단계를 누르면 필요한 안내로 바로 이동.",
      steps: [
        {
          en: "ARRIVAL",
          t: "한국 도착",
          d: "입국 서류와 인터넷부터",
          href: "#help-entry",
          icon: "plane",
          links: [["#help-entry", "입국 준비"], ["#help-connection", "SIM / eSIM"], ["#help-arrival", "공항에서 시내 이동"]]
        },
        {
          en: "PREPARE",
          t: "여행 준비",
          d: "카드 한 장, 앱 두 개",
          href: "#before",
          icon: "card",
          links: [["#before-card", "교통카드"], ["#before-apps", "필수 앱"], ["#before-plan", "일정 확인"]]
        },
        {
          en: "MOVE",
          t: "이동",
          d: "태그하고, 갈아타고, 내리기",
          href: "#during",
          icon: "subway",
          links: [["#during-subway", "지하철"], ["#during-bus", "버스"], ["#during-taxi", "택시"], ["#before-apps", "지도"]]
        },
        {
          en: "DISCOVER",
          t: "현지 탐색",
          d: "리스트 대신 찾는 법",
          href: "#tips",
          icon: "compass",
          links: [["#tips-food", "맛집"], ["#tips-cafe", "카페"], ["#where", "여행지"], ["#tips-popup", "팝업"]]
        },
        {
          en: "EXPERIENCE",
          t: "문화체험",
          d: "참여 조건과 예약까지",
          href: "#tips-culture",
          icon: "ticket",
          links: [["#tips-popup", "팝업"], ["#tips-culture", "공연 · 전시"], ["#tips-kpop", "K-POP 행사"], ["#tips-reserve", "예약 / 웨이팅"]]
        },
        {
          en: "HELP",
          t: "여행 중 도움",
          d: "아프거나 잃어버렸을 때",
          href: "#home-help",
          icon: "lifebuoy",
          links: [["#during-health", "병원 · 약국"], ["#help-lost", "분실"], ["#during-sos", "긴급상황"], ["#during-korean", "여행 한국어"]]
        },
        {
          en: "DEPARTURE",
          t: "출국",
          d: "짐 · 환급 · 공항 이동",
          href: "#help-departure",
          icon: "takeoff",
          links: [["#help-departure", "공항 이동"], ["#help-stay", "짐 확인"], ["#help-departure", "Tax Refund"], ["#before-card", "교통카드 잔액"]]
        }
      ]
    },
    flowHead: "서울착륙, 이렇게 따라가기",
    flowSub: "한국에 도착한 날부터 떠나는 날까지, 실제 여행 순서대로",
    flow: [
      ["before", "한국 입국", "#help-entry", "입국 서류 · 공항 도착"],
      ["before", "SIM · 인터넷 준비", "#help-connection", "데이터와 문자 인증은 따로 확인"],
      ["before", "교통카드 구입", "#before-card", "편의점에서 T-money · EZL"],
      ["during", "지하철 이용", "#during-subway", "카드 태그, 환승, 출구 번호"],
      ["where", "여행지 이동", "#where", "Trip Finder로 고르고 코스 따라 걷기"],
      ["tips", "맛집 검색", "#tips-food", "'지역 + 음식'으로 검색"],
      ["tips", "채식이라면 비건 식당 검색 TIP", "#tips-food-diet", "채식 · 할랄 · 알레르기 TIP"],
      ["tips", "팝업 발견", "#tips-popup", "예약 필요 여부부터 확인"],
      ["tips", "예약 · 웨이팅", "#tips-reserve", "한국 번호가 없을 때 방법까지"],
      ["during", "기도 공간 찾기", "#during-prayer", "Prayer Room 찾는 방법"],
      ["during", "몸이 아플 때", "#during-health", "약국 · 병원 · 119 중 선택"],
      ["where", "출국 준비", "#help-departure", "짐 · Tax Refund · 공항 이동"]
    ],
    flowSum: ["입국", "준비", "이동", "탐색", "체험", "문제 해결", "출국"]
  },

  /* ---------------- 01 BEFORE TRIP ---------------- */
  before: {
    title: "떠나기 전\n필수 준비 사항",
    intro: "일정 짜기, 필수 앱 설치, 교통카드 구매까지. 도착 첫날부터 이동하기 위한 준비 과정.",
    cards: [
      {
        id: "before-plan", num: "1-1", short: "일정 짜기", title: "여행 일정 짜는 방법",
        lead: "기간과 테마부터 정한 뒤 가고 싶은 곳을 골라 일정 구성.",
        blocks: [
          { type: "steps", items: [
            { t: "여행 기간 정하기", d: "당일치기, 1박 2일, 2박 3일 중 여행 기간부터 선택. 기간에 맞춰 이동 가능한 거리 결정." },
            { t: "여행 테마 고르기", d: "자연 · 역사 · 체험 · 카페 중 이번 여행에서 가장 하고 싶은 활동 선택." },
            { t: "여행 지역 고르기", d: "기간과 테마에 맞는 지역 선택. 고민될 때는 Trip Finder로 TOP 3 추천받기.", go: ["#where-finder", "Trip Finder 열기"] },
            { t: "이동시간 확인하기", d: "NAVER Map에서 출발지 → 목적지 대중교통 이동시간 확인. 돌아오는 시간까지 함께 계산." },
            { t: "가까운 곳끼리 묶기", d: "가까운 관광지끼리 묶어 하루 동선 구성. 같은 날 반대 방향을 오가는 일정은 피하기." },
            { t: "영업시간 · 휴무일 확인하기", d: "박물관은 월요일 휴관 여부, 식당은 오후 브레이크타임까지 확인." },
            { t: "비 오는 날 대체 일정 준비하기", d: "박물관 · 시장 · 카페 등 실내에서 즐길 곳을 한두 곳 미리 선택." }
          ] }
        ],
        tips: [
          "이동이 많은 날과 쉬는 날을 번갈아 두면 덜 지침.",
          "KTX · ITX · 무궁화 등은 주말에 매진되기 쉬우므로 날짜가 정해지면 미리 예매.",
          "길찾기에 활용할 수 있도록 일정표에 역의 한국어 이름도 함께 기록."
        ],
        links: [ { href: "visitkorea", label: "VISITKOREA (한국관광공사)" }, { href: "korail", label: "코레일 기차 예매" } ],
        next: ["#before-apps", "여행 전 필수 앱 깔기"]
      },
      {
        id: "before-apps", num: "1-2", short: "필수 앱", title: "여행 전 필수 앱",
        lead: "한국 여행 길찾기에는 네이버지도 · 카카오맵 활용. 출발 전 앱 설치와 언어 설정까지 준비.",
        blocks: [
          { type: "apps", apps: [
            { name: "NAVER Map", sub: "네이버지도", use: "대중교통 길찾기, 환승, 버스 도착 정보, 도보 경로, 음식점 · 카페 검색", lang: "한국어 · English · 中文 · 日本語", signup: "길찾기 · 검색은 필요 없음 (저장 · 리뷰는 네이버 계정)", phone: "필요 없음", when: "목적지까지 가는 법, 근처 맛집 찾기", tip: "장소 검색은 한국어 이름으로. 서울착륙의 '복사' 버튼 활용.", href: "naver" },
            { name: "KakaoMap", sub: "카카오맵", use: "버스 · 지하철 · 도보 길찾기, 실시간 버스 위치, 지하철 도착 정보", lang: "한국어 중심", signup: "기본 기능은 필요 없음", phone: "필요 없음", when: "버스가 지금 어디쯤 오는지 볼 때", tip: "네이버지도와 함께 설치해 이동 경로 비교.", href: "kakao" },
            { name: "Papago", sub: "파파고", use: "글자 · 음성 · 사진(메뉴판) · 대화 번역", lang: "한국어 ↔ English · 中文 · 日本語 등", signup: "필요 없음", phone: "필요 없음", when: "메뉴판 읽기, 직원에게 물어보기", tip: "카메라로 메뉴판을 촬영해 바로 번역.", href: "papago" },
            { name: "Korail", sub: "코레일 · 레츠코레일", use: "KTX · ITX · 무궁화 등 기차표 예매, 시간표 확인", lang: "외국어 예매 페이지: English · 中文 · 日本語", signup: "회원 또는 비회원 예매", phone: "한국 앱(코레일톡)은 본인인증이 필요할 수 있음.", when: "근교 여행 기차표를 살 때", tip: "외국어 기차 예매는 레츠코레일 외국어 페이지 이용. 경의중앙선 · 경강선 · 1호선 등 수도권 전철은 예매 없이 교통카드로 탑승 가능.", href: "korail" },
            { name: "VISITKOREA", sub: "한국관광공사", use: "공식 관광 정보, 축제 · 행사 일정, 1330 관광통역 채팅", lang: "English · 中文 · 日本語 등", signup: "필요 없음", phone: "필요 없음", when: "공식 정보를 다시 확인하거나 통역이 필요할 때", tip: "1330은 전화 외에 앱 · 웹 채팅으로도 문의 가능.", href: "visitkorea" }
          ], caption: "2026년 11월 기준. 앱 정책은 변경될 수 있음." }
        ],
        tips: [
          "지도 · 번역 앱 사용을 위한 데이터 준비 필요. 공항에서 eSIM · 유심 · 포켓와이파이 중 선택.",
          "택시 앱(k.ride · Uber · Kakao T) 안내는 '여행 중 → 택시'에서 확인."
        ],
        next: ["#before-card", "교통카드 사기"]
      },
      {
        id: "before-card", num: "1-3", short: "교통카드", title: "교통카드 가이드",
        lead: "교통카드 한 장으로 버스와 지하철 이용. 구매부터 충전, 사용, 잔액 처리까지 단계별 안내.",
        blocks: [
          { type: "defs", title: "어떤 카드를 살까?", items: [
            ["T-money (티머니)", "널리 쓰이는 선불 교통카드. 전국 버스 · 지하철과 일부 택시에서 사용 가능.", "assets/cards/tmoney.jpg"],
            ["EZL (구 Cashbee/캐시비)", "티머니와 사용 방식이 같은 선불 교통카드. 예전 이름인 '캐시비'로 적힌 안내도 있음.", "assets/cards/ezl.jpg"]
          ] },
          { type: "text", text: "두 카드의 사용 방법은 동일. 편의점에서 판매 중인 카드 중 선택해 구매." },
          { type: "steps", title: "구매 → 충전 → 사용 → 잔액 확인 → 여행 종료", items: [
            { t: "구매", d: "CU · GS25 · 세븐일레븐 등 편의점이나 지하철역 발매기 · 충전소에서 구매. 카드 가격은 디자인별로 다름.", list: ["편의점: 계산대에서 '티머니 카드 주세요'", "지하철역: 교통카드 발매기 · 충전소"] },
            { t: "충전", d: "새 카드의 잔액은 0원으로, 사용 전 충전 필요. 충전은 대부분 현금 결제.", list: ["편의점 계산대: 카드와 현금을 내고 '충전해 주세요'", "지하철역 충전기: 카드를 올리고 금액 선택 → 현금 넣기", "앱: 일부 안드로이드폰에서 모바일 티머니 · 이즐 앱으로 충전 가능."] },
            { t: "사용", d: "승차 · 하차 시 모두 카드 태그. 하차 후 30분 이내 환승 시 할인 적용.", go: ["#during-subway", "지하철 타는 법 보기"] },
            { t: "잔액 확인", list: ["버스 · 지하철 단말기에 카드를 태그하면 잔액 표시.", "편의점 계산대에서 물어보기", "지하철역 충전기에 카드 올리기", "티머니 · 이즐 앱 (휴대폰 NFC)"] },
            { t: "여행이 끝나면 남은 돈은?", list: ["환불: 편의점 · 지정 장소에서 잔액 환불. 티머니 기준 수수료 500원이며, 환불 가능 금액은 장소별로 다름.", "보관: 다음 한국 여행 때 재사용.", "전달: 한국에 오는 친구에게 양도해 사용 가능."] }
          ], caption: "충전 잔액만 환불 대상. 카드 구매 비용은 환불 불가." },
          {
            type: "tipbox",
            icon: "card",
            situation: "해외에서 발급한 카드로 충전이 안 된다면?",
            text: "교통카드 충전은 현금만 받는 곳이 많아 해외 발행 카드로는 충전되지 않을 수 있음. 충전 전 사용 가능한 결제수단을 확인하고, 필요하면 원화 현금 준비.",
            go: ["#help-payment", "결제 · 충전 오류 해결 방법"]
          }
        ],
        tips: [
          "승차 전 잔액 확인. 하차 시 잔액이 부족하지 않도록 미리 충전.",
          "카드가 2장 겹치면 인식 오류가 생길 수 있으므로 한 장만 꺼내 태그.",
          "하차 시 카드 태그를 빠뜨리면 다음 환승 할인 적용 불가.",
          "잔액을 많이 남기지 않으려면 여행 기간에 맞춰 조금씩 충전."
        ],
        links: [ { href: "tmoney", label: "티머니 (T-money)" }, { href: "ezl", label: "이즐 (EZL)" } ],
        next: ["#during-subway", "여행 중: 지하철 타기"]
      }
    ]
  },

  /* ---------------- 02 DURING TRIP ---------------- */
  during: {
    title: "이동 중 필요한 정보,\n휴대폰으로 바로 확인",
    intro: "지하철 · 버스 · 택시 이용 순서부터 SOS 대처법, 현장에서 쓰는 한국어까지.",
    cards: [
      {
        id: "during-subway", num: "2-1", short: "지하철", title: "지하철 이용법",
        lead: "탈 때 한 번, 나갈 때 한 번. 교통카드는 두 번 태그.",
        blocks: [
          { type: "steps", items: [
            { t: "지하철역 찾기", d: "NAVER Map에서 목적지 검색 → '대중교통' 선택 → 탑승역과 노선 확인." },
            { t: "교통카드 태그", d: "개찰구 단말기에 카드를 태그한 뒤 통과." },
            { t: "노선과 방향 확인", d: "노선 색 · 번호를 따라 이동. 승강장 표지판에서 '○○ 방면'과 다음 역 이름 확인." },
            { t: "열차 탑승", d: "내리는 승객이 먼저 내린 뒤 탑승. 열차 안 화면과 안내 방송으로 다음 역 확인." },
            { t: "환승", d: "'갈아타는 곳 (Transfer)' 표지판과 환승할 노선 색을 따라 이동." },
            { t: "출구번호 확인", d: "지도 앱에서 목적지와 가장 가까운 출구 번호를 확인한 뒤 역 안 안내판을 따라 이동." },
            { t: "나갈 때 다시 카드 태그", d: "나가는 개찰구에서 카드를 한 번 더 태그해 요금 정산." }
          ] },
          { type: "faq", title: "자주 헷갈리는 것", items: [
            ["Q. 환승 시 교통카드 재태그 여부", "개찰구 안에서 환승할 때는 보통 재태그 불필요. 다만 운영 회사가 다른 노선 사이에는 환승 통로에 단말기가 있을 수 있으므로, 단말기가 보이면 카드 태그."],
            ["Q. 열차 탑승 방향 확인 방법", "승강장 표지판의 '○○ 방면'과 다음 역 이름 확인. 지도 앱의 경로와 같은 방향인지 확인 후 탑승."],
            ["Q. 목적지와 가까운 출구 찾기", "지도 앱 경로에서 '○번 출구' 확인. 출구가 많은 역은 반대편으로 나가면 돌아가야 하므로, 출구 안내판의 주변 건물 이름도 함께 확인."],
            ["Q. 개찰구 미개방 · 경고음 발생 시 대처", "잔액 부족 또는 카드 인식 오류일 수 있음. 역 충전기에서 충전하거나 역 고객안전실에 문의."]
          ] },
          {
            type: "tipbox",
            icon: "subway",
            situation: "출구가 10개 넘는 큰 역에서 나가야 한다면?",
            text: "한국 지하철역은 출구가 많은 경우가 있음. 목적지를 검색할 때 가장 가까운 출구 번호를 함께 확인하고, 역 안에서는 출구 번호 안내판을 따라 이동.",
            phrases: [["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?"]],
            go: ["#during-korean-move", "길 물을 때 쓰는 한국어"]
          }
        ],
        tips: [
          "평일 8~9시 · 18~19시는 혼잡 시간대. 큰 짐이 있다면 해당 시간대 이동은 피하기.",
          "노약자석 · 임산부 배려석은 필요한 승객을 위해 비워 두기.",
          "막차는 보통 자정 무렵. 늦은 시간에는 지도 앱에서 이용 노선의 막차 시간 확인."
        ],
        watch: [ { ref: "V05", title: "영상으로 배우는 한국 대중교통", summary: "실제 버스 · 지하철 탑승 장면으로 살펴보는 교통카드 사용 과정." } ],
        links: [ { href: "seoulmetro", label: "서울교통공사" } ],
        next: ["#during-bus", "버스 타기"]
      },
      {
        id: "during-bus", num: "2-2", short: "버스", title: "버스 이용법",
        lead: "앞문으로 승차, 뒷문으로 하차. 내릴 때도 교통카드 태그 필수.",
        blocks: [
          { type: "steps", items: [
            { t: "NAVER Map에서 버스 번호 확인", d: "지도 앱 경로에서 탑승할 버스 번호와 정류장 이름 확인." },
            { t: "정류장 확인", d: "같은 이름의 정류장이 길 양쪽에 있을 수 있으므로 안내판의 '다음 정류장'으로 방향 확인." },
            { t: "앞문으로 탑승", d: "도착한 버스의 번호를 다시 확인한 뒤 앞문으로 탑승." },
            { t: "교통카드 태그", d: "기사님 옆 단말기에 카드 태그." },
            { t: "현재 위치 확인", d: "차 안 화면 · 안내 방송 또는 지도 앱으로 현재 위치 확인." },
            { t: "목적지 전에 하차벨 누르기", d: "목적지 바로 전 정류장을 지나면 하차벨 누르기." },
            { t: "하차 전에 카드 태그", d: "뒷문 근처 단말기에 카드 태그." },
            { t: "뒷문으로 내리기", d: "버스가 완전히 멈춘 뒤 자리에서 일어나 하차." }
          ] },
          { type: "warn", title: "자주 발생하는 실수", items: [
            "하차 시에도 카드 태그 필수. 태그하지 않으면 환승 할인 적용 불가.",
            "목적지 전에 하차벨 누르기. 누르지 않으면 정류장을 지나칠 수 있음.",
            "같은 버스 번호라도 운행 방향 확인.",
            "정류장 위치 확인. 탑승할 정류장이 길 건너편일 수 있음."
          ] },
          {
            type: "tipbox",
            icon: "bus",
            situation: "내릴 정류장을 지나칠까 걱정된다면?",
            text: "버스에서는 내리기 전에 하차벨을 눌러야 함. 목적지 바로 전 정류장을 지나면 벨을 누르고, 내릴 때도 교통카드 태그."
          }
        ],
        tips: [
          "현금 없는 버스에 대비해 교통카드 준비.",
          "초록색 소형 마을버스는 동네 안의 짧은 구간 운행. 성북동 등 언덕이 많은 지역에서 활용하기 좋은 교통수단."
        ],
        real: [ "처음 한국에 왔을 때 버스에서 내리면서도 카드를 찍어야 한다는 것을 몰랐음." ],
        watch: [ { query: "한국 버스 타는 법 외국인", title: "한국 버스 타는 법 영상 찾아보기", summary: "실제 탑승 전, 영상으로 승차 · 하차 과정을 익히며 긴장 줄이기." } ],
        links: [ { href: "topis", label: "서울시 교통정보 TOPIS" } ],
        next: ["#during-taxi", "택시 타기"]
      },
      {
        id: "during-taxi", num: "2-3", short: "택시", title: "택시 이용법",
        lead: "짐이 많거나 늦은 밤에 이용하기 좋은 택시. 앱 호출 시 목적지를 말로 설명할 필요 없음.",
        blocks: [
          { type: "apps", apps: [
            { name: "Kakao T", sub: "카카오 T", use: "한국에서 가장 많이 쓰는 택시 호출 앱", lang: "한국어 중심", signup: "카카오 계정 필요", phone: "계정 인증 과정에서 필요할 수 있음.", when: "카카오 계정이 있는 유학생", tip: "해외 카드 등록이 안 되면 '기사님께 직접 결제' 선택 후 하차 시 카드 결제." },
            { name: "Uber Taxi", sub: "우버", use: "우버 앱으로 한국 택시 호출", lang: "다국어", signup: "쓰던 우버 계정 그대로", phone: "필요 없음", when: "이미 우버를 쓰는 여행자", tip: "한국에서 우버로 호출하면 면허를 보유한 택시로 배차.", href: "uber" },
            { name: "k.ride", sub: "케이라이드", use: "카카오모빌리티의 외국인 전용 택시 앱", lang: "English · 中文 · 日本語 (기사님과 채팅 자동 번역)", signup: "전화번호 + 이메일 · Google · Apple", phone: "필요 없음 (해외 번호 가능)", when: "한국 번호가 없는 단기 여행자", tip: "부를 수 있는 택시 종류가 정해져 있어 일반 택시보다 요금이 높을 수 있음." }
          ] },
          { type: "steps", title: "이용 순서", items: [
            { t: "출발지 입력", d: "지도에서 현재 위치와 출발 지점이 같은지 확인." },
            { t: "목적지 입력", d: "목적지는 한국어 이름이나 주소로 검색." },
            { t: "예상요금 확인" },
            { t: "택시 호출" },
            { t: "차량번호 확인", d: "앱에 표시된 차량번호와 실제 차량번호가 같은지 확인 후 탑승." },
            { t: "탑승", d: "뒷좌석에서도 안전벨트 착용." },
            { t: "결제", d: "앱 자동결제 또는 하차 시 카드 · 교통카드로 결제." }
          ] },
          {
            type: "tipbox",
            icon: "taxi",
            situation: "기사님과 말이 잘 안 통한다면?",
            text: "기사님과 의사소통이 어려울 수 있으므로 목적지의 한국어 주소를 미리 준비. 화면으로 보여 주면 말로 설명할 필요 없음.",
            phrases: [["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address."]]
          }
        ],
        tips: [
          "탑승 전 한국어 주소 준비. 여행지 페이지의 '복사' 버튼으로 한국어 장소명 저장.",
          "탑승 전 앱과 실제 차량번호 일치 여부 확인.",
          "앱 자동결제 여부 확인. 이미 결제했다면 하차 시 카드를 다시 내지 않도록 주의 (중복 결제 방지).",
          "예상요금 사전 확인. 밤 10시 이후에는 심야 할증이 붙을 수 있음."
        ],
        links: [ { href: "uber", label: "Uber" } ],
        next: ["#during-sos", "문제가 생겼을 때"]
      },
      {
        id: "during-sos", num: "2-4", short: "SOS", title: "SOS · 도움이 필요할 때",
        lead: "상황에 맞는 번호 선택. 번호를 누르면 바로 전화 연결.",
        blocks: [
          { type: "sos", items: [
            { num: "119", title: "화재 · 구급 (응급)", desc: "다치거나 아플 때, 사고가 났을 때", urgent: true },
            { num: "112", title: "경찰", desc: "범죄 · 위험한 상황, 분실 신고", urgent: true },
            { num: "1330", title: "관광 통역 · 안내", desc: "English · 中文 · 日本語. 길 안내, 통역, 관광 불편 신고. 운영시간은 공식 안내에서 확인." },
            { num: "02-120", tel: "02120", title: "서울 다산콜센터", desc: "서울 생활 · 교통 문의. 외국어는 9번 (평일 9~18시)" }
          ], caption: "해외 번호로 1330에 전화할 때는 +82-2-1330. VISITKOREA 앱 · 웹 채팅으로도 이용 가능." },
          { type: "cases", title: "상황별 대처 방법", items: [
            { icon: "taxi", title: "택시 이용 중 문제 발생", steps: ["영수증이나 앱 이용 기록에서 차량번호와 이용 시간 확인.", "앱으로 호출했다면 해당 앱 고객센터에 먼저 문의.", "요금 문제나 불편 사항은 1330의 통역 지원을 받아 신고 가능."] },
            { icon: "map", title: "길을 잃은 경우", steps: ["가까운 역이나 큰 건물 이름 확인.", "NAVER Map에서 현재 위치를 켠 뒤 목적지 재검색.", "의사소통이 어려우면 1330에 전화한 뒤 직원 · 기사님께 전화를 건네 통역 요청."] },
            { icon: "card", title: "교통카드 인식 불가", steps: ["경고음이 나면 역 충전기 · 편의점에서 잔액부터 확인.", "교통카드 2장이 겹쳐 있지 않은지 확인.", "계속 인식되지 않으면 역 고객안전실이나 버스 기사님께 카드를 보여 주며 도움 요청."] },
            { icon: "bag", title: "물건을 분실한 경우", steps: ["지하철: 역 직원에게 즉시 문의. 하차 시각과 탑승한 칸 번호를 함께 전달.", "버스 · 택시: 서울에서는 120에 문의해 분실물 접수처 확인.", "경찰민원24에서 습득물 조회·분실 신고 방법 확인.", "분실물 수령 시 여권 등 신분증 지참."], link: { href: "lost112", label: "경찰민원24 유실물 안내" } }
          ] }
        ],
        tips: [
          "출발 전 112 · 119 · 1330을 휴대폰 연락처에 저장.",
          "지하철 습득물은 노선별 유실물센터에서 약 1주일 보관 후 경찰서로 이관. 분실 사실을 알았다면 가급적 빨리 문의.",
          "여권 분실 시 112에 신고하고 자국 대사관에 연락."
        ],
        links: [ { href: "lost112", label: "경찰민원24 유실물 안내" }, { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330" } ],
        next: ["#during-health", "아플 때 도움 받기"]
      },
      /* 2026.11 보완: 아플 때 (HEALTH HELP) */
      {
        id: "during-health",
        num: "2-5",
        short: "아플 때",
        kicker: "HEALTH HELP",
        title: "여행 중 아프다면?",
        lead: "지금 상황에 맞는 도움부터 선택. 서울착륙은 증상을 진단하지 않고, 어디에서 도움을 받을지만 안내.",
        top: [
          {
            type: "health",
            alert: "심한 부상 · 호흡곤란 · 의식 저하 등 응급상황이라면 바로 119 (누르면 전화 연결)",
            items: [
              {
                key: "pharmacy",
                icon: "pill",
                label: "PHARMACY",
                title: "약이 필요한 경우",
                text: "가벼운 증상으로 약이 필요한 경우 근처 약국 찾기.",
                steps: ["NAVER Map에서 '약국' 검색", "현재 영업 중인 약국 확인", "가까운 약국으로 이동"],
                search: ["약국", "야간 약국"],
                phrases: [
                  ["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "I need cold medicine."],
                  ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "I need headache medicine."],
                  ["약국이 어디에 있나요?", "yak-gu-gi eo-di-e in-na-yo?", "Where is the pharmacy?"]
                ]
              },
              {
                key: "hospital",
                icon: "hospital",
                label: "HOSPITAL",
                title: "병원 진료가 필요한 경우",
                text: "병원 방문 전 외국인 진료 또는 외국어 응대가 가능한지 확인하는 것이 좋음.",
                steps: ["NAVER Map에서 병원 검색 (예: 내과)", "외국인 진료 가능 여부 확인", "영어 등 외국어 진료 여부 확인"],
                search: ["내과", "병원"],
                note: "전화로 묻기 어렵다면 1330 관광통역 안내로 통역 도움 요청.",
                phrases: [
                  ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "I want to go to a hospital."],
                  ["영어 가능한 직원이 있나요?", "yeong-eo ga-neung-han ji-gwo-ni in-na-yo?", "Is there a staff member who speaks English?"]
                ],
                link: { url: "https://medical.visitseoul.net", label: "서울의료관광 · 외국인 환자 병원 정보" }
              },
              {
                key: "emergency",
                icon: "sos",
                label: "EMERGENCY",
                title: "응급상황",
                num: "119",
                call: "Emergency Help",
                sub: "누르면 바로 전화 연결",
                text: "심한 부상, 호흡곤란, 의식 저하 등 즉각적인 도움이 필요한 응급상황에서는 119에 연락.",
                note: "119 구급차는 무료로 이용 가능하며 외국어 통역을 지원. 현재 위치(주변 건물 · 역 이름)부터 말하기.",
                phrases: [
                  ["도와주세요.", "do-wa-ju-se-yo.", "Please help me."],
                  ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "Please call 119."]
                ]
              }
            ],
            caption: "약 · 진료에 관한 판단은 약사 · 의사에게. 이 안내는 도움을 받을 곳을 찾기 위한 용도."
          }
        ],
        blocks: [{ type: "checklist", title: "약국 · 병원 가기 전 챙길 것", items: ["여권", "복용 중인 약 이름", "알레르기 메모", "숙소 주소 (한국어)", "여행자보험 정보"] }],
        tips: [
          "의사소통이 어려우면 1330(관광통역 안내)에 전화해 통역 도움 요청.",
          "일요일 · 공휴일에는 문을 닫는 약국 · 병원이 많음. E-Gen에서 문 여는 곳 확인.",
          "여행자보험이 있다면 진료비 영수증과 진단서 · 처방전 사본 챙겨 두기."
        ],
        links: [
          { url: "https://www.e-gen.or.kr", label: "E-Gen 응급의료포털 (문 여는 병원 · 약국)" },
          { url: "https://medical.visitseoul.net", label: "서울의료관광 (외국인 환자 지원)" },
          {
            url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632",
            label: "VISITKOREA · 1330 통역 안내"
          }
        ],
        next: ["#during-prayer", "기도 공간이 필요할 때"]
      },
      /* 2026.11 보완: 기도 공간 (RELIGIOUS TRAVEL TIP) */
      {
        id: "during-prayer",
        num: "2-6",
        short: "기도 공간",
        kicker: "RELIGIOUS TRAVEL TIP",
        title: "여행 중 기도할 장소가 필요하다면?",
        lead: "공항, 일부 관광시설 및 쇼핑시설에는 Prayer Room이 마련되어 있음. 지도 앱에서 검색하거나 공식 관광정보 확인.",
        top: [
          {
            type: "spots",
            title: "어디에서 찾을 수 있을까?",
            items: [
              { icon: "plane", t: "공항 Prayer Room", d: "인천공항 등 주요 공항에 기도실 운영. 출국장 안쪽에 있는 경우가 많으므로 안내데스크에서 위치 확인." },
              { icon: "popup", t: "쇼핑몰 · 복합시설", d: "일부 대형 쇼핑몰 · 복합시설 · 관광지에 기도실 마련. 안내데스크에 '기도실' 위치 문의." },
              { icon: "pray", t: "Mosque · 종교시설", d: "서울중앙성원(이태원) 등 이슬람 사원과 종교시설. 방문 전 개방 시간 확인." },
              { icon: "map", t: "관광 안내 사이트", d: "VISITKOREA 무슬림 친화 여행 페이지의 Prayer Room 정보, 1330 관광통역 안내 활용." }
            ]
          }
        ],
        blocks: [
          {
            type: "search",
            title: "NAVER Map에서 직접 찾기",
            items: ["기도실", "Prayer Room", "Mosque", "이슬람 사원"],
            caption: "지역 이름을 앞에 붙이면 가까운 곳 찾기가 쉬움 (예: 명동 기도실)."
          },
          {
            type: "phrases",
            groups: [
              {
                title: "이렇게 물어보기",
                items: [
                  ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "Where is the prayer room?", "안내데스크에서"],
                  [
                    "근처에 기도할 수 있는 곳이 있나요?",
                    "geun-cheo-e gi-do-hal su in-neun go-si in-na-yo?",
                    "Is there a place nearby where I can pray?",
                    "호텔 · 관광안내소에서"
                  ]
                ]
              }
            ]
          }
        ],
        tips: [
          "운영시간 · 이용 규칙은 시설마다 다르므로 방문 전 안내데스크나 공식 안내에서 확인.",
          "'기도실(gi-do-sil)'이라고 물으면 대부분 통함.",
          "무슬림 친화 식당 중 일부는 기도 공간을 함께 마련. 식당 안내에서 확인."
        ],
        links: [
          {
            url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do",
            label: "VISITKOREA · Muslim-friendly Travel (Prayer Room)"
          },
          { url: "https://www.airport.kr", label: "인천국제공항" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 관광통역 안내" }
        ],
        next: ["#during-korean", "현장에서 쓰는 한국어"]
      },
      {
        id: "during-korean", num: "2-7", short: "한국어", title: "여행 중 사용하는 한국어",
        lead: "발음이 완벽하지 않아도 의사 전달 가능. 말하기 어려울 때는 '크게 보기'로 화면 제시.",
        blocks: [
          {
            type: "jump",
            title: "상황별 바로가기",
            items: [
              ["#during-korean-move", "교통", "subway"],
              ["#during-korean-food", "채식 · 음식", "leaf"],
              ["#during-korean-health", "병원 · 약국", "hospital"],
              ["#during-korean-sos", "긴급상황", "sos"]
            ]
          },
          { type: "phrases", groups: [
            { id: "during-korean-move", title: "교통", items: [
              ["여기 어떻게 가요?", "yeo-gi eo-tteo-ke ga-yo?", "How do I get here?", "지도 화면을 보여 주면서"],
              ["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?", "지하철역에서"],
              ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "택시에서 주소를 보여 주며"],
              ["여기서 내려 주세요.", "yeo-gi-seo nae-ryeo ju-se-yo.", "Please let me off here.", "택시에서 내릴 때"]
            ] },
            { title: "음식점", items: [
              ["두 명이에요.", "du myeong-i-e-yo.", "There are two of us.", "들어가자마자 인원 말하기"],
              ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "줄이 길 때"],
              ["이거 주세요.", "i-geo ju-se-yo.", "This one, please.", "메뉴를 가리키면서"]
            ] },
            { title: "예약", items: [
              ["예약했어요.", "ye-yak hae-sseo-yo.", "I have a reservation.", "입구에서 이름과 함께"]
            ] },
            { title: "팝업 · 공연", items: [
              ["예약이 필요해요?", "ye-ya-gi pi-ryo-hae-yo?", "Do I need a reservation?", "팝업 입구에서"],
              ["현장 입장 가능해요?", "hyeon-jang ip-jang ga-neung-hae-yo?", "Can I enter without a reservation?", "예약 없이 갔을 때"]
            ] },
            { title: "쇼핑", items: [
              ["카드 돼요?", "ka-deu dwae-yo?", "Do you take cards?", "계산하기 전에"],
              ["얼마예요?", "eol-ma-ye-yo?", "How much is it?", "가격을 물어볼 때"]
            ] },
            {
              id: "during-korean-food",
              title: "채식 · 음식",
              items: [
                ["고기가 들어가나요?", "go-gi-ga deu-reo-ga-na-yo?", "Is there meat in this?", "주문 전에"],
                ["돼지고기가 들어가나요?", "dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Is there pork in this?", "메뉴를 가리키며"],
                ["채식 메뉴가 있나요?", "chae-sik me-nyu-ga in-na-yo?", "Do you have vegetarian dishes?", "자리에 앉기 전에"]
              ]
            },
            {
              title: "종교 · 식이",
              items: [
                [
                  "돼지고기 없는 메뉴가 있나요?",
                  "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?",
                  "Do you have a menu without pork?",
                  "할랄 · 돼지고기 제외가 필요할 때"
                ],
                ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "Where is the prayer room?", "공항 · 쇼핑몰 안내데스크에서"]
              ]
            },
            {
              id: "during-korean-health",
              title: "병원",
              items: [
                ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "I want to go to a hospital.", "숙소 · 안내소 직원에게"],
                ["많이 아파요.", "ma-ni a-pa-yo.", "It hurts a lot. / I feel very sick.", "아픈 곳을 가리키며"]
              ]
            },
            {
              id: "during-korean-pharmacy",
              title: "약국",
              items: [
                ["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "I need cold medicine.", "약국에서"],
                ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "I need headache medicine.", "약국에서"]
              ]
            },
            {
              id: "during-korean-sos",
              title: "긴급상황",
              items: [
                ["도와주세요.", "do-wa-ju-se-yo.", "Please help me.", "주변 사람에게 크게"],
                ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "Please call 119.", "주변 사람에게 부탁할 때"]
              ]
            }
          ] }
        ],
        tips: [
          "여러 상황에서 활용할 수 있는 표현: '~주세요'.",
          "인원수는 손가락으로 표시해 전달 가능."
        ],
        links: [ { href: "papago", label: "Papago 번역" } ],
        next: ["#tips-food", "다음 단계: 맛집 · 팝업 · 예약 찾기"]
      }
    ]
  },

  /* ---------------- 03 TRAVEL TIPS ---------------- */
  tips: {
    title: "맛집부터 문화체험까지,\n현지 정보 찾는 법",
    intro: "자주 바뀌는 맛집 · 행사 정보를 직접 찾는 방법과 외국인 여행자를 위한 방문 전 확인 사항.",
    cards: [
      {
        id: "tips-food", num: "3-1", short: "맛집", title: "맛집 찾는 방법",
        lead: "NAVER Map에서 지금 인기 있는 맛집을 직접 찾는 방법.",
        top: [
          {
            type: "search",
            title: "STEP 1 · 지역 + 먹고 싶은 음식으로 검색",
            items: ["성수 파스타", "홍대 한식", "종로 삼겹살"],
            caption: "검색어를 누르면 네이버지도 검색 결과로 이동. '여행지 이름 + 먹고 싶은 음식'으로 바꿔 검색 가능."
          },
          {
            type: "tipgrid",
            id: "tips-food-diet",
            title: "식습관이 있다면 함께 확인",
            items: [
              {
                tone: "veg",
                icon: "leaf",
                label: "VEGETARIAN TIP",
                title: "채식주의자라면",
                text: "'비건 식당' · '채식 식당'으로 검색. NAVER Map에서 지역 이름과 함께 '비건' · '채식' 키워드를 넣으면 관련 식당 찾기가 쉬워짐.",
                search: ["성수 비건 식당", "홍대 채식 식당", "비건", "채식"],
                phrases: [
                  ["채식 메뉴가 있나요?", "chae-sik me-nyu-ga in-na-yo?", "Do you have vegetarian dishes?"],
                  [
                    "고기나 생선이 들어가지 않은 메뉴가 있나요?",
                    "go-gi-na saeng-seo-ni deu-reo-ga-ji a-neun me-nyu-ga in-na-yo?",
                    "Is there a dish without meat or fish?"
                  ]
                ],
                note: "채소 요리라도 육수 · 젓갈 등에 고기 · 해산물이 들어갈 수 있음.",
                go: ["#during-korean-food", "음식 주문 한국어 더 보기"]
              },
              {
                tone: "muslim",
                icon: "moon",
                label: "MUSLIM TRAVELER TIP",
                title: "할랄 음식이 필요하거나 돼지고기를 먹지 않는다면",
                text: "'할랄' · 'Muslim Friendly' · '돼지고기 없는 메뉴' 등의 키워드 확인. 식당마다 할랄 인증 여부가 다르므로 방문 전 공식 정보나 식당 안내 확인.",
                search: ["할랄", "Muslim Friendly", "이태원 할랄"],
                phrases: [["돼지고기 없는 메뉴가 있나요?", "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?", "Do you have a menu without pork?"]],
                note: "한국관광공사 기준 'Muslim Friendly' · 'Pork Free' 식당은 주류를 판매할 수 있음.",
                link: { url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", label: "VISITKOREA 무슬림 친화 식당" },
                go: ["#during-prayer", "기도 공간 찾는 방법 보기"]
              },
              {
                tone: "allergy",
                icon: "alert",
                label: "ALLERGY TIP",
                title: "음식 알레르기가 있다면",
                text: "메뉴 사진만 보고 판단하지 말고 직원에게 재료 확인. 피해야 할 재료의 한국어 이름을 미리 메모해 두었다가 함께 보여 주기.",
                phrases: [
                  ["이 음식에 땅콩이 들어가나요?", "i eum-si-ge ttang-kong-i deu-reo-ga-na-yo?", "Does this dish contain peanuts?"],
                  ["이 음식에 돼지고기가 들어가나요?", "i eum-si-ge dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Does this dish contain pork?"]
                ],
                note: "'땅콩' 자리에 피해야 할 재료 이름을 바꿔 보여 주기 (예: 새우, 우유, 달걀, 밀가루).",
                go: ["#help-food", "알레르기 대처 방법 자세히"]
              }
            ]
          }
        ],
        blocks: [
          { type: "steps", start: 1, items: [
            { t: "리뷰와 사진 보기", d: "리뷰 수와 최근 작성일을 살펴보고, 방문자 사진으로 실제 메뉴 확인." },
            { t: "영업 정보 확인", d: "영업시간 · 휴무일 · 오후 브레이크타임 확인." },
            { t: "웨이팅 · 예약 확인 후 출발", d: "'예약' 버튼이 있으면 네이버 예약 가능. 대기가 긴 곳은 일찍 방문.", go: ["#tips-reserve", "예약 방법 보기"] }
          ] },
          { type: "checklist", title: "가기 전에 확인할 것", items: ["리뷰", "영업시간", "메뉴", "사진", "위치", "휴무일", "웨이팅 여부"] }
        ],
        tips: [
          "매장은 폐업하거나 운영 정보가 바뀔 수 있으므로, 방문 전 직접 검색해 최신 정보 확인.",
          "고깃집은 2인분부터 주문받는 곳이 많음.",
          "혼자 식사하기 어려운 곳도 있으므로 리뷰에서 '1인'으로 검색."
        ],
        links: [ { href: "naver", label: "네이버지도" } ],
        next: ["#tips-cafe", "카페 찾기"]
      },
      {
        id: "tips-cafe", num: "3-2", short: "카페", title: "카페 찾는 방법",
        lead: "사진과 분위기로 고르는 카페. 지도와 Instagram을 함께 활용해 방문할 곳 찾기.",
        blocks: [
          { type: "steps", items: [
            { t: "NAVER Map에서 '지역명 + 카페' 검색", d: "사진 탭에서 매장 분위기 먼저 확인." },
            { t: "Instagram에서 해시태그 검색", d: "#성수카페 등 한국어 해시태그로 최근 방문 사진 찾기." },
            { t: "운영시간 · 휴무일 확인", d: "휴무일이 바뀔 수 있으므로 방문 전 매장 Instagram 공지 확인." },
            { t: "이용 규칙 확인", d: "1인 1음료 · 이용 시간 제한 · 사진 촬영 규칙 확인." }
          ] },
          { type: "search", title: "검색 예시", items: ["성수 카페", "익선동 카페", "안목해변 카페"] }
        ],
        tips: [
          "한국 카페는 대체로 '1인 1음료'가 기본.",
          "매장에 따라 촬영 제한이 있을 수 있음. 촬영 가능 여부를 확인하고 다른 손님이 나오지 않도록 주의.",
          "인기 카페는 주말 오후에 자리가 없을 수 있음. 오전이 여유로움."
        ],
        next: ["#tips-popup", "팝업스토어 찾기"]
      },
      {
        id: "tips-popup", num: "3-3", short: "팝업", title: "팝업스토어 찾는 방법",
        lead: "운영 기간이 짧은 팝업스토어. 정보를 찾는 경로와 방문 전 확인 사항 안내.",
        blocks: [
          { type: "steps", title: "어디서 찾을까?", items: [
            { t: "브랜드 Instagram · X", d: "오픈 일정 · 예약 링크 · 굿즈 소식을 가장 먼저 확인할 수 있는 채널." },
            { t: "공식 홈페이지", d: "예약 페이지와 유의사항 재확인." },
            { t: "NAVER 검색", d: "'브랜드명 + 팝업'으로 검색해 위치와 방문 후기 확인." },
            { t: "POPGA 등 팝업 정보 플랫폼", d: "현재 운영 중인 팝업을 지역 · 날짜별로 검색 가능. 일부 팝업은 원격 웨이팅도 지원." }
          ] },
          { type: "checklist", title: "방문 전 체크리스트", items: ["운영기간", "운영시간", "위치", "예약 필요 여부", "사전예약 / 현장입장", "웨이팅", "한국 전화번호 필요 여부", "신분증", "외국인 참여 가능 여부", "굿즈 구매조건"] },
          {
            type: "tipbox",
            icon: "popup",
            situation: "현장에 갔더니 예약자만 입장 가능하다면?",
            text: "일부 팝업은 사전예약이나 한국 전화번호가 필요할 수 있음. 방문 전 공식 SNS에서 예약 여부와 현장 입장 가능 여부 확인.",
            phrases: [["현장 입장 가능해요?", "hyeon-jang ip-jang ga-neung-hae-yo?", "Can I enter without a reservation?"]],
            go: ["#help-reservation", "한국 번호가 없어 예약이 막힐 때"]
          }
        ],
        tips: [
          "사전예약에 한국 휴대폰 본인인증이 필요하면 외국인은 예약이 어려울 수 있음. 별도 현장입장 시간 확인.",
          "인기 팝업은 특히 오픈 첫 주말 혼잡에 유의.",
          "굿즈는 1인당 구매 수량 제한이 있는 경우가 많음."
        ],
        real: [ "팝업스토어는 그냥 방문하면 되는 줄 알았으나 사전예약이 필요한 경우가 있었음." ],
        links: [ { href: "popga", label: "POPGA (팝가)" } ],
        next: ["#tips-culture", "전시 · 공연 · 축제 찾기"]
      },
      {
        id: "tips-culture", num: "3-4", short: "전시 · 공연 · 축제", title: "전시 · 공연 · 축제 찾는 방법",
        lead: "공식 채널에서 전시 · 공연 · 축제 정보를 찾는 방법.",
        blocks: [
          { type: "steps", title: "어디서 확인할까?", items: [
            { t: "공식 홈페이지 · 공식 SNS", d: "날짜 · 시간 · 가격은 행사 공식 채널에서 확인." },
            { t: "서울시 문화행사 사이트", d: "서울문화포털에서 서울의 공연 · 전시 · 축제를 날짜별로 검색." },
            { t: "VISITKOREA · Visit Seoul", d: "외국어로 축제 · 행사 정보를 제공하는 공식 관광 사이트." },
            { t: "공연 · 전시 공식 예매 사이트", d: "NOL World (구 인터파크 글로벌) 등 외국어 지원 예매처 활용." }
          ] },
          { type: "checklist", title: "확인할 것", items: ["날짜", "시간", "예약", "가격", "입장마감", "외국인 참여 가능 여부"] }
        ],
        tips: [
          "무료 축제라도 일부 프로그램은 사전 신청 필요.",
          "비가 오면 야외 행사가 취소되거나 변경될 수 있으므로 당일 아침 공식 SNS 확인."
        ],
        links: [ { href: "culture", label: "서울문화포털 (서울시 문화행사)" }, { href: "visitkorea", label: "VISITKOREA" }, { href: "visitseoul", label: "Visit Seoul" }, { href: "nolworld", label: "NOL World (외국인 티켓 예매)" } ],
        next: ["#tips-kpop", "K-POP 행사 찾기"]
      },
      {
        id: "tips-kpop", num: "3-5", short: "K-POP", title: "K-POP 행사 찾는 방법",
        lead: "K-POP 행사 정보 검색부터 참여 조건 확인까지.",
        blocks: [
          { type: "steps", title: "어디서 찾을까?", items: [
            { t: "아티스트 공식 X", d: "일정 공지를 빠르게 확인할 수 있는 채널." },
            { t: "Instagram", d: "현장 사진 · 이벤트 소식 확인." },
            { t: "소속사 공지", d: "공연 · 팬미팅 공식 안내와 유의사항 확인." },
            { t: "Weverse", d: "팬 커뮤니티 · 멤버십 공지 확인." },
            { t: "팬클럽 공지", d: "선예매 · 멤버십 인증 일정 확인." },
            { t: "브랜드 공식 계정", d: "광고 모델 이벤트 · 콜라보 팝업 소식 확인." }
          ] },
          { type: "checklist", title: "참여 조건 확인", items: ["사전 신청", "팬클럽 가입", "본인인증", "신분증", "입장시간", "외국인 참여조건"] }
        ],
        tips: [
          "예매자와 실제 관람자 정보 일치 필요. 입장 시 신분증을 확인하는 경우가 많으므로 외국인은 여권 준비.",
          "국내 · 글로벌 멤버십의 선예매 일정이 다를 수 있으므로 구분해 확인.",
          "공지 시간은 한국 시간(KST) 기준. 현재 체류 국가의 시간으로 환산해 알람 설정.",
          "공식 판매처가 아닌 곳에서 산 티켓은 입장이 거부될 수 있음."
        ],
        links: [ { href: "weverse", label: "Weverse" }, { href: "nolworld", label: "NOL World" } ],
        next: ["#tips-reserve", "예약 방법"]
      },
      {
        id: "tips-reserve", num: "3-6", short: "예약", title: "예약 방법",
        lead: "한국에서 자주 이용하는 다섯 가지 예약 방식과 단계별 이용 순서.",
        blocks: [
          { type: "accordion", items: [
            { title: "네이버 예약", sub: "식당 · 카페 · 체험", lead: "NAVER Map 장소 페이지에 '예약' 버튼이 있으면 이용 가능.", steps: ["NAVER Map에서 장소 검색", "'예약' 버튼 누르기", "날짜 · 시간 · 인원 선택", "네이버 로그인 후 예약 신청", "확정 알림 확인 (방문 당일 다시 확인)"], note: "네이버 계정 필요. 가입이 어렵다면 전화 · 현장 · 다른 앱을 통한 예약 가능 여부 확인." },
            { title: "팝업 사전예약", sub: "브랜드 팝업스토어", steps: ["브랜드 Instagram · 공지에서 예약 링크 확인", "오픈 시간에 맞춰 예약 페이지 접속", "날짜 · 입장 시간 선택", "본인인증 · 정보 입력", "입장 QR이나 문자를 저장하고 시간 맞춰 방문"], note: "예약 오픈 시간은 한국 시간 기준. 한국 번호 인증이 필요하면 현장입장 가능 여부 확인." },
            { title: "공연 예약", sub: "콘서트 · 뮤지컬 · 전시", steps: ["공식 예매처 확인 (외국인은 NOL World 등)", "미리 회원가입 · 로그인", "날짜 · 좌석 선택 후 결제", "모바일 티켓 또는 현장 수령 확인", "공연 당일 여권 등 신분증 챙기기"], link: { href: "nolworld", label: "NOL World" } },
            { title: "식당 예약", sub: "레스토랑 · 인기 맛집", steps: ["NAVER Map 장소 페이지에서 '예약' 버튼 확인", "외국인은 캐치테이블 글로벌 (Catchtable Global) 앱 이용도 가능.", "날짜 · 인원 선택, 필요하면 예약금 결제", "예약 시간 10분 전 도착"], note: "캐치테이블 글로벌은 한국 번호 없이 이메일로 가입 가능." },
            { title: "현장 웨이팅", sub: "줄 서는 맛집 · 카페 · 팝업", steps: ["매장 앞 웨이팅 기기에 등록", "호출되면 입장"], note: "자세한 등록 순서는 아래 '현장 웨이팅'에서 확인." }
          ] },
          {
            type: "tipbox",
            icon: "phone",
            situation: "예약 화면에서 한국 전화번호를 요구한다면?",
            text: "일부 예약 서비스는 한국 전화번호를 요구할 수 있음. 한국 번호가 없다면 외국인 예약 가능 여부(캐치테이블 글로벌 등) 또는 현장 예약 · 웨이팅 가능 여부를 먼저 확인.",
            phrases: [
              [
                "한국 전화번호가 없어요. 다른 방법이 있나요?",
                "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?",
                "I don't have a Korean phone number. Is there another way?"
              ]
            ],
            go: ["#help-reservation", "예약이 안 될 때 해결 방법"]
          }
        ],
        tips: [
          "노쇼 시 예약금 손실이나 이용 제한이 생길 수 있으므로 방문이 어려우면 예약 취소.",
          "예약 확정 화면은 캡처해 저장. 데이터 연결 없이도 직원에게 제시 가능."
        ],
        next: ["#tips-waiting", "현장 웨이팅"]
      },
      {
        id: "tips-waiting", num: "3-7", short: "웨이팅", title: "현장 웨이팅",
        lead: "인기 식당 · 카페 · 팝업 앞의 웨이팅 기기(태블릿)로 대기 등록. 아래 순서에 따라 진행.",
        blocks: [
          { type: "steps", items: [
            { t: "매장 도착" },
            { t: "웨이팅 기기 확인", d: "입구 근처 태블릿 확인. 기기가 없으면 직원에게 문의." },
            { t: "인원 입력" },
            { t: "전화번호 입력", d: "입장 순서가 되면 입력한 전화번호로 알림 수신." },
            { t: "대기번호 확인", d: "화면에 표시된 대기번호를 캡처해 저장." },
            { t: "호출 확인", d: "알림톡 · 문자 수신 후 바로 매장으로 이동." },
            { t: "입장" }
          ] },
          { type: "phrases", groups: [
            { title: "상황별 회화 예문", items: [
              ["전화번호가 없어요.", "jeon-hwa-beon-ho-ga eop-seo-yo.", "I don't have a Korean phone number.", "웨이팅 기기 앞에서"],
              ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "줄이 보일 때"]
            ] }
          ] }
        ],
        tips: [
          "한국 전화번호가 없다면 이름으로 대기 등록이 가능한지 직원에게 문의.",
          "호출 후 정해진 시간 안에 안 가면 순서가 넘어갈 수 있음.",
          "캐치테이블 · POPGA 등에서 원격 웨이팅을 지원하는 매장은 도착 전 대기 등록 가능."
        ],
        next: ["#where", "다음 단계: 여행지 고르기"]
      }
    ]
  },

  /* ---------------- 04 WHERE TO GO ---------------- */
  where: {
    title: "나에게 맞는 여행지,\n선택부터 비교까지",
    intro: "렌터카 없이 대중교통으로 갈 수 있는 서울 · 근교 9곳. 질문 4개로 TOP 3 추천부터 여행지 비교, 상세 코스 확인까지.",
    why: "여행 기간과 취향에 맞는 여행지를 스스로 고를 수 있도록 돕는 여행 결정 가이드.",
    note: "이동시간과 요금은 2026년 10월 평일, 성인 일반실 기준. 출발 시각과 열차 종류에 따라 달라지므로 출발 전 코레일이나 지도 앱에서 확인."
  }
};
