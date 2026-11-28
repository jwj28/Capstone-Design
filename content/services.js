/* 서울 착륙 — 실제로 쓰는 외부 서비스 목록 (2026.11 개편 25번)
   단순 링크 모음이 아니라, 서비스마다 "언제 쓰나요?(when)"와 "무엇을 해 주나요?(what)"를 함께 적어요.
   각 페이지의 '가장 빠른 방법'과 Smart Help 검색 결과가 이 목록을 id 로 불러 써요.
   주소 · 운영 방식이 바뀌면 여기만 고치면 사이트 전체에 반영돼요. */
window.SL = window.SL || {};
window.SL.services = {
  popga: {
    name: "POPGA (팝가)", url: "https://popga.co.kr", tag: "Web · App",
    when: { ko: "어떤 팝업을 갈지 아직 못 정했다면", zh: "还没决定去哪个快闪店时", ja: "どのポップアップに行くかまだ決めていないなら", en: "When you haven't decided which pop-up to visit" },
    what: { ko: "현재 운영 중인 팝업을 지역 · 기간별로 확인하고 원격 웨이팅 등록 가능. 한국어 · 영어 · 일본어 · 중국어 지원.", zh: "可按地区 · 时间查看正在开放的快闪店，还能远程排队。支持韩 · 英 · 日 · 中文。", ja: "いま開いているポップアップを地域・期間別に見られて、リモートでウェイティング登録もできます。韓・英・日・中に対応しています。", en: "See pop-ups open now by area and dates, and join waiting lists remotely. Available in Korean, English, Japanese and Chinese." }
  },
  sungsuya: {
    name: "SUNGSUYA (성수야)", url: "https://sungsuya.com/calendar/", tag: "Web",
    when: { ko: "오늘 · 이번 주에 성수에 갈 예정이라면", zh: "今天 · 这周打算去圣水时", ja: "今日・今週、聖水に行く予定なら", en: "When you're heading to Seongsu today or this week" },
    what: { ko: "날짜를 선택하면 당일 운영 중인 성수 팝업 표시. 위치와 운영 기간도 함께 확인 가능.", zh: "选好日期，只显示当天开放的圣水快闪店，还有位置和营业期间。", ja: "日付を選ぶと、その日に開いている聖水のポップアップだけが表示されます。場所と期間もいっしょに確認できます。", en: "Pick a date and see only the Seongsu pop-ups open that day, with location and run dates." }
  },
  popnol: {
    name: "POPNOL (팝놀)", url: "https://popnol.co.kr", tag: "Web",
    when: { ko: "날짜 · 동네 · 예약 방법으로 골라 보고 싶다면", zh: "想按日期 · 街区 · 预约方式挑选时", ja: "日付・エリア・予約方法で選びたいなら", en: "When you want to filter by date, neighborhood or booking method" },
    what: { ko: "팝업과 전시를 동네별로 모아 기간 · 운영시간 · 예약 방법 · 무료 입장 여부 안내.", zh: "按街区整理快闪店和展览，连期间 · 营业时间 · 预约方式 · 是否免费都写清楚。", ja: "ポップアップと展示をエリアごとにまとめ、期間・営業時間・予約方法・無料かどうかまで整理しています。", en: "Pop-ups and exhibitions grouped by neighborhood, with dates, hours, how to book and whether entry is free." }
  },
  happycow: {
    name: "HappyCow", url: "https://www.happycow.net/asia/south_korea/seoul/", tag: "Web · App · English",
    when: { ko: "비건 · 채식 식당을 한 번에 보고 싶다면", zh: "想一次看完纯素 · 素食餐厅时", ja: "ヴィーガン・ベジタリアンのお店をまとめて見たいなら", en: "When you want to see vegan and vegetarian places all at once" },
    what: { ko: "Vegan · Vegetarian · Veg-options 분류에 따라 지도와 후기 제공. 방문 전 최근 후기로 영업 여부 확인.", zh: "分成 Vegan · Vegetarian · Veg-options，用地图和评价展示。出发前看看最新评价，确认是否还在营业。", ja: "Vegan・Vegetarian・Veg-options に分けて、地図と口コミで見られます。行く前に最新の口コミで営業しているか確認しましょう。", en: "Places are split into Vegan, Vegetarian and Veg-options, with a map and reviews. Check recent reviews to make sure a place is still open." }
  },
  kto_muslim: {
    name: "VISITKOREA Muslim-friendly", url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", tag: "Official · English",
    when: { ko: "할랄 식당이나 기도실이 필요하다면", zh: "需要清真餐厅或祈祷室时", ja: "ハラールのお店や礼拝室が必要なら", en: "When you need a halal restaurant or a prayer room" },
    what: { ko: "한국관광공사가 분류한 무슬림 친화 식당(Halal Certified · Self-certified · Muslim Friendly · Pork Free)과 기도실 정보를 모은 공식 페이지.", zh: "韩国观光公社官方页面，汇总了分级的穆斯林友好餐厅 (Halal Certified · Self-certified · Muslim Friendly · Pork Free) 和祈祷室信息。", ja: "韓国観光公社が分類したムスリムフレンドリーレストラン (Halal Certified・Self-certified・Muslim Friendly・Pork Free) と礼拝室の情報をまとめた公式ページです。", en: "The Korea Tourism Organization's official page with Muslim-friendly restaurants by category (Halal Certified, Self-certified, Muslim Friendly, Pork Free) and prayer rooms." }
  },
  tluggage: {
    name: "T-Luggage (또타러기지)", url: "https://www.tluggage.co.kr/eng", tag: "Seoul Metro",
    when: { ko: "서울 주요 역에서 캐리어를 맡기고 싶다면", zh: "想在首尔主要车站寄存行李箱时", ja: "ソウルの主要駅でスーツケースを預けたいなら", en: "When you want to leave a suitcase at a major Seoul station" },
    what: { ko: "서울교통공사의 짐 보관 · 배송 서비스. 서울역 · 홍대입구역 · 명동역 · 잠실역 · 종로3가역 · 수서역 · 김포공항역에서 운영하며 공항 배송도 가능. 운영시간은 지점별 확인.", zh: "首尔交通公社运营的行李寄存 · 配送服务。设在首尔站 · 弘大入口站 · 明洞站 · 蚕室站 · 钟路3街站 · 水西站 · 金浦机场站，也能配送到机场。营业时间请按网点确认。", ja: "ソウル交通公社が運営する荷物預かり・配送サービスです。ソウル駅・弘大入口駅・明洞駅・蚕室駅・鍾路3街駅・水西駅・金浦空港駅にあり、空港への配送もできます。営業時間は店舗ごとに確認しましょう。", en: "Luggage storage and delivery run by Seoul Metro, at Seoul Station, Hongik Univ., Myeong-dong, Jamsil, Jongno 3-ga, Suseo and Gimpo Airport stations, with delivery to the airport too. Check hours for each branch." }
  },
  lost112: {
    name: "LOST112 → 경찰민원24", url: "https://minwon24.police.go.kr/cvlcpt/cvlcptGdInfo.do?cvlcptId=MW-201", tag: "Official",
    when: { ko: "물건을 잃어버렸다면", zh: "丢了东西时", ja: "物をなくしたら", en: "When you've lost something" },
    what: { ko: "경찰청 유실물 서비스. 경찰 · 지하철 · 버스 등에 접수된 습득물 검색과 분실 신고 가능. 2026년부터 LOST112가 '경찰민원24'로 통합.", zh: "警察厅失物招领服务。可搜索警察 · 地铁 · 公交等收到的拾得物并报失。2026 年起 LOST112 已整合到“警察民愿24”。", ja: "警察庁の遺失物サービスです。警察・地下鉄・バスなどに届いた拾得物を検索し、紛失届を出せます。2026年から LOST112 は「警察民願24」に統合されました。", en: "The National Police Agency's lost and found service. Search items handed in to police, subways, buses and more, and report a loss. Since 2026, LOST112 is part of Police Civil Service 24." }
  },
  k1330: {
    name: "1330 Korea Travel Helpline", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", tel: "1330", tag: "24/7 · Call · Chat",
    when: { ko: "어디에 물어봐야 할지 모르거나 통역이 필요하다면", zh: "不知道该问哪里，或需要翻译时", ja: "どこに聞けばいいか分からないとき、通訳が必要なとき", en: "When you don't know who to ask, or you need an interpreter" },
    what: { ko: "관광 안내 · 통역 · 관광 불편 상담을 전화와 실시간 채팅으로 지원. 직원과 의사소통이 어려우면 전화를 건네 통역 요청. 해외 번호에서는 +82-2-1330으로 연결.", zh: "通过电话和实时聊天提供旅游咨询 · 翻译 · 旅游投诉帮助。和店员语言不通时，把电话递给对方。用海外号码请拨 +82-2-1330。", ja: "観光案内・通訳・観光の困りごと相談を電話とリアルタイムチャットで手伝ってくれます。店員さんと言葉が通じないときは電話を代わってもらいましょう。海外の番号からは +82-2-1330 にかけます。", en: "Tourist info, interpretation and help with travel complaints by phone and live chat. If you can't communicate with staff, hand them the phone. From a foreign number, call +82-2-1330." }
  },
  visitseoul_events: {
    name: "Visit Seoul · Events", url: "https://english.visitseoul.net/exhibition-events", tag: "Official · English",
    when: { ko: "이번 주 서울에서 할 만한 걸 찾는다면", zh: "想找这周在首尔可以做什么时", ja: "今週ソウルで楽しめることを探すなら", en: "When you're looking for things to do in Seoul this week" },
    what: { ko: "서울 공식 관광 사이트의 행사 캘린더. 축제 · 행사 · 전시를 기간별로 검색 가능.", zh: "首尔官方旅游网站的活动日历。可按日期搜索节庆 · 活动 · 展览。", ja: "ソウル公式観光サイトのイベントカレンダーです。祭り・イベント・展示を期間で検索できます。", en: "The event calendar on Seoul's official tourism site. Search festivals, events and exhibitions by date." }
  },
  culture_portal: {
    name: "서울문화포털", url: "https://culture.seoul.go.kr", tag: "Official · Korean",
    when: { ko: "서울 문화행사를 더 많이 보고 싶다면", zh: "想看更多首尔文化活动时", ja: "ソウルの文化イベントをもっと見たいなら", en: "When you want to see more of Seoul's cultural events" },
    what: { ko: "서울의 공연 · 전시 · 축제를 날짜별로 검색 가능. 한국어 위주이므로 필요시 Papago 번역과 함께 이용.", zh: "可按日期查找首尔的演出 · 展览 · 节庆。以韩语为主，配合 Papago 翻译更方便。", ja: "ソウルの公演・展示・お祭りを日付で探せます。韓国語中心なので、Papago 翻訳といっしょに使うと便利です。", en: "Find Seoul's shows, exhibitions and festivals by date. It's mostly in Korean, so use it with Papago." }
  },
  weverse: {
    name: "Weverse", url: "https://weverse.io", tag: "App · Multilingual",
    when: { ko: "좋아하는 아티스트의 공식 공지를 보고 싶다면", zh: "想看喜欢的艺人的官方公告时", ja: "好きなアーティストの公式のお知らせを見たいなら", en: "When you want official notices from your favorite artist" },
    what: { ko: "여러 아티스트가 이용하는 공식 팬 플랫폼. 공지 · 멤버십 · 이벤트 응모 확인 가능. 이용 플랫폼은 아티스트별로 다를 수 있음.", zh: "很多艺人使用的官方粉丝平台，可查看公告 · 会员 · 活动报名。不同艺人使用的平台可能不同。", ja: "多くのアーティストが使う公式ファンプラットフォームです。お知らせ・メンバーシップ・イベント応募を確認できます。アーティストによって使うプラットフォームが違うことがあります。", en: "An official fan platform used by many artists, for notices, memberships and event sign-ups. Some artists use a different platform." }
  },
  medical_desk: {
    name: "Seoul Medical Tour Help Desk", url: "https://english.visitseoul.net/medical-tour-help-desk", tag: "Official · Multilingual",
    when: { ko: "외국인 진료가 되는 서울 병원을 찾거나 상담이 필요하다면", zh: "想找能接待外国人的首尔医院或需要咨询时", ja: "外国人を診てくれるソウルの病院を探すとき、相談が必要なとき", en: "When you need a Seoul hospital that treats foreigners, or advice" },
    what: { ko: "서울시가 운영하는 외국인 환자 안내 창구. 협력 병원 진료 상담 · 예약 안내 · 통역 지원 정보 제공.", zh: "首尔市运营的外国患者服务窗口，提供合作医院的诊疗咨询 · 预约指南 · 翻译支持信息。", ja: "ソウル市が運営する外国人患者向けの案内窓口です。提携病院の診療相談・予約案内・通訳サポートの情報があります。", en: "Seoul's help desk for international patients, with consultations at partner hospitals, booking guidance and interpretation support." }
  },
  egen: {
    name: "E-Gen", url: "https://www.e-gen.or.kr", tag: "Official · Korean",
    when: { ko: "지금 문 연 약국 · 병원을 찾는다면 (주말 · 밤)", zh: "想找现在营业的药店 · 医院时 (周末 · 夜间)", ja: "いま開いている薬局・病院を探すなら (週末・夜)", en: "When you need a pharmacy or clinic open right now (weekends, nights)" },
    what: { ko: "중앙응급의료센터 공식 사이트. 현재 운영 중인 병원 · 약국과 응급실 검색 가능.", zh: "中央急救医疗中心官方网站，可查找正在营业的医院 · 药店和急诊室。", ja: "中央救急医療センターの公式サイトです。いま開いている病院・薬局と救急室を探せます。", en: "The National Emergency Medical Center's official site, for clinics, pharmacies and ERs open now." }
  },
  papago: {
    name: "Papago", url: "https://papago.naver.com", tag: "App · Web",
    when: { ko: "메뉴판이나 키오스크 화면을 읽기 어렵다면", zh: "看不懂菜单或自助点餐机画面时", ja: "メニューやキオスクの画面が読めないなら", en: "When you can't read a menu or kiosk screen" },
    what: { ko: "카메라 촬영으로 바로 번역 가능. 대화 모드로 직원과 의사소통 가능.", zh: "用相机一拍就能翻译，也能用对话模式和店员交流。", ja: "カメラで撮るとすぐに翻訳されます。会話モードで店員さんと話すこともできます。", en: "Point your camera to translate instantly, or use conversation mode to talk with staff." }
  },
  catchtable: {
    name: "CATCHTABLE GLOBAL", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1590988", tag: "App · Multilingual",
    when: { ko: "한국 전화번호 없이 식당을 예약하고 싶다면", zh: "没有韩国手机号也想预约餐厅时", ja: "韓国の電話番号なしでレストランを予約したいなら", en: "When you want to book a restaurant without a Korean phone number" },
    what: { ko: "이메일 가입 후 외국어로 식당 예약과 원격 웨이팅 이용 가능. 등록된 식당에 한해 지원.", zh: "用邮箱注册，就能用外语预约餐厅和远程排队。只适用于已入驻的餐厅。", ja: "メールで登録して、外国語でレストランの予約やリモートウェイティングができます。登録されているお店だけです。", en: "Sign up with email to book restaurants and join waiting lists in your language. Only works for listed restaurants." }
  },
  navermap: {
    name: "NAVER Map", url: "https://map.naver.com", tag: "App · Multilingual",
    when: { ko: "'지역 + 음식 · 카페'로 바로 찾고 싶다면", zh: "想直接用“地区 + 食物 · 咖啡馆”查找时", ja: "「地域 + 料理・カフェ」ですぐ探したいなら", en: "When you want to search 'area + food or café' right away" },
    what: { ko: "영업 여부 · 브레이크타임 · 리뷰 · 예약 버튼을 한 화면에서 확인 가능.", zh: "营业状态 · 休息时间 · 评价 · 预约按钮都能在一个页面确认。", ja: "営業中かどうか・ブレイクタイム・口コミ・予約ボタンまで、ひとつの画面で確認できます。", en: "Check open status, break time, reviews and the booking button on one screen." }
  },
  /* 같은 NAVER Map 이지만 길찾기 · 막차 · 심야 이동에 쓸 때 */
  navermap_route: {
    name: "NAVER Map", url: "https://map.naver.com", tag: "App · Multilingual",
    when: { ko: "지금 위치에서 숙소까지 가는 법을 찾는다면", zh: "想查从当前位置到住处怎么走时", ja: "いまいる場所から宿までの行き方を調べるなら", en: "When you need a route from where you are to your accommodation" },
    what: { ko: "출발지와 숙소 주소를 입력하면 지하철 · 버스 · 심야버스 경로와 막차 시간, 택시 예상 요금 안내.", zh: "输入出发地和住处地址，就能看到地铁 · 公交 · 深夜巴士路线、末班车时间和出租车预估车费。", ja: "出発地と宿の住所を入れると、地下鉄・バス・深夜バスのルート、終電の時間、タクシー料金の目安まで表示されます。", en: "Enter your start point and accommodation address to see subway, bus and night bus routes, last train times and estimated taxi fares." }
  },
  korail: {
    name: "Let's Korail", url: "https://www.letskorail.com", tag: "Official · Multilingual",
    when: { ko: "명절 · 주말에 기차표를 예매해야 한다면", zh: "节假日 · 周末需要订火车票时", ja: "連休・週末に列車のきっぷを予約するなら", en: "When you need train tickets for holidays or weekends" },
    what: { ko: "KTX 등 기차표의 외국어 예매 지원. 설 · 추석에는 조기 매진될 수 있으므로 날짜 확정 후 바로 예매.", zh: "可用外语预订 KTX 等火车票。春节 · 中秋很早就会卖完，日期一定就马上订。", ja: "KTX などの列車のきっぷを外国語で予約できます。旧正月・秋夕は早く売り切れるので、日程が決まったらすぐ予約しましょう。", en: "Book KTX and other trains in your language. Seollal and Chuseok sell out early, so book as soon as your dates are set." }
  }
};
