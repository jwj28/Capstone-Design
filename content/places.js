/* 서울 착륙 — WHERE TO GO 여행지 9곳 (언어별 문구)
   공통 값(사진, 이동시간, 지도 검색어, 공식 사이트)은 shared.js 의 places 에 있어요.
   name/tag: 이름 · 한 줄 소개  facts: [교통, 서울에서, 편도 요금, 현지 이동]  days: 코스  sights: 주요 볼거리  food: 대표 음식 */
window.SL = window.SL || {};
window.SL.places = {
  ko: {
    seongbuk: {
      name: "서울 성북동",
      tag: "숨은 서울 문화산책",
      duration: "당일치기",
      themes: ["문학", "한옥", "조용한 서울"],
      overview: { time: "약 30분 안팎", fare: "1,550원", main: "지하철 4호선" },
      facts: [
        ["교통", "지하철 4호선 한성대입구역에서 걸어서 또는 성북02 마을버스"],
        ["서울에서", "서울 시내에서 약 30분 안팎"],
        ["편도 요금", "1,550원 (교통카드 지하철 기본요금)"],
        ["현지 이동", "언덕길이 많은 지역. 걷기 힘들 때는 성북02 마을버스 이용."]
      ],
      days: [
        { label: "당일", stops: ["한성대입구역", "최순우 옛집", "수연산방", "심우장", "길상사"] }
      ],
      sights: ["최순우 옛집", "수연산방", "심우장", "길상사"],
      culture: { name: "숨은 서울 산책", flow: ["미술사학자의 한옥", "소설가의 고택", "만해 한용운의 집", "사찰 산책"], note: "수연산방은 소설가 이태준의 고택으로, 지금은 전통 찻집이라 한옥에서 차를 마셔볼 수 있음." },
      why: "북촌보다 조용하고, 성수보다 오래된 서울을 걷고 싶다면 성북동으로. 문학가의 집과 한옥, 사찰을 따라 서울의 숨은 이야기를 만날 수 있음.",
      vlog: { query: "성북동 길상사 심우장 산책 브이로그" },
      food: ["칼국수", "한옥 찻집의 전통차"]
    },
    yangpyeong: {
      name: "양평",
      tag: "지하철로 떠나는 자연 여행",
      duration: "당일치기",
      themes: ["자연", "가성비", "사진", "자전거"],
      overview: { time: "약 1~1.5시간", fare: "2,000원대", main: "경의중앙선" },
      facts: [
        ["교통", "경의중앙선 → 양수역. 기차표 예매 없이 수도권 전철로 이동 가능."],
        ["서울에서", "약 1~1.5시간 (출발역에 따라 다름)"],
        ["편도 요금", "약 2,000원대 (교통카드 전철 요금)"],
        ["현지 이동", "양수역에서 걸어서 세미원 · 두물머리까지"]
      ],
      days: [
        { label: "당일", stops: ["양수역", "양수리 일대", "세미원", "두물머리", "양수역"] }
      ],
      sights: ["두물머리", "세미원", "북한강 풍경"],
      culture: { name: "강변 자전거 · 정원 산책", flow: ["자전거 여행", "정원 산책", "사진 촬영"] },
      why: "저렴한 교통비와 서울에서의 편리한 접근성으로 유학생의 첫 근교 여행에 추천.",
      vlog: {
        query: "양평 두물머리 세미원 브이로그",
        items: [
          { title: "양평 여행 브이로그", summary: "양평의 실제 여행 모습을 담은 브이로그. 출발 전 이동 동선과 현지 분위기 확인에 참고." }
        ]
      },
      food: ["양평해장국", "두물머리 연핫도그"]
    },
    yeoju: {
      name: "여주",
      tag: "한글과 조선 역사를 따라가는 여행",
      duration: "당일치기",
      themes: ["역사", "전통문화", "자연"],
      overview: { time: "약 1~1.5시간", fare: "2,000원대", main: "경강선 전철" },
      facts: [
        ["교통", "판교역에서 경강선 전철 → 여주역"],
        ["서울에서", "약 1~1.5시간 (출발역에 따라 다름)"],
        ["편도 요금", "약 2,000원대 (교통카드 전철 요금)"],
        ["현지 이동", "여주역에서 시내버스나 택시로 세종대왕릉 · 신륵사까지"]
      ],
      days: [
        { label: "당일", stops: ["여주역", "세종대왕릉", "신륵사", "남한강 산책"] }
      ],
      sights: ["세종대왕릉", "신륵사", "남한강"],
      culture: { name: "한글 & 조선 역사 여행", text: "한글을 만든 세종대왕의 능에서 남한강가의 절 신륵사까지 이어지는 역사 코스." },
      why: "한국어를 배우고 있다면 한 번쯤 가볼 만한 여행. 한글을 만든 세종대왕의 이야기와 남한강의 사찰 풍경을 함께 즐기는 코스.",
      vlog: {
        query: "여주 세종대왕릉 신륵사 브이로그",
        items: [
          { title: "여주 여행 브이로그", summary: "여주의 실제 여행 모습을 담은 브이로그. 출발 전 이동 동선과 현지 분위기 확인에 참고." },
          { title: "여주 여행 쇼츠", summary: "여주 여행의 분위기를 짧게 담은 쇼츠 영상." }
        ]
      },
      food: ["여주 쌀밥 정식", "여주 고구마"]
    },
    wonju: {
      name: "원주",
      tag: "직접 한지를 만들어 보는 로컬 문화여행",
      duration: "1박 2일",
      themes: ["한국문화", "전통공예", "로컬시장"],
      overview: { time: "약 50분~", fare: "6,200~10,100원", main: "KTX-이음 · 무궁화" },
      facts: [
        ["교통", "청량리역 → KTX-이음 또는 무궁화 → 원주역"],
        ["서울에서", "KTX-이음 약 50분 · 무궁화 약 1시간 10분~"],
        ["편도 요금", "KTX-이음 10,100원 · 무궁화 6,200원"],
        ["현지 이동", "원주역에서 시내버스나 택시로 이동"]
      ],
      days: [
        { label: "DAY 1", title: "한지 체험", stops: ["원주역", "원주한지테마파크", "강원감영", "원주 중앙시장 · 미로예술시장"] },
        { label: "DAY 2", title: "자연 · 로컬", stops: ["소금산 그랜드밸리 (선택)", "원주역", "서울"] }
      ],
      sights: ["원주한지테마파크", "강원감영", "원주 중앙시장"],
      culture: { name: "한지 체험 여행", flow: ["한지 역사 관람", "한지 만들기 체험", "강원감영", "전통시장"], note: "체험 전 운영일과 예약 여부 확인." },
      why: "한국의 전통 종이인 한지를 직접 만들어 볼 수 있음. 구경만 하는 관광보다 한국문화를 깊게 경험할 수 있음.",
      vlog: { query: "원주 뚜벅이 여행 한지테마파크 브이로그" },
      food: ["추어탕", "중앙시장 만두 · 칼국수"]
    },
    asan: {
      name: "아산",
      tag: "전통마을과 온천을 함께 즐기는 여행",
      duration: "1박 2일",
      themes: ["전통문화", "온천", "로컬시장"],
      overview: { time: "약 1.5~2시간", fare: "7,000원~", main: "무궁화 · 1호선" },
      facts: [
        ["교통", "용산역 → 무궁화 → 온양온천역 (수도권 전철 1호선으로도 이동 가능)"],
        ["서울에서", "무궁화 약 1시간 30분 · 1호선 2시간 이상"],
        ["편도 요금", "무궁화 7,000원 · 1호선은 교통카드 전철 요금"],
        ["현지 이동", "온천과 시장은 역 근처라 걸어서, 외암민속마을은 시내버스로"]
      ],
      days: [
        { label: "DAY 1", stops: ["온양온천역", "온양온천시장", "온천 체험", "숙박"] },
        { label: "DAY 2", stops: ["외암민속마을", "전통문화 체험", "서울 복귀"] }
      ],
      sights: ["온양온천", "온양온천시장", "외암민속마을"],
      culture: { name: "전통마을 & 온천 여행", text: "한국의 전통마을과 온천을 함께 경험하는 1박 2일 코스." },
      why: "서울의 궁궐 관광과 달리 한국의 전통 마을과 생활 모습을 직접 볼 수 있음.",
      extra: { label: "현재 진행 중인 체험 확인하기", map: "외암민속마을" },
      vlog: { query: "외암민속마을 온양온천 브이로그" },
      food: ["온양온천시장 국밥", "외암마을 연엽주 (전통주 · 성인만)"]
    },
    chungju: {
      name: "충주",
      tag: "중앙탑과 탄금호를 즐기는 1박 2일",
      duration: "1박 2일",
      themes: ["자연", "역사", "산책", "체험"],
      overview: { time: "약 1시간 5분~", fare: "12,300원", main: "KTX-이음 (판교 출발)" },
      facts: [
        ["교통", "판교역 → KTX-이음 → 충주역 (하루 4편 운행하므로 시간 확인 필요)"],
        ["서울에서", "판교역에서 약 1시간 5분"],
        ["편도 요금", "KTX-이음 12,300원"],
        ["현지 이동", "충주역에서 시내버스나 택시로 중앙탑사적공원까지"]
      ],
      days: [
        { label: "DAY 1", stops: ["충주역", "중앙탑사적공원", "충주박물관", "탄금호 산책"] },
        { label: "DAY 2", stops: ["탄금호 자전거 또는 유람선", "주변 역사 명소", "귀가"] }
      ],
      sights: ["중앙탑사적공원 (통일신라 칠층석탑)", "충주박물관", "탄금호"],
      culture: { name: "탄금호 자전거 · 유람선", flow: ["자전거 대여", "탄금호 전기 유람선"], note: "자전거와 유람선은 계절에 따라 운영 시간이 다름. 출발 전 운영 시간 확인." },
      why: "사람 많은 관광지보다 넓은 강변과 역사공원을 천천히 즐기고 싶다면 충주. 중앙탑과 탄금호를 중심으로 산책과 체험을 함께 즐길 수 있음.",
      vlog: { query: "충주 탄금호 중앙탑 여행 브이로그" },
      food: ["올갱이국 (다슬기국)", "충주 사과"]
    },
    jecheon: {
      name: "제천",
      tag: "기차 타고 떠나는 2박 3일 힐링 여행",
      duration: "2박 3일",
      themes: ["자연", "힐링", "사진", "지역문화"],
      overview: { time: "약 1시간 10분~", fare: "9,200~15,400원", main: "KTX-이음 · 무궁화" },
      facts: [
        ["교통", "청량리역 → KTX-이음 → 제천역"],
        ["서울에서", "KTX-이음 약 1시간 10분 · 무궁화 약 1시간 40분"],
        ["편도 요금", "KTX-이음 15,400원 · 무궁화 9,200원"],
        ["현지 이동", "의림지는 31 · 35번 버스 이용. 버스가 적은 청풍호 방면은 관광택시(5시간 60,000원, 4명까지)도 선택지."]
      ],
      days: [
        { label: "DAY 1", title: "제천의 역사와 자연", stops: ["제천역", "의림지", "용추폭포", "제천 시내 · 전통시장"] },
        { label: "DAY 2", title: "청풍호", stops: ["청풍문화유산단지", "청풍호반 케이블카", "청풍호 주변"] },
        { label: "DAY 3", title: "힐링", stops: ["정방사 또는 자연 · 치유 체험", "제천역", "서울"] }
      ],
      sights: ["의림지", "청풍호", "청풍문화유산단지", "청풍호반 케이블카"],
      why: "KTX로 비교적 빠르게 만나는 도시 밖의 자연. 당일치기보다 2박 3일의 여유 있는 일정 추천.",
      vlog: { query: "제천 여행 청풍호반 케이블카 의림지 브이로그" },
      food: ["빨간오뎅 (제천 중앙시장)", "약채락 (한방 음식)"]
    },
    gongbu: {
      name: "공주 · 부여",
      tag: "백제문화 2박 3일",
      duration: "2박 3일",
      themes: ["백제 역사", "한옥", "전통문화"],
      overview: { time: "약 1시간 50분~", fare: "14,900원~", main: "고속버스" },
      facts: [
        ["교통", "서울고속버스터미널 → 고속버스 → 공주, 공주 → 버스 → 부여"],
        ["서울에서", "공주까지 약 1시간 50분 · 공주에서 부여까지 약 40~50분"],
        ["편도 요금", "서울→공주 우등 14,900원 · 공주→부여 5,900~7,700원"],
        ["현지 이동", "시내버스와 택시. 공주 · 부여 모두 볼거리가 시내에 모여 있음."]
      ],
      days: [
        { label: "DAY 1", title: "공주", stops: ["공주 도착", "국립공주박물관", "무령왕릉과 왕릉원", "공주한옥마을 숙박"] },
        { label: "DAY 2", title: "공주 → 부여", stops: ["공산성", "공주 산성시장", "부여 이동", "국립부여박물관", "궁남지"] },
        { label: "DAY 3", title: "부여", stops: ["부소산성", "정림사지 또는 백제문화단지", "귀가"] }
      ],
      sights: ["공산성", "무령왕릉과 왕릉원", "국립공주박물관", "부소산성", "궁남지", "정림사지"],
      culture: { name: "백제 한옥 하룻밤", text: "백제 왕릉과 산성 관람 후 공주한옥마을에서 보내는 특별한 하룻밤. 숙박을 통해 경험하는 한옥 생활." },
      why: "한국의 고대 왕국 백제를 따라가는 2박 3일. 왕릉, 산성, 한옥, 박물관으로 이어지는 깊이 있는 역사 여행.",
      vlog: { query: "공주 부여 백제 여행 브이로그" },
      food: ["공주 밤 디저트", "부여 연잎밥"]
    },
    gangneung: {
      name: "강릉",
      tag: "바다와 카페 중심 2박 3일",
      duration: "2박 3일",
      themes: ["바다", "카페", "사진", "휴식"],
      overview: { time: "약 1시간 30분~", fare: "26,000원", main: "KTX-이음" },
      facts: [
        ["교통", "청량리역 · 서울역 → KTX-이음 → 강릉역"],
        ["서울에서", "청량리역에서 약 1시간 30분~1시간 50분"],
        ["편도 요금", "KTX-이음 26,000원 (청량리 출발)"],
        ["현지 이동", "시내버스와 택시로 이동. 편리한 동선을 위해 하루에 한 권역씩 둘러보는 일정 추천."]
      ],
      days: [
        { label: "DAY 1", title: "원도심 · 안목", stops: ["강릉역", "원도심", "안목 커피거리", "해변 산책"] },
        { label: "DAY 2", title: "초당 · 경포", stops: ["오죽헌", "초당동", "경포호", "경포해변"] },
        { label: "DAY 3", title: "정동진", stops: ["정동진", "바다 산책", "강릉역", "서울"] }
      ],
      sights: ["안목 커피거리", "오죽헌", "경포호 · 경포해변", "정동진"],
      culture: { name: "커피 & 바다 여행", text: "안목 커피거리에서 바다를 보며 커피를 마시고, 초당동에서는 초당순두부를 맛볼 수 있음." },
      why: "기차를 타고 바다까지. 사진과 카페, 해변을 여유롭게 즐기고 싶다면 강릉 추천.",
      vlog: { query: "강릉 2박3일 안목 경포 정동진 브이로그" },
      food: ["초당순두부", "장칼국수", "안목 커피"]
    }
  },
  zh: {
    seongbuk: {
      name: "首尔 城北洞",
      tag: "首尔的隐藏文化散步",
      duration: "一日游",
      themes: ["文学", "韩屋", "安静的首尔"],
      overview: { time: "约 30 分钟", fare: "1,550 韩元", main: "地铁 4 号线" },
      facts: [
        ["交通", "地铁 4 号线汉城大入口站 (한성대입구역) 步行，或坐城北 02 小区公交"],
        ["从首尔出发", "首尔市内约 30 分钟"],
        ["单程费用", "1,550 韩元 (交通卡地铁基本票价)"],
        ["当地交通", "坡路很多。走累了可以坐城北 02 小区公交。"]
      ],
      days: [
        { label: "一日", stops: ["汉城大入口站", "崔淳雨故居 (최순우 옛집)", "寿砚山房 (수연산방)", "寻牛庄 (심우장)", "吉祥寺 (길상사)"] }
      ],
      sights: ["崔淳雨故居 (최순우 옛집)", "寿砚山房 (수연산방)", "寻牛庄 (심우장)", "吉祥寺 (길상사)"],
      culture: { name: "Hidden Seoul Walk", flow: ["美术史学家的韩屋", "小说家的故居", "韩龙云的家", "寺庙散步"], note: "寿砚山房是小说家李泰俊的故居，现在是传统茶馆，可以在韩屋里喝茶。" },
      why: "想走走比北村更安静、比圣水更古老的首尔，就来城北洞。沿着文学家的家、韩屋和寺庙，遇见首尔隐藏的故事。",
      vlog: { query: "성북동 길상사 심우장 산책 브이로그" },
      food: ["韩式刀切面 (칼국수)", "韩屋茶馆的传统茶"]
    },
    yangpyeong: {
      name: "杨平 (양평)",
      tag: "坐地铁出发的自然之旅",
      duration: "一日游",
      themes: ["自然", "性价比", "拍照", "骑自行车"],
      overview: { time: "约 1~1.5 小时", fare: "2,000 韩元左右", main: "京义 · 中央线" },
      facts: [
        ["交通", "京义 · 中央线 → 两水站 (양수역)。不用订火车票，坐首都圈地铁就能到。"],
        ["从首尔出发", "约 1~1.5 小时 (因出发站不同而不同)"],
        ["单程费用", "约 2,000 多韩元 (交通卡地铁票价)"],
        ["当地交通", "从两水站步行到洗美苑 · 两水头"]
      ],
      days: [
        { label: "一日", stops: ["两水站 (양수역)", "两水里一带", "洗美苑 (세미원)", "两水头 (두물머리)", "两水站"] }
      ],
      sights: ["两水头 (두물머리)", "洗美苑 (세미원)", "北汉江风景"],
      culture: { name: "江边骑行 · 庭园散步", flow: ["自行车旅行", "庭园散步", "拍照"] },
      why: "交通费便宜，从首尔也很容易到，非常适合作为留学生的第一次近郊旅行。",
      vlog: {
        query: "양평 두물머리 세미원 브이로그",
        items: [
          { title: "杨平旅行 Vlog (韩语)", summary: "记录了实际游览杨平的 Vlog。出发前可以先看看路线和当地的氛围。" }
        ]
      },
      food: ["杨平解酒汤 (양평해장국)", "两水头莲叶热狗 (연핫도그)"]
    },
    yeoju: {
      name: "骊州 (여주)",
      tag: "追寻韩文与朝鲜历史的旅行",
      duration: "一日游",
      themes: ["历史", "传统文化", "自然"],
      overview: { time: "约 1~1.5 小时", fare: "2,000 韩元左右", main: "京江线地铁" },
      facts: [
        ["交通", "在板桥站换乘京江线地铁 → 骊州站 (여주역)"],
        ["从首尔出发", "约 1~1.5 小时 (因出发站不同而不同)"],
        ["单程费用", "约 2,000 多韩元 (交通卡地铁票价)"],
        ["当地交通", "从骊州站坐市内公交或出租车去世宗大王陵 · 神勒寺"]
      ],
      days: [
        { label: "一日", stops: ["骊州站", "世宗大王陵 (세종대왕릉)", "神勒寺 (신륵사)", "南汉江散步"] }
      ],
      sights: ["世宗大王陵 (세종대왕릉)", "神勒寺 (신륵사)", "南汉江"],
      culture: { name: "Hangul & Joseon History Trip", text: "参观创制韩文的世宗大王陵，再走到南汉江边的神勒寺的历史路线。" },
      why: "如果你在学韩语，值得去一次。追寻创制韩文的世宗大王的故事，还能欣赏南汉江边的寺庙风景。",
      vlog: {
        query: "여주 세종대왕릉 신륵사 브이로그",
        items: [
          { title: "骊州旅行 Vlog (韩语)", summary: "记录了实际游览骊州的 Vlog。出发前可以先看看路线和当地的氛围。" },
          { title: "骊州旅行短视频 (韩语)", summary: "可以快速感受骊州旅行氛围的短视频。" }
        ]
      },
      food: ["骊州米饭套餐 (쌀밥 정식)", "骊州红薯"]
    },
    wonju: {
      name: "原州 (원주)",
      tag: "亲手制作韩纸的在地文化之旅",
      duration: "两天一夜",
      themes: ["韩国文化", "传统工艺", "本地市场"],
      overview: { time: "约 50 分钟起", fare: "6,200~10,100 韩元", main: "KTX-이음 · 无穷花号" },
      facts: [
        ["交通", "清凉里站 (청량리역) → KTX-이음 或无穷花号 → 原州站 (원주역)"],
        ["从首尔出发", "KTX-이음 约 50 分钟 · 无穷花号约 1 小时 10 分钟起"],
        ["单程费用", "KTX-이음 10,100 韩元 · 无穷花号 6,200 韩元"],
        ["当地交通", "从原州站坐市内公交或出租车"]
      ],
      days: [
        { label: "DAY 1", title: "韩纸体验", stops: ["原州站", "原州韩纸主题公园", "江原监营 (강원감영)", "原州中央市场 · 迷路艺术市场 (미로예술시장)"] },
        { label: "DAY 2", title: "自然 · 在地", stops: ["小金山 Grand Valley (소금산 그랜드밸리 · 可选)", "原州站", "首尔"] }
      ],
      sights: ["原州韩纸主题公园 (원주한지테마파크)", "江原监营 (강원감영)", "原州中央市场"],
      culture: { name: "Korean Hanji Day", flow: ["参观韩纸历史", "韩纸制作体验", "江原监营", "传统市场"], note: "体验项目请提前确认开放日和是否需要预约。" },
      why: "可以亲手制作韩国传统纸张“韩纸”。比起只是参观，更能深入体验韩国文化。",
      vlog: { query: "원주 뚜벅이 여행 한지테마파크 브이로그" },
      food: ["泥鳅汤 (추어탕)", "中央市场饺子 · 刀切面"]
    },
    asan: {
      name: "牙山 (아산)",
      tag: "传统村落加温泉的旅行",
      duration: "两天一夜",
      themes: ["传统文化", "温泉", "本地市场"],
      overview: { time: "约 1.5~2 小时", fare: "7,000 韩元起", main: "无穷花号 · 1 号线" },
      facts: [
        ["交通", "龙山站 (용산역) → 无穷花号 → 温阳温泉站 (온양온천역)（也可以坐首都圈地铁 1 号线）"],
        ["从首尔出发", "无穷花号约 1 小时 30 分钟 · 1 号线 2 小时以上"],
        ["单程费用", "无穷花号 7,000 韩元 · 1 号线按交通卡地铁票价"],
        ["当地交通", "温泉和市场在车站附近可以步行，外岩民俗村坐市内公交"]
      ],
      days: [
        { label: "DAY 1", stops: ["温阳温泉站", "温阳温泉市场", "温泉体验", "住宿"] },
        { label: "DAY 2", stops: ["外岩民俗村 (외암민속마을)", "传统文化体验", "返回首尔"] }
      ],
      sights: ["温阳温泉 (온양온천)", "温阳温泉市场", "外岩民俗村 (외암민속마을)"],
      culture: { name: "Traditional Village & Onsen Trip", text: "参观传统韩国村落，再体验温泉的两天一夜路线。" },
      why: "和首尔的宫殿观光不同，可以亲眼看到韩国传统村落和生活的样子。",
      extra: { label: "查看正在进行的体验活动", map: "외암민속마을" },
      vlog: { query: "외암민속마을 온양온천 브이로그" },
      food: ["温阳温泉市场汤饭 (국밥)", "外岩村莲叶酒 (연엽주 · 传统酒，仅限成人)"]
    },
    chungju: {
      name: "忠州 (충주)",
      tag: "游览中央塔与弹琴湖的两天一夜",
      duration: "两天一夜",
      themes: ["自然", "历史", "散步", "体验"],
      overview: { time: "约 1 小时 5 分钟起", fare: "12,300 韩元", main: "KTX-이음 (板桥出发)" },
      facts: [
        ["交通", "板桥站 → KTX-이음 → 忠州站 (충주역)（每天只有 4 班，一定要确认时间）"],
        ["从首尔出发", "从板桥站约 1 小时 5 分钟"],
        ["单程费用", "KTX-이음 12,300 韩元"],
        ["当地交通", "从忠州站坐市内公交或出租车去中央塔史迹公园"]
      ],
      days: [
        { label: "DAY 1", stops: ["忠州站", "中央塔史迹公园", "忠州博物馆", "弹琴湖散步"] },
        { label: "DAY 2", stops: ["弹琴湖骑车或游船", "周边历史景点", "回程"] }
      ],
      sights: ["中央塔史迹公园 (统一新罗七层石塔)", "忠州博物馆", "弹琴湖 (탄금호)"],
      culture: { name: "Lakeside Ride", flow: ["租自行车", "弹琴湖电动游船"], note: "自行车和游船的运营时间随季节变化，出发前请确认。" },
      why: "比起人多的景点，更想慢慢享受宽阔的江边和历史公园，就选忠州。以中央塔和弹琴湖为中心，散步和体验都能兼顾。",
      vlog: { query: "충주 탄금호 중앙탑 여행 브이로그" },
      food: ["石螺汤 (올갱이국)", "忠州苹果"]
    },
    jecheon: {
      name: "堤川 (제천)",
      tag: "坐火车出发的三天两夜疗愈之旅",
      duration: "三天两夜",
      themes: ["自然", "疗愈", "拍照", "地方文化"],
      overview: { time: "约 1 小时 10 分钟起", fare: "9,200~15,400 韩元", main: "KTX-이음 · 无穷花号" },
      facts: [
        ["交通", "清凉里站 (청량리역) → KTX-이음 → 堤川站 (제천역)"],
        ["从首尔出发", "KTX-이음 约 1 小时 10 分钟 · 无穷花号约 1 小时 40 分钟"],
        ["单程费用", "KTX-이음 15,400 韩元 · 无穷花号 9,200 韩元"],
        ["当地交通", "去义林池坐 31 · 35 路公交。清风湖一带公交很少，也可以考虑观光出租车（5 小时 60,000 韩元，最多 4 人）。"]
      ],
      days: [
        { label: "DAY 1", title: "堤川的历史与自然", stops: ["堤川站", "义林池 (의림지)", "龙湫瀑布 (용추폭포)", "堤川市区 · 传统市场"] },
        { label: "DAY 2", title: "清风湖", stops: ["清风文化遗产园区", "清风湖畔缆车", "清风湖周边"] },
        { label: "DAY 3", title: "疗愈", stops: ["净芳寺 (정방사) 或自然 · 疗愈体验", "堤川站", "首尔"] }
      ],
      sights: ["义林池 (의림지)", "清风湖 (청풍호)", "清风文化遗产园区", "清风湖畔缆车"],
      why: "坐 KTX 很快就能到，却能看到和城市完全不同的自然风景。比起一日游，更推荐悠闲地玩三天两夜。",
      vlog: { query: "제천 여행 청풍호반 케이블카 의림지 브이로그" },
      food: ["红鱼饼串 (빨간오뎅 · 堤川中央市场)", "药膳料理 약채락"]
    },
    gongbu: {
      name: "公州 · 扶余 (공주 · 부여)",
      tag: "百济文化三天两夜",
      duration: "三天两夜",
      themes: ["百济历史", "韩屋", "传统文化"],
      overview: { time: "约 1 小时 50 分钟起", fare: "14,900 韩元起", main: "高速巴士" },
      facts: [
        ["交通", "首尔高速巴士客运站 → 高速巴士 → 公州，公州 → 巴士 → 扶余"],
        ["从首尔出发", "到公州约 1 小时 50 分钟 · 公州到扶余约 40~50 分钟"],
        ["单程费用", "首尔→公州 优等 14,900 韩元 · 公州→扶余 5,900~7,700 韩元"],
        ["当地交通", "市内公交和出租车。公州、扶余的景点都集中在市区。"]
      ],
      days: [
        { label: "DAY 1", title: "公州", stops: ["到达公州", "国立公州博物馆", "武宁王陵与王陵园", "住公州韩屋村"] },
        { label: "DAY 2", title: "公州 → 扶余", stops: ["公山城", "公州山城市场", "前往扶余", "国立扶余博物馆", "宫南池"] },
        { label: "DAY 3", title: "扶余", stops: ["扶苏山城", "定林寺址或百济文化园区", "回程"] }
      ],
      sights: ["公山城 (공산성)", "武宁王陵与王陵园", "国立公州博物馆", "扶苏山城 (부소산성)", "宫南池 (궁남지)", "定林寺址 (정림사지)"],
      culture: { name: "Baekje Hanok Stay", text: "在公州韩屋村住一晚，体验韩屋生活。看过百济王陵和山城之后，会更有感觉。" },
      why: "追寻韩国古代王国“百济”的三天两夜。串联王陵、山城、韩屋和博物馆，深入体验韩国历史。",
      vlog: { query: "공주 부여 백제 여행 브이로그" },
      food: ["公州栗子甜点", "扶余莲叶饭 (연잎밥)"]
    },
    gangneung: {
      name: "江陵 (강릉)",
      tag: "以大海和咖啡馆为主的三天两夜",
      duration: "三天两夜",
      themes: ["大海", "咖啡馆", "拍照", "休息"],
      overview: { time: "约 1 小时 30 分钟起", fare: "26,000 韩元", main: "KTX-이음" },
      facts: [
        ["交通", "清凉里站 · 首尔站 → KTX-이음 → 江陵站 (강릉역)"],
        ["从首尔出发", "从清凉里站约 1 小时 30 分钟~1 小时 50 分钟"],
        ["单程费用", "KTX-이음 26,000 韩元 (清凉里出发)"],
        ["当地交通", "市内公交和出租车。按区域分开，一天去一个区域比较轻松。"]
      ],
      days: [
        { label: "DAY 1", title: "旧城区 · 安木", stops: ["江陵站", "旧城区", "安木咖啡街 (안목 커피거리)", "海边散步"] },
        { label: "DAY 2", title: "草堂 · 镜浦", stops: ["乌竹轩 (오죽헌)", "草堂洞 (초당동)", "镜浦湖", "镜浦海滩"] },
        { label: "DAY 3", title: "正东津", stops: ["正东津 (정동진)", "海边散步", "江陵站", "首尔"] }
      ],
      sights: ["安木咖啡街", "乌竹轩 (오죽헌)", "镜浦湖 · 镜浦海滩", "正东津 (정동진)"],
      culture: { name: "Coffee & Sea", text: "在安木咖啡街边看海边喝咖啡，在草堂洞尝尝草堂嫩豆腐 (초당순두부)。" },
      why: "坐火车直达大海。想悠闲地拍照、逛咖啡馆、走海边，就推荐江陵。",
      vlog: { query: "강릉 2박3일 안목 경포 정동진 브이로그" },
      food: ["草堂嫩豆腐 (초당순두부)", "辣酱刀切面 (장칼국수)", "安木咖啡"]
    }
  },
  ja: {
    seongbuk: {
      name: "ソウル 城北洞",
      tag: "かくれたソウルの文化さんぽ",
      duration: "日帰り",
      themes: ["文学", "韓屋", "静かなソウル"],
      overview: { time: "約30分前後", fare: "1,550ウォン", main: "地下鉄4号線" },
      facts: [
        ["交通", "地下鉄4号線 漢城大入口駅 (한성대입구역) から徒歩、または城北02 マウルバス"],
        ["ソウルから", "ソウル市内から約30分前後"],
        ["片道料金", "1,550ウォン（交通カードの地下鉄基本料金）"],
        ["現地での移動", "坂道が多いです。歩き疲れたら城北02 マウルバスに乗りましょう。"]
      ],
      days: [
        { label: "日帰り", stops: ["漢城大入口駅", "崔淳雨旧宅 (최순우 옛집)", "寿硯山房 (수연산방)", "尋牛荘 (심우장)", "吉祥寺 (길상사)"] }
      ],
      sights: ["崔淳雨旧宅 (최순우 옛집)", "寿硯山房 (수연산방)", "尋牛荘 (심우장)", "吉祥寺 (길상사)"],
      culture: { name: "Hidden Seoul Walk", flow: ["美術史学者の韓屋", "小説家の旧宅", "韓龍雲の家", "お寺さんぽ"], note: "寿硯山房は小説家・李泰俊の旧宅で、いまは伝統茶房なので韓屋でお茶が飲めます。" },
      why: "北村より静かで、聖水より古いソウルを歩きたいなら城北洞へ。文学者の家や韓屋、お寺をたどって、ソウルのかくれた物語に出会えます。",
      vlog: { query: "성북동 길상사 심우장 산책 브이로그" },
      food: ["カルグクス (칼국수)", "韓屋茶房の伝統茶"]
    },
    yangpyeong: {
      name: "楊平 (양평)",
      tag: "地下鉄で行く自然旅",
      duration: "日帰り",
      themes: ["自然", "コスパ", "写真", "サイクリング"],
      overview: { time: "約1~1.5時間", fare: "2,000ウォン台", main: "京義・中央線" },
      facts: [
        ["交通", "京義・中央線 → 両水駅 (양수역)。切符の予約なしで首都圏の電車で行けます。"],
        ["ソウルから", "約1~1.5時間（出発駅によって変わります）"],
        ["片道料金", "約2,000ウォン台（交通カードの電車料金）"],
        ["現地での移動", "両水駅から歩いて洗美苑 · ドゥムルモリへ"]
      ],
      days: [
        { label: "日帰り", stops: ["両水駅 (양수역)", "両水里エリア", "洗美苑 (세미원)", "ドゥムルモリ (두물머리)", "両水駅"] }
      ],
      sights: ["ドゥムルモリ (두물머리)", "洗美苑 (세미원)", "北漢江の風景"],
      culture: { name: "川辺サイクリング · 庭園散歩", flow: ["サイクリング", "庭園散歩", "写真撮影"] },
      why: "交通費が安く、ソウルから気軽に行けるので、留学生のはじめての近郊旅行におすすめです。",
      vlog: {
        query: "양평 두물머리 세미원 브이로그",
        items: [
          { title: "楊平旅行 Vlog (韓国語)", summary: "楊平を実際に旅する様子をおさめた Vlog です。出かける前に、移動ルートや現地の雰囲気を確かめてみましょう。" }
        ]
      },
      food: ["ヤンピョン・ヘジャンクク (양평해장국)", "ドゥムルモリの蓮ホットドッグ (연핫도그)"]
    },
    yeoju: {
      name: "驪州 (여주)",
      tag: "ハングルと朝鮮の歴史をたどる旅",
      duration: "日帰り",
      themes: ["歴史", "伝統文化", "自然"],
      overview: { time: "約1~1.5時間", fare: "2,000ウォン台", main: "京江線" },
      facts: [
        ["交通", "板橋駅で京江線に乗り換え → 驪州駅 (여주역)"],
        ["ソウルから", "約1~1.5時間（出発駅によって変わります）"],
        ["片道料金", "約2,000ウォン台（交通カードの電車料金）"],
        ["現地での移動", "驪州駅から市内バスかタクシーで世宗大王陵 · 神勒寺へ"]
      ],
      days: [
        { label: "日帰り", stops: ["驪州駅", "世宗大王陵 (세종대왕릉)", "神勒寺 (신륵사)", "南漢江さんぽ"] }
      ],
      sights: ["世宗大王陵 (세종대왕릉)", "神勒寺 (신륵사)", "南漢江"],
      culture: { name: "Hangul & Joseon History Trip", text: "ハングルをつくった世宗大王の陵を見て、南漢江沿いのお寺・神勒寺まで続く歴史コースです。" },
      why: "韓国語を勉強しているなら一度は行きたい旅。ハングルをつくった世宗大王の物語をたどり、南漢江のお寺の風景もいっしょに楽しめます。",
      vlog: {
        query: "여주 세종대왕릉 신륵사 브이로그",
        items: [
          { title: "驪州旅行 Vlog (韓国語)", summary: "驪州を実際に旅する様子をおさめた Vlog です。出かける前に、移動ルートや現地の雰囲気を確かめてみましょう。" },
          { title: "驪州旅行ショート (韓国語)", summary: "驪州旅行の雰囲気を短く見られるショート動画です。" }
        ]
      },
      food: ["驪州のお米の定食 (쌀밥 정식)", "驪州のさつまいも"]
    },
    wonju: {
      name: "原州 (원주)",
      tag: "自分で韓紙をつくるローカル文化旅",
      duration: "1泊2日",
      themes: ["韓国文化", "伝統工芸", "ローカル市場"],
      overview: { time: "約50分~", fare: "6,200~10,100ウォン", main: "KTX-イウム · ムグンファ号" },
      facts: [
        ["交通", "清凉里駅 (청량리역) → KTX-イウム またはムグンファ号 → 原州駅 (원주역)"],
        ["ソウルから", "KTX-イウム 約50分 · ムグンファ号 約1時間10分~"],
        ["片道料金", "KTX-イウム 10,100ウォン · ムグンファ号 6,200ウォン"],
        ["現地での移動", "原州駅から市内バスかタクシーで"]
      ],
      days: [
        { label: "DAY 1", title: "韓紙体験", stops: ["原州駅", "原州韓紙テーマパーク", "江原監営 (강원감영)", "原州中央市場 · 迷路芸術市場 (미로예술시장)"] },
        { label: "DAY 2", title: "自然 · ローカル", stops: ["小金山グランドバレー (소금산 그랜드밸리 · 任意)", "原州駅", "ソウル"] }
      ],
      sights: ["原州韓紙テーマパーク (원주한지테마파크)", "江原監営 (강원감영)", "原州中央市場"],
      culture: { name: "Korean Hanji Day", flow: ["韓紙の歴史を見学", "韓紙づくり体験", "江原監営", "伝統市場"], note: "体験は開催日と予約の要否を事前に確認してください。" },
      why: "韓国の伝統的な紙「韓紙」を自分の手でつくれます。見るだけの観光より、韓国文化を深く体験できます。",
      vlog: { query: "원주 뚜벅이 여행 한지테마파크 브이로그" },
      food: ["チュオタン (추어탕 · どじょうスープ)", "中央市場のマンドゥ · カルグクス"]
    },
    asan: {
      name: "牙山 (아산)",
      tag: "伝統の村と温泉をいっしょに楽しむ旅",
      duration: "1泊2日",
      themes: ["伝統文化", "温泉", "ローカル市場"],
      overview: { time: "約1.5~2時間", fare: "7,000ウォン~", main: "ムグンファ号 · 1号線" },
      facts: [
        ["交通", "龍山駅 (용산역) → ムグンファ号 → 温陽温泉駅 (온양온천역)（首都圏電車1号線でも行けます）"],
        ["ソウルから", "ムグンファ号 約1時間30分 · 1号線 2時間以上"],
        ["片道料金", "ムグンファ号 7,000ウォン · 1号線は交通カードの電車料金"],
        ["現地での移動", "温泉と市場は駅の近くなので徒歩で、外岩民俗村へは市内バスで"]
      ],
      days: [
        { label: "DAY 1", stops: ["温陽温泉駅", "温陽温泉市場", "温泉体験", "宿泊"] },
        { label: "DAY 2", stops: ["外岩民俗村 (외암민속마을)", "伝統文化体験", "ソウルへ"] }
      ],
      sights: ["温陽温泉 (온양온천)", "温陽温泉市場", "外岩民俗村 (외암민속마을)"],
      culture: { name: "Traditional Village & Onsen Trip", text: "韓国の伝統的な村を見て、温泉まで楽しむ1泊2日のコースです。" },
      why: "ソウルの宮殿めぐりとは違い、韓国の伝統的な村と暮らしの様子を直接見られます。",
      extra: { label: "いま開催中の体験を確認する", map: "외암민속마을" },
      vlog: { query: "외암민속마을 온양온천 브이로그" },
      food: ["温陽温泉市場のクッパ (국밥)", "外岩村の蓮葉酒 (연엽주 · 伝統酒、成人のみ)"]
    },
    chungju: {
      name: "忠州 (충주)",
      tag: "中央塔と弾琴湖を楽しむ1泊2日",
      duration: "1泊2日",
      themes: ["自然", "歴史", "さんぽ", "体験"],
      overview: { time: "約1時間5分~", fare: "12,300ウォン", main: "KTX-イウム (板橋発)" },
      facts: [
        ["交通", "板橋駅 → KTX-イウム → 忠州駅 (충주역)（1日4本なので時間を必ず確認）"],
        ["ソウルから", "板橋駅から約1時間5分"],
        ["片道料金", "KTX-イウム 12,300ウォン"],
        ["現地での移動", "忠州駅から市内バスかタクシーで中央塔史跡公園へ"]
      ],
      days: [
        { label: "DAY 1", stops: ["忠州駅", "中央塔史跡公園", "忠州博物館", "弾琴湖さんぽ"] },
        { label: "DAY 2", stops: ["弾琴湖サイクリングまたは遊覧船", "周辺の歴史スポット", "帰路"] }
      ],
      sights: ["中央塔史跡公園（統一新羅の七重石塔）", "忠州博物館", "弾琴湖 (탄금호)"],
      culture: { name: "Lakeside Ride", flow: ["レンタサイクル", "弾琴湖の電気遊覧船"], note: "自転車と遊覧船は季節によって運営時間が変わります。出発前に確認しましょう。" },
      why: "人の多い観光地より、広い川辺と歴史公園をゆっくり楽しみたいなら忠州。中央塔と弾琴湖を中心に、さんぽと体験をいっしょに楽しめます。",
      vlog: { query: "충주 탄금호 중앙탑 여행 브이로그" },
      food: ["オルゲンイクク (올갱이국 · カワニナのスープ)", "忠州のりんご"]
    },
    jecheon: {
      name: "堤川 (제천)",
      tag: "電車で行く2泊3日のいやし旅",
      duration: "2泊3日",
      themes: ["自然", "いやし", "写真", "地域文化"],
      overview: { time: "約1時間10分~", fare: "9,200~15,400ウォン", main: "KTX-イウム · ムグンファ号" },
      facts: [
        ["交通", "清凉里駅 (청량리역) → KTX-イウム → 堤川駅 (제천역)"],
        ["ソウルから", "KTX-イウム 約1時間10分 · ムグンファ号 約1時間40分"],
        ["片道料金", "KTX-イウム 15,400ウォン · ムグンファ号 9,200ウォン"],
        ["現地での移動", "義林池へは31 · 35番バス。清風湖のほうはバスが少ないので、観光タクシー（5時間 60,000ウォン、4人まで）も選択肢です。"]
      ],
      days: [
        { label: "DAY 1", title: "堤川の歴史と自然", stops: ["堤川駅", "義林池 (의림지)", "龍湫滝 (용추폭포)", "堤川市内 · 伝統市場"] },
        { label: "DAY 2", title: "清風湖", stops: ["清風文化遺産団地", "清風湖畔ケーブルカー", "清風湖周辺"] },
        { label: "DAY 3", title: "いやし", stops: ["浄芳寺 (정방사) または自然 · ヒーリング体験", "堤川駅", "ソウル"] }
      ],
      sights: ["義林池 (의림지)", "清風湖 (청풍호)", "清風文化遺産団地", "清風湖畔ケーブルカー"],
      why: "KTX で比較的はやく行けるのに、都会とはまったく違う自然が楽しめます。日帰りより、2泊3日でゆっくり回るのがおすすめです。",
      vlog: { query: "제천 여행 청풍호반 케이블카 의림지 브이로그" },
      food: ["赤いおでん (빨간오뎅 · 堤川中央市場)", "薬膳料理 약채락"]
    },
    gongbu: {
      name: "公州 · 扶餘 (공주 · 부여)",
      tag: "百済文化の2泊3日",
      duration: "2泊3日",
      themes: ["百済の歴史", "韓屋", "伝統文化"],
      overview: { time: "約1時間50分~", fare: "14,900ウォン~", main: "高速バス" },
      facts: [
        ["交通", "ソウル高速バスターミナル → 高速バス → 公州、公州 → バス → 扶餘"],
        ["ソウルから", "公州まで約1時間50分 · 公州から扶餘まで約40~50分"],
        ["片道料金", "ソウル→公州 優等 14,900ウォン · 公州→扶餘 5,900~7,700ウォン"],
        ["現地での移動", "市内バスとタクシー。公州も扶餘も見どころが市内に集まっています。"]
      ],
      days: [
        { label: "DAY 1", title: "公州", stops: ["公州に到着", "国立公州博物館", "武寧王陵と王陵園", "公州韓屋村に宿泊"] },
        { label: "DAY 2", title: "公州 → 扶餘", stops: ["公山城", "公州 山城市場", "扶餘へ移動", "国立扶餘博物館", "宮南池"] },
        { label: "DAY 3", title: "扶餘", stops: ["扶蘇山城", "定林寺址または百済文化団地", "帰路"] }
      ],
      sights: ["公山城 (공산성)", "武寧王陵と王陵園", "国立公州博物館", "扶蘇山城 (부소산성)", "宮南池 (궁남지)", "定林寺址 (정림사지)"],
      culture: { name: "Baekje Hanok Stay", text: "公州韓屋村に1泊して、韓屋の暮らしを体験してみましょう。百済の王陵や山城を見たあとだと、より特別に感じられます。" },
      why: "韓国の古代王国「百済」をたどる2泊3日。王陵、山城、韓屋、博物館をつないで、韓国の歴史を深く体験できます。",
      vlog: { query: "공주 부여 백제 여행 브이로그" },
      food: ["公州の栗スイーツ", "扶餘の蓮の葉ごはん (연잎밥)"]
    },
    gangneung: {
      name: "江陵 (강릉)",
      tag: "海とカフェ中心の2泊3日",
      duration: "2泊3日",
      themes: ["海", "カフェ", "写真", "休息"],
      overview: { time: "約1時間30分~", fare: "26,000ウォン", main: "KTX-イウム" },
      facts: [
        ["交通", "清凉里駅 · ソウル駅 → KTX-イウム → 江陵駅 (강릉역)"],
        ["ソウルから", "清凉里駅から約1時間30分~1時間50分"],
        ["片道料金", "KTX-イウム 26,000ウォン（清凉里発）"],
        ["現地での移動", "市内バスとタクシー。エリアを分けて1日1エリアずつ回ると楽です。"]
      ],
      days: [
        { label: "DAY 1", title: "旧市街 · アンモク", stops: ["江陵駅", "旧市街", "アンモク コーヒー通り (안목 커피거리)", "海辺さんぽ"] },
        { label: "DAY 2", title: "草堂 · 鏡浦", stops: ["烏竹軒 (오죽헌)", "草堂洞 (초당동)", "鏡浦湖", "鏡浦海水浴場"] },
        { label: "DAY 3", title: "正東津", stops: ["正東津 (정동진)", "海辺さんぽ", "江陵駅", "ソウル"] }
      ],
      sights: ["アンモク コーヒー通り", "烏竹軒 (오죽헌)", "鏡浦湖 · 鏡浦海水浴場", "正東津 (정동진)"],
      culture: { name: "Coffee & Sea", text: "アンモク コーヒー通りで海を見ながらコーヒーを飲み、草堂洞ではチョダン・スンドゥブ (초당순두부) を味わってみましょう。" },
      why: "電車に乗って海まで。写真やカフェ、海辺をのんびり楽しみたいなら江陵がおすすめです。",
      vlog: { query: "강릉 2박3일 안목 경포 정동진 브이로그" },
      food: ["チョダン・スンドゥブ (초당순두부)", "チャンカルグクス (장칼국수)", "アンモクのコーヒー"]
    }
  }
};

/* English (2026.11) — same structure as ko */
window.SL.places.en = {
  "seongbuk": {
    "name": "Seongbuk-dong, Seoul",
    "tag": "A hidden Seoul culture walk",
    "duration": "Day trip",
    "themes": [
      "Literature",
      "Hanok",
      "Quiet Seoul"
    ],
    "overview": {
      "time": "About 30 min",
      "fare": "1,550 won",
      "main": "Subway Line 4"
    },
    "facts": [
      [
        "Transport",
        "From Hansung Univ. Station (Line 4), walk or take village bus Seongbuk 02"
      ],
      [
        "From Seoul",
        "About 30 min from central Seoul"
      ],
      [
        "One-way fare",
        "1,550 won (basic subway fare with a transport card)"
      ],
      [
        "Getting around",
        "A hilly area. If walking gets tiring, take village bus Seongbuk 02."
      ]
    ],
    "days": [
      {
        "label": "Day",
        "stops": [
          "Hansung Univ. Station",
          "Choi Sun-u's Old House",
          "Suyeon Sanbang",
          "Simujang",
          "Gilsangsa Temple"
        ]
      }
    ],
    "sights": [
      "Choi Sun-u's Old House",
      "Suyeon Sanbang",
      "Simujang",
      "Gilsangsa Temple"
    ],
    "culture": {
      "name": "Hidden Seoul walk",
      "flow": [
        "An art historian's hanok",
        "A novelist's old house",
        "Han Yong-un's house",
        "Temple walk"
      ],
      "note": "Suyeon Sanbang is novelist Lee Tae-jun's old house. It's now a traditional tea house, so you can have tea inside a hanok."
    },
    "why": "Want to walk an older Seoul that's quieter than Bukchon? Try Seongbuk-dong. Follow writers' houses, hanok and a temple to discover Seoul's hidden stories.",
    "vlog": {
      "query": "성북동 길상사 심우장 산책 브이로그"
    },
    "food": [
      "Kalguksu (knife-cut noodles)",
      "Traditional tea at a hanok tea house"
    ]
  },
  "yangpyeong": {
    "name": "Yangpyeong",
    "tag": "A nature trip by subway",
    "duration": "Day trip",
    "themes": [
      "Nature",
      "Budget-friendly",
      "Photos",
      "Cycling"
    ],
    "overview": {
      "time": "About 1–1.5 h",
      "fare": "About 2,000 won",
      "main": "Gyeongui–Jungang Line"
    },
    "facts": [
      [
        "Transport",
        "Gyeongui–Jungang Line → Yangsu Station. A metropolitan subway line, so no train ticket booking needed."
      ],
      [
        "From Seoul",
        "About 1–1.5 h (depends on your starting station)"
      ],
      [
        "One-way fare",
        "About 2,000 won (subway fare with a transport card)"
      ],
      [
        "Getting around",
        "Walk from Yangsu Station to Semiwon and Dumulmeori"
      ]
    ],
    "days": [
      {
        "label": "Day",
        "stops": [
          "Yangsu Station",
          "Yangsu-ri area",
          "Semiwon",
          "Dumulmeori",
          "Yangsu Station"
        ]
      }
    ],
    "sights": [
      "Dumulmeori",
      "Semiwon",
      "Bukhangang River views"
    ],
    "culture": {
      "name": "Riverside cycling · garden walk",
      "flow": [
        "Cycling trip",
        "Garden walk",
        "Photography"
      ]
    },
    "why": "Cheap to get to and easy to reach from Seoul. Our pick for students' first trip outside the city.",
    "vlog": {
      "query": "양평 두물머리 세미원 브이로그",
      "items": [
        {
          "title": "Yangpyeong travel vlog",
          "summary": "A vlog of a real trip to Yangpyeong. Useful for checking the route and atmosphere before you go."
        }
      ]
    },
    "food": [
      "Yangpyeong haejang-guk (hangover soup)",
      "Dumulmeori lotus hot dog"
    ]
  },
  "yeoju": {
    "name": "Yeoju",
    "tag": "A trip following Hangeul and Joseon history",
    "duration": "Day trip",
    "themes": [
      "History",
      "Traditional culture",
      "Nature"
    ],
    "overview": {
      "time": "About 1–1.5 h",
      "fare": "About 2,000 won",
      "main": "Gyeonggang Line"
    },
    "facts": [
      [
        "Transport",
        "From Pangyo Station, Gyeonggang Line → Yeoju Station"
      ],
      [
        "From Seoul",
        "About 1–1.5 h (depends on your starting station)"
      ],
      [
        "One-way fare",
        "About 2,000 won (subway fare with a transport card)"
      ],
      [
        "Getting around",
        "From Yeoju Station, take a city bus or taxi to the Royal Tomb of King Sejong and Silleuksa Temple"
      ]
    ],
    "days": [
      {
        "label": "Day",
        "stops": [
          "Yeoju Station",
          "Royal Tomb of King Sejong",
          "Silleuksa Temple",
          "Namhangang River walk"
        ]
      }
    ],
    "sights": [
      "Royal Tomb of King Sejong",
      "Silleuksa Temple",
      "Namhangang River"
    ],
    "culture": {
      "name": "Hangeul & Joseon history trip",
      "text": "A history route from the tomb of King Sejong, who created Hangeul, to Silleuksa, a temple on the Namhangang River."
    },
    "why": "Worth a visit if you're learning Korean. Enjoy the story of King Sejong, who created Hangeul, together with riverside temple views.",
    "vlog": {
      "query": "여주 세종대왕릉 신륵사 브이로그",
      "items": [
        {
          "title": "Yeoju travel vlog",
          "summary": "A vlog of a real trip to Yeoju. Useful for checking the route and atmosphere before you go."
        },
        {
          "title": "Yeoju travel shorts",
          "summary": "A short video that captures the mood of a Yeoju trip."
        }
      ]
    },
    "food": [
      "Yeoju rice set meal",
      "Yeoju sweet potatoes"
    ]
  },
  "wonju": {
    "name": "Wonju",
    "tag": "A local culture trip where you make hanji yourself",
    "duration": "1 night, 2 days",
    "themes": [
      "Korean culture",
      "Traditional crafts",
      "Local markets"
    ],
    "overview": {
      "time": "About 50 min+",
      "fare": "6,200–10,100 won",
      "main": "KTX-Eum · Mugunghwa"
    },
    "facts": [
      [
        "Transport",
        "Cheongnyangni Station → KTX-Eum or Mugunghwa → Wonju Station"
      ],
      [
        "From Seoul",
        "KTX-Eum about 50 min · Mugunghwa about 1 h 10 min+"
      ],
      [
        "One-way fare",
        "KTX-Eum 10,100 won · Mugunghwa 6,200 won"
      ],
      [
        "Getting around",
        "From Wonju Station, get around by city bus or taxi"
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "title": "Hanji workshop",
        "stops": [
          "Wonju Station",
          "Wonju Hanji Theme Park",
          "Gangwon Gamyeong (provincial office)",
          "Wonju Jungang Market · Miro Art Market"
        ]
      },
      {
        "label": "DAY 2",
        "title": "Nature · local",
        "stops": [
          "Sogeumsan Grand Valley (optional)",
          "Wonju Station",
          "Seoul"
        ]
      }
    ],
    "sights": [
      "Wonju Hanji Theme Park",
      "Gangwon Gamyeong",
      "Wonju Jungang Market"
    ],
    "culture": {
      "name": "Hanji experience trip",
      "flow": [
        "Learn hanji history",
        "Make your own hanji",
        "Gangwon Gamyeong",
        "Traditional market"
      ],
      "note": "Check opening days and whether booking is needed before the workshop."
    },
    "why": "Make hanji, Korea's traditional paper, with your own hands. A deeper way into Korean culture than just sightseeing.",
    "vlog": {
      "query": "원주 뚜벅이 여행 한지테마파크 브이로그"
    },
    "food": [
      "Chueo-tang (loach soup)",
      "Jungang Market dumplings · kalguksu"
    ]
  },
  "asan": {
    "name": "Asan",
    "tag": "A trip combining a traditional village and hot springs",
    "duration": "1 night, 2 days",
    "themes": [
      "Traditional culture",
      "Hot springs",
      "Local markets"
    ],
    "overview": {
      "time": "About 1.5–2 h",
      "fare": "From 7,000 won",
      "main": "Mugunghwa · Line 1"
    },
    "facts": [
      [
        "Transport",
        "Yongsan Station → Mugunghwa → Onyangoncheon Station (also reachable by metropolitan subway Line 1)"
      ],
      [
        "From Seoul",
        "Mugunghwa about 1 h 30 min · Line 1 over 2 h"
      ],
      [
        "One-way fare",
        "Mugunghwa 7,000 won · Line 1 at subway fare with a transport card"
      ],
      [
        "Getting around",
        "The hot springs and market are walkable from the station; take a city bus to Oeam Folk Village"
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "stops": [
          "Onyangoncheon Station",
          "Onyang Oncheon Market",
          "Hot spring",
          "Overnight stay"
        ]
      },
      {
        "label": "DAY 2",
        "stops": [
          "Oeam Folk Village",
          "Traditional culture experience",
          "Back to Seoul"
        ]
      }
    ],
    "sights": [
      "Onyang Hot Springs",
      "Onyang Oncheon Market",
      "Oeam Folk Village"
    ],
    "culture": {
      "name": "Traditional village & hot spring trip",
      "text": "A 1-night, 2-day route combining a Korean traditional village and hot springs."
    },
    "why": "Unlike palace sightseeing in Seoul, you can see a traditional Korean village and everyday life up close.",
    "extra": {
      "label": "See current programs",
      "map": "외암민속마을"
    },
    "vlog": {
      "query": "외암민속마을 온양온천 브이로그"
    },
    "food": [
      "Gukbap at Onyang Oncheon Market",
      "Yeonyeopju from Oeam Village (traditional liquor · adults only)"
    ]
  },
  "chungju": {
    "name": "Chungju",
    "tag": "1 night, 2 days at Jungang Tower and Tangeum Lake",
    "duration": "1 night, 2 days",
    "themes": [
      "Nature",
      "History",
      "Walks",
      "Activities"
    ],
    "overview": {
      "time": "About 1 h 5 min+",
      "fare": "12,300 won",
      "main": "KTX-Eum (from Pangyo)"
    },
    "facts": [
      [
        "Transport",
        "Pangyo Station → KTX-Eum → Chungju Station (only 4 trains a day, so check the times)"
      ],
      [
        "From Seoul",
        "About 1 h 5 min from Pangyo Station"
      ],
      [
        "One-way fare",
        "KTX-Eum 12,300 won"
      ],
      [
        "Getting around",
        "From Chungju Station, take a city bus or taxi to Jungang Tower Historical Park"
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "stops": [
          "Chungju Station",
          "Jungang Tower Historical Park",
          "Chungju Museum",
          "Tangeum Lake walk"
        ]
      },
      {
        "label": "DAY 2",
        "stops": [
          "Tangeum Lake cycling or boat cruise",
          "Nearby historic sites",
          "Head home"
        ]
      }
    ],
    "sights": [
      "Jungang Tower Historical Park (Unified Silla seven-story stone pagoda)",
      "Chungju Museum",
      "Tangeum Lake"
    ],
    "culture": {
      "name": "Tangeum Lake cycling · boat cruise",
      "flow": [
        "Bike rental",
        "Tangeum Lake electric cruise boat"
      ],
      "note": "Bike and cruise hours change with the season. Check before you go."
    },
    "why": "Choose Chungju if you'd rather take your time along a wide riverside and historic park than crowd into busy sights. Walks and activities center on Jungang Tower and Tangeum Lake.",
    "vlog": {
      "query": "충주 탄금호 중앙탑 여행 브이로그"
    },
    "food": [
      "Olgaengi-guk (freshwater snail soup)",
      "Chungju apples"
    ]
  },
  "jecheon": {
    "name": "Jecheon",
    "tag": "A 2-night, 3-day healing trip by train",
    "duration": "2 nights, 3 days",
    "themes": [
      "Nature",
      "Healing",
      "Photos",
      "Local culture"
    ],
    "overview": {
      "time": "About 1 h 10 min+",
      "fare": "9,200–15,400 won",
      "main": "KTX-Eum · Mugunghwa"
    },
    "facts": [
      [
        "Transport",
        "Cheongnyangni Station → KTX-Eum → Jecheon Station"
      ],
      [
        "From Seoul",
        "KTX-Eum about 1 h 10 min · Mugunghwa about 1 h 40 min"
      ],
      [
        "One-way fare",
        "KTX-Eum 15,400 won · Mugunghwa 9,200 won"
      ],
      [
        "Getting around",
        "Take bus 31 or 35 to Uirimji. For Cheongpung Lake, where buses are few, a tour taxi (60,000 won for 5 hours, up to 4 people) is also an option."
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "title": "Jecheon's history and nature",
        "stops": [
          "Jecheon Station",
          "Uirimji Reservoir",
          "Yongchu Falls",
          "Downtown Jecheon · traditional market"
        ]
      },
      {
        "label": "DAY 2",
        "title": "Cheongpung Lake",
        "stops": [
          "Cheongpung Cultural Heritage Complex",
          "Cheongpung Lakeside Cable Car",
          "Around Cheongpung Lake"
        ]
      },
      {
        "label": "DAY 3",
        "title": "Healing",
        "stops": [
          "Jeongbangsa Temple or a nature · wellness program",
          "Jecheon Station",
          "Seoul"
        ]
      }
    ],
    "sights": [
      "Uirimji Reservoir",
      "Cheongpung Lake",
      "Cheongpung Cultural Heritage Complex",
      "Cheongpung Lakeside Cable Car"
    ],
    "why": "Nature outside the city, fairly quick by KTX. We recommend a relaxed 2 nights, 3 days rather than a day trip.",
    "vlog": {
      "query": "제천 여행 청풍호반 케이블카 의림지 브이로그"
    },
    "food": [
      "Red fish cakes (Jecheon Jungang Market)",
      "Yakchaerak (herbal medicine cuisine)"
    ]
  },
  "gongbu": {
    "name": "Gongju · Buyeo",
    "tag": "2 nights, 3 days of Baekje culture",
    "duration": "2 nights, 3 days",
    "themes": [
      "Baekje history",
      "Hanok",
      "Traditional culture"
    ],
    "overview": {
      "time": "About 1 h 50 min+",
      "fare": "From 14,900 won",
      "main": "Express bus"
    },
    "facts": [
      [
        "Transport",
        "Seoul Express Bus Terminal → express bus → Gongju, then Gongju → bus → Buyeo"
      ],
      [
        "From Seoul",
        "About 1 h 50 min to Gongju · about 40–50 min from Gongju to Buyeo"
      ],
      [
        "One-way fare",
        "Seoul → Gongju premium 14,900 won · Gongju → Buyeo 5,900–7,700 won"
      ],
      [
        "Getting around",
        "City buses and taxis. Sights in both Gongju and Buyeo are close together in town."
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "title": "Gongju",
        "stops": [
          "Arrive in Gongju",
          "Gongju National Museum",
          "Tomb of King Muryeong and royal tombs",
          "Stay at Gongju Hanok Village"
        ]
      },
      {
        "label": "DAY 2",
        "title": "Gongju → Buyeo",
        "stops": [
          "Gongsanseong Fortress",
          "Gongju Sanseong Market",
          "Move to Buyeo",
          "Buyeo National Museum",
          "Gungnamji Pond"
        ]
      },
      {
        "label": "DAY 3",
        "title": "Buyeo",
        "stops": [
          "Busosanseong Fortress",
          "Jeongnimsa Temple Site or Baekje Cultural Land",
          "Head home"
        ]
      }
    ],
    "sights": [
      "Gongsanseong Fortress",
      "Tomb of King Muryeong and royal tombs",
      "Gongju National Museum",
      "Busosanseong Fortress",
      "Gungnamji Pond",
      "Jeongnimsa Temple Site"
    ],
    "culture": {
      "name": "A night in a Baekje hanok",
      "text": "After seeing Baekje's royal tombs and fortress, spend a special night at Gongju Hanok Village and experience hanok life firsthand."
    },
    "why": "2 nights, 3 days following Baekje, an ancient Korean kingdom. A rich history trip through royal tombs, fortresses, hanok and museums.",
    "vlog": {
      "query": "공주 부여 백제 여행 브이로그"
    },
    "food": [
      "Gongju chestnut desserts",
      "Buyeo lotus leaf rice"
    ]
  },
  "gangneung": {
    "name": "Gangneung",
    "tag": "2 nights, 3 days of sea and cafés",
    "duration": "2 nights, 3 days",
    "themes": [
      "Sea",
      "Cafés",
      "Photos",
      "Relaxing"
    ],
    "overview": {
      "time": "About 1 h 30 min+",
      "fare": "26,000 won",
      "main": "KTX-Eum"
    },
    "facts": [
      [
        "Transport",
        "Cheongnyangni or Seoul Station → KTX-Eum → Gangneung Station"
      ],
      [
        "From Seoul",
        "About 1 h 30 min–1 h 50 min from Cheongnyangni Station"
      ],
      [
        "One-way fare",
        "KTX-Eum 26,000 won (from Cheongnyangni)"
      ],
      [
        "Getting around",
        "Get around by city bus and taxi. For easy routes, we suggest one area per day."
      ]
    ],
    "days": [
      {
        "label": "DAY 1",
        "title": "Old downtown · Anmok",
        "stops": [
          "Gangneung Station",
          "Old downtown",
          "Anmok Coffee Street",
          "Beach walk"
        ]
      },
      {
        "label": "DAY 2",
        "title": "Chodang · Gyeongpo",
        "stops": [
          "Ojukheon House",
          "Chodang-dong",
          "Gyeongpoho Lake",
          "Gyeongpo Beach"
        ]
      },
      {
        "label": "DAY 3",
        "title": "Jeongdongjin",
        "stops": [
          "Jeongdongjin",
          "Seaside walk",
          "Gangneung Station",
          "Seoul"
        ]
      }
    ],
    "sights": [
      "Anmok Coffee Street",
      "Ojukheon House",
      "Gyeongpoho Lake · Gyeongpo Beach",
      "Jeongdongjin"
    ],
    "culture": {
      "name": "Coffee & sea trip",
      "text": "Drink coffee looking at the sea on Anmok Coffee Street, and try Chodang sundubu (soft tofu) in Chodang-dong."
    },
    "why": "Take the train all the way to the sea. Choose Gangneung for relaxed days of photos, cafés and beaches.",
    "vlog": {
      "query": "강릉 2박3일 안목 경포 정동진 브이로그"
    },
    "food": [
      "Chodang sundubu (soft tofu)",
      "Jang-kalguksu (spicy knife-cut noodles)",
      "Anmok coffee"
    ]
  }
};
