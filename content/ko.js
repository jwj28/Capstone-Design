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
    footerTag: "한국 여행, 준비부터 귀국까지 함께해요.",
    footerNote: "외국인을 위한 한국 여행 과정 가이드 · 정보 기준 2026년 11월",
    app: { use: "주요 용도", lang: "외국어", signup: "회원가입", phone: "한국 번호", when: "이럴 때", open: "공식 사이트" },
    where: {
      listHead: "여행지 9곳",
      listSub: "여행 기간별로 모은 추천 여행지예요. 마음에 드는 곳은 '비교 담기'로 나란히 비교할 수 있어요.",
      groups: ["당일치기", "1박 2일", "2박 3일"],
      detail: "상세보기",
      add: "비교 담기",
      added: "담김",
      remove: "비교에서 빼기",
      cmpHead: "여행지 비교하기",
      cmpSub: "여행지 2~3곳을 한눈에 비교",
      cmpHint: "여행지 카드나 Trip Finder 결과에서 '비교 담기'로 2~3곳을 고르면 아래에 비교표가 나와요.",
      cmpNow: "지금 담은 곳:",
      cmpFull: "최대 3곳까지 비교할 수 있어요. 새 여행지를 담으려면 기존 선택 중 한 곳을 빼고 추가하세요.",
      cmpClear: "비교 비우기",
      rows: { duration: "여행기간", time: "이동시간", transport: "이동수단", theme: "테마", sights: "대표 관광지", experience: "체험", access: "교통 편의성", style: "여행스타일" },
      hour: "시간",
      min: "분"
    },
    place: {
      back: "← 여행지 목록",
      basicSub: "떠나기 전 기본 정보",
      period: "추천 기간",
      time: "이동 시간",
      transport: "교통수단",
      fare: "편도 요금",
      difficulty: "현지 이동 난이도",
      theme: "테마",
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
      vlogPending: "추천 Vlog를 고르는 중이에요. YouTube 검색으로 여행지 분위기를 먼저 살펴보세요.",
      korail: "코레일 기차 예매",
      finder: "다른 여행지 추천받기",
      more: "다른 여행지"
    }
  },
  home: {
    eyebrow: "KOREA TRAVEL GUIDE",
    title: "한국 여행 중\n막혔나요?",
    sub: "지금 필요한 정보를 바로 찾아보세요.\n고민을 적으면 바로 쓸 수 있는 서비스 · 검색어 · 한국어를 알려 드려요.",
    ctaStart: "여행 준비 시작하기",
    ctaFinder: "나에게 맞는 여행지 찾기",
    guideHead: "현재 여행 단계 선택",
    guideSub: "여행 순서에 맞춘 단계별 안내",
    cards: {
      before: { title: "여행 전", desc: "일정 짜기, 필수 앱, 교통카드까지. 떠나기 전에 준비할 것을 모았어요." },
      during: { title: "여행 중 도움", desc: "지하철 · 버스 · 택시 타는 법, 급할 때 SOS, 현장 한국어를 모았어요." },
      tips: { title: "여행 TIP", desc: "맛집 · 카페 · 팝업 · 공연을 찾는 법과 예약 · 웨이팅까지 알려 드려요." },
      where: { title: "여행지", desc: "질문 4개로 TOP 3를 추천해요. 여행지 비교부터 상세 코스까지 볼 수 있어요." }
    },
    journey: {
      eyebrow: "FROM ARRIVAL TO DEPARTURE",
      head: "한국 여행, 처음부터 끝까지 서울착륙과 함께",
      sub: "입국부터 출국까지. 지금 여행 단계를 누르면 필요한 안내로 바로 가요.",
      steps: [
        {
          en: "ARRIVAL",
          t: "한국 도착 직후",
          d: "SIM · 인터넷 · 교통카드부터",
          href: "#help-arrival",
          icon: "plane",
          links: [["#help-arrival", "공항에서 시내 가기"], ["#help-connection", "SIM/eSIM 확인"], ["#before-card", "교통카드 준비"], ["#help-payment", "현금이 필요할 때"]]
        },
        {
          en: "PREPARE",
          t: "여행을 시작하기 전에",
          d: "앱 설치 · 충전 · 휴무일 확인",
          href: "#before",
          icon: "card",
          links: [
            ["#before-apps", "NAVER Map 설치"],
            ["#before-apps", "Papago 설치"],
            ["#before-card", "교통카드 충전"],
            ["#before-plan", "오늘 일정 · 휴무일"],
            ["#before-plan", "마지막 입장시간"]
          ]
        },
        {
          en: "MOVE",
          t: "실제 이동",
          d: "지하철 · 버스 · 택시 · 기차",
          href: "#during",
          icon: "subway",
          links: [["#during-subway", "지하철"], ["#during-bus", "버스"], ["#during-taxi", "택시"], ["#before-plan-holiday", "기차 예매"]]
        },
        {
          en: "DISCOVER",
          t: "무엇을 할지 찾기",
          d: "맛집 · 팝업 · 전시 · K-POP",
          href: "#tips",
          icon: "compass",
          links: [["#tips-food", "맛집"], ["#tips-cafe", "카페"], ["#tips-popup", "팝업"], ["#tips-culture", "전시 · 공연"], ["#tips-kpop", "K-POP 행사"]]
        },
        {
          en: "EXPERIENCE",
          t: "실제로 참여하기",
          d: "예약 · 웨이팅 · 입장 조건",
          href: "#tips-culture",
          icon: "ticket",
          links: [["#tips-reserve", "예약"], ["#tips-waiting", "웨이팅"], ["#tips-popup", "입장 조건"], ["#tips-kpop", "신분증"], ["#help-connection", "전화번호 인증"]]
        },
        {
          en: "HELP",
          t: "문제가 생겼다면",
          d: "병원 · 분실 · 짐 · 통역",
          href: "#home-help",
          icon: "lifebuoy",
          links: [
            ["#during-health", "병원 · 약국"],
            ["#during-sos", "119"],
            ["#help-lost", "분실물 · 여권"],
            ["#help-stay", "짐 보관"],
            ["#during-korean", "여행 한국어"],
            ["#during-sos-1330", "1330 통역"]
          ]
        },
        {
          en: "DEPARTURE",
          t: "출국 전",
          d: "공항 · 환급 · 잔액 정리",
          href: "#help-departure",
          icon: "takeoff",
          links: [
            ["#help-departure", "공항 이동시간"],
            ["#help-departure", "공항철도 · 버스 막차"],
            ["#help-departure", "Tax Refund · 수하물"],
            ["#before-card", "교통카드 잔액"],
            ["#help-connection", "SIM/eSIM 종료"]
          ]
        }
      ]
    },
    flowHead: "서울착륙, 이렇게 따라가기",
    flowSub: "한국에 도착한 날부터 떠나는 날까지, 실제 여행 순서대로",
    flow: [
      ["before", "한국 입국", "#help-entry", "입국 서류 · 공항 도착"],
      ["before", "SIM · 인터넷 준비", "#help-connection", "데이터와 문자 인증은 따로 확인해요"],
      ["before", "교통카드 구입", "#before-card", "편의점에서 T-money · EZL"],
      ["during", "지하철 이용", "#during-subway", "카드 태그, 환승, 출구 번호"],
      ["where", "여행지 이동", "#where", "Trip Finder로 고르고 코스 따라 걷기"],
      ["tips", "맛집 검색", "#tips-food", "'지역 + 음식'으로 검색"],
      ["tips", "채식이라면 비건 식당 검색 TIP", "#tips-food-diet", "채식 · 할랄 · 알레르기 TIP"],
      ["tips", "팝업 발견", "#tips-popup", "예약이 필요한지부터 확인해요"],
      ["tips", "예약 · 웨이팅", "#tips-reserve", "한국 번호가 없을 때 방법까지"],
      ["during", "기도 공간 찾기", "#during-prayer", "Prayer Room 찾는 방법"],
      ["during", "몸이 아플 때", "#during-health", "약국 · 병원 · 119 중에서 골라요"],
      ["where", "출국 준비", "#help-departure", "짐 · Tax Refund · 공항 이동"]
    ],
    flowSum: ["입국", "준비", "이동", "탐색", "체험", "문제 해결", "출국"]
  },
  /* ---------------- 01 BEFORE TRIP ---------------- */
  before: {
    title: "떠나기 전\n필수 준비 사항",
    intro: "일정 짜기, 필수 앱 설치, 교통카드 구매까지. 도착 첫날부터 바로 움직일 수 있게 준비해요.",
    cards: [
      {
        id: "before-plan",
        num: "1-1",
        short: "일정 짜기",
        title: "여행 일정 짜는 방법",
        lead: "기간과 테마부터 정한 뒤, 가고 싶은 곳을 골라 일정을 짜요.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "여행 기간 정하기", d: "당일치기, 1박 2일, 2박 3일 중 여행 기간부터 고르세요. 기간에 맞춰 갈 수 있는 거리가 정해져요." },
              { t: "여행 테마 고르기", d: "자연 · 역사 · 체험 · 카페 중 이번 여행에서 가장 하고 싶은 걸 고르세요." },
              {
                t: "여행 지역 고르기",
                d: "기간과 테마에 맞는 지역을 고르세요. 고민되면 Trip Finder로 TOP 3를 추천받을 수 있어요.",
                go: ["#where-finder", "Trip Finder 열기"]
              },
              { t: "이동시간 확인하기", d: "NAVER Map에서 출발지 → 목적지 대중교통 이동시간을 확인하세요. 돌아오는 시간까지 함께 계산해요." },
              { t: "가까운 곳끼리 묶기", d: "가까운 관광지끼리 묶어서 하루 동선을 짜요. 같은 날 반대 방향을 오가는 일정은 피하세요." },
              { t: "영업시간 · 휴무일 확인하기", d: "박물관은 월요일 휴관인지, 식당은 오후 브레이크타임이 있는지까지 확인하세요." },
              { t: "비 오는 날 대체 일정 준비하기", d: "박물관 · 시장 · 카페처럼 실내에서 즐길 곳을 한두 곳 미리 골라 두세요." }
            ]
          },
          {
            type: "checklist",
            title: "여행 전날 꼭 확인하세요",
            items: ["정기 휴관 (월요일 등)", "브레이크타임", "마지막 입장시간", "사전예약 필요 여부", "막차시간", "비 · 폭염 · 한파"]
          },
          {
            type: "keyset",
            title: "날씨 때문에 일정이 틀어졌다면",
            items: [["비 오는 날", "서울 비 오는 날 갈 만한 곳", "서울 실내 데이트", "서울 실내 전시"], ["폭염", "서울 실내 관광지", "서울 박물관", "서울 쇼핑몰"], ["한파", "서울 실내 관광지", "서울 실내 체험", "서울 박물관"]],
            caption: "한파에는 야외 일정을 줄이고 박물관 · 전시 · 쇼핑몰 중심으로 바꿔 보세요."
          },
          {
            type: "playbook",
            id: "before-plan-holiday",
            situation: "설날 · 추석 같은 큰 명절에 여행해요.",
            fast: ["korail"],
            search: {
              naver: ["설 연휴 영업하는 식당", "추석 연휴 서울 가볼 만한 곳", "명절 연휴 문 여는 곳"],
              google: ["Korea public holidays", "Chuseok Seollal closures Seoul"]
            },
            check: ["일부 식당 · 상점 휴무", "기차표 조기 매진", "장거리 교통 혼잡"],
            note: "명절 날짜는 해마다 달라요. 여행 날짜와 겹치는지 먼저 확인하세요."
          }
        ],
        tips: ["이동이 많은 날과 쉬는 날을 번갈아 두면 덜 지쳐요.", "KTX · ITX · 무궁화는 주말에 매진되기 쉬워요. 날짜가 정해지면 미리 예매하세요.", "길을 찾을 때 쓸 수 있게 일정표에 역의 한국어 이름도 함께 적어 두세요."],
        links: [
          { href: "visitkorea", label: "VISITKOREA (한국관광공사)" },
          { href: "korail", label: "코레일 기차 예매" }
        ],
        next: ["#before-apps", "여행 전 필수 앱 깔기"],
        top: [
          {
            type: "routes",
            title: "서울 하루 동선 예시",
            lead: "기간 · 지역 고르는 법보다 중요한 건 하루 동선이에요. 가까운 곳끼리 묶어서 다니세요. 하루에 서울을 가로지르지 마세요.",
            bad: {
              title: "비추천 · 하루에 서울 한 바퀴",
              stops: ["경복궁", "성수", "홍대", "잠실"],
              note: "이동에만 몇 시간을 쓰게 돼요. 같은 권역끼리 묶는 게 좋아요."
            },
            good: [
              {
                title: "전통 서울",
                stops: ["경복궁", "북촌", "인사동", "익선동"]
              },
              {
                title: "성수권",
                stops: ["성수", "서울숲", "건대"]
              },
              {
                title: "서북권",
                stops: ["홍대", "연남동", "망원", "한강"]
              }
            ]
          }
        ]
      },
      {
        id: "before-apps",
        num: "1-2",
        short: "필수 앱",
        title: "여행 전 필수 앱",
        lead: "한국에서 길을 찾을 때는 네이버지도 · 카카오맵을 써요. 출발 전에 앱 설치와 언어 설정까지 해 두세요.",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "NAVER Map",
                sub: "네이버지도",
                use: "대중교통 길찾기, 환승, 버스 도착 정보, 도보 경로, 음식점 · 카페 검색",
                lang: "한국어 · English · 中文 · 日本語",
                signup: "길찾기 · 검색은 가입 없이 돼요 (저장 · 리뷰는 네이버 계정 필요)",
                phone: "필요 없음",
                when: "목적지까지 가는 법, 근처 맛집 찾기",
                tip: "장소는 한국어 이름으로 검색하세요. 서울착륙의 '복사' 버튼을 쓰면 편해요.",
                href: "naver"
              },
              {
                name: "KakaoMap",
                sub: "카카오맵",
                use: "버스 · 지하철 · 도보 길찾기, 실시간 버스 위치, 지하철 도착 정보",
                lang: "한국어 중심",
                signup: "기본 기능은 가입 없이 써요",
                phone: "필요 없음",
                when: "버스가 지금 어디쯤 오는지 볼 때",
                tip: "네이버지도와 함께 설치해서 이동 경로를 비교해 보세요.",
                href: "kakao"
              },
              {
                name: "Papago",
                sub: "파파고",
                use: "글자 · 음성 · 사진(메뉴판) · 대화 번역",
                lang: "한국어 ↔ English · 中文 · 日本語 등",
                signup: "필요 없음",
                phone: "필요 없음",
                when: "메뉴판 읽기, 직원에게 물어보기",
                tip: "카메라로 메뉴판을 찍으면 바로 번역돼요.",
                href: "papago"
              },
              {
                name: "Korail",
                sub: "코레일 · 레츠코레일",
                use: "KTX · ITX · 무궁화 등 기차표 예매, 시간표 확인",
                lang: "외국어 예매 페이지: English · 中文 · 日本語",
                signup: "회원 또는 비회원 예매",
                phone: "한국 앱(코레일톡)은 본인인증이 필요할 수 있어요.",
                when: "근교 여행 기차표를 살 때",
                tip: "외국어로 기차를 예매하려면 레츠코레일 외국어 페이지를 쓰세요. 경의중앙선 · 경강선 · 1호선 같은 수도권 전철은 예매 없이 교통카드로 탈 수 있어요.",
                href: "korail"
              },
              {
                name: "VISITKOREA",
                sub: "한국관광공사",
                use: "공식 관광 정보, 축제 · 행사 일정, 1330 관광통역 채팅",
                lang: "English · 中文 · 日本語 등",
                signup: "필요 없음",
                phone: "필요 없음",
                when: "공식 정보를 다시 확인하거나 통역이 필요할 때",
                tip: "1330은 전화 말고도 앱 · 웹 채팅으로 물어볼 수 있어요.",
                href: "visitkorea"
              }
            ],
            caption: "2026년 11월 기준이에요. 앱 정책은 바뀔 수 있어요."
          }
        ],
        tips: ["지도 · 번역 앱을 쓰려면 데이터가 필요해요. 공항에서 eSIM · 유심 · 포켓와이파이 중 하나를 고르세요.", "택시 앱(k.ride · Uber · Kakao T) 안내는 '여행 중 → 택시'에서 볼 수 있어요."],
        next: ["#before-card", "교통카드 사기"]
      },
      {
        id: "before-card",
        num: "1-3",
        short: "교통카드",
        title: "교통카드 가이드",
        lead: "교통카드 한 장으로 버스와 지하철을 탈 수 있어요. 구매부터 충전, 사용, 잔액 처리까지 차례대로 알려 드려요.",
        blocks: [
          {
            type: "defs",
            title: "어떤 카드를 살까?",
            items: [
              ["T-money (티머니)", "가장 널리 쓰이는 선불 교통카드예요. 전국 버스 · 지하철과 일부 택시에서 쓸 수 있어요.", "assets/cards/tmoney.jpg"],
              ["EZL (구 Cashbee/캐시비)", "티머니와 쓰는 방법이 같은 선불 교통카드예요. 예전 이름인 '캐시비'로 적힌 안내도 있어요.", "assets/cards/ezl.jpg"]
            ]
          },
          { type: "text", text: "두 카드는 쓰는 방법이 같아요. 편의점에서 파는 카드 중 아무거나 골라 사면 돼요." },
          {
            type: "steps",
            title: "구매 → 충전 → 사용 → 잔액 확인 → 여행 종료",
            items: [
              {
                t: "구매",
                d: "CU · GS25 · 세븐일레븐 같은 편의점이나 지하철역 발매기 · 충전소에서 살 수 있어요. 카드 가격은 디자인마다 달라요.",
                list: ["편의점: 계산대에서 '티머니 카드 주세요'", "지하철역: 교통카드 발매기 · 충전소"]
              },
              {
                t: "충전",
                d: "새 카드는 잔액이 0원이라 쓰기 전에 충전해야 해요. 충전은 대부분 현금으로 해요.",
                list: ["편의점 계산대: 카드와 현금을 내고 '충전해 주세요'", "지하철역 충전기: 카드를 올리고 금액을 고른 뒤 현금을 넣어요.", "앱: 일부 안드로이드폰은 모바일 티머니 · 이즐 앱으로 충전할 수 있어요."]
              },
              {
                t: "사용",
                d: "탈 때와 내릴 때 모두 카드를 태그하세요. 내리고 30분 안에 갈아타면 환승 할인을 받아요.",
                go: ["#during-subway", "지하철 타는 법 보기"]
              },
              {
                t: "잔액 확인",
                list: ["버스 · 지하철 단말기에 카드를 태그하면 잔액이 보여요.", "편의점 계산대에서 물어보기", "지하철역 충전기에 카드 올리기", "티머니 · 이즐 앱 (휴대폰 NFC)"]
              },
              {
                t: "여행이 끝나면 남은 돈은?",
                list: ["환불: 편의점 · 지정 장소에서 남은 금액을 돌려받아요. 티머니는 수수료가 500원이고, 환불되는 금액은 장소마다 달라요.", "보관: 다음 한국 여행 때 다시 쓸 수 있어요.", "전달: 한국에 오는 친구에게 주면 그대로 쓸 수 있어요."]
              }
            ],
            caption: "충전한 잔액만 환불돼요. 카드 구매 비용은 돌려받을 수 없어요."
          },
          {
            type: "tipbox",
            icon: "card",
            situation: "해외에서 발급한 카드로 충전이 안 된다면?",
            text: "교통카드 충전은 현금만 받는 곳이 많아서 해외 카드로는 충전이 안 될 수 있어요. 충전 전에 결제 수단을 확인하고, 필요하면 원화 현금을 준비하세요.",
            go: ["#help-payment", "결제 · 충전 오류 해결 방법"]
          }
        ],
        tips: [
          "타기 전에 잔액을 확인하세요. 내릴 때 잔액이 모자라지 않게 미리 충전해 두세요.",
          "카드 2장이 겹치면 인식 오류가 날 수 있어요. 한 장만 꺼내서 태그하세요.",
          "내릴 때 카드 태그를 빠뜨리면 다음 환승 할인을 못 받아요.",
          "잔액을 많이 남기지 않으려면 여행 기간에 맞춰 조금씩 충전하세요."
        ],
        links: [
          { href: "tmoney", label: "티머니 (T-money)" },
          { href: "ezl", label: "이즐 (EZL)" }
        ],
        next: ["#during-subway", "여행 중: 지하철 타기"]
      }
    ]
  },
  /* ---------------- 02 DURING TRIP ---------------- */
  during: {
    title: "이동 중 필요한 정보,\n휴대폰으로 바로 확인",
    intro: "지하철 · 버스 · 택시 이용 순서부터 SOS 대처법, 현장에서 쓰는 한국어까지 담았어요.",
    cards: [
      {
        id: "during-subway",
        num: "2-1",
        short: "지하철",
        title: "지하철 이용법",
        lead: "탈 때 한 번, 나갈 때 한 번. 교통카드는 두 번 태그해요.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "지하철역 찾기", d: "NAVER Map에서 목적지를 검색하고 '대중교통'을 눌러 탈 역과 노선을 확인하세요." },
              { t: "교통카드 태그", d: "개찰구 단말기에 카드를 태그하고 지나가요." },
              { t: "노선과 방향 확인", d: "노선 색과 번호를 따라가세요. 승강장 표지판에서 '○○ 방면'과 다음 역 이름을 확인해요." },
              { t: "열차 탑승", d: "내리는 사람이 먼저 내린 뒤 타요. 열차 안 화면과 안내 방송으로 다음 역을 확인하세요." },
              { t: "환승", d: "'갈아타는 곳 (Transfer)' 표지판과 갈아탈 노선 색을 따라가세요." },
              { t: "출구번호 확인", d: "지도 앱에서 목적지와 가장 가까운 출구 번호를 확인하고, 역 안 안내판을 따라가세요." },
              { t: "나갈 때 다시 카드 태그", d: "나가는 개찰구에서 카드를 한 번 더 태그하면 요금이 정산돼요." }
            ]
          },
          {
            type: "faq",
            title: "자주 헷갈리는 것",
            items: [
              ["Q. 갈아탈 때 카드를 다시 태그해야 하나요?", "개찰구 안에서 갈아탈 때는 보통 다시 태그하지 않아도 돼요. 다만 운영 회사가 다른 노선 사이에는 환승 통로에 단말기가 있을 수 있어요. 단말기가 보이면 카드를 태그하세요."],
              ["Q. 열차 방향은 어떻게 확인하나요?", "승강장 표지판의 '○○ 방면'과 다음 역 이름을 보세요. 지도 앱 경로와 같은 방향인지 확인한 뒤 타요."],
              ["Q. 목적지와 가까운 출구는 어떻게 찾나요?", "지도 앱 경로에서 '○번 출구'를 확인하세요. 출구가 많은 역은 반대편으로 나가면 한참 돌아가야 해서, 출구 안내판의 주변 건물 이름도 함께 보세요."],
              ["Q. 개찰구가 안 열리거나 경고음이 나면요?", "잔액이 부족하거나 카드 인식 오류일 수 있어요. 역 충전기에서 충전하거나 역 고객안전실에 물어보세요."]
            ]
          },
          {
            type: "tipbox",
            icon: "subway",
            situation: "출구가 10개 넘는 큰 역에서 나가야 한다면?",
            text: "한국 지하철역은 출구가 많은 곳이 있어요. 목적지를 검색할 때 가장 가까운 출구 번호를 함께 확인하고, 역 안에서는 출구 번호 안내판을 따라가세요.",
            phrases: [["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?"]],
            go: ["#during-korean-move", "길 물을 때 쓰는 한국어"]
          },
          {
            type: "playbook",
            id: "during-subway-last",
            situation: "막차 시간이 걱정돼요. 이미 놓쳤다면 어떡하죠?",
            fast: ["navermap_route"],
            stepsTitle: "막차를 이미 놓쳤다면",
            steps: ["NAVER Map에서 심야버스(N버스)를 검색하세요.", "택시 앱에서 예상 요금을 확인하세요.", "숙소까지 가장 안전한 방법을 고르세요."],
            search: {
              naver: ["홍대입구 강남 막차", "강남역 서울역 막차", "서울 심야버스"],
              google: ["Seoul last train time", "Seoul night bus N bus"]
            },
            say: [
              ["막차가 몇 시예요?", "mak-cha-ga myeot si-ye-yo?", "What time is the last train?"],
              ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address."]
            ]
          }
        ],
        tips: ["평일 8~9시 · 18~19시는 붐비는 시간이에요. 큰 짐이 있다면 이 시간대는 피하세요.", "노약자석 · 임산부 배려석은 필요한 분을 위해 비워 두세요.", "막차는 보통 자정 무렵이에요. 늦은 시간에는 지도 앱에서 타는 노선의 막차 시간을 확인하세요."],
        watch: [
          { ref: "V05", title: "영상으로 배우는 한국 대중교통", summary: "실제 버스 · 지하철 탑승 장면으로 교통카드 쓰는 과정을 살펴봐요." }
        ],
        links: [
          { href: "seoulmetro", label: "서울교통공사" }
        ],
        next: ["#during-bus", "버스 타기"]
      },
      {
        id: "during-bus",
        num: "2-2",
        short: "버스",
        title: "버스 이용법",
        lead: "앞문으로 타고 뒷문으로 내려요. 내릴 때도 교통카드를 꼭 태그하세요.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "NAVER Map에서 버스 번호 확인", d: "지도 앱 경로에서 탈 버스 번호와 정류장 이름을 확인하세요." },
              { t: "정류장 확인", d: "같은 이름의 정류장이 길 양쪽에 있을 수 있어요. 안내판의 '다음 정류장'으로 방향을 확인하세요." },
              { t: "앞문으로 탑승", d: "도착한 버스 번호를 한 번 더 확인하고 앞문으로 타요." },
              { t: "교통카드 태그", d: "기사님 옆 단말기에 카드를 태그해요." },
              { t: "현재 위치 확인", d: "차 안 화면 · 안내 방송이나 지도 앱으로 지금 위치를 확인하세요." },
              { t: "목적지 전에 하차벨 누르기", d: "목적지 바로 전 정류장을 지나면 하차벨을 눌러요." },
              { t: "하차 전에 카드 태그", d: "뒷문 근처 단말기에 카드를 태그해요." },
              { t: "뒷문으로 내리기", d: "버스가 완전히 멈춘 뒤 자리에서 일어나 내려요." }
            ]
          },
          {
            type: "warn",
            title: "자주 발생하는 실수",
            items: [
              "내릴 때도 카드를 꼭 태그하세요. 태그하지 않으면 환승 할인을 못 받아요.",
              "목적지 전에 하차벨을 누르세요. 안 누르면 정류장을 그냥 지나칠 수 있어요.",
              "같은 버스 번호라도 가는 방향을 확인하세요.",
              "정류장 위치를 확인하세요. 탈 정류장이 길 건너편일 수 있어요."
            ]
          },
          { type: "tipbox", icon: "bus", situation: "내릴 정류장을 지나칠까 걱정된다면?", text: "버스는 내리기 전에 하차벨을 눌러야 해요. 목적지 바로 전 정류장을 지나면 벨을 누르고, 내릴 때도 교통카드를 태그하세요." }
        ],
        tips: ["현금을 안 받는 버스도 있으니 교통카드를 준비하세요.", "초록색 작은 마을버스는 동네 안 짧은 구간을 다녀요. 성북동처럼 언덕이 많은 곳에서 타기 좋아요."],
        real: ["처음 한국에 왔을 때 버스에서 내리면서도 카드를 찍어야 한다는 걸 몰랐어요."],
        watch: [
          { query: "한국 버스 타는 법 외국인", title: "한국 버스 타는 법 영상 찾아보기", summary: "타기 전에 영상으로 승차 · 하차 과정을 익혀 두면 덜 긴장돼요." }
        ],
        links: [
          { href: "topis", label: "서울시 교통정보 TOPIS" }
        ],
        next: ["#during-taxi", "택시 타기"]
      },
      {
        id: "during-taxi",
        num: "2-3",
        short: "택시",
        title: "택시 이용법",
        lead: "짐이 많거나 늦은 밤에 타기 좋은 택시예요. 앱으로 부르면 목적지를 말로 설명할 필요가 없어요.",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "Kakao T",
                sub: "카카오 T",
                use: "한국에서 가장 많이 쓰는 택시 호출 앱",
                lang: "한국어 중심",
                signup: "카카오 계정 필요",
                phone: "계정 인증 과정에서 필요할 수 있어요.",
                when: "카카오 계정이 있는 유학생",
                tip: "해외 카드 등록이 안 되면 '기사님께 직접 결제'를 고르고 내릴 때 카드로 결제하세요."
              },
              {
                name: "Uber Taxi",
                sub: "우버",
                use: "우버 앱으로 한국 택시 호출",
                lang: "다국어",
                signup: "쓰던 우버 계정 그대로",
                phone: "필요 없음",
                when: "이미 우버를 쓰는 여행자",
                tip: "한국에서 Uber로 부르면 면허가 있는 택시가 배차돼요.",
                href: "uber"
              },
              {
                name: "k.ride",
                sub: "케이라이드",
                use: "카카오모빌리티의 외국인 전용 택시 앱",
                lang: "English · 中文 · 日本語 (기사님과 채팅 자동 번역)",
                signup: "전화번호 + 이메일 · Google · Apple",
                phone: "필요 없음 (해외 번호 가능)",
                when: "한국 번호가 없는 단기 여행자",
                tip: "부를 수 있는 택시 종류가 정해져 있어서 일반 택시보다 요금이 높을 수 있어요."
              }
            ]
          },
          {
            type: "steps",
            title: "이용 순서",
            items: [
              { t: "출발지 입력", d: "지도에서 지금 위치와 출발 지점이 같은지 확인하세요." },
              { t: "목적지 입력", d: "목적지는 한국어 이름이나 주소로 검색하세요." },
              { t: "예상요금 확인" },
              { t: "택시 호출" },
              { t: "차량번호 확인", d: "앱에 표시된 차량번호와 실제 차량번호가 같은지 확인하고 타세요." },
              { t: "탑승", d: "뒷좌석에서도 안전벨트를 매세요." },
              { t: "결제", d: "앱 자동결제로 내거나, 내릴 때 카드 · 교통카드로 결제해요." }
            ]
          },
          {
            type: "tipbox",
            icon: "taxi",
            situation: "기사님과 말이 잘 안 통한다면?",
            text: "기사님과 말이 잘 안 통할 수 있으니 목적지 한국어 주소를 미리 준비하세요. 화면으로 보여 주면 말로 설명하지 않아도 돼요.",
            phrases: [["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address."]]
          }
        ],
        tips: [
          "타기 전에 한국어 주소를 준비하세요. 여행지 페이지의 '복사' 버튼으로 한국어 장소명을 저장할 수 있어요.",
          "타기 전에 앱과 실제 차량번호가 같은지 확인하세요.",
          "앱 자동결제인지 확인하세요. 이미 결제했다면 내릴 때 카드를 또 내지 않게 조심하세요 (중복 결제 방지).",
          "예상 요금을 미리 확인하세요. 밤 10시 이후에는 심야 할증이 붙을 수 있어요."
        ],
        links: [
          { href: "uber", label: "Uber" }
        ],
        next: ["#during-sos", "문제가 생겼을 때"]
      },
      {
        id: "during-sos",
        num: "2-4",
        short: "SOS",
        title: "SOS · 도움이 필요할 때",
        lead: "상황에 맞는 번호를 고르세요. 번호를 누르면 바로 전화가 연결돼요.",
        blocks: [
          {
            type: "sos",
            items: [
              { num: "119", title: "화재 · 구급 (응급)", desc: "다치거나 아플 때, 사고가 났을 때", urgent: true },
              { num: "112", title: "경찰", desc: "범죄 · 위험한 상황, 분실 신고", urgent: true },
              { num: "1330", title: "관광 통역 · 안내", desc: "English · 中文 · 日本語. 길 안내, 통역, 관광 불편 신고를 도와줘요. 운영시간은 공식 안내에서 확인하세요." },
              { num: "02-120", tel: "02120", title: "서울 다산콜센터", desc: "서울 생활 · 교통 문의를 받아요. 외국어는 9번 (평일 9~18시)" }
            ],
            caption: "해외 번호로 1330에 전화할 때는 +82-2-1330. VISITKOREA 앱 · 웹 채팅으로도 이용할 수 있어요."
          },
          {
            type: "playbook",
            id: "during-sos-1330",
            situation: "직원과 말이 안 통하거나, 어디에 물어봐야 할지 모르겠어요.",
            fast: ["k1330", "papago"],
            checkTitle: "이럴 때 1330에 연락하세요",
            check: ["직원과 의사소통이 안 될 때", "관광 정보가 궁금할 때", "여행 중 불편한 일이 생겼을 때", "어디에 문의할지 모를 때"],
            say: [
              [
                "통역 서비스예요. 잠깐 통화해 주시겠어요?",
                "tong-yeok seo-bi-seu-ye-yo. jam-kkan tong-hwa-hae ju-si-ge-sseo-yo?",
                "This is an interpretation service. Could you talk on the phone for a moment?"
              ]
            ],
            fallback: false
          },
          {
            type: "cases",
            title: "상황별 대처 방법",
            items: [
              {
                icon: "taxi",
                title: "택시 이용 중 문제 발생",
                steps: ["영수증이나 앱 이용 기록에서 차량번호와 이용 시간을 확인하세요.", "앱으로 불렀다면 그 앱 고객센터에 먼저 문의하세요.", "요금 문제나 불편한 점은 1330 통역 도움을 받아 신고할 수 있어요."]
              },
              {
                icon: "map",
                title: "길을 잃은 경우",
                steps: ["가까운 역이나 큰 건물 이름을 확인하세요.", "NAVER Map에서 현재 위치를 켜고 목적지를 다시 검색하세요.", "말이 잘 안 통하면 1330에 전화한 뒤 직원 · 기사님께 전화를 건네 통역을 부탁하세요."]
              },
              {
                icon: "card",
                title: "교통카드 인식 불가",
                steps: ["경고음이 나면 역 충전기 · 편의점에서 잔액부터 확인하세요.", "교통카드 2장이 겹쳐 있지 않은지 확인하세요.", "계속 인식이 안 되면 역 고객안전실이나 버스 기사님께 카드를 보여 주고 도움을 요청하세요."]
              },
              {
                icon: "bag",
                title: "물건을 분실한 경우",
                steps: [
                  "지하철: 역 직원에게 바로 알리세요. 내린 시각과 탔던 칸 번호를 함께 말해요.",
                  "버스 · 택시: 서울이라면 120에 전화해 분실물 접수처를 확인하세요.",
                  "경찰민원24에서 습득물 조회와 분실 신고 방법을 확인하세요.",
                  "분실물을 찾으러 갈 때는 여권 같은 신분증을 꼭 챙기세요."
                ],
                link: { href: "lost112", label: "경찰민원24 유실물 안내" }
              }
            ]
          }
        ],
        tips: ["출발 전에 112 · 119 · 1330을 휴대폰 연락처에 저장해 두세요.", "지하철 습득물은 노선별 유실물센터에서 1주일쯤 보관한 뒤 경찰서로 넘어가요. 잃어버린 걸 알았다면 되도록 빨리 문의하세요.", "여권을 잃어버렸다면 112에 신고하고 자국 대사관에 연락하세요."],
        links: [
          { href: "lost112", label: "경찰민원24 유실물 안내" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330" }
        ],
        next: ["#during-health", "아플 때 도움 받기"]
      },
      {
        id: "during-health",
        num: "2-5",
        short: "아플 때",
        kicker: "HEALTH HELP",
        title: "여행 중 아프다면?",
        lead: "지금 상황에 맞는 도움부터 고르세요. 서울착륙은 증상을 진단하지 않고, 어디서 도움을 받을지만 알려 드려요.",
        top: [
          {
            type: "health",
            alert: "심한 부상 · 호흡곤란 · 의식 저하 같은 응급상황이라면 바로 119 (누르면 전화 연결)",
            items: [
              {
                key: "pharmacy",
                icon: "pill",
                label: "PHARMACY",
                title: "약이 필요한 경우",
                text: "가벼운 증상으로 약이 필요하면 가까운 약국을 찾으세요.",
                steps: ["NAVER Map에서 '약국'을 검색해요.", "지금 영업 중인 약국을 확인해요.", "가까운 약국으로 가요."],
                search: ["약국", "야간 약국"],
                phrases: [
                  ["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "I need cold medicine."],
                  ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "I need headache medicine."],
                  ["약국이 어디에 있나요?", "yak-gu-gi eo-di-e in-na-yo?", "Where is the pharmacy?"]
                ],
                kw: {
                  naver: ["명동 현재 영업 중 약국", "홍대 야간 약국"],
                  google: ["pharmacy open now Myeongdong"]
                },
                services: ["egen"]
              },
              {
                key: "hospital",
                icon: "hospital",
                label: "HOSPITAL",
                title: "병원 진료가 필요한 경우",
                text: "병원에 가기 전에 외국인 진료나 외국어 응대가 되는지 확인하는 게 좋아요.",
                steps: ["NAVER Map에서 병원 검색 (예: 내과)", "외국인 진료가 되는지 확인해요.", "영어 등 외국어로 진료받을 수 있는지 확인해요."],
                search: ["내과", "병원"],
                note: "전화로 묻기 어렵다면 1330 관광통역 안내에 통역을 부탁하세요.",
                phrases: [
                  ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "I want to go to a hospital."],
                  ["영어 가능한 직원이 있나요?", "yeong-eo ga-neung-han ji-gwo-ni in-na-yo?", "Is there a staff member who speaks English?"]
                ],
                kw: {
                  naver: ["명동 외국인 진료 병원", "강남 영어 진료 병원"],
                  google: ["English speaking clinic Myeongdong", "international clinic Seoul"]
                },
                services: ["medical_desk"]
              },
              {
                key: "emergency",
                icon: "sos",
                label: "EMERGENCY",
                title: "응급상황",
                num: "119",
                call: "Emergency Help",
                sub: "누르면 바로 전화 연결",
                text: "심한 부상, 호흡곤란, 의식 저하처럼 바로 도움이 필요한 응급상황에는 119에 연락하세요.",
                note: "119 구급차는 무료이고 외국어 통역도 지원해요. 지금 위치(주변 건물 · 역 이름)부터 말하세요.",
                phrases: [["도와주세요.", "do-wa-ju-se-yo.", "Please help me."], ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "Please call 119."]]
              }
            ],
            caption: "약과 진료에 관한 판단은 약사 · 의사에게 맡기세요. 이 안내는 도움받을 곳을 찾기 위한 거예요."
          }
        ],
        blocks: [
          {
            type: "checklist",
            title: "약국 · 병원 가기 전 챙길 것",
            items: ["여권", "복용 중인 약 이름", "알레르기 메모", "숙소 주소 (한국어)", "여행자보험 정보"]
          }
        ],
        tips: ["말이 잘 안 통하면 1330(관광통역 안내)에 전화해 통역을 부탁하세요.", "일요일 · 공휴일에는 문 닫는 약국 · 병원이 많아요. E-Gen에서 문 연 곳을 확인하세요.", "여행자보험이 있다면 진료비 영수증과 진단서 · 처방전 사본을 챙겨 두세요."],
        links: [
          { url: "https://www.e-gen.or.kr", label: "E-Gen 응급의료포털 (문 여는 병원 · 약국)" },
          { url: "https://medical.visitseoul.net", label: "서울의료관광 (외국인 환자 지원)" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330 통역 안내" }
        ],
        next: ["#during-prayer", "기도 공간이 필요할 때"]
      },
      {
        id: "during-prayer",
        num: "2-6",
        short: "기도 공간",
        kicker: "RELIGIOUS TRAVEL TIP",
        title: "여행 중 기도할 장소가 필요하다면?",
        lead: "공항, 일부 관광시설과 쇼핑시설에는 Prayer Room이 있어요. 지도 앱에서 검색하거나 공식 관광정보를 확인하세요.",
        top: [
          {
            type: "spots",
            title: "어디에서 찾을 수 있을까?",
            items: [
              { icon: "plane", t: "공항 Prayer Room", d: "인천공항 등 주요 공항에 기도실이 있어요. 출국장 안쪽에 있는 경우가 많으니 안내데스크에서 위치를 확인하세요." },
              { icon: "popup", t: "쇼핑몰 · 복합시설", d: "일부 대형 쇼핑몰 · 복합시설 · 관광지에 기도실이 있어요. 안내데스크에 '기도실' 위치를 물어보세요." },
              { icon: "pray", t: "Mosque · 종교시설", d: "서울중앙성원(이태원) 같은 이슬람 사원과 종교시설이에요. 방문 전에 개방 시간을 확인하세요." },
              { icon: "map", t: "관광 안내 사이트", d: "VISITKOREA 무슬림 친화 여행 페이지의 Prayer Room 정보와 1330 관광통역 안내를 활용하세요." }
            ]
          }
        ],
        blocks: [
          {
            type: "playbook",
            situation: "여행 중 기도할 장소가 필요해요.",
            intro: "공항 · 쇼핑몰 · 대형 관광시설이라면 안내데스크에 아래 문장을 보여 주세요.",
            fast: ["kto_muslim"],
            search: {
              naver: ["명동 기도실", "강남 기도실", "잠실 Prayer Room", "이태원 모스크"],
              google: ["prayer room Myeongdong", "prayer room Seoul", "mosque near me Seoul"]
            },
            say: [
              ["기도할 수 있는 공간이 있나요?", "gi-do-hal su in-neun gong-ga-ni in-na-yo?", "Is there a space where I can pray?"],
              ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "Where is the prayer room?"]
            ]
          }
        ],
        tips: ["운영시간 · 이용 규칙은 시설마다 달라요. 방문 전에 안내데스크나 공식 안내에서 확인하세요.", "'기도실(gi-do-sil)'이라고 물으면 대부분 알아들어요.", "무슬림 친화 식당 중에는 기도 공간을 함께 둔 곳도 있어요. 식당 안내에서 확인하세요."],
        links: [
          { url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", label: "VISITKOREA · Muslim-friendly Travel (Prayer Room)" },
          { url: "https://www.airport.kr", label: "인천국제공항" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 관광통역 안내" }
        ],
        next: ["#during-korean", "현장에서 쓰는 한국어"]
      },
      {
        id: "during-korean",
        num: "2-7",
        short: "한국어",
        title: "여행 중 사용하는 한국어",
        lead: "발음이 완벽하지 않아도 뜻은 전해져요. 말하기 어려우면 '크게 보기'로 화면을 보여 주세요.",
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
          {
            type: "phrases",
            groups: [
              {
                id: "during-korean-move",
                title: "교통",
                items: [
                  ["여기 어떻게 가요?", "yeo-gi eo-tteo-ke ga-yo?", "How do I get here?", "지도 화면을 보여 주면서"],
                  ["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?", "지하철역에서"],
                  ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "택시에서 주소를 보여 주며"],
                  ["여기서 내려 주세요.", "yeo-gi-seo nae-ryeo ju-se-yo.", "Please let me off here.", "택시에서 내릴 때"]
                ]
              },
              {
                title: "음식점",
                items: [
                  ["두 명이에요.", "du myeong-i-e-yo.", "There are two of us.", "들어가자마자 인원 말하기"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "줄이 길 때"],
                  ["이거 주세요.", "i-geo ju-se-yo.", "This one, please.", "메뉴를 가리키면서"]
                ]
              },
              {
                title: "예약",
                items: [["예약했어요.", "ye-yak hae-sseo-yo.", "I have a reservation.", "입구에서 이름과 함께"]]
              },
              {
                title: "팝업 · 공연",
                items: [
                  ["예약이 필요해요?", "ye-ya-gi pi-ryo-hae-yo?", "Do I need a reservation?", "팝업 입구에서"],
                  ["현장 입장 가능해요?", "hyeon-jang ip-jang ga-neung-hae-yo?", "Can I enter without a reservation?", "예약 없이 갔을 때"]
                ]
              },
              {
                title: "쇼핑",
                items: [["카드 돼요?", "ka-deu dwae-yo?", "Do you take cards?", "계산하기 전에"], ["얼마예요?", "eol-ma-ye-yo?", "How much is it?", "가격을 물어볼 때"]]
              },
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
                  ["돼지고기 없는 메뉴가 있나요?", "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?", "Do you have a menu without pork?", "할랄 · 돼지고기 제외가 필요할 때"],
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
            ]
          }
        ],
        tips: ["여러 상황에서 쓸 수 있는 표현: '~주세요'.", "인원수는 손가락으로 보여 줘도 돼요."],
        links: [
          { href: "papago", label: "Papago 번역" }
        ],
        next: ["#tips-food", "다음 단계: 맛집 · 팝업 · 예약 찾기"]
      }
    ]
  },
  /* ---------------- 03 TRAVEL TIPS ---------------- */
  tips: {
    title: "맛집부터 문화체험까지,\n현지 정보 찾는 법",
    intro: "자주 바뀌는 맛집 · 행사 정보를 직접 찾는 방법과, 외국인 여행자가 가기 전에 확인할 것을 모았어요.",
    cards: [
      {
        id: "tips-food",
        num: "3-1",
        short: "맛집",
        title: "맛집 찾는 방법",
        lead: "NAVER Map에서 지금 인기 있는 맛집을 직접 찾는 방법이에요.",
        top: [
          {
            type: "search",
            title: "STEP 1 · 지역 + 먹고 싶은 음식으로 검색",
            items: ["성수 한식", "홍대 삼겹살", "명동 냉면", "종로 혼밥"],
            caption: "검색어를 누르면 네이버지도 검색 결과가 열려요. 여행지 이름 + 먹고 싶은 음식으로 바꿔서 검색해 보세요."
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
                text: "HappyCow로 비건 식당을 한 번에 보거나, NAVER Map에서 '지역 + 비건 식당'으로 검색하세요.",
                search: ["성수 비건 식당", "홍대 채식 식당", "명동 비건", "서울 비건 한식", "서울 비건 베이커리", "서울 사찰음식"],
                phrases: [
                  ["저는 고기와 생선을 먹지 않습니다.", "jeo-neun go-gi-wa saeng-seo-neul meok-ji an-seum-ni-da.", "I don't eat meat or fish."],
                  [
                    "고기나 생선으로 만든 육수도 먹지 않습니다.",
                    "go-gi-na saeng-seo-neu-ro man-deun yuk-su-do meok-ji an-seum-ni-da.",
                    "I don't eat broth made from meat or fish either."
                  ],
                  [
                    "소스나 육수에도 고기 또는 생선이 들어가지 않았는지 확인해 주세요.",
                    "so-seu-na yuk-su-e-do go-gi tto-neun saeng-seo-ni deu-reo-ga-ji a-nan-neun-ji hwa-gin-hae ju-se-yo.",
                    "Please check that the sauce and broth don't contain meat or fish."
                  ]
                ],
                note: "한국 음식은 고기가 안 보여도 육수 · 젓갈 · 소스에 동물성 재료가 들어갈 수 있어요. '고기 없나요?'만 묻지 말고 육수와 소스까지 확인하세요.",
                go: ["#during-korean-food", "음식 주문 한국어 더 보기"],
                services: ["happycow"]
              },
              {
                tone: "muslim",
                icon: "moon",
                label: "MUSLIM TRAVELER TIP",
                title: "할랄 음식이 필요하거나 돼지고기를 먹지 않는다면",
                text: "먼저 한국관광공사 공식 목록에서 찾으세요. Halal Certified는 공인 인증기관이 인증한 곳, Self-certified는 무슬림 운영자가 직접 확인한 곳이에요. Muslim Friendly와 Pork Free는 할랄 인증과 같지 않아요.",
                search: ["이태원 할랄 식당", "명동 할랄", "강남 Muslim Friendly", "홍대 돼지고기 없는 식당"],
                phrases: [
                  ["돼지고기를 먹지 않습니다.", "dwae-ji-go-gi-reul meok-ji an-seum-ni-da.", "I don't eat pork."],
                  ["이 음식에 돼지고기가 들어가나요?", "i eum-si-ge dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Does this dish contain pork?"],
                  ["돼지고기 육수가 들어가나요?", "dwae-ji-go-gi yuk-su-ga deu-reo-ga-na-yo?", "Is there pork broth in it?"],
                  ["알코올이 들어가나요?", "al-ko-o-ri deu-reo-ga-na-yo?", "Does it contain alcohol?"]
                ],
                note: "Muslim Friendly · Pork Free 식당은 주류를 팔 수 있어요.",
                go: ["#during-prayer", "기도 공간 찾는 방법 보기"],
                services: ["kto_muslim"],
                kw: {
                  google: ["halal restaurant Itaewon", "halal Korean food Seoul"]
                }
              },
              {
                tone: "allergy",
                icon: "alert",
                label: "ALLERGY TIP",
                title: "음식 알레르기가 있다면",
                text: "알레르기 식당 목록보다 현장에서 확인하는 게 더 중요해요. 피해야 할 재료를 한국어로 저장해 두고 주문 전에 직원에게 보여 주세요.",
                phrases: [
                  ["저는 심한 음식 알레르기가 있습니다.", "jeo-neun sim-han eum-sik al-le-reu-gi-ga it-seum-ni-da.", "I have a severe food allergy."],
                  ["이 음식에 땅콩이 들어가나요?", "i eum-si-ge ttang-kong-i deu-reo-ga-na-yo?", "Does this dish contain peanuts?"],
                  [
                    "소스나 육수에도 땅콩이 들어가면 먹을 수 없습니다.",
                    "so-seu-na yuk-su-e-do ttang-kong-i deu-reo-ga-myeon meo-geul su eop-seum-ni-da.",
                    "If there's peanut even in the sauce or broth, I can't eat it."
                  ]
                ],
                note: "'땅콩' 자리에 내 재료 이름을 넣어서 보여 주세요.",
                go: ["#help-food", "알레르기 대처 방법 자세히"],
                wordsTitle: "피해야 할 재료를 한국어로 저장하세요",
                words: [["땅콩", "peanut"], ["갑각류", "shellfish"], ["우유", "milk"], ["계란", "egg"], ["밀", "wheat"]]
              }
            ]
          }
        ],
        blocks: [
          {
            type: "steps",
            start: 1,
            items: [
              { t: "리뷰와 사진 보기", d: "리뷰 수와 최근 작성일을 보고, 방문자 사진으로 실제 메뉴를 확인하세요." },
              { t: "영업 정보 확인", d: "영업시간 · 휴무일 · 오후 브레이크타임을 확인하세요." },
              {
                t: "웨이팅 · 예약 확인 후 출발",
                d: "'예약' 버튼이 있으면 네이버 예약이 돼요. 대기가 긴 곳은 일찍 가세요.",
                go: ["#tips-reserve", "예약 방법 보기"]
              }
            ]
          },
          {
            type: "checklist",
            title: "검색한 뒤 꼭 확인하세요",
            items: ["지금 영업 중인지", "브레이크타임", "마지막 주문", "최근 방문자 리뷰", "웨이팅", "예약 버튼이 있는지", "메뉴 사진"]
          },
          {
            type: "keyset",
            title: "상황별로 더 쓸모 있는 검색어",
            items: [["혼자 여행", "성수 혼밥", "종로 혼밥", "1인 메뉴 맛집"], ["늦은 시간", "홍대 늦게까지 하는 식당", "강남 24시 식당"], ["예약하기 싫다면", "성수 웨이팅 없는 맛집", "예약 없이 가는 맛집"]]
          }
        ],
        tips: ["가게는 문을 닫거나 운영 정보가 바뀔 수 있어요. 가기 전에 직접 검색해서 최신 정보를 확인하세요.", "고깃집은 2인분부터 주문받는 곳이 많아요.", "혼자 먹기 어려운 곳도 있어요. 리뷰에서 '1인'으로 검색해 보세요."],
        links: [
          { href: "naver", label: "네이버지도" }
        ],
        next: ["#tips-cafe", "카페 찾기"]
      },
      {
        id: "tips-cafe",
        num: "3-2",
        short: "카페",
        title: "카페 찾는 방법",
        lead: "사진과 분위기로 고르는 카페. 지도와 Instagram을 함께 써서 갈 곳을 찾아봐요.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "NAVER Map에서 '지역명 + 카페' 검색", d: "사진 탭에서 매장 분위기를 먼저 보세요." },
              { t: "Instagram에서 해시태그 검색", d: "#성수카페 같은 한국어 해시태그로 최근 방문 사진을 찾아보세요." },
              { t: "운영시간 · 휴무일 확인", d: "휴무일이 바뀔 수 있으니 가기 전에 매장 Instagram 공지를 확인하세요." },
              { t: "이용 규칙 확인", d: "1인 1음료 · 이용 시간 제한 · 사진 촬영 규칙을 확인하세요." }
            ]
          },
          {
            type: "keyset",
            title: "목적별로 검색하세요",
            items: [["사진", "성수 감성카페", "서울 사진찍기 좋은 카페"], ["한옥", "익선동 한옥카페", "북촌 한옥카페"], ["전망", "서울 한강뷰 카페"], ["디저트", "성수 디저트 카페"]]
          }
        ],
        tips: ["한국 카페는 대체로 '1인 1음료'가 기본이에요.", "매장에 따라 촬영을 막는 곳도 있어요. 촬영해도 되는지 확인하고, 다른 손님이 찍히지 않게 조심하세요.", "인기 카페는 주말 오후에 자리가 없을 수 있어요. 오전이 여유로워요."],
        next: ["#tips-popup", "팝업스토어 찾기"]
      },
      {
        id: "tips-popup",
        num: "3-3",
        short: "팝업",
        title: "팝업스토어 찾는 방법",
        lead: "운영 기간이 짧은 팝업스토어. 어디서 찾고, 가기 전에 무엇을 확인할지 알려 드려요.",
        blocks: [
          {
            type: "playbook",
            id: "tips-popup-find",
            situation: "여행하는 날짜에 갈 만한 팝업을 찾고 싶어요.",
            intro: "브랜드 SNS부터 찾지 않아도 돼요. 날짜와 지역으로 먼저 고르고, 마지막에 공식 계정을 확인하면 돼요.",
            fast: ["popga", "sungsuya", "popnol"],
            search: {
              naver: ["성수 팝업 오늘", "성수 팝업 이번주", "서울 팝업 이번주", "홍대 팝업 이번주", "더현대 팝업 이번주", "잠실 팝업 이번주"],
              insta: ["#성수팝업", "#서울팝업", "#팝업스토어", "#이번주팝업"],
              google: ["Seoul pop up store this week"]
            },
            checkTitle: "고른 팝업의 공식 Instagram에서 확인하세요",
            check: ["예약 여부", "현장 입장 가능 여부", "운영시간", "마지막 입장", "신분증", "이벤트 참여 조건", "굿즈 구매 조건"],
            say: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "Can I go in without a reservation?"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "What time is last entry?"],
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "Can I use my passport as ID?"]
            ]
          },
          {
            type: "spots",
            title: "STEP 1 · 지역부터 고르세요",
            items: [
              { icon: "popup", t: "성수", d: "패션 · 뷰티 · 캐릭터 · 브랜드 팝업이 가장 많아요." },
              { icon: "ticket", t: "홍대 · 연남", d: "캐릭터 · 웹툰 · 아이돌 · 젊은 브랜드 팝업이 많아요." },
              { icon: "home", t: "여의도", d: "더현대 서울 중심의 실내 팝업이라 비 오는 날에도 좋아요." },
              { icon: "compass", t: "잠실", d: "롯데월드몰 중심으로 팝업이 열려요." }
            ]
          },
          {
            type: "steps",
            title: "발견 → 선택 → 공식 정보 확인",
            items: [
              { t: "발견", d: "POPGA · 성수야 · 팝놀에서 여행 날짜에 열린 팝업을 찾아요." },
              { t: "선택", d: "위치 · 기간 · 후기를 보고 갈 곳을 골라요." },
              { t: "공식 정보 확인", d: "고른 팝업의 공식 Instagram에서 예약 여부와 입장 조건을 확인해요." }
            ]
          },
          {
            type: "tipbox",
            icon: "popup",
            situation: "현장에 갔더니 예약자만 입장 가능하다면?",
            text: "일부 팝업은 사전예약이나 한국 전화번호가 필요할 수 있어요. 가기 전에 공식 SNS에서 예약 여부와 현장 입장 가능 여부를 확인하세요.",
            phrases: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "Can I go in without a reservation?"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "What time is last entry?"]
            ],
            go: ["#help-reservation", "한국 번호가 없어 예약이 막힐 때"]
          }
        ],
        tips: ["사전예약에 한국 휴대폰 본인인증이 필요하면 외국인은 예약이 어려울 수 있어요. 따로 현장입장 시간이 있는지 확인하세요.", "인기 팝업은 특히 오픈 첫 주말에 많이 붐벼요.", "굿즈는 1인당 구매 수량 제한이 있는 경우가 많아요."],
        real: ["팝업스토어는 그냥 가면 되는 줄 알았는데, 사전예약이 필요한 곳도 있었어요."],
        links: [
          { href: "popga", label: "POPGA (팝가)" }
        ],
        next: ["#tips-culture", "전시 · 공연 · 축제 찾기"]
      },
      {
        id: "tips-culture",
        num: "3-4",
        short: "전시 · 공연 · 축제",
        title: "전시 · 공연 · 축제 찾는 방법",
        lead: "전시 · 공연 · 축제 정보를 공식 채널에서 찾는 방법이에요.",
        blocks: [
          {
            type: "playbook",
            situation: "이번 주 서울에서 할 만한 게 뭐가 있어요?",
            fast: ["visitseoul_events", "culture_portal"],
            search: {
              naver: ["이번 주 서울 전시", "서울 무료 전시", "서울 축제 이번주", "서울 공연 오늘"],
              google: ["things to do in Seoul this week", "Seoul festival this month"]
            },
            check: ["날짜", "시간", "예약 필요 여부", "가격", "마지막 입장", "외국인 참여 가능 여부"],
            say: [
              ["오늘 현장 예매 되나요?", "o-neul hyeon-jang ye-mae doe-na-yo?", "Can I buy a ticket here today?"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "Can foreigners join too?"]
            ]
          },
          {
            type: "steps",
            title: "어디서 확인할까?",
            items: [
              { t: "공식 홈페이지 · 공식 SNS", d: "날짜 · 시간 · 가격은 행사 공식 채널에서 확인하세요." },
              { t: "서울시 문화행사 사이트", d: "서울문화포털에서 서울의 공연 · 전시 · 축제를 날짜별로 검색할 수 있어요." },
              { t: "VISITKOREA · Visit Seoul", d: "축제 · 행사 정보를 외국어로 알려 주는 공식 관광 사이트예요." },
              { t: "공연 · 전시 공식 예매 사이트", d: "NOL World (구 인터파크 글로벌)처럼 외국어를 지원하는 예매처를 쓰세요." }
            ]
          }
        ],
        tips: ["무료 축제라도 일부 프로그램은 사전 신청 필요.", "비가 오면 야외 행사가 취소되거나 바뀔 수 있어요. 당일 아침 공식 SNS를 확인하세요."],
        links: [
          { href: "culture", label: "서울문화포털 (서울시 문화행사)" },
          { href: "visitkorea", label: "VISITKOREA" },
          { href: "visitseoul", label: "Visit Seoul" },
          { href: "nolworld", label: "NOL World (외국인 티켓 예매)" }
        ],
        next: ["#tips-kpop", "K-POP 행사 찾기"]
      },
      {
        id: "tips-kpop",
        num: "3-5",
        short: "K-POP",
        title: "K-POP 행사 찾는 방법",
        lead: "K-POP 행사 정보를 찾는 것부터 참여 조건 확인까지 알려 드려요.",
        blocks: [
          {
            type: "playbook",
            label: "CASE A",
            situation: "아직 좋아하는 아티스트가 정해지지 않았어요. 이번 주에 갈 만한 K-POP 행사가 있나요?",
            intro: "Visit Seoul의 Hallyu 일정, 팝업 앱의 K-POP 카테고리, 공연 예매 사이트의 현재 공연을 보면 돼요.",
            fast: ["visitseoul_events", "popga"],
            search: {
              naver: ["이번 주 K-POP 팝업", "서울 K-POP 행사", "아이돌 생일카페 이번주"],
              insta: ["#케이팝팝업", "#생일카페"],
              google: ["K-pop events Seoul this week"]
            },
            fallback: false
          },
          {
            type: "playbook",
            label: "CASE B",
            situation: "좋아하는 아티스트의 행사를 찾고 있어요.",
            fast: ["weverse"],
            stepsTitle: "이 순서로 확인하세요",
            steps: ["Weverse 등 공식 팬 플랫폼", "아티스트 공식 X", "공식 Instagram", "소속사 공지"],
            check: ["사전 신청", "팬클럽 조건", "신분증", "외국인 참여 가능 여부", "입장시간"],
            say: [
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "Can I use my passport as ID?"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "Can foreigners join too?"]
            ]
          }
        ],
        tips: [
          "예매자와 실제 관람자 정보가 같아야 해요. 입장할 때 신분증을 확인하는 경우가 많으니 외국인은 여권을 챙기세요.",
          "국내 · 글로벌 멤버십의 선예매 일정이 다를 수 있어요. 나눠서 확인하세요.",
          "공지 시간은 한국 시간(KST) 기준이에요. 지금 있는 나라 시간으로 바꿔서 알람을 맞춰 두세요.",
          "공식 판매처가 아닌 곳에서 산 티켓은 입장이 거부될 수 있어요."
        ],
        links: [
          { href: "weverse", label: "Weverse" },
          { href: "nolworld", label: "NOL World" }
        ],
        next: ["#tips-reserve", "예약 방법"]
      },
      {
        id: "tips-reserve",
        num: "3-6",
        short: "예약",
        title: "예약 방법",
        lead: "한국에서 자주 쓰는 다섯 가지 예약 방식과 이용 순서를 알려 드려요.",
        blocks: [
          {
            type: "accordion",
            items: [
              {
                title: "네이버 예약",
                sub: "식당 · 카페 · 체험",
                lead: "NAVER Map 장소 페이지에 '예약' 버튼이 있으면 쓸 수 있어요.",
                steps: ["NAVER Map에서 장소를 검색해요", "'예약' 버튼을 눌러요", "날짜 · 시간 · 인원을 골라요", "네이버 로그인 후 예약 신청", "확정 알림 확인 (방문 당일 한 번 더)"],
                note: "네이버 계정이 필요해요. 가입이 어렵다면 전화 · 현장 · 다른 앱으로 예약할 수 있는지 확인하세요."
              },
              {
                title: "팝업 사전예약",
                sub: "브랜드 팝업스토어",
                steps: ["브랜드 Instagram · 공지에서 예약 링크를 확인해요", "오픈 시간에 맞춰 예약 페이지 접속", "날짜 · 입장 시간을 골라요", "본인인증 · 정보 입력", "입장 QR이나 문자를 저장하고 시간 맞춰 가요"],
                note: "예약 오픈 시간은 한국 시간 기준이에요. 한국 번호 인증이 필요하면 현장입장이 되는지 확인하세요."
              },
              {
                title: "공연 예약",
                sub: "콘서트 · 뮤지컬 · 전시",
                steps: ["공식 예매처 확인 (외국인은 NOL World 등)", "미리 회원가입 · 로그인", "날짜 · 좌석을 고르고 결제해요", "모바일 티켓인지 현장 수령인지 확인해요", "공연 당일 여권 같은 신분증을 챙겨요"],
                link: { href: "nolworld", label: "NOL World" }
              },
              {
                title: "식당 예약",
                sub: "레스토랑 · 인기 맛집",
                steps: ["NAVER Map 장소 페이지에서 '예약' 버튼을 확인해요", "외국인은 캐치테이블 글로벌 (Catchtable Global) 앱도 쓸 수 있어요.", "날짜 · 인원을 고르고, 필요하면 예약금을 결제해요", "예약 시간 10분 전 도착"],
                note: "캐치테이블 글로벌은 한국 번호 없이 이메일로 가입할 수 있어요."
              },
              {
                title: "현장 웨이팅",
                sub: "줄 서는 맛집 · 카페 · 팝업",
                steps: ["매장 앞 웨이팅 기기에 등록", "호출되면 입장"],
                note: "자세한 등록 순서는 아래 '현장 웨이팅'에서 볼 수 있어요."
              }
            ]
          },
          {
            type: "tipbox",
            icon: "phone",
            situation: "예약 화면에서 한국 전화번호를 요구한다면?",
            text: "일부 예약 서비스는 한국 전화번호를 요구할 수 있어요. 한국 번호가 없다면 외국인 예약(캐치테이블 글로벌 등)이나 현장 예약 · 웨이팅이 되는지 먼저 확인하세요.",
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
        tips: ["노쇼하면 예약금을 잃거나 이용이 제한될 수 있어요. 못 가게 되면 예약을 취소하세요.", "예약 확정 화면은 캡처해 두세요. 데이터가 없어도 직원에게 보여 줄 수 있어요."],
        next: ["#tips-waiting", "현장 웨이팅"]
      },
      {
        id: "tips-waiting",
        num: "3-7",
        short: "웨이팅",
        title: "현장 웨이팅",
        lead: "인기 식당 · 카페 · 팝업 앞의 웨이팅 기기(태블릿)로 대기 등록을 해요. 아래 순서대로 하면 돼요.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "매장 도착" },
              { t: "웨이팅 기기 확인", d: "입구 근처 태블릿을 찾아보세요. 기기가 없으면 직원에게 물어보세요." },
              { t: "인원 입력" },
              { t: "전화번호 입력", d: "차례가 되면 입력한 전화번호로 알림이 와요." },
              { t: "대기번호 확인", d: "화면에 나온 대기번호를 캡처해 두세요." },
              { t: "호출 확인", d: "알림톡 · 문자가 오면 바로 매장으로 가세요." },
              { t: "입장" }
            ]
          },
          {
            type: "phrases",
            groups: [
              {
                title: "상황별 회화 예문",
                items: [
                  ["전화번호가 없어요.", "jeon-hwa-beon-ho-ga eop-seo-yo.", "I don't have a Korean phone number.", "웨이팅 기기 앞에서"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "줄이 보일 때"]
                ]
              }
            ]
          }
        ],
        tips: ["한국 전화번호가 없다면 이름으로 대기 등록이 되는지 직원에게 물어보세요.", "호출 후 정해진 시간 안에 안 가면 순서가 넘어갈 수 있어요.", "캐치테이블 · POPGA 등에서 원격 웨이팅이 되는 매장은 도착 전에 대기 등록을 할 수 있어요."],
        next: ["#where", "다음 단계: 여행지 고르기"]
      }
    ]
  },
  /* ---------------- 04 WHERE TO GO ---------------- */
  where: {
    title: "나에게 맞는 여행지,\n선택부터 비교까지",
    intro: "렌터카 없이 대중교통으로 갈 수 있는 서울 · 근교 9곳. 질문 4개로 TOP 3 추천부터 여행지 비교, 상세 코스까지 볼 수 있어요.",
    why: "여행 기간과 취향에 맞는 여행지를 직접 고를 수 있게 돕는 여행 결정 가이드예요.",
    note: "이동시간과 요금은 2026년 10월 평일, 성인 일반실 기준이에요. 출발 시각과 열차 종류에 따라 달라지니 출발 전에 코레일이나 지도 앱에서 확인하세요."
  }
};
