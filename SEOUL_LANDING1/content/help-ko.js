/* 서울 착륙 — 상황별 문제 해결 가이드 */
window.SL = window.SL || {};
window.SL.help = window.SL.help || {};
window.SL.help.ko = {
  ui: {
    intro: "여행 준비부터 귀국까지, 지금 막힌 상황에 맞는 해결 방법 찾기",
    shortcuts: "기존 가이드 바로가기",
    back: "도움 목록으로",
    choose: "지금 상황 선택",
    first: "먼저 할 일 3가지",
    alternative: "해결되지 않을 때",
    phrases: "직원에게 보여 줄 한국어",
    official: "공식 정보 확인",
    related: "함께 보면 좋은 안내",
    all: "다른 문제 해결하기",
    updated: "공식 규정·상품 조건·운영시간은 이용 전 재확인."
  },
  items: [
    {
      id: "entry", icon: "passport", stage: "출발 전", short: "입국 서류 준비",
      title: "어떤 입국 서류가 필요한지 모를 때",
      lead: "비자·K-ETA·입국신고를 구분해 확인. 국적·방문 목적·체류 기간에 따라 준비 항목이 달라질 수 있음.",
      choices: [
        { label: "아직 준비를 시작하지 않은 경우", steps: [
          { t: "여권과 여행 조건 정리", d: "여권 국적, 방문 목적, 체류 기간, 입국·출국 항공편 확인." },
          { t: "비자·K-ETA 대상 확인", d: "공식 비자포털과 K-ETA 사이트에서 본인에게 적용되는 요건 확인. 다른 여행자의 면제 사례만으로 판단하지 않기." },
          { t: "입국신고와 숙소 정보 준비", d: "전자입국신고는 무료. 공식 안내에서 제출 대상과 제출 가능 시점 확인. 여권·이메일·항공편·숙소 주소 준비." }
        ], fallback: "대상 여부가 불분명하면 출발 전 한국 공관에 국적·목적·체류 기간을 전달해 문의. 항공사에도 탑승 시 확인할 서류 문의." },
        { label: "입력 오류나 일정 변경이 있는 경우", steps: [
          { t: "어느 신청의 오류인지 구분", d: "비자, K-ETA, 전자입국신고 중 수정이 필요한 신청 확인. 서로 다른 절차이므로 각각 확인 필요." },
          { t: "공식 조회·수정 메뉴 확인", d: "여권 정보와 항공편·숙소 정보를 대조하고, 해당 서비스의 수정 또는 재신청 안내 확인." },
          { t: "처리 결과 저장", d: "접수번호와 완료 화면을 저장하고 이메일 확인. 비자·K-ETA는 승인 상태까지 확인. 전자입국신고는 제출 완료 여부 확인." }
        ], fallback: "수정 방법이 없거나 처리 상태가 불명확하면 해당 공식 고객지원에 문의. 출발 일정이 임박했다면 항공사에도 현재 상태 전달." }
      ],
      phrases: [["전자입국신고를 확인하고 싶어요.", "jeon-ja-ip-guk-sin-go-reul hwa-gin-ha-go si-peo-yo.", "I'd like to check my e-Arrival card.", "공항 안내 직원에게 문의할 때"]],
      links: [
        { url: "https://www.visa.go.kr", label: "대한민국 비자포털" },
        { url: "https://www.k-eta.go.kr", label: "K-ETA 공식 사이트" },
        { url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do?locale=E", label: "전자입국신고 절차 안내" },
        { url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do?locale=E", label: "전자입국신고 제출 대상 확인" }
      ],
      related: [["#before-plan", "여행 일정 준비"], ["#help-connection", "통신 준비"]]
    },
    {
      id: "connection", icon: "phone", stage: "출발 전 · 도착 직후", short: "인터넷·전화·인증",
      title: "인터넷이나 전화·문자 인증이 안 될 때",
      lead: "데이터 연결, 전화·문자 수신, 국내 본인인증은 서로 다른 기능. 한국 전화번호가 있어도 본인인증이 가능한지는 별도 확인.",
      choices: [
        { label: "SIM을 고르거나 설치하는 경우", steps: [
          { t: "휴대폰 호환 여부 확인", d: "기기 모델의 eSIM 지원과 통신사 잠금 해제 여부를 판매처 안내로 확인." },
          { t: "필요한 기능을 따로 확인", d: "데이터·통화·SMS 수신·국내 본인인증 지원을 각각 비교. 이용 기간과 설치·개통 시점도 확인." },
          { t: "연결 가능한 곳에서 설정", d: "판매처 설치 안내에 따라 설정하고 연결 확인. 숙소 주소와 예약 내역은 오프라인에서도 볼 수 있도록 저장." }
        ], fallback: "설치 오류 화면과 주문번호를 준비해 판매처에 문의. eSIM 삭제·재설치는 재사용 가능 여부를 확인한 뒤 진행." },
        { label: "인터넷은 되지만 문자나 인증이 안 되는 경우", steps: [
          { t: "인증 종류 확인", d: "단순 SMS 코드 수신인지, 통신사를 통한 국내 본인인증인지 화면에서 확인." },
          { t: "구매 상품 기능 확인", d: "부여된 번호와 SMS 수신 지원 여부 확인. 문자 수신 전 입국확인이 필요한 상품인지도 확인. 국내 본인인증 지원은 판매처에 별도 문의." },
          { t: "다른 이용 경로 찾기", d: "서비스의 이메일 로그인·외국인용 페이지·현장 접수 가능 여부 확인." }
        ], fallback: "매장 예약이나 웨이팅이 목적이면 직원에게 전화번호 없이 접수할 방법 문의. 통신 문제는 Wi-Fi를 통해 판매처 고객지원에 연락." }
      ],
      phrases: [["한국 전화번호가 없어요. 다른 방법이 있나요?", "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?", "I don't have a Korean phone number. Is there another way?", "예약·인증 화면에서 진행이 막혔을 때"]],
      links: [{ url: "https://m.roaming.kt.com/eng/esim", label: "KT 관광객 eSIM 기능·기기 안내" }],
      related: [["#before-apps", "필수 앱 준비"], ["#help-reservation", "예약·웨이팅 문제 해결"]]
    },
    {
      id: "payment", icon: "card", stage: "도착 직후 · 여행 중", short: "결제·교통카드 오류",
      title: "카드 결제나 교통카드 충전이 안 될 때",
      lead: "매장 결제와 교통카드 태그·충전은 별개. 오류가 난 단계부터 확인하고 대체 수단 준비.",
      choices: [
        { label: "매장이나 온라인에서 결제가 거절된 경우", steps: [
          { t: "결제 수단과 오류 확인", d: "해외 발급 카드 지원 여부와 화면의 오류 문구를 직원 또는 서비스에 확인." },
          { t: "승인 내역 확인", d: "카드사 앱에서 승인·취소 상태 확인. 승인 알림이 왔다면 반복 결제 전 매장에 실제 결제 여부 문의." },
          { t: "다른 결제 수단 준비", d: "다른 카드나 현금 사용 가능 여부 확인. 현금 인출은 해외 카드 지원 표시와 수수료를 확인한 ATM에서 진행." }
        ], fallback: "승인 내역과 영수증을 저장해 카드사 또는 결제 서비스에 문의. 결제 방식이 맞지 않으면 다른 매장·예약 경로 확인." },
        { label: "교통카드 태그나 충전이 안 되는 경우", steps: [
          { t: "카드 종류와 잔액 확인", d: "일반 신용카드와 교통카드를 구분하고, 이용하려는 교통수단에서 지원하는 카드인지 확인." },
          { t: "충전 장소의 결제 방식 확인", d: "충전기·편의점에서 현금과 해외 카드 중 무엇을 받는지 확인. 필요한 원화 현금 준비." },
          { t: "직원에게 이용 내역 확인 요청", d: "개찰구 오류나 추가 요금 안내가 나오면 역 직원에게 카드와 이동 경로를 보여 주고 확인 요청." }
        ], fallback: "카드 문제 해결 전 이용 가능한 1회권·승차권과 구매 방법을 역 직원에게 문의. 충전 금액이 반영되지 않으면 영수증 보관." }
      ],
      phrases: [
        ["이 카드로 결제할 수 있나요?", "i ka-deu-ro gyeol-je-hal su in-na-yo?", "Can I pay with this card?", "결제 전 또는 카드가 거절됐을 때"],
        ["교통카드를 충전하고 싶어요.", "gyo-tong-ka-deu-reul chung-jeon-ha-go si-peo-yo.", "I'd like to top up my transit card.", "편의점이나 역에서 충전할 때"]
      ],
      links: [{ url: "https://english.visitkorea.or.kr/public/contents/travel/KoreaTransportationGuide_enu.pdf", label: "한국관광공사 교통·결제 안내 (PDF)" }],
      related: [["#before-card", "교통카드 구매·충전"], ["#during-subway", "지하철 이용 방법"]]
    },
    {
      id: "arrival", icon: "plane", stage: "공항 도착", short: "늦은 도착·숙소 이동",
      title: "늦게 도착해 숙소까지 가기 어려울 때",
      lead: "착륙 시각과 공항에서 출발할 수 있는 시각을 구분. 입국 절차와 수하물 수령 후 이용 가능한 교통편 확인.",
      choices: [
        { label: "대중교통을 아직 이용할 수 있는 경우", steps: [
          { t: "터미널과 숙소 위치 확인", d: "현재 터미널과 숙소의 한국어 주소를 확인하고 지도에 저장." },
          { t: "막차와 환승까지 확인", d: "공항 공식 교통 안내에서 출발 터미널의 철도·버스 시간 확인. 첫 교통편뿐 아니라 숙소까지의 마지막 환승도 확인." },
          { t: "승차 위치와 요금 준비", d: "정류장·승강장 위치, 승차권 구매 방식, 하차 지점을 확인하고 이동." }
        ], fallback: "막차에 맞추기 어렵다면 심야버스나 공식 택시 승차장 이용 가능 여부 확인. 이동 중 숙소에 도착 예상 시각 전달." },
        { label: "막차를 놓쳤거나 지연 도착한 경우", steps: [
          { t: "남은 교통편 확인", d: "공항 안내데스크나 공식 사이트에서 해당 터미널의 심야버스·택시 안내 확인." },
          { t: "숙소 체크인 가능 여부 확인", d: "예약 메시지로 늦은 도착을 알리고 프런트 운영시간과 셀프 체크인 방법 확인." },
          { t: "주소와 예상 비용 전달·확인", d: "택시 이용 시 한국어 숙소 주소를 보여 주고 예상 비용과 결제 방식을 확인한 뒤 탑승." }
        ], fallback: "숙소와 연락이 닿지 않으면 예약 플랫폼 고객지원에 문의. 교통·의사소통 도움이 필요하면 공항 안내데스크 또는 1330 안내 이용." }
      ],
      phrases: [
        ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "한국어 숙소 주소와 함께 보여 주기"],
        ["늦게 도착할 것 같아요. 체크인할 수 있나요?", "neut-ge do-chak-hal geot ga-ta-yo. che-keu-in-hal su in-na-yo?", "I expect to arrive late. Can I still check in?", "숙소에 도착 지연을 알릴 때"]
      ],
      links: [{ url: "https://www.airport.kr/ap_en/1499/subview.do", label: "인천공항 대중교통·심야버스 안내" }],
      related: [["#during-taxi", "택시 이용 방법"], ["#help-stay", "숙소·짐 보관 문제 해결"]]
    },
    {
      id: "stay", icon: "home", stage: "숙소 이용", short: "체크인·짐 보관",
      title: "체크인이나 짐 보관이 어려울 때",
      lead: "체크인 시간·짐 보관·프런트 운영은 숙소마다 다름. 예약한 숙소의 안내부터 확인.",
      choices: [
        { label: "체크인 전이나 체크아웃 후 짐을 맡겨야 하는 경우", steps: [
          { t: "숙소에 보관 가능 여부 문의", d: "이용 날짜와 맡기고 찾을 시간을 전달하고, 비용·보관 장소·마감시간 확인." },
          { t: "다른 보관 장소 확인", d: "숙소에서 보관이 어렵다면 역 보관함이나 짐 보관 서비스의 위치·크기·운영시간·결제 방식 확인." },
          { t: "찾을 때 필요한 정보 저장", d: "보관증·접수번호·위치를 저장하고, 여권과 이동에 필요한 물품은 따로 챙기기." }
        ], fallback: "보관함이 가득 차거나 짐이 들어가지 않으면 직원에게 다른 보관 장소 문의. 보관소 마감시간과 다음 이동편 출발 시각을 고려해 수령 시간 조정." },
        { label: "셀프 체크인이나 숙소 출입이 안 되는 경우", steps: [
          { t: "예약 내역과 안내 메시지 확인", d: "숙소명·주소·예약 날짜가 맞는지 확인하고 출입 안내가 온 이메일·예약 앱 메시지 확인." },
          { t: "도착한 건물과 입구 확인", d: "같은 이름의 다른 지점인지 확인. 안내된 입구·층·키 수령 위치를 다시 대조." },
          { t: "숙소 담당자에게 상황 전달", d: "예약번호와 현재 위치, 오류 화면을 보내고 출입 방법 문의. 공개 게시물에 출입 비밀번호를 올리지 않기." }
        ], fallback: "연락이 되지 않으면 예약 플랫폼 고객지원에 문의하고 접수번호 저장. 언어 도움이 필요하면 1330 관광 안내·통역에 문의." }
      ],
      phrases: [
        ["체크인 전에 짐을 맡길 수 있나요?", "che-keu-in jeo-ne ji-meul mat-gil su in-na-yo?", "Can I leave my luggage before check-in?", "보관을 원하는 시간과 함께 문의"],
        ["예약했는데 문을 열 수 없어요. 도와주세요.", "ye-ya-kaet-neun-de mu-neul yeol su eop-seo-yo. do-wa-ju-se-yo.", "I have a reservation, but I can't open the door. Please help.", "예약번호와 숙소 주소를 함께 전달"]
      ],
      links: [
        { url: "https://www.tluggage.co.kr/eng", label: "T-Luggage 짐 보관·배송 예약" },
        { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 관광 안내·통역·채팅" }
      ],
      related: [["#help-arrival", "늦은 도착 대처"], ["#during-korean", "현장에서 쓰는 한국어"]]
    },
    {
      id: "reservation", icon: "reserve", stage: "예약 · 현장 체험", short: "예약·웨이팅 막힘",
      title: "한국 번호가 없어 예약·웨이팅이 막힐 때",
      lead: "전화번호 없이 이용 가능한 경로부터 확인. 예약과 현장 대기는 확정 방식과 호출 방법이 다를 수 있음.",
      choices: [
        { label: "온라인 예약이 진행되지 않는 경우", steps: [
          { t: "막힌 항목 확인", d: "한국 번호, 문자 수신, 국내 본인인증, 결제 중 어느 단계가 필요한지 확인." },
          { t: "외국인용 예약 경로 확인", d: "매장 공식 안내에서 외국인용 예약 페이지나 이메일 문의 경로 확인. 식당은 CATCHTABLE GLOBAL 등록 여부도 확인 가능." },
          { t: "예약 확정과 취소 조건 확인", d: "날짜·시간·인원·선결제 금액을 확인하고 확정 화면 저장. 취소 기한과 환불 조건도 함께 확인." }
        ], fallback: "외국인용 경로가 없으면 매장에 직접 예약 또는 현장 접수 가능 여부 문의. 다른 사람의 전화번호로 등록하기 전 호출을 받을 방법부터 확인." },
        { label: "현장 대기 기기에 한국 번호를 입력해야 하는 경우", steps: [
          { t: "직원에게 번호가 없다고 설명", d: "전화번호 대신 이름으로 접수할 수 있는지, 직원이 도와줄 수 있는지 문의." },
          { t: "호출을 받는 방법 확인", d: "현장 호출·앱 알림·문자 중 실제 사용 가능한 방식을 확인하고, 대기번호와 인원수 저장." },
          { t: "대기 위치와 복귀 조건 확인", d: "어디서 기다려야 하는지, 호출을 놓쳤을 때 어떻게 되는지 직원에게 확인." }
        ], fallback: "대체 접수가 불가능하면 현장 입장 가능 시간이나 다른 지점 문의. 이동할 경우 기존 대기를 취소할 방법 확인." }
      ],
      phrases: [
        ["한국 전화번호가 없어요. 이름으로 대기할 수 있나요?", "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. i-reu-meu-ro dae-gi-hal su in-na-yo?", "I don't have a Korean phone number. Can I join the waitlist using my name?", "현장 대기 기기 앞에서 직원에게 문의"],
        ["예약이 확정됐나요?", "ye-ya-gi hwak-jeong-dwaet-na-yo?", "Is my reservation confirmed?", "신청 후 확정 여부가 불분명할 때"]
      ],
      links: [{ url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1590988", label: "한국관광공사 CATCHTABLE GLOBAL 이용 안내" }],
      related: [["#tips-reserve", "예약 방법"], ["#tips-waiting", "현장 웨이팅"], ["#help-connection", "전화·문자·인증 구분"]]
    },
    {
      id: "food", icon: "food", stage: "식사", short: "알레르기·식이 제한",
      title: "먹을 수 없는 재료를 설명하기 어려울 때",
      lead: "알레르기, 채식, 종교적 식이 제한을 구분해 전달. 음식 이름이나 사진만으로 재료를 판단하지 않기.",
      choices: [
        { label: "음식 알레르기가 있는 경우", steps: [
          { t: "알레르기 재료를 구체적으로 준비", d: "피해야 하는 재료의 한국어 이름과 사진·목록을 준비하고, 주문 전 직원에게 보여 주기." },
          { t: "육수·소스·고명까지 확인", d: "주재료뿐 아니라 육수·양념·고명에 해당 재료가 포함되는지 확인 요청." },
          { t: "조리 중 접촉 가능성 확인", d: "같은 조리도구·튀김기·조리 공간을 사용하는지, 재료를 정확히 확인할 수 있는지 직원에게 문의." }
        ], fallback: "재료나 조리 과정을 확인할 수 없다면 해당 음식 주문을 보류하고, 필요한 정보를 확인할 수 있는 다른 메뉴나 매장 선택." },
        { label: "채식이나 종교적 식이 제한이 있는 경우", steps: [
          { t: "제외할 재료 범위 전달", d: "고기·생선·해산물·달걀·유제품 등 먹지 않는 재료를 구체적으로 설명. 필요한 인증 여부도 별도 확인." },
          { t: "보이지 않는 재료 확인", d: "채소 요리라도 육수·소스·젓갈 등에 제외할 재료가 쓰였는지 문의." },
          { t: "변경 가능한 메뉴 확인", d: "해당 재료를 빼고 조리할 수 있는지 확인하고, 주문 내용을 직원과 다시 확인." }
        ], fallback: "메뉴 변경이 어렵다면 원하는 식이 기준을 명시한 식당을 찾아 직접 확인. 채식 표시와 종교적 인증은 별도로 확인." }
      ],
      phrases: [
        ["이 재료에 알레르기가 있어요. 들어가는지 확인해 주세요.", "i jae-ryo-e al-le-reu-gi-ga i-sseo-yo. deu-reo-ga-neun-ji hwa-gin-hae ju-se-yo.", "I'm allergic to this ingredient. Please check whether it is used.", "반드시 알레르기 재료의 이름이나 사진과 함께 보여 주기"],
        ["고기나 생선이 들어가나요? 육수와 소스도 확인해 주세요.", "go-gi-na saeng-seo-ni deu-reo-ga-na-yo? yuk-su-wa so-seu-do hwa-gin-hae ju-se-yo.", "Does this contain meat or fish? Please also check the broth and sauce.", "주문 전 제외할 재료를 추가로 설명"]
      ],
      links: [{ url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=476&vcontsId=140732", label: "한국관광공사 채식 여행·재료 확인 안내" }],
      related: [["#tips-food", "맛집 찾는 방법"], ["#during-korean", "주문할 때 쓰는 한국어"]]
    },
    {
      id: "lost", icon: "search", stage: "여행 중 · 귀국 후", short: "휴대폰·지갑 분실",
      title: "물건을 잃어버리고 어디에 문의할지 모를 때",
      lead: "마지막으로 본 장소와 이용한 교통수단부터 정리. 분실 장소에 따라 문의 기관이 달라질 수 있음.",
      choices: [
        { label: "방금 물건을 잃어버린 경우", steps: [
          { t: "위치·시간·물품 특징 기록", d: "분실 시각, 마지막 장소, 색상·모델·사진을 준비. 교통수단은 노선·차량번호·승하차 장소도 기록." },
          { t: "해당 장소나 운영기관에 문의", d: "매장·숙소는 직원에게, 열차·버스·택시는 운영기관에 문의. 기내 물품은 항공사에 문의." },
          { t: "경찰 유실물 조회와 보호 조치", d: "경찰민원24에서 습득물 조회·분실 신고 방법 확인. 카드·휴대폰을 잃었다면 카드사·통신사에 이용 정지 등 필요한 조치 문의." }
        ], fallback: "온라인 접수가 어렵다면 가까운 경찰관서에 문의. 여권 분실은 본국 대사관·영사관에도 연락해 여행서류와 귀국 절차 확인." },
        { label: "출국이 임박했거나 이미 귀국한 경우", steps: [
          { t: "접수번호와 담당 연락처 저장", d: "물품이 접수된 기관, 접수번호, 담당 연락처를 기록하고 연락 가능한 이메일 전달." },
          { t: "수령 조건을 직접 확인", d: "본인 확인 서류, 대리 수령 가능 여부, 보관 장소·기간을 담당 기관에 문의." },
          { t: "배송 가능 여부와 비용 확인", d: "해외 배송이 가능한지, 제한 물품인지, 포장·배송비와 신청 절차가 무엇인지 확인." }
        ], fallback: "배송이 불가능하면 담당 기관에 가능한 수령 방법 문의. 찾았다는 연락을 받더라도 공식 연락처로 접수번호를 확인한 뒤 진행." }
      ],
      phrases: [
        ["물건을 잃어버렸어요. 분실물은 어디에 문의하나요?", "mul-geo-neul i-reo-beo-ryeo-sseo-yo. bun-sil-mu-reun eo-di-e mu-ni-ha-na-yo?", "I lost something. Where can I ask about lost property?", "분실 장소·시간·물품 사진과 함께 문의"],
        ["곧 출국해요. 해외로 배송받을 수 있나요?", "got chul-gu-kae-yo. hae-oe-ro bae-song-ba-deul su in-na-yo?", "I'm leaving Korea soon. Can the item be shipped overseas?", "물품을 찾았다는 확인을 받은 뒤 문의"]
      ],
      links: [
        { url: "https://minwon24.police.go.kr/cvlcpt/cvlcptGdInfo.do?cvlcptId=MW-201", label: "경찰민원24 습득물 조회·분실 신고 안내" },
        { url: "https://www.airport.kr/ap_en/1549/subview.do", label: "인천공항 분실 장소별 담당 기관" }
      ],
      related: [["#during-sos", "SOS 연락처"], ["#help-departure", "귀국 준비"]]
    },
    {
      id: "departure", icon: "bag", stage: "귀국 전날 · 공항", short: "귀국·수하물·환급",
      title: "귀국 준비와 공항에서의 순서가 헷갈릴 때",
      lead: "항공편·터미널·수하물·환급 물품을 전날부터 확인. 환급 물품을 휴대할지 위탁할지에 따라 절차 확인 필요.",
      choices: [
        { label: "귀국 전날 준비하는 경우", steps: [
          { t: "항공편과 공항 이동 확인", d: "출발 공항·터미널·항공편 시간을 확인하고, 항공사 권장 도착 시간에 맞춰 이동편 계획." },
          { t: "수하물과 대여품 정리", d: "이용 항공사의 무게·개수·기내 반입 규정을 확인. 보조배터리 등은 최신 안내 확인. 대여품 반납 장소·시간도 저장." },
          { t: "환급 서류와 남은 일 정리", d: "택스리펀드 영수증·서류와 구매 물품 준비. 숙소 체크아웃, 맡긴 짐 수령, 교통카드 잔액 처리 가능 여부 확인." }
        ], fallback: "서류나 반납 방법이 불명확하면 구매 매장·환급 업체·대여 업체에 출발 전 문의. 공항에서 해야 할 일을 목록으로 저장." },
        { label: "공항에서 택스리펀드를 받으려는 경우", steps: [
          { t: "필요한 서류와 물품 준비", d: "여권·환급 서류·영수증·구매 물품을 바로 꺼낼 수 있도록 준비하고 해당 공항의 공식 절차 확인." },
          { t: "위탁 여부에 따라 순서 확인", d: "환급 물품을 위탁수하물에 넣었다면 짐을 부치기 전 항공사·환급 안내 직원에게 확인. 필요한 물품 확인을 마친 뒤 안내에 따라 위탁." },
          { t: "환급 처리와 탑승 시간 확인", d: "환급 업체의 수령 방법·처리 상태를 확인하고 접수 내역 보관. 보안검색·출국심사·탑승구 이동 시간도 확보." }
        ], fallback: "서류 누락이나 기기 오류가 있으면 환급 업체 창구에 문의하고, 처리 상태와 이후 문의 방법 기록. 환급 가능 여부는 담당 업체 확인 필요." }
      ],
      phrases: [
        ["택스리펀드 물품이 이 가방 안에 있어요. 먼저 무엇을 해야 하나요?", "taek-seu-ri-peon-deu mul-pu-mi i ga-bang a-ne i-sseo-yo. meon-jeo mu-eo-seul hae-ya ha-na-yo?", "My tax-refund items are in this bag. What should I do first?", "환급 물품이 든 짐을 부치기 전에 문의"]
      ],
      links: [
        { url: "https://www.airport.kr/ap_en/1425/subview.do", label: "인천공항 택스리펀드 절차" },
        { url: "https://www.airport.kr/ap_en/1499/subview.do", label: "인천공항 교통 안내" }
      ],
      related: [["#before-card", "교통카드 잔액·환불"], ["#help-lost", "귀국 후 분실물 수령 문의"]]
    }
  ]
};
