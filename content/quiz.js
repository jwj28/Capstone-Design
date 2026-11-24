/* 서울 착륙 — WHERE TO GO · TRIP FINDER
   [공통] 여행지별 점수 기준  /  [언어별] 질문 · 선택지 · 여행지 소개 문구

   점수 기준 (0~3, 높을수록 잘 맞음)
   dur    : 0 = 당일치기, 1 = 1박 2일, 2 = 2박 3일
   int    : nature 자연·힐링 / history 역사·전통문화 / local 체험·로컬문화 / city 도시·사진·카페
   access : seoul 서울 안 / near 1~2시간 / far 2시간 이상
   bus    : 현지에서 버스 환승이 필요한지
   style  : slow 천천히 쉬기 / packed 알차게 보기 / hands 직접 체험 / photo 사진·분위기 */
window.SL = window.SL || {};
window.SL.quiz = {
  dest: {
    seongbuk:   { dur: 0, int: { nature: 1, history: 3, local: 2, city: 2 }, access: "seoul", bus: false, style: { slow: 2, packed: 2, hands: 0, photo: 2 } },
    yangpyeong: { dur: 0, int: { nature: 3, history: 0, local: 1, city: 2 }, access: "near", bus: false, style: { slow: 3, packed: 1, hands: 1, photo: 3 } },
    yeoju:      { dur: 0, int: { nature: 1, history: 3, local: 1, city: 0 }, access: "near", bus: true, style: { slow: 1, packed: 3, hands: 0, photo: 1 } },
    wonju:      { dur: 1, int: { nature: 0, history: 2, local: 3, city: 1 }, access: "near", bus: true, style: { slow: 1, packed: 2, hands: 3, photo: 1 } },
    asan:       { dur: 1, int: { nature: 2, history: 3, local: 2, city: 0 }, access: "near", bus: true, style: { slow: 3, packed: 1, hands: 2, photo: 1 } },
    chungju:    { dur: 1, int: { nature: 3, history: 2, local: 0, city: 1 }, access: "near", bus: true, style: { slow: 3, packed: 1, hands: 0, photo: 2 } },
    jecheon:    { dur: 2, int: { nature: 3, history: 1, local: 1, city: 1 }, access: "near", bus: true, style: { slow: 3, packed: 1, hands: 2, photo: 2 } },
    gongbu:     { dur: 2, int: { nature: 1, history: 3, local: 1, city: 0 }, access: "far", bus: true, style: { slow: 0, packed: 3, hands: 1, photo: 1 } },
    gangneung:  { dur: 2, int: { nature: 2, history: 0, local: 1, city: 3 }, access: "far", bus: true, style: { slow: 2, packed: 1, hands: 0, photo: 3 } }
  },
  values: [
    [0, 1, 2],
    ["nature", "history", "local", "city"],
    ["seoul", "near", "far", "bus"],
    ["slow", "packed", "hands", "photo"]
  ],

  ko: {
    eyebrow: "TRIP FINDER",
    title: "나에게 맞는 여행지 찾기",
    sub: "4가지 질문으로 여행지 9곳 중 나에게 맞는 TOP 3 추천.",
    questions: [
      { q: "여행 기간 선택", options: ["당일치기", "1박 2일", "2박 3일"] },
      { q: "선호하는 여행 테마 선택", options: ["자연 · 힐링", "역사 · 전통", "체험 · 로컬문화", "도시 · 사진 · 카페"] },
      { q: "이동 가능 범위 선택", options: ["서울 안", "1~2시간", "2시간 이상", "버스 환승 가능"] },
      { q: "선호하는 여행 스타일 선택", options: ["천천히 쉬기", "많은 장소 보기", "체험 중심", "사진 · 분위기 중심"] }
    ],
    progress: "{n} / 4 답변",
    empty: "모든 질문에 답한 뒤 이곳에서 추천 여행지 확인.",
    resultHead: "나에게 맞는 여행지 TOP 3",
    best: "가장 높은 적합도",
    match: "MATCH",
    reset: "다시 고르기",
    more: "다른 추천도 보기",
    less: "접기",
    detail: "코스 자세히 보기",
    official: "공식 관광 정보",
    labels: { duration: "추천 일정", theme: "대표 테마", access: "접근 방식", point: "추천 포인트" },
    reasons: { dur: "여행 일정 일치", int: "원하는 테마", access: "이동 조건 충족", style: "선호 여행 스타일 일치" },
    tableNote: "충주행 KTX-이음은 판교역에서 하루 4편만 운행. 공주 · 부여 요금은 서울고속버스터미널 → 공주 우등 기준이며, 공주에서 부여까지는 버스로 약 40~50분 추가 이동. 여주 · 양평 전철 요금은 출발역에 따라 다름.",
    dest: {
      seongbuk: { short: "서울 성북동", ov: { time: "약 30분 안팎", fare: "1,550원", main: "지하철 4호선" }, name: "서울 성북동 문화산책", duration: "당일치기", themes: "문학 · 한옥 · 사찰 · 골목", access: "지하철 4호선 한성대입구역 + 성북02 마을버스 또는 도보", point: "길상사, 심우장, 최순우 옛집을 잇는 조용한 서울의 역사 · 문화 코스.", official: "성북구" },
      yangpyeong: { name: "양평 양수리 · 두물머리", duration: "당일치기", themes: "자연 · 사진 · 힐링", access: "경의중앙선 양수역", point: "세미원과 두물머리로 전철만 타고 떠나는 가벼운 여행. 가장 큰 매력은 자연 풍경.", official: "양평관광" },
      yeoju: { short: "여주", ov: { time: "약 1~1.5시간", fare: "2,000원대", main: "경강선 전철" }, name: "여주 세종대왕릉 · 신륵사", duration: "당일치기", themes: "역사 · 전통문화", access: "경강선 여주역 + 버스", point: "한글을 만든 세종대왕의 능과 강가의 절 신륵사에서 만나는 조선 역사와 사찰 문화." },
      wonju: { name: "원주 한지문화 코스", duration: "1박 2일", themes: "공예 · 로컬문화", access: "청량리 → 원주역 KTX-이음 · 일반열차 + 버스", point: "한지테마파크, 강원감영, 중앙시장을 둘러보는 코스. 직접 만드는 체험을 좋아하는 여행자에게 추천.", official: "원주관광 · 한지테마파크" },
      asan: { name: "아산 온양온천 · 외암마을", duration: "1박 2일", themes: "온천 · 전통마을", access: "열차 또는 1호선 → 온양온천역 + 버스", point: "온천에서 쉬고 전통마을을 둘러보는 여행. 휴식과 문화체험을 함께 즐기는 코스.", official: "아산시청" },
      chungju: { short: "충주", ov: { time: "약 1시간 5분~", fare: "12,300원", main: "KTX-이음 (판교 출발)" }, name: "충주 탄금호 · 중앙탑", duration: "1박 2일", themes: "자연 · 역사 · 산책", access: "철도 + 시내버스", point: "강과 공원, 역사 유적을 함께 즐기는 비교적 한적한 코스. 사람 많은 곳을 피하고 싶은 여행자에게 추천." },
      jecheon: { name: "제천 청풍호 · 의림지", duration: "2박 3일", themes: "자연 · 힐링 · 체험", access: "청량리 → 제천역 KTX-이음 + 버스", point: "의림지, 청풍호, 케이블카, 유람선까지. 2박 3일 머물며 천천히 둘러보기 좋은 여행지.", official: "제천관광" },
      gongbu: { short: "공주 · 부여", ov: { time: "약 1시간 50분~", fare: "14,900원~", main: "고속버스" }, name: "공주 · 부여 백제문화 코스", duration: "2박 3일", themes: "백제 역사 · 전통문화", access: "기차와 버스 연계", point: "공산성, 부여 백제문화단지, 궁남지, 부소산성을 잇는 역사 중심의 2박 3일 코스.", official: "부여문화관광" },
      gangneung: { short: "강릉", ov: { time: "약 1시간 30분~", fare: "26,000원", main: "KTX-이음" }, name: "강릉 로컬 해안 코스", duration: "2박 3일", themes: "바다 · 카페 · 사진", access: "서울 → 강릉 KTX + 시내버스", point: "바다와 카페, 해안 산책이 중심인 여행. 유명한 곳에만 집중하기보다 주문진과 정동진으로 나눠 둘러보는 여유로운 일정 추천." }
    }
  },

  zh: {
    eyebrow: "TRIP FINDER",
    title: "找到适合我的旅行地",
    sub: "回答 4 个问题，从 9 个地方里为你挑出最合适的 TOP 3。",
    questions: [
      { q: "这次想去玩多久？", options: ["一日游", "两天一夜", "三天两夜"] },
      { q: "这次旅行最想做什么？", options: ["自然 · 疗愈", "历史 · 传统文化", "体验 · 在地文化", "城市 · 拍照 · 咖啡馆"] },
      { q: "交通方面可以接受到什么程度？", options: ["首尔市内", "1~2 小时", "2 小时以上", "可以换乘公交"] },
      { q: "你喜欢哪种旅行方式？", options: ["慢慢休息", "多看几个地方", "以体验为主", "以拍照 · 氛围为主"] }
    ],
    progress: "已回答 {n} / 4",
    empty: "回答完所有问题后，推荐的旅行地会显示在这里。",
    resultHead: "最适合你的旅行地 TOP 3",
    best: "最适合你",
    match: "MATCH",
    reset: "重新选择",
    more: "查看其他推荐",
    less: "收起",
    detail: "查看详细路线",
    official: "官方旅游信息",
    labels: { duration: "推荐行程", theme: "主题", access: "交通方式", point: "推荐理由" },
    reasons: { dur: "行程长度正合适", int: "想要的主题", access: "符合交通条件", style: "和你的旅行风格相似" },
    tableNote: "去忠州的 KTX-이음 从板桥站出发，每天只有 4 班。公州 · 扶余的费用以首尔高速巴士客运站 → 公州优等巴士为准，从公州到扶余还要再坐约 40~50 分钟巴士。骊州 · 杨平的地铁票价因出发站而不同。",
    dest: {
      seongbuk: { short: "首尔 城北洞", ov: { time: "约 30 分钟", fare: "1,550 韩元", main: "地铁 4 号线" }, name: "首尔城北洞文化散步", duration: "一日游", themes: "文学 · 韩屋 · 寺庙 · 小巷", access: "地铁 4 号线汉城大入口站 (한성대입구역) + 城北 02 小区公交或步行", point: "串联吉祥寺 (길상사)、寻牛庄 (심우장)、崔淳雨故居 (최순우 옛집) 的安静首尔历史文化路线。", official: "城北区" },
      yangpyeong: { name: "杨平 两水里 · 两水头", duration: "一日游", themes: "自然 · 拍照 · 疗愈", access: "京义 · 中央线 两水站 (양수역)", point: "以洗美苑和两水头为中心，只坐地铁就能去的轻松旅行。最大的魅力是自然风景。", official: "杨平观光 (韩语)" },
      yeoju: { short: "骊州 (여주)", ov: { time: "约 1~1.5 小时", fare: "2,000 韩元左右", main: "京江线地铁" }, name: "骊州 世宗大王陵 · 神勒寺", duration: "一日游", themes: "历史 · 传统文化", access: "京江线 骊州站 (여주역) + 公交", point: "在创制韩文的世宗大王陵和江边的神勒寺，同时感受朝鲜历史和寺庙文化。" },
      wonju: { name: "原州 韩纸文化路线", duration: "两天一夜", themes: "工艺 · 在地文化", access: "清凉里 → 原州站 KTX-이음 · 普通列车 + 公交", point: "游览韩纸主题公园、江原监营和中央市场。喜欢亲手体验的话非常推荐。", official: "原州观光 · 韩纸主题公园 (韩语)" },
      asan: { name: "牙山 温阳温泉 · 外岩村", duration: "两天一夜", themes: "温泉 · 传统村落", access: "火车或 1 号线 → 温阳温泉站 (온양온천역) + 公交", point: "在温泉放松，再去逛传统村落，休息和文化体验都能兼顾。", official: "牙山市厅 (韩语)" },
      chungju: { short: "忠州 (충주)", ov: { time: "约 1 小时 5 分钟起", fare: "12,300 韩元", main: "KTX-이음 (板桥出发)" }, name: "忠州 弹琴湖 · 中央塔", duration: "两天一夜", themes: "自然 · 历史 · 散步", access: "铁路 + 市内公交", point: "可以同时欣赏江景、公园和历史遗迹，比较清静。想避开人多的地方时很合适。" },
      jecheon: { name: "堤川 清风湖 · 义林池", duration: "三天两夜", themes: "自然 · 疗愈 · 体验", access: "清凉里 → 堤川站 KTX-이음 + 公交", point: "义林池、清风湖、缆车和游船。适合住上三天两夜，慢慢游览。", official: "堤川观光 (韩语)" },
      gongbu: { short: "公州 · 扶余 (공주 · 부여)", ov: { time: "约 1 小时 50 分钟起", fare: "14,900 韩元起", main: "高速巴士" }, name: "公州 · 扶余 百济文化路线", duration: "三天两夜", themes: "百济历史 · 传统文化", access: "火车和公交衔接", point: "游览公山城、扶余百济文化园区、宫南池、扶苏山城的历史主题三天两夜路线。", official: "扶余文化观光 (韩语)" },
      gangneung: { short: "江陵 (강릉)", ov: { time: "约 1 小时 30 分钟起", fare: "26,000 韩元", main: "KTX-이음" }, name: "江陵 在地海岸路线", duration: "三天两夜", themes: "大海 · 咖啡馆 · 拍照", access: "首尔 → 江陵 KTX + 市内公交", point: "以大海、咖啡馆和海边散步为主。比起热门景点，分散去注文津、正东津会更悠闲。" }
    }
  },

  ja: {
    eyebrow: "TRIP FINDER",
    title: "わたしに合う旅先さがし",
    sub: "4つの質問に答えると、9か所の中からぴったりの TOP 3 を選びます。",
    questions: [
      { q: "今回の旅はどのくらいの長さにしたいですか？", options: ["日帰り", "1泊2日", "2泊3日"] },
      { q: "今回の旅でいちばんしたいことは？", options: ["自然 · いやし", "歴史 · 伝統文化", "体験 · ローカル文化", "街歩き · 写真 · カフェ"] },
      { q: "移動はどのくらいまで大丈夫ですか？", options: ["ソウル市内", "1~2時間", "2時間以上", "バスの乗り換えOK"] },
      { q: "どんなスタイルの旅が好きですか？", options: ["のんびり休む", "たくさん回る", "体験中心", "写真 · 雰囲気中心"] }
    ],
    progress: "{n} / 4 回答済み",
    empty: "すべての質問に答えると、ここにおすすめの旅先が表示されます。",
    resultHead: "あなたに合う旅先 TOP 3",
    best: "いちばんぴったり",
    match: "MATCH",
    reset: "選び直す",
    more: "ほかのおすすめも見る",
    less: "閉じる",
    detail: "コースを詳しく見る",
    official: "公式観光情報",
    labels: { duration: "おすすめ日程", theme: "テーマ", access: "アクセス", point: "おすすめポイント" },
    reasons: { dur: "日程がぴったり", int: "やりたいテーマ", access: "移動の条件に合う", style: "旅のスタイルが近い" },
    tableNote: "忠州行きの KTX-イウムは板橋駅から1日4本だけです。公州 · 扶餘の料金はソウル高速バスターミナル → 公州の優等バス基準で、公州から扶餘まではバスでさらに約40~50分かかります。驪州 · 楊平の電車料金は出発駅によって変わります。",
    dest: {
      seongbuk: { short: "ソウル 城北洞", ov: { time: "約30分前後", fare: "1,550ウォン", main: "地下鉄4号線" }, name: "ソウル 城北洞 文化さんぽ", duration: "日帰り", themes: "文学 · 韓屋 · お寺 · 路地", access: "地下鉄4号線 漢城大入口駅 (한성대입구역) + 城北02 マウルバスまたは徒歩", point: "吉祥寺 (길상사)、尋牛荘 (심우장)、崔淳雨旧宅 (최순우 옛집) をめぐる、静かなソウルの歴史 · 文化コースです。", official: "城北区" },
      yangpyeong: { name: "楊平 両水里 · ドゥムルモリ", duration: "日帰り", themes: "自然 · 写真 · いやし", access: "京義・中央線 両水駅 (양수역)", point: "洗美苑とドゥムルモリを中心に、電車だけで行ける気軽な旅。いちばんの魅力は自然の景色です。", official: "楊平観光 (韓国語)" },
      yeoju: { short: "驪州 (여주)", ov: { time: "約1~1.5時間", fare: "2,000ウォン台", main: "京江線" }, name: "驪州 世宗大王陵 · 神勒寺", duration: "日帰り", themes: "歴史 · 伝統文化", access: "京江線 驪州駅 (여주역) + バス", point: "ハングルをつくった世宗大王の陵と、川辺のお寺・神勒寺で、朝鮮の歴史と寺院文化をいっしょに体験できます。" },
      wonju: { name: "原州 韓紙文化コース", duration: "1泊2日", themes: "工芸 · ローカル文化", access: "清凉里 → 原州駅 KTX-イウム · 一般列車 + バス", point: "韓紙テーマパーク、江原監営、中央市場をめぐります。自分の手でつくる体験が好きな人におすすめ。", official: "原州観光 · 韓紙テーマパーク (韓国語)" },
      asan: { name: "牙山 温陽温泉 · 外岩村", duration: "1泊2日", themes: "温泉 · 伝統の村", access: "列車または1号線 → 温陽温泉駅 (온양온천역) + バス", point: "温泉で休んで伝統の村を歩く、休息と文化体験をいっしょに楽しめる旅です。", official: "牙山市庁 (韓国語)" },
      chungju: { short: "忠州 (충주)", ov: { time: "約1時間5分~", fare: "12,300ウォン", main: "KTX-イウム (板橋発)" }, name: "忠州 弾琴湖 · 中央塔", duration: "1泊2日", themes: "自然 · 歴史 · さんぽ", access: "鉄道 + 市内バス", point: "川と公園、歴史遺跡をいっしょに楽しめる、比較的静かなコース。人混みを避けたいときにぴったりです。" },
      jecheon: { name: "堤川 清風湖 · 義林池", duration: "2泊3日", themes: "自然 · いやし · 体験", access: "清凉里 → 堤川駅 KTX-イウム + バス", point: "義林池、清風湖、ケーブルカー、遊覧船まで。2泊3日滞在してゆっくり回るのに向いています。", official: "堤川観光 (韓国語)" },
      gongbu: { short: "公州 · 扶餘 (공주 · 부여)", ov: { time: "約1時間50分~", fare: "14,900ウォン~", main: "高速バス" }, name: "公州 · 扶餘 百済文化コース", duration: "2泊3日", themes: "百済の歴史 · 伝統文化", access: "列車とバスの乗り継ぎ", point: "公山城、扶餘の百済文化団地、宮南池、扶蘇山城をめぐる、歴史中心の2泊3日コースです。", official: "扶餘文化観光 (韓国語)" },
      gangneung: { short: "江陵 (강릉)", ov: { time: "約1時間30分~", fare: "26,000ウォン", main: "KTX-イウム" }, name: "江陵 ローカル海岸コース", duration: "2泊3日", themes: "海 · カフェ · 写真", access: "ソウル → 江陵 KTX + 市内バス", point: "海とカフェ、海辺のさんぽが中心です。有名スポットより、注文津や正東津に分けて回るとゆったり楽しめます。" }
    }
  }
};

/* English (2026.11) — same structure as ko */
window.SL.quiz.en = {
  "eyebrow": "TRIP FINDER",
  "title": "Find my destination",
  "sub": "4 questions to get your top 3 out of 9 destinations.",
  "questions": [
    {
      "q": "How long is your trip?",
      "options": [
        "Day trip",
        "1 night, 2 days",
        "2 nights, 3 days"
      ]
    },
    {
      "q": "Which theme do you prefer?",
      "options": [
        "Nature · healing",
        "History · tradition",
        "Activities · local culture",
        "City · photos · cafés"
      ]
    },
    {
      "q": "How far will you travel?",
      "options": [
        "Within Seoul",
        "1–2 hours",
        "2+ hours",
        "OK with bus transfers"
      ]
    },
    {
      "q": "What's your travel style?",
      "options": [
        "Take it slow",
        "See as much as possible",
        "Hands-on activities",
        "Photos · atmosphere"
      ]
    }
  ],
  "progress": "{n} / 4 answered",
  "empty": "Answer all the questions to see your recommendations here.",
  "resultHead": "Your top 3 destinations",
  "best": "Best match",
  "match": "MATCH",
  "reset": "Start over",
  "more": "See more picks",
  "less": "Show less",
  "detail": "See the full route",
  "official": "Official tourism info",
  "labels": {
    "duration": "Recommended length",
    "theme": "Main theme",
    "access": "Getting there",
    "point": "Why we picked it"
  },
  "reasons": {
    "dur": "Matches your trip length",
    "int": "Matches your theme",
    "access": "Fits your travel range",
    "style": "Matches your travel style"
  },
  "tableNote": "KTX-Eum to Chungju runs only 4 times a day from Pangyo Station. Gongju · Buyeo fares are for the premium express bus from Seoul Express Bus Terminal to Gongju, plus about 40–50 min by bus from Gongju to Buyeo. Yeoju and Yangpyeong subway fares depend on your starting station.",
  "dest": {
    "seongbuk": {
      "short": "Seongbuk-dong, Seoul",
      "ov": {
        "time": "About 30 min",
        "fare": "1,550 won",
        "main": "Subway Line 4"
      },
      "name": "Seongbuk-dong culture walk, Seoul",
      "duration": "Day trip",
      "themes": "Literature · hanok · temple · alleys",
      "access": "Subway Line 4 Hansung Univ. Station + village bus Seongbuk 02 or walk",
      "point": "A quiet Seoul history and culture route linking Gilsangsa, Simujang and Choi Sun-u's Old House.",
      "official": "Seongbuk-gu"
    },
    "yangpyeong": {
      "name": "Yangsu-ri · Dumulmeori, Yangpyeong",
      "duration": "Day trip",
      "themes": "Nature · photos · healing",
      "access": "Yangsu Station, Gyeongui–Jungang Line",
      "point": "A light trip to Semiwon and Dumulmeori by subway alone. The biggest draw is the natural scenery.",
      "official": "Yangpyeong Tourism"
    },
    "yeoju": {
      "short": "Yeoju",
      "ov": {
        "time": "About 1–1.5 h",
        "fare": "About 2,000 won",
        "main": "Gyeonggang Line"
      },
      "name": "Royal Tomb of King Sejong · Silleuksa, Yeoju",
      "duration": "Day trip",
      "themes": "History · traditional culture",
      "access": "Yeoju Station on the Gyeonggang Line + bus",
      "point": "Joseon history and temple culture at the tomb of King Sejong, who created Hangeul, and Silleuksa, a riverside temple."
    },
    "wonju": {
      "name": "Wonju hanji culture route",
      "duration": "1 night, 2 days",
      "themes": "Crafts · local culture",
      "access": "Cheongnyangni → Wonju Station by KTX-Eum or regular train + bus",
      "point": "A route through the Hanji Theme Park, Gangwon Gamyeong and Jungang Market. Great for travelers who love making things themselves.",
      "official": "Wonju Tourism · Hanji Theme Park"
    },
    "asan": {
      "name": "Onyang Hot Springs · Oeam Village, Asan",
      "duration": "1 night, 2 days",
      "themes": "Hot springs · traditional village",
      "access": "Train or Line 1 → Onyangoncheon Station + bus",
      "point": "Relax in hot springs and explore a traditional village. A route that combines rest and culture.",
      "official": "Asan City Hall"
    },
    "chungju": {
      "short": "Chungju",
      "ov": {
        "time": "About 1 h 5 min+",
        "fare": "12,300 won",
        "main": "KTX-Eum (from Pangyo)"
      },
      "name": "Tangeum Lake · Jungang Tower, Chungju",
      "duration": "1 night, 2 days",
      "themes": "Nature · history · walks",
      "access": "Train + city bus",
      "point": "A fairly quiet route combining a river, parks and historic sites. Recommended if you want to avoid crowds."
    },
    "jecheon": {
      "name": "Cheongpung Lake · Uirimji, Jecheon",
      "duration": "2 nights, 3 days",
      "themes": "Nature · healing · activities",
      "access": "Cheongnyangni → Jecheon Station by KTX-Eum + bus",
      "point": "Uirimji, Cheongpung Lake, a cable car and a boat cruise. A place to stay 2 nights and explore slowly.",
      "official": "Jecheon Tourism"
    },
    "gongbu": {
      "short": "Gongju · Buyeo",
      "ov": {
        "time": "About 1 h 50 min+",
        "fare": "From 14,900 won",
        "main": "Express bus"
      },
      "name": "Gongju · Buyeo Baekje culture route",
      "duration": "2 nights, 3 days",
      "themes": "Baekje history · traditional culture",
      "access": "Train and bus combined",
      "point": "A history-focused 2-night, 3-day route linking Gongsanseong Fortress, Baekje Cultural Land, Gungnamji Pond and Busosanseong Fortress.",
      "official": "Buyeo Culture & Tourism"
    },
    "gangneung": {
      "short": "Gangneung",
      "ov": {
        "time": "About 1 h 30 min+",
        "fare": "26,000 won",
        "main": "KTX-Eum"
      },
      "name": "Gangneung local coast route",
      "duration": "2 nights, 3 days",
      "themes": "Sea · cafés · photos",
      "access": "Seoul → Gangneung by KTX + city bus",
      "point": "A trip centered on the sea, cafés and coastal walks. Rather than only the famous spots, take it easy and split your days between Jumunjin and Jeongdongjin."
    }
  }
};
