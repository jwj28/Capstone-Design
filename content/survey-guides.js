/* Survey follow-up guides. Official information checked 2026-11-27.
   Keep travel actions separate from domestic identity verification and clinical advice. */
window.SL = window.SL || {};
window.SL.surveyGuides = (function () {
  var URL = {
    climate: "https://english.seoul.go.kr/policy/transportation/climate-card/",
    range: "https://news.seoul.go.kr/traffic/climatecard-service",
    rangeNotice: "https://news.seoul.go.kr/traffic/archives/519012?listPage=1",
    shortFaq: "https://news.seoul.go.kr/traffic/public/climatecard-faq/faq-short",
    catchtable: "https://www.catchtable.net/",
    catchGuide: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=205615",
    kt: "https://m.roaming.kt.com/eng/esim",
    korail: "https://www.korail.com/global/eng/main",
    medical: "https://www.medicalkorea.or.kr/en/registeredhospitals",
    egen: "https://www.e-gen.or.kr",
    helpline: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632"
  };
  function link(key, label) { return {url: URL[key], label: label}; }
  function steps(title, items) { return {type: "steps", title: title, items: items.map(function (p) { return {t:p[0], d:p[1]}; })}; }
  function defs(title, items) { return {type:"defs", title:title, items:items}; }
  function phrases(title, rows) { return {type:"phrases", groups:[{title:title, items:rows}]}; }
  var ko = [
    {
      id:"before-climate", num:"GUIDE", short:"기후동행카드", title:"기후동행카드, 어디까지 이용할 수 있나요?",
      lead:"서울 중심 여행을 위한 단기권 안내. 지도상 서울 안에 있더라도 노선 · 승차역 · 하차역을 각각 확인할 필요가 있음.",
      blocks:[
        steps("출발 전 확인 순서",[
          ["승차역과 하차역을 모두 검색", "아래 서울시 공식 이용범위 검색에서 두 역의 노선과 승차 · 하차 가능 여부 확인. 같은 이름의 역도 노선에 따라 이용 가능 여부가 다름."],
          ["승차·하차 불가 역을 이용한다면 다른 카드 준비", "출발역 또는 도착역에서 기후동행카드를 사용할 수 없다면 처음 승차할 때부터 일반 교통카드나 별도 승차권 이용. 개찰구 안에서 카드를 바꾸거나 초과 구간 요금만 내면 된다고 판단하지 않도록 주의."],
          ["별도 구간으로 나눌 때는 직원에게 확인", "유효한 역에서 하차 처리를 마친 뒤 별도로 재승차하는 방식인지 확인. 환승 할인과 총요금은 달라질 수 있음. 범위 밖까지 이동했다면 임의로 다시 태그하지 말고 역 직원에게 문의."]
        ]),
        defs("이용 범위 한눈에 보기",[
          ["서울 내 지하철", "공식 역별 표에서 승차·하차가 모두 가능한 역과 노선 이용. 신분당선·GTX는 제외."],
          ["서울시 면허 시내·마을버스", "심야·순환버스를 포함해 이용 가능. 서울시 면허 노선은 서울 밖에서 타거나 내려도 가능하지만, 광역·공항버스와 다른 지역 면허 버스는 제외."],
          ["인천공항 T1·T2", "서비스 범위 안 역에서 출발해 공항철도로 공항역에서 내리는 것은 예외적으로 가능. 인천공항 T1·T2에서 기후동행카드로 승차하는 것은 불가."],
          ["서울 밖 여행", "양평·여주·강릉 등 근교·지역 여행은 별도 교통카드나 승차권 준비. 예전 경기도 확대 노선도 현재 단기권 범위와 다를 수 있으니 공식 표로 확인."]
        ]),
        defs("단기권 선택·구매",[
          ["일반 단기권", "1일 5,000원 / 2일 8,000원 / 3일 10,000원 / 5일 15,000원 / 7일 20,000원. 실물 카드 구입비 3,000원 별도."],
          ["시작일", "충전한 날부터 이용 시작. 미리 충전해 두는 방식이 아니므로 실제 이용 당일 충전. 1일권은 충전 시각부터 24시간 동안 사용하는 방식이 아님."],
          ["구매·충전", "공식 안내에서 판매처와 충전 가능한 역 확인. 휴대폰 · 인증 조건이 맞지 않으면 실물 카드 구매를 고려하고 현장 결제 수단 확인."],
          ["구형 안내 주의", "관광객용 단기권 기준 안내. 예전 30일권 · 후불권 안내와 구분하고 할인 · 환불 · 청소년 인증 조건은 공식 안내에서 확인."]
        ]),
        phrases("역 직원에게 보여 줄 문장",[
          ["이 역에서 저 역까지 기후동행카드로 갈 수 있나요?", "i yeo-ge-seo jeo yeok-kka-ji gi-hu-dong-haeng-ka-deu-ro gal su in-na-yo?", "Can I use the Climate Card from this station to that station?", "지도에서 출발역·도착역을 함께 보여 주기"],
          ["기후동행카드 이용 범위를 벗어났어요. 어떻게 정산하나요?", "gi-hu-dong-haeng-ka-deu i-yong beom-wi-reul beo-seo-na-sseo-yo. eo-tteo-ke jeong-san-ha-na-yo?", "I've travelled outside the Climate Card area. How should I pay?", "범위 밖 역에 도착했을 때 역 직원에게"]
        ])
      ],
      tips:["공식 정보 확인: 2026-11-27. 이용범위는 2026-10-01 변경 안내 반영. 출발 당일 공식 역별 표 재확인.","범위 밖 역에서 하차하면 출발역부터의 요금이 별도로 청구될 수 있음. 서울 시내를 지나는 열차도 모두 이용 가능한 것은 아님."],
      links:[link("range","서울시 공식 이용범위·노선 검색 (한국어)"),link("climate","영어 안내·역별 승차/하차 표·요금"),link("rangeNotice","2026년 10월 이용범위 변경 안내"),link("shortFaq","서울시 단기권 FAQ")]
    },
    {
      id:"before-auth", num:"GUIDE", short:"본인인증 없이 이용", title:"한국 본인인증이 안 될 때 쓸 수 있는 대안",
      lead:"여행자와 외국인등록증 발급을 기다리는 유학생 모두 ‘문자 수신’과 ‘국내 본인인증’의 차이부터 확인. 한국 번호가 있어도 모든 인증이 가능한 것은 아님.",
      blocks:[
        defs("하려는 일에 맞는 경로 선택",[
          ["식당 예약·웨이팅", "CATCHTABLE Global 등록 매장은 한국 번호 없이 Google · Apple 계정으로 이용 가능. 매장별 예약 · 현장 대기 방식과 알림 수신 방법은 별도 확인."],
          ["열차 예매", "코레일 외국어 예매 경로부터 확인. 진행이 막히면 역 창구에서 여권과 원하는 구간 · 시간을 제시하고 문의. 잔여 좌석이 있어야 구매 가능."],
          ["국내 번호 필수 화면", "이메일 문의 · 외국인용 페이지 · 전화 · 현장 접수 중 가능한 방법을 매장에 문의. 모든 서비스에 대체 방법이 있는 것은 아님."],
          ["등록증 발급 대기 중", "가입하려는 서비스의 인증 요건 확인 후 학교 국제처 · 서비스 고객센터에 임시 이용 방법 문의. 등록증 수령 후에도 통신사에 가입자 정보와 인증 가능 여부 확인."]
        ]),
        steps("진행이 막혔을 때",[
          ["오류 단계와 상품 기능 확인", "문자 코드 미수신과 국내 본인인증 거절을 구분. 관광객용 SIM의 기능과 입국확인 절차는 판매처에 문의."],
          ["외국인 경로 또는 직원 도움 선택", "아래 공식 안내를 확인하거나 매장에 이름 · 이메일 접수 가능 여부 문의. 현장 호출을 놓치지 않도록 대기 장소도 확인."],
          ["완료 여부를 직접 확인", "예약번호 · 날짜 · 시간 · 취소 조건 저장. 접수 화면이나 결제 알림만으로 예약 확정을 판단하지 않도록 주의."]
        ]),
        phrases("직원에게 보여 줄 문장",[
          ["한국 본인인증을 할 수 없어요. 이메일이나 현장 접수가 가능한가요?", "han-guk bon-in-in-jeung-eul hal su eop-seo-yo. i-me-i-ri-na hyeon-jang jeop-su-ga ga-neung-han-ga-yo?", "I can't complete Korean identity verification. Can I register by email or in person?"],
          ["외국인등록증을 기다리고 있어요. 다른 이용 방법이 있나요?", "oe-gu-gin-deung-nok-jeung-eul gi-da-ri-go i-sseo-yo. da-reun i-yong bang-beo-bi in-na-yo?", "I'm waiting for my residence card. Is there another way to use this service?"]
        ])
      ],
      tips:["공식 정보 확인: 2026-11-27. KT 관광객 eSIM은 국내 본인인증 미지원으로 안내. 다른 상품도 구매 전 개별 조건 확인."],
      links:[link("catchGuide","한국관광공사 CATCHTABLE Global 이용 안내"),link("catchtable","CATCHTABLE Global"),link("korail","코레일 외국어 예매"),link("kt","KT 관광객 eSIM·인증 안내")]
    },
    {
      id:"during-dermatology", num:"GUIDE", short:"피부과 찾기", title:"여행 중 피부과를 찾고 예약하는 방법",
      lead:"피부질환 진료와 미용 상담 중 방문 목적부터 전달. 외국인 환자 접수 · 지원 언어 · 진료 가능 항목은 병원에 직접 확인.",
      blocks:[
        steps("찾기부터 방문 준비까지",[
          ["지역과 진료 목적을 함께 검색", "지도에서 ‘지역명 + 피부과’를 검색하고 병원에 피부질환 진료 또는 원하는 상담의 가능 여부 문의. Medical Korea의 등록 의료기관 목록도 참고 가능."],
          ["방문 전에 언어·비용·예약 확인", "지원 언어 · 통역 비용 · 초진 진찰료 · 검사 및 처치 비용 · 예약 필요 여부 문의. 온라인 등록 정보만으로 모든 언어 지원이나 진료 적합성이 보장되는 것은 아님."],
          ["필요한 자료와 이후 연락 방법 준비", "여권 · 복용약 · 알레르기 정보 · 증상 시작 시점 준비. 진료 후 영수증과 안내문, 출국 후 문의할 연락처 보관. 보험 적용과 청구 서류는 보험사에 확인."]
        ]),
        {type:"keyset", title:"직접 검색할 때", items:[["피부질환 진료","명동 피부과 피부질환 진료","홍대 피부과 외국인 진료"],["언어 지원 확인","강남 피부과 영어 진료","서울 피부과 일본어 상담","서울 피부과 중국어 상담"]],caption:"검색 결과는 추천이나 보증이 아님. 실제 진료 내용과 언어 지원은 병원에 문의."},
        phrases("진료·예약 문의에 쓰는 한국어",[
          ["피부질환 진료를 받고 싶어요. 외국어 상담이 가능한가요?", "pi-bu-jil-hwan jin-ryo-reul bat-go si-peo-yo. oe-gu-geo sang-da-mi ga-neung-han-ga-yo?", "I'd like a consultation for a skin condition. Is consultation available in another language?"],
          ["진찰료와 검사 비용을 먼저 알고 싶어요.", "jin-chal-lyo-wa geom-sa bi-yong-eul meon-jeo al-go si-peo-yo.", "I'd like to know the consultation and test fees first."]
        ]),
        {type:"text",text:"호흡곤란 · 의식 저하 등 즉시 도움이 필요한 상황은 피부과 예약을 기다리지 말고 기존 ‘병원 · 약국 · 응급’ 안내에서 긴급 도움 이용."}
      ],
      tips:["공식 정보 확인: 2026-11-27. 의료기관 검색과 의사소통 방법에 관한 안내이며 증상 진단이나 시술 추천은 제공하지 않음."],
      links:[link("medical","Medical Korea 등록 의료기관 찾기"),link("egen","E-Gen 병원·약국 안내"),link("helpline","1330 관광 안내·통역")], next:["#during-health","병원·약국·응급 도움"]
    }
  ];
  var en = [
    {
      id:"before-climate",num:"GUIDE",short:"Climate Card",title:"Where can I use the Climate Card?",lead:"A short-term pass for travel around Seoul. Check the line and both stations, even when the route looks close to Seoul on a map.",
      blocks:[
        steps("Check before boarding",[
          ["Look up both stations", "Use Seoul's official coverage search below to check the line and whether boarding and alighting are allowed at each station."],
          ["Use another card if boarding or alighting is not allowed", "If your departure or arrival station does not accept the pass for that action, use a regular transit card or a separate ticket from your first station. Do not assume you can simply switch cards inside the gates or pay only for the extra section."],
          ["Ask before splitting the journey", "If dividing the trip, check with staff how to exit properly at a covered station and re-enter separately. Transfer discounts and total fares may change. If you have already travelled outside coverage, ask station staff how to pay."]
        ]),
        defs("Coverage at a glance",[
          ["Subways within Seoul", "Use lines and stations marked as allowing both boarding and alighting in the official table. Sinbundang Line and GTX are excluded."],
          ["Seoul-licensed city and town buses", "Includes night and circular buses. Eligible Seoul-licensed routes can be used outside Seoul too; express buses, airport buses and buses licensed elsewhere are excluded."],
          ["Incheon Airport T1 and T2", "You may travel from a covered station and alight at these Airport Railroad stations as an exception. You cannot board there using the Climate Card."],
          ["Trips outside Seoul", "Prepare a separate transit card or ticket for trips such as Yangpyeong, Yeoju and Gangneung. Previously expanded Gyeonggi coverage may no longer apply to the short-term pass."]
        ]),
        defs("Choose and buy a pass",[
          ["Standard short-term fares", "1 day ₩5,000 / 2 days ₩8,000 / 3 days ₩10,000 / 5 days ₩15,000 / 7 days ₩20,000. A physical card costs an additional ₩3,000."],
          ["Start date", "Validity starts on the recharge date; do not recharge in advance. A one-day pass does not mean 24 hours from the time you recharge."],
          ["Purchase and recharge", "Check official sales outlets and recharge stations. Consider a physical card if your phone or verification requirements do not match; check accepted payment methods at the outlet."],
          ["Older information", "This guide covers the tourist short-term pass. Check current conditions for discounts, refunds and youth verification; older 30-day and postpaid information is different."]
        ]),
        phrases("Show station staff",[
          [ko[0].blocks[3].groups[0].items[0][0],ko[0].blocks[3].groups[0].items[0][1],"Can I use the Climate Card from this station to that station?","Show your departure and arrival stations on the map."],
          [ko[0].blocks[3].groups[0].items[1][0],ko[0].blocks[3].groups[0].items[1][1],"I've travelled outside the Climate Card area. How should I pay?","Ask station staff if you have arrived outside coverage."]
        ])
      ],tips:["Official information checked 2026-11-27, reflecting the coverage change effective 2026-10-01. Recheck the official station table before travel.","Alighting outside coverage may require paying the fare from your original boarding station. A train passing through Seoul is not automatically covered."],
      links:[link("range","Official coverage and line search (Korean)"),link("climate","English guide, station table and fares"),link("rangeNotice","October 2026 coverage change (Korean)"),link("shortFaq","Official short-term pass FAQ (Korean)")]
    },
    {
      id:"before-auth",num:"GUIDE",short:"Without identity verification",title:"Alternatives when Korean identity verification is unavailable",lead:"For tourists and students waiting for a residence card: receiving an SMS and completing Korean identity verification are different. A Korean number alone does not guarantee access.",
      blocks:[
        defs("Choose an alternative for your task",[
          ["Restaurant bookings and waitlists", "For participating restaurants, CATCHTABLE Global supports Google or Apple sign-in without a Korean number. Check the restaurant's booking, on-site waiting and notification options."],
          ["Train tickets", "Try KORAIL's foreign-language booking service. If you cannot proceed, show your passport and desired route and time at a staffed station counter. Seats must still be available."],
          ["A Korean-number-only screen", "Ask the business about email, a foreign-visitor page, phone assistance or in-person registration. Some services may have no alternative."],
          ["Waiting for a residence card", "Ask the service which verification it needs and contact your university's international office or customer support about temporary access. After receiving the card, confirm subscriber details and verification eligibility with your carrier."]
        ]),
        steps("When you get stuck",[
          ["Identify the failed step", "Check whether the problem is SMS delivery or Korean identity verification. Ask the SIM seller about supported features and any entry-verification step."],
          ["Use a visitor route or ask staff", "Open the official guides below or ask whether your name or email can be used. Confirm where to wait so you do not miss a call."],
          ["Confirm completion", "Save the booking reference, date, time and cancellation terms. A submitted request or payment notification alone does not confirm a booking."]
        ]),
        phrases("Show staff",[
          [ko[1].blocks[2].groups[0].items[0][0],ko[1].blocks[2].groups[0].items[0][1],"I can't complete Korean identity verification. Can I register by email or in person?"],
          [ko[1].blocks[2].groups[0].items[1][0],ko[1].blocks[2].groups[0].items[1][1],"I'm waiting for my residence card. Is there another way to use this service?"]
        ])
      ],tips:["Official information checked 2026-11-27. KT states its tourist eSIM does not support Korean personal authentication. Confirm the conditions of other products individually before purchase."],
      links:[link("catchGuide","Korea Tourism Organization: CATCHTABLE Global"),link("catchtable","CATCHTABLE Global"),link("korail","KORAIL foreign-language booking"),link("kt","KT tourist eSIM and verification guide")]
    },
    {
      id:"during-dermatology",num:"GUIDE",short:"Find a dermatologist",title:"Finding and booking a skin clinic during your trip",lead:"Explain whether you need care for a skin condition or a cosmetic consultation. Ask the clinic directly about international patients, supported languages and available care.",
      blocks:[
        steps("From searching to preparing for your visit",[
          ["Search by area and purpose", "Search a map for the area plus ‘피부과’ (dermatology), then ask whether the clinic treats your type of skin concern or offers the consultation you need. Medical Korea's registered-hospital directory is another starting point."],
          ["Ask about language, fees and bookings", "Check languages, interpretation fees, the first consultation fee, possible test or procedure fees, and appointment requirements. A directory entry does not guarantee language availability or suitability for your care."],
          ["Prepare records and follow-up contacts", "Bring your passport, medication and allergy details, and when symptoms started. Keep receipts, written instructions and a contact for questions after departure. Ask your insurer about coverage and claim documents."]
        ]),
        {type:"keyset",title:"Search terms",items:[["Skin-condition consultations","명동 피부과 피부질환 진료","홍대 피부과 외국인 진료"],["Check language support","강남 피부과 영어 진료","서울 피부과 일본어 상담","서울 피부과 중국어 상담"]],caption:"Search results are not recommendations or guarantees. Confirm available care and languages directly with the clinic."},
        phrases("Korean for your inquiry",[
          [ko[2].blocks[2].groups[0].items[0][0],ko[2].blocks[2].groups[0].items[0][1],"I'd like a consultation for a skin condition. Is consultation available in another language?"],
          [ko[2].blocks[2].groups[0].items[1][0],ko[2].blocks[2].groups[0].items[1][1],"I'd like to know the consultation and test fees first."]
        ]),
        {type:"text",text:"If you need immediate help, such as for difficulty breathing or reduced consciousness, do not wait for a skin-clinic appointment. Use the emergency help in the existing hospital and pharmacy guide."}
      ],tips:["Official information checked 2026-11-27. This guide helps you find and communicate with a clinic; it does not diagnose symptoms or recommend procedures."],
      links:[link("medical","Medical Korea: registered hospitals"),link("egen","E-Gen: hospitals and pharmacies"),link("helpline","1330 travel information and interpretation")],next:["#during-health","Hospital, pharmacy and emergency help"]
    }
  ];
  var ja = [
    {
      id:"before-climate",num:"GUIDE",short:"気候同行カード",title:"気候同行カードはどこまで使えますか？",lead:"ソウル中心の旅行に使える短期券の案内です。地図でソウルに近く見えても、路線・乗車駅・降車駅をそれぞれ確認しましょう。",
      blocks:[
        steps("乗車前に確認すること",[
          ["乗車駅と降車駅を検索", "下のソウル市公式の利用範囲検索で、両駅の路線と乗車・降車の可否を確認。同じ駅名でも路線によって異なります。"],
          ["乗車・降車ができない駅を利用する場合は別のカードを準備", "乗車駅または降車駅で気候同行カードが使えない場合は、最初の乗車から通常の交通カードや別の乗車券を利用してください。改札内でカードを替えるだけでよい、超過区間だけ払えばよいとは限りません。"],
          ["区間を分ける場合は駅員に確認", "対象駅で正しく出場してから別のカードで入り直す方法を確認。乗り継ぎ割引や合計運賃が変わる場合があります。対象外の駅まで行った場合は駅員に精算方法を尋ねましょう。"]
        ]),
        defs("利用範囲の目安",[
          ["ソウル市内の地下鉄", "公式の駅別一覧で乗車・降車がともに可能な駅・路線を利用。新盆唐線とGTXは対象外。"],
          ["ソウル市が免許を交付した市内・マウルバス", "深夜・循環バスを含みます。対象のソウル市免許路線なら市外での乗降も可能。ただし広域・空港バス、他地域の免許のバスは対象外。"],
          ["仁川空港T1・T2", "対象駅から乗車し、空港鉄道の仁川空港駅で降りる場合は例外的に利用可能。仁川空港T1・T2からこのカードで乗車することはできません。"],
          ["ソウル市外への旅行", "楊平・驪州・江陵などへは別の交通カードや乗車券を準備。以前の京畿道への拡大区間も現在の短期券の範囲とは異なる場合があります。"]
        ]),
        defs("短期券の選び方・購入",[
          ["一般短期券", "1日5,000ウォン / 2日8,000ウォン / 3日10,000ウォン / 5日15,000ウォン / 7日20,000ウォン。実物カード代3,000ウォンは別途。"],
          ["利用開始日", "チャージした日から利用開始。事前チャージはできないため、実際に使う日にチャージしましょう。1日券はチャージ時刻から24時間有効という意味ではありません。"],
          ["購入・チャージ", "販売店とチャージ可能な駅は公式案内で確認。端末や認証の条件が合わなければ実物カードを検討し、現地の支払い方法を確認しましょう。"],
          ["古い案内との違い", "ここでは観光客向け短期券を案内しています。以前の30日券・後払い券とは区別し、割引・払い戻し・青少年認証は最新の公式条件を確認してください。"]
        ]),
        phrases("駅員に見せる韓国語",[
          [ko[0].blocks[3].groups[0].items[0][0],ko[0].blocks[3].groups[0].items[0][1],"この駅からあの駅まで気候同行カードで行けますか？","地図で出発駅と到着駅を一緒に見せましょう。"],
          [ko[0].blocks[3].groups[0].items[1][0],ko[0].blocks[3].groups[0].items[1][1],"気候同行カードの利用範囲外まで来てしまいました。どう精算すればよいですか？","対象外の駅に着いたとき、駅員へ。"]
        ])
      ],tips:["公式情報の確認日：2026-11-27。2026-10-01の利用範囲変更を反映。利用当日も公式の駅別一覧を確認してください。","対象外の駅で降りると、乗車駅からの運賃を別途請求される場合があります。ソウルを通る列車すべてが対象ではありません。"],
      links:[link("range","ソウル市公式の利用範囲・路線検索（韓国語）"),link("climate","英語案内・駅別乗降一覧・料金"),link("rangeNotice","2026年10月の利用範囲変更（韓国語）"),link("shortFaq","短期券の公式FAQ（韓国語）")]
    },
    {
      id:"before-auth",num:"GUIDE",short:"本人認証なしで利用",title:"韓国の本人認証ができないときの代替方法",lead:"旅行者も在留カードの発行待ちの留学生も、SMSの受信と韓国の本人認証を分けて確認しましょう。韓国の電話番号だけですべての認証ができるわけではありません。",
      blocks:[
        defs("目的に合う利用方法を選ぶ",[
          ["飲食店の予約・順番待ち", "CATCHTABLE Globalの対象店舗では、韓国の番号なしでGoogle・Appleアカウントを利用可能。予約・現地受付・通知方法は店舗ごとに確認してください。"],
          ["列車の予約", "まずKORAILの外国語予約サイトを確認。手続きが進まない場合は、駅窓口でパスポートと希望区間・時刻を見せて相談しましょう。空席が必要です。"],
          ["韓国の番号が必須の画面", "メール、外国人向けページ、電話、現地受付などの方法があるか店舗に問い合わせましょう。代替方法がないサービスもあります。"],
          ["在留カードの発行待ち", "必要な認証の種類をサービス側に確認し、大学の国際担当部署や窓口に一時的な利用方法を相談。カード受領後も通信会社で契約者情報と認証可否を確認しましょう。"]
        ]),
        steps("手続きが止まったら",[
          ["エラーの段階とSIMの機能を確認", "SMSが届かないのか、韓国の本人認証ができないのかを区別。旅行者向けSIMの機能や入国確認手続きは販売元に問い合わせましょう。"],
          ["外国人向け窓口かスタッフのサポートを利用", "下の公式案内を開くか、名前・メールで受付できるか尋ねましょう。呼び出しを逃さないよう待つ場所も確認。"],
          ["手続きの完了を確認", "予約番号・日時・キャンセル条件を保存。申込画面や決済通知だけで予約が確定したと判断しないようにしましょう。"]
        ]),
        phrases("スタッフに見せる韓国語",[
          [ko[1].blocks[2].groups[0].items[0][0],ko[1].blocks[2].groups[0].items[0][1],"韓国の本人認証ができません。メールか現地で受付できますか？"],
          [ko[1].blocks[2].groups[0].items[1][0],ko[1].blocks[2].groups[0].items[1][1],"在留カードの発行を待っています。ほかの利用方法はありますか？"]
        ])
      ],tips:["公式情報の確認日：2026-11-27。KTは旅行者向けeSIMで韓国の本人認証は利用できないと案内しています。他の商品も購入前に個別の条件を確認してください。"],
      links:[link("catchGuide","韓国観光公社：CATCHTABLE Globalの使い方"),link("catchtable","CATCHTABLE Global"),link("korail","KORAIL外国語予約"),link("kt","KT旅行者向けeSIM・認証案内")]
    },
    {
      id:"during-dermatology",num:"GUIDE",short:"皮膚科を探す",title:"旅行中の皮膚科の探し方・予約方法",lead:"皮膚の病気の診察が必要なのか、美容相談を希望するのかを先に伝えましょう。外国人の受付・対応言語・診療内容は医療機関に直接確認してください。",
      blocks:[
        steps("検索から受診準備まで",[
          ["地域と受診目的で検索", "地図で「地域名＋피부과（皮膚科）」を検索し、希望する皮膚疾患の診察や相談に対応できるか確認。Medical Koreaの登録医療機関一覧も参考になります。"],
          ["言語・費用・予約を事前確認", "対応言語、通訳料、初診料、検査・処置の費用、予約の要否を問い合わせましょう。一覧への登録だけで、全言語への対応や診療の適合性が保証されるわけではありません。"],
          ["資料と帰国後の連絡先を準備", "パスポート、服用薬・アレルギーの情報、症状が始まった時期を準備。受診後は領収書・説明書・帰国後の問い合わせ先を保管。保険の適用と請求書類は保険会社に確認しましょう。"]
        ]),
        {type:"keyset",title:"検索に使える韓国語",items:[["皮膚疾患の診察","명동 피부과 피부질환 진료","홍대 피부과 외국인 진료"],["対応言語の確認","강남 피부과 영어 진료","서울 피부과 일본어 상담","서울 피부과 중국어 상담"]],caption:"検索結果は推薦・保証ではありません。診療内容と言語対応は医療機関に直接確認してください。"},
        phrases("予約・受診時の韓国語",[
          [ko[2].blocks[2].groups[0].items[0][0],ko[2].blocks[2].groups[0].items[0][1],"皮膚の病気について診察を受けたいです。外国語で相談できますか？"],
          [ko[2].blocks[2].groups[0].items[1][0],ko[2].blocks[2].groups[0].items[1][1],"診察料と検査費用を先に知りたいです。"]
        ]),
        {type:"text",text:"息苦しさや意識の低下など、すぐに助けが必要な場合は皮膚科の予約を待たず、「病院・薬局・緊急時」の案内から緊急の支援を利用してください。"}
      ],tips:["公式情報の確認日：2026-11-27。この案内は医療機関の探し方と意思疎通を支援するもので、診断や施術の推薦は行いません。"],
      links:[link("medical","Medical Korea登録医療機関検索"),link("egen","E-Gen病院・薬局案内"),link("helpline","1330観光案内・通訳")],next:["#during-health","病院・薬局・緊急時の案内"]
    }
  ];
  var zh = [
    {
      id:"before-climate",num:"GUIDE",short:"气候同行卡",title:"气候同行卡可以用到哪里？",lead:"适用于首尔市内旅行的短期票指南。即使地图上看起来离首尔很近，也要分别确认线路、上车站和下车站。",
      blocks:[
        steps("乘车前按顺序确认",[
          ["查询上车站和下车站", "在下方首尔市官方使用范围查询中，确认两个车站的线路以及是否允许上下车。同名车站的不同线路也可能有区别。"],
          ["上车站或下车站不适用时，准备其他交通卡", "若出发站不允许使用气候同行卡上车，或到达站不允许下车，请从最初上车站起使用普通交通卡或单独车票。不要以为在闸机内换一张卡，或只补超出部分的费用就可以。"],
          ["分段乘车前先问工作人员", "如要分段，确认如何在适用车站完成出闸，再另行进站。换乘优惠和总费用可能变化。已到达范围外车站时，请先向站员询问结算方法。"]
        ]),
        defs("使用范围速览",[
          ["首尔市内地铁", "使用官方车站表中上下车均允许的线路和车站。新盆唐线、GTX不适用。"],
          ["首尔市许可的市内及社区公交", "包括深夜、循环公交。适用的首尔市许可线路在市外上下车也可使用；广域公交、机场巴士及其他地区许可的公交不适用。"],
          ["仁川机场T1、T2", "从适用车站出发，经机场铁路在这两个机场站下车属于例外允许情况。但不能在仁川机场T1、T2用此卡上车。"],
          ["首尔以外旅行", "前往杨平、骊州、江陵等地需另备交通卡或车票。过去扩展至京畿道的区间，也可能不在目前短期票的范围内。"]
        ]),
        defs("选择及购买短期票",[
          ["普通短期票", "1日5,000韩元 / 2日8,000韩元 / 3日10,000韩元 / 5日15,000韩元 / 7日20,000韩元。实体卡另收3,000韩元购卡费。"],
          ["开始日期", "充值当天开始使用，不能提前充值后再指定开始日。请在实际使用当天充值；1日票不等于从充值时刻起24小时有效。"],
          ["购买与充值", "在官方指南确认销售点和可充值车站。手机或认证条件不符时，可考虑实体卡，并确认现场支持的付款方式。"],
          ["注意旧版信息", "本页介绍游客使用的短期票。请与过去30日票、后付费卡的说明区分；优惠、退款、青少年认证条件以官方最新说明为准。"]
        ]),
        phrases("给车站工作人员看",[
          [ko[0].blocks[3].groups[0].items[0][0],ko[0].blocks[3].groups[0].items[0][1],"从这个站到那个站可以用气候同行卡吗？","请同时在地图上展示出发站和到达站。"],
          [ko[0].blocks[3].groups[0].items[1][0],ko[0].blocks[3].groups[0].items[1][1],"我坐到了气候同行卡范围以外，应该怎样结算？","到达范围外车站时向站员询问。"]
        ])
      ],tips:["官方信息确认日期：2026-11-27，已反映2026-10-01使用范围调整。出行当天请再次查看官方车站表。","在范围外车站下车，可能需要另付从原上车站开始的全程车费。并非经过首尔的列车都适用。"],
      links:[link("range","首尔市官方范围及线路查询（韩语）"),link("climate","英语指南、各站上下车表及票价"),link("rangeNotice","2026年10月使用范围调整（韩语）"),link("shortFaq","官方短期票常见问题（韩语）")]
    },
    {
      id:"before-auth",num:"GUIDE",short:"无法实名认证时",title:"无法完成韩国实名认证时的替代办法",lead:"游客和等待外国人登录证的留学生，都应先区分短信接收与韩国实名认证。有韩国手机号，也不代表能完成所有认证。",
      blocks:[
        defs("按需要办理的事项选择",[
          ["餐厅预约与排队", "CATCHTABLE Global支持已入驻餐厅使用Google或Apple账号，无需韩国手机号。各店的预约、现场排队和通知方式需另行确认。"],
          ["火车订票", "先尝试KORAIL外语订票渠道。无法继续时，可在车站人工窗口出示护照及希望乘坐的区间、时间并咨询，购票仍取决于是否有余票。"],
          ["页面要求韩国手机号", "向店家询问能否通过邮箱、外国游客页面、电话或现场办理。有些服务可能没有替代方式。"],
          ["正在等待外国人登录证", "先问服务方需要哪种认证，再向学校国际事务部门或客服咨询临时使用方式。拿到证件后，也要向运营商确认实名登记信息及认证资格。"]
        ]),
        steps("办理受阻时",[
          ["确认卡在哪一步", "区分是收不到短信，还是韩国实名认证失败。游客SIM的功能和入境确认步骤请咨询销售方。"],
          ["改用游客渠道或请工作人员协助", "查看下方官方指南，或询问能否用姓名、邮箱登记。也要确认等待位置，避免错过叫号。"],
          ["确认办理完成", "保存预约编号、日期、时间及取消条件。仅看到申请页面或付款提醒，并不一定代表预约已确认。"]
        ]),
        phrases("给工作人员看的韩语",[
          [ko[1].blocks[2].groups[0].items[0][0],ko[1].blocks[2].groups[0].items[0][1],"我无法完成韩国实名认证。可以通过邮箱或现场办理吗？"],
          [ko[1].blocks[2].groups[0].items[1][0],ko[1].blocks[2].groups[0].items[1][1],"我正在等待外国人登录证。有其他使用方式吗？"]
        ])
      ],tips:["官方信息确认日期：2026-11-27。KT说明其游客eSIM不支持韩国实名认证；购买其他商品前也请分别确认条件。"],
      links:[link("catchGuide","韩国观光公社CATCHTABLE Global指南"),link("catchtable","CATCHTABLE Global"),link("korail","KORAIL外语订票"),link("kt","KT游客eSIM及认证说明")]
    },
    {
      id:"during-dermatology",num:"GUIDE",short:"查找皮肤科",title:"旅行中怎样查找和预约皮肤科",lead:"先说明需要皮肤疾病诊疗，还是希望进行美容咨询。外国患者接诊、支持语言及诊疗项目都需直接向医疗机构确认。",
      blocks:[
        steps("从搜索到就诊准备",[
          ["按地区和就诊目的搜索", "在地图搜索“地区名＋피부과（皮肤科）”，再询问是否能处理相关皮肤问题或提供所需咨询。也可参考Medical Korea注册医疗机构目录。"],
          ["提前确认语言、费用和预约", "询问支持语言、翻译费、初诊费、检查或处置费用及是否需要预约。列入目录并不保证支持所有语言或适合你的诊疗需求。"],
          ["准备资料及后续联系方式", "携带护照、用药和过敏信息，并说明症状开始时间。就诊后保留收据、书面说明和回国后可联系的方式。保险报销范围及材料请向保险公司确认。"]
        ]),
        {type:"keyset",title:"可直接使用的韩语搜索词",items:[["皮肤疾病诊疗","명동 피부과 피부질환 진료","홍대 피부과 외국인 진료"],["确认语言支持","강남 피부과 영어 진료","서울 피부과 일본어 상담","서울 피부과 중국어 상담"]],caption:"搜索结果不代表推荐或保证。请直接向医疗机构确认诊疗内容及语言支持。"},
        phrases("预约和咨询时使用",[
          [ko[2].blocks[2].groups[0].items[0][0],ko[2].blocks[2].groups[0].items[0][1],"我想就皮肤疾病就诊。可以使用外语咨询吗？"],
          [ko[2].blocks[2].groups[0].items[1][0],ko[2].blocks[2].groups[0].items[1][1],"我想先了解诊察费和检查费用。"]
        ]),
        {type:"text",text:"如出现呼吸困难、意识减弱等需要立即帮助的情况，不要等待皮肤科预约，请使用现有“医院・药店・紧急情况”指南中的紧急求助入口。"}
      ],tips:["官方信息确认日期：2026-11-27。本指南帮助查找医疗机构和沟通，不提供症状诊断或医疗项目推荐。"],
      links:[link("medical","Medical Korea注册医疗机构查询"),link("egen","E-Gen医院及药店指南"),link("helpline","1330旅游咨询及翻译")],next:["#during-health","医院、药店及紧急求助"]
    }
  ];
  return {ko:ko,en:en,ja:ja,zh:zh};
})();
