/* 서울 착륙 — 상황별 문제 해결 가이드 */
window.SL = window.SL || {};
window.SL.help = window.SL.help || {};
window.SL.help.ko = {
  ui: {
    intro: "지금 어떤 문제가 있나요? 상황을 선택하면 해결 방법으로 바로 이동.",
    shortcuts: "기존 가이드 바로가기",
    back: "도움 목록으로",
    choose: "지금 상황 선택",
    first: "먼저 할 일 3가지",
    alternative: "해결되지 않을 때",
    phrases: "직원에게 보여 줄 한국어",
    official: "공식 정보 확인",
    related: "함께 보면 좋은 안내",
    all: "다른 문제 해결하기",
    updated: "공식 규정 · 상품 조건 · 운영시간은 이용 전 재확인."
  },
  quick: [
    { href: "#help-food", icon: "leaf", short: "식습관", sub: "채식 / 알레르기 / 할랄" },
    { href: "#during-prayer", icon: "pray", short: "기도 공간", sub: "Prayer Room / 종교시설" },
    { href: "#during-health", icon: "pill", short: "아파요", sub: "병원 / 약국 / 119", urgent: true },
    { href: "#help-reservation", icon: "phone", short: "예약이 안 돼요", sub: "한국 전화번호 / 인증 문제" },
    { href: "#help-stay", icon: "luggage", short: "짐이 있어요", sub: "짐 보관 / 캐리어" },
    { href: "#during-sos", icon: "sos", short: "긴급 도움", sub: "분실 / 응급상황", urgent: true }
  ],
  items: [
    {
      id: "entry",
      icon: "passport",
      stage: "출발 전",
      short: "입국 서류 준비",
      title: "어떤 입국 서류가 필요한지 모를 때",
      lead: "비자 · K-ETA · 입국신고를 구분해 확인. 국적 · 방문 목적 · 체류 기간에 따라 준비 사항이 달라질 수 있음.",
      choices: [
        {
          label: "아직 준비를 시작하지 않은 경우",
          steps: [
            { t: "여권과 여행 조건 정리", d: "여권 국적 · 방문 목적 · 체류 기간 · 입국 및 출국 항공편 확인." },
            { t: "비자·K-ETA 대상 확인", d: "공식 비자포털과 K-ETA 사이트에서 본인에게 해당하는 요건 확인. 다른 여행자의 면제 사례만으로 판단하지 않도록 주의." },
            { t: "입국신고와 숙소 정보 준비", d: "전자입국신고는 무료. 공식 안내에서 제출 대상과 제출 가능 시점을 확인하고 여권 · 이메일 · 항공편 · 숙소 주소 준비." }
          ],
          fallback: "대상 여부가 불확실하면 출발 전 한국 공관에 국적 · 목적 · 체류 기간을 알리고 문의. 항공사에도 탑승 시 확인하는 서류 문의."
        },
        {
          label: "입력 오류나 일정 변경이 있는 경우",
          steps: [
            { t: "어느 신청의 오류인지 구분", d: "비자 · K-ETA · 전자입국신고 중 수정이 필요한 신청 확인. 서로 다른 절차이므로 각각 확인." },
            { t: "공식 조회·수정 메뉴 확인", d: "여권 정보와 항공편 · 숙소 정보를 대조하고 해당 서비스의 수정 또는 재신청 안내 확인." },
            { t: "처리 결과 저장", d: "접수번호와 완료 화면 저장 후 이메일 확인. 비자 · K-ETA는 승인 상태까지, 전자입국신고는 제출 완료 여부까지 확인." }
          ],
          fallback: "수정 방법이 없거나 처리 상태가 불분명하면 공식 고객지원에 문의. 출발이 임박했다면 항공사에도 현재 상태 전달."
        }
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
      id: "connection",
      icon: "phone",
      stage: "출발 전 · 도착 직후",
      short: "인터넷·전화·인증",
      title: "인터넷이나 전화·문자 인증이 안 될 때",
      lead: "데이터 연결 · 전화 및 문자 수신 · 국내 본인인증은 서로 다른 기능. 한국 전화번호가 있어도 본인인증 가능 여부는 별도 확인.",
      choices: [
        {
          label: "SIM을 고르거나 설치하는 경우",
          steps: [
            { t: "휴대폰 호환 여부 확인", d: "휴대폰 모델의 eSIM 지원 여부와 통신사 잠금 해제 여부를 판매처 안내에서 확인." },
            { t: "필요한 기능을 따로 확인", d: "데이터 · 통화 · SMS 수신 · 국내 본인인증 지원을 각각 비교. 이용 기간과 설치 · 개통 시점도 확인." },
            { t: "연결 가능한 곳에서 설정", d: "판매처 안내에 따라 설치하고 연결 상태 확인. 숙소 주소와 예약 내역은 오프라인에서도 볼 수 있도록 저장." }
          ],
          fallback: "설치 오류 화면과 주문번호를 준비해 판매처에 문의. eSIM 삭제 · 재설치는 재사용 가능 여부를 확인한 뒤 진행."
        },
        {
          label: "인터넷은 되지만 문자나 인증이 안 되는 경우",
          steps: [
            { t: "인증 종류 확인", d: "단순 SMS 코드 수신인지, 통신사를 통한 국내 본인인증인지 화면에서 확인." },
            { t: "구매 상품 기능 확인", d: "받은 번호와 SMS 수신 지원 여부 확인. 문자 수신 전 입국 확인이 필요한 상품인지도 점검. 국내 본인인증 지원은 판매처에 별도 문의." },
            { t: "다른 이용 경로 찾기", d: "해당 서비스의 이메일 로그인 · 외국인용 페이지 · 현장 접수 제공 여부 확인." }
          ],
          fallback: "매장 예약이나 웨이팅이 목적이라면 직원에게 전화번호 없이 접수할 방법 문의. 통신 문제는 Wi-Fi로 판매처 고객지원에 연락."
        }
      ],
      phrases: [
        [
          "한국 전화번호가 없어요. 다른 방법이 있나요?",
          "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?",
          "I don't have a Korean phone number. Is there another way?",
          "예약·인증 화면에서 진행이 막혔을 때"
        ]
      ],
      links: [
        { url: "https://m.roaming.kt.com/eng/esim", label: "KT 관광객 eSIM 기능·기기 안내" }
      ],
      related: [["#before-apps", "필수 앱 준비"], ["#help-reservation", "예약·웨이팅 문제 해결"]],
      playbooks: [
        {
          situation: "eSIM을 샀는데 인증 문자가 안 와요.",
          stepsTitle: "먼저 구분할 사항",
          steps: [
            "데이터 전용 eSIM: 인터넷은 가능하지만 전화번호 · SMS는 없을 수 있음.",
            "전화번호 포함 SIM · eSIM: 전화와 SMS 지원 여부를 판매처에서 확인.",
            "한국 전화번호가 있어도 국내 본인인증은 불가능할 수 있음. 예약이나 가입 전에 '문자만 받으면 되는지', '본인인증이 필요한지' 구분."
          ]
        }
      ]
    },
    {
      id: "payment",
      icon: "card",
      stage: "도착 직후 · 여행 중",
      short: "결제·교통카드 오류",
      title: "카드 결제나 교통카드 충전이 안 될 때",
      lead: "매장 결제와 교통카드 태그 · 충전은 별개. 오류가 발생한 단계부터 확인하고 다른 결제 수단 준비.",
      choices: [
        {
          label: "매장이나 온라인에서 결제가 거절된 경우",
          steps: [
            { t: "결제 수단과 오류 확인", d: "해외 발급 카드 지원 여부와 화면의 오류 문구를 직원이나 서비스에 확인." },
            { t: "승인 내역 확인", d: "카드사 앱에서 승인 · 취소 상태 확인. 승인 알림을 받았다면 재결제 전 실제 결제 여부를 매장에 문의." },
            { t: "다른 결제 수단 준비", d: "다른 카드나 현금의 사용 가능 여부 확인. 현금 인출은 해외 카드 지원 표시와 수수료를 확인한 ATM에서 진행." }
          ],
          fallback: "승인 내역과 영수증을 저장해 카드사나 결제 서비스에 문의. 결제 방식이 맞지 않으면 다른 매장 · 예약 경로 확인."
        },
        {
          label: "교통카드 태그나 충전이 안 되는 경우",
          steps: [
            { t: "카드 종류와 잔액 확인", d: "일반 신용카드와 교통카드를 구분하고 이용할 교통수단에서 사용 가능한 카드인지 확인." },
            { t: "충전 장소의 결제 방식 확인", d: "충전기 · 편의점에서 현금과 해외 카드 중 지원하는 결제 수단을 확인하고 필요한 원화 현금 준비." },
            { t: "직원에게 이용 내역 확인 요청", d: "개찰구 오류나 추가 요금 안내가 나오면 역 직원에게 카드와 이동 경로를 제시하고 확인 요청." }
          ],
          fallback: "카드 문제 해결 전 이용 가능한 1회권 · 승차권과 구매 방법을 역 직원에게 문의. 충전 금액이 반영되지 않으면 영수증 보관."
        }
      ],
      phrases: [
        ["이 카드로 결제할 수 있나요?", "i ka-deu-ro gyeol-je-hal su in-na-yo?", "Can I pay with this card?", "결제 전 또는 카드가 거절됐을 때"],
        ["교통카드를 충전하고 싶어요.", "gyo-tong-ka-deu-reul chung-jeon-ha-go si-peo-yo.", "I'd like to top up my transit card.", "편의점이나 역에서 충전할 때"]
      ],
      links: [
        { url: "https://english.visitkorea.or.kr/public/contents/travel/KoreaTransportationGuide_enu.pdf", label: "한국관광공사 교통·결제 안내 (PDF)" }
      ],
      related: [["#before-card", "교통카드 구매·충전"], ["#during-subway", "지하철 이용 방법"]],
      playbooks: [
        {
          situation: "해외 카드가 키오스크에서 결제가 안 돼요.",
          intro: "키오스크 결제 실패가 카드 자체의 사용 불가를 뜻하는 것은 아님. 카운터 결제부터 요청.",
          check: ["다른 Visa · Mastercard는 되는지", "직원이 직접 결제해 줄 수 있는지", "현금 결제가 되는지", "키오스크만 안 되는지"],
          say: [
            [
              "해외 카드인데 키오스크에서 결제가 안 됩니다.",
              "hae-oe ka-deu-in-de ki-o-seu-keu-e-seo gyeol-je-ga an doem-ni-da.",
              "My foreign card doesn't work at the kiosk."
            ],
            ["카운터에서 결제할 수 있나요?", "ka-un-teo-e-seo gyeol-je-hal su in-na-yo?", "Can I pay at the counter?"]
          ]
        },
        {
          situation: "키오스크로 주문하는 게 어려워요.",
          fast: ["papago"],
          stepsTitle: "키오스크 주문 순서",
          steps: [
            "English · Language 버튼 확인.",
            "매장(Eat here) · 포장(Take out) 선택.",
            "메뉴 선택.",
            "필수 옵션 선택.",
            "수량 확인.",
            "결제.",
            "주문번호 확인.",
            "번호가 나오면 주문한 메뉴 수령."
          ],
          say: [["키오스크 사용을 도와주세요.", "ki-o-seu-keu sa-yong-eul do-wa-ju-se-yo.", "Please help me use the kiosk."]]
        }
      ]
    },
    {
      id: "arrival",
      icon: "plane",
      stage: "공항 도착",
      short: "늦은 도착·숙소 이동",
      title: "늦게 도착해 숙소까지 가기 어려울 때",
      lead: "착륙 시각과 공항에서 출발 가능한 시각은 다름. 입국 절차와 짐 찾기를 마친 뒤 이용 가능한 교통편 확인.",
      choices: [
        {
          label: "대중교통을 아직 이용할 수 있는 경우",
          steps: [
            { t: "터미널과 숙소 위치 확인", d: "현재 터미널과 숙소의 한국어 주소를 확인하고 지도에 저장." },
            { t: "막차와 환승까지 확인", d: "공항 공식 교통 안내에서 출발 터미널의 철도 · 버스 시간 확인. 첫 교통편뿐 아니라 숙소까지 가는 마지막 환승도 확인." },
            { t: "승차 위치와 요금 준비", d: "정류장 · 승강장 위치, 승차권 구매 방법, 하차 지점 확인 후 출발." }
          ],
          fallback: "막차 이용이 어렵다면 심야버스나 공식 택시 승차장 이용 가능 여부 확인. 이동 중 숙소에 도착 예상 시각 전달."
        },
        {
          label: "막차를 놓쳤거나 지연 도착한 경우",
          steps: [
            { t: "남은 교통편 확인", d: "공항 안내데스크나 공식 사이트에서 해당 터미널의 심야버스 · 택시 안내 확인." },
            { t: "숙소 체크인 가능 여부 확인", d: "예약 메시지로 늦은 도착을 알리고 프런트 운영시간과 셀프 체크인 방법 확인." },
            { t: "주소와 예상 비용 전달·확인", d: "택시 탑승 시 숙소의 한국어 주소를 제시하고 예상 비용과 결제 방식 확인 후 승차." }
          ],
          fallback: "숙소와 연락이 안 되면 예약 플랫폼 고객지원에 문의. 교통 · 의사소통 도움이 필요하면 공항 안내데스크나 1330 이용."
        }
      ],
      phrases: [
        ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "한국어 숙소 주소와 함께 보여 주기"],
        [
          "늦게 도착할 것 같아요. 체크인할 수 있나요?",
          "neut-ge do-chak-hal geot ga-ta-yo. che-keu-in-hal su in-na-yo?",
          "I expect to arrive late. Can I still check in?",
          "숙소에 도착 지연을 알릴 때"
        ]
      ],
      links: [
        { url: "https://www.airport.kr/ap_en/1499/subview.do", label: "인천공항 대중교통·심야버스 안내" }
      ],
      related: [["#during-taxi", "택시 이용 방법"], ["#help-stay", "숙소·짐 보관 문제 해결"]],
      playbooks: [
        {
          situation: "늦게 도착했는데 숙소까지 어떻게 가죠?",
          fast: ["navermap_route"],
          search: {
            naver: ["인천공항 심야버스", "공항철도 막차 시간", "인천공항 택시 승강장"],
            google: ["Incheon Airport late night bus", "AREX last train"]
          },
          say: [
            ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address."],
            ["막차가 몇 시예요?", "mak-cha-ga myeot si-ye-yo?", "What time is the last train?"]
          ]
        }
      ]
    },
    {
      id: "stay",
      icon: "home",
      stage: "숙소 이용",
      short: "체크인·짐 보관",
      title: "체크인이나 짐 보관이 어려울 때",
      lead: "체크인 시간 · 짐 보관 · 프런트 운영은 숙소별로 다르므로 예약한 숙소의 안내부터 확인.",
      choices: [
        {
          label: "체크인 전이나 체크아웃 후 짐을 맡겨야 하는 경우",
          steps: [
            { t: "숙소에 보관 가능 여부 문의", d: "이용 날짜와 짐을 맡기고 찾을 시간을 전달하고 비용 · 보관 장소 · 마감시간 확인." },
            { t: "다른 보관 장소 확인", d: "숙소 보관이 어렵다면 역 보관함이나 짐 보관 서비스의 위치 · 크기 · 운영시간 · 결제 방식 확인." },
            { t: "찾을 때 필요한 정보 저장", d: "보관증 · 접수번호 · 위치 저장. 여권과 이동에 필요한 물건은 별도로 소지." }
          ],
          fallback: "보관함이 가득 찼거나 짐이 들어가지 않으면 직원에게 다른 보관 장소 문의. 마감시간과 다음 교통편 출발 시각을 고려해 수령 시간 결정."
        },
        {
          label: "셀프 체크인이나 숙소 출입이 안 되는 경우",
          steps: [
            { t: "예약 내역과 안내 메시지 확인", d: "숙소명 · 주소 · 예약 날짜를 대조하고 출입 안내가 담긴 이메일 · 예약 앱 메시지 확인." },
            { t: "도착한 건물과 입구 확인", d: "같은 이름의 다른 지점인지 확인. 안내받은 입구 · 층 · 키 수령 장소 재확인." },
            { t: "숙소 담당자에게 상황 전달", d: "예약번호 · 현재 위치 · 오류 화면을 보내 출입 방법 문의. 공개 게시물에 출입 비밀번호를 올리지 않도록 주의." }
          ],
          fallback: "연락이 안 되면 예약 플랫폼 고객지원에 문의하고 접수번호 저장. 언어 지원이 필요하면 1330 관광 안내 · 통역 이용."
        }
      ],
      phrases: [
        ["체크인 전에 짐을 맡길 수 있나요?", "che-keu-in jeo-ne ji-meul mat-gil su in-na-yo?", "Can I leave my luggage before check-in?", "보관을 원하는 시간과 함께 문의"],
        [
          "예약했는데 문을 열 수 없어요. 도와주세요.",
          "ye-ya-kaet-neun-de mu-neul yeol su eop-seo-yo. do-wa-ju-se-yo.",
          "I have a reservation, but I can't open the door. Please help.",
          "예약번호와 숙소 주소를 함께 전달"
        ]
      ],
      links: [
        { url: "https://www.tluggage.co.kr/eng", label: "T-Luggage 짐 보관·배송 예약" },
        { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 관광 안내·통역·채팅" }
      ],
      related: [["#help-arrival", "늦은 도착 대처"], ["#during-korean", "현장에서 쓰는 한국어"]],
      playbooks: [
        {
          situation: "캐리어를 맡길 곳이 필요해요.",
          fast: ["tluggage"],
          search: {
            naver: ["홍대입구 짐 보관", "명동 캐리어 보관", "서울역 물품보관함"],
            google: ["luggage storage Hongdae", "luggage storage Myeongdong"]
          },
          check: ["맡길 수 있는 크기", "마감 시간", "당일 · 다음 날 찾기", "결제 방법"],
          say: [
            ["짐을 맡길 수 있나요?", "ji-meul mat-gil su in-na-yo?", "Can I leave my luggage here?"],
            ["몇 시까지 찾아가야 하나요?", "myeot si-kka-ji cha-ja-ga-ya ha-na-yo?", "By what time do I need to pick it up?"]
          ]
        }
      ]
    },
    {
      id: "reservation",
      icon: "reserve",
      stage: "예약 · 현장 체험",
      short: "예약·웨이팅 막힘",
      title: "한국 번호가 없어 예약·웨이팅이 막힐 때",
      lead: "전화번호 없이 이용 가능한 방법부터 확인. 예약과 현장 대기는 확정 방식과 호출 방법이 다를 수 있음.",
      choices: [
        {
          label: "온라인 예약이 진행되지 않는 경우",
          steps: [
            { t: "막힌 항목 확인", d: "한국 번호 · 문자 수신 · 국내 본인인증 · 결제 중 필요한 단계 확인." },
            { t: "외국인용 예약 경로 확인", d: "매장 공식 안내에서 외국인용 예약 페이지나 이메일 문의 경로 확인. 식당은 CATCHTABLE GLOBAL 등록 여부도 확인 가능." },
            { t: "예약 확정과 취소 조건 확인", d: "날짜 · 시간 · 인원 · 선결제 금액 확인 후 확정 화면 저장. 취소 기한과 환불 조건도 함께 확인." }
          ],
          fallback: "외국인용 경로가 없으면 매장에 직접 예약이나 현장 접수 가능 여부 문의. 다른 사람 번호로 등록하기 전 호출 수신 방법부터 확인."
        },
        {
          label: "현장 대기 기기에 한국 번호를 입력해야 하는 경우",
          steps: [
            { t: "직원에게 번호가 없다고 설명", d: "전화번호 대신 이름으로 접수 가능한지, 직원의 도움을 받을 수 있는지 문의." },
            { t: "호출을 받는 방법 확인", d: "현장 호출 · 앱 알림 · 문자 중 실제 수신 가능한 방식 확인. 대기번호와 인원수 저장." },
            { t: "대기 위치와 복귀 조건 확인", d: "대기 장소와 호출을 놓쳤을 때의 처리 방식을 직원에게 확인." }
          ],
          fallback: "다른 방법으로도 접수가 안 되면 현장 입장 가능 시간이나 다른 지점 문의. 다른 곳으로 이동한다면 기존 대기 취소 방법도 확인."
        }
      ],
      phrases: [
        [
          "한국 전화번호가 없어요. 이름으로 대기할 수 있나요?",
          "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. i-reu-meu-ro dae-gi-hal su in-na-yo?",
          "I don't have a Korean phone number. Can I join the waitlist using my name?",
          "현장 대기 기기 앞에서 직원에게 문의"
        ],
        ["예약이 확정됐나요?", "ye-ya-gi hwak-jeong-dwaet-na-yo?", "Is my reservation confirmed?", "신청 후 확정 여부가 불분명할 때"]
      ],
      links: [
        { url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1590988", label: "한국관광공사 CATCHTABLE GLOBAL 이용 안내" }
      ],
      related: [["#tips-reserve", "예약 방법"], ["#tips-waiting", "현장 웨이팅"], ["#help-connection", "전화·문자·인증 구분"]],
      playbooks: [
        {
          situation: "한국 전화번호가 없어서 예약이 안 돼요.",
          fast: ["catchtable"],
          checkTitle: "먼저 확인할 사항",
          check: ["외국 번호를 입력할 수 있나요?", "이메일로 예약할 수 있나요?", "현장 등록이 되나요?", "외국인용 예약 페이지가 있나요?"],
          stepsTitle: "현장 웨이팅 키오스크 쓰는 법",
          steps: ["인원 선택.", "전화번호 입력. 한국 번호가 없으면 직원에게 문의.", "대기번호 확인.", "문자나 화면 호출 확인."],
          say: [
            [
              "한국 전화번호가 없는데 웨이팅할 수 있나요?",
              "han-guk jeon-hwa-beon-ho-ga eom-neun-de we-i-ting-hal su in-na-yo?",
              "I don't have a Korean phone number. Can I still join the waiting list?"
            ]
          ]
        }
      ]
    },
    {
      id: "food",
      icon: "food",
      stage: "식사",
      short: "식습관 (채식·할랄·알레르기)",
      title: "식습관 때문에 먹을 수 있는 음식을 찾기 어려울 때",
      lead: "알레르기 · 채식 · 종교적 식이 제한을 구분해 전달. 음식 이름이나 사진만으로 재료를 판단하지 않도록 주의.",
      choices: [
        {
          label: "음식 알레르기가 있는 경우",
          steps: [
            { t: "알레르기 재료를 구체적으로 준비", d: "피해야 할 재료의 한국어 이름과 사진 · 목록을 준비해 주문 전에 직원에게 제시." },
            { t: "육수·소스·고명까지 확인", d: "주재료뿐 아니라 육수 · 양념 · 고명에도 해당 재료가 들어가는지 확인 요청." },
            { t: "조리 중 접촉 가능성 확인", d: "같은 조리도구 · 튀김기 · 조리 공간의 사용 여부와 재료를 정확히 확인할 수 있는지 직원에게 문의." }
          ],
          fallback: "재료나 조리 과정을 확인할 수 없다면 해당 음식의 주문을 피하고 정보 확인이 가능한 다른 메뉴나 매장 선택."
        },
        {
          label: "채식이나 종교적 식이 제한이 있는 경우",
          steps: [
            { t: "제외할 재료 범위 전달", d: "고기 · 생선 · 해산물 · 달걀 · 유제품 등 먹지 않는 재료를 구체적으로 전달. 필요한 인증도 별도 확인." },
            { t: "보이지 않는 재료 확인", d: "채소 요리라도 육수 · 소스 · 젓갈에 피해야 할 재료가 들어가는지 문의." },
            { t: "변경 가능한 메뉴 확인", d: "해당 재료를 제외한 조리 가능 여부를 확인하고 주문 내용을 직원과 재확인." }
          ],
          fallback: "메뉴 변경이 어렵다면 원하는 식이 기준을 명시한 식당을 찾아 직접 확인. 채식 표시와 종교적 인증은 별도 확인."
        },
        {
          label: "할랄 음식이 필요하거나 돼지고기를 먹지 않는 경우",
          steps: [
            { t: "키워드로 식당 찾기", d: "NAVER Map에서 '할랄' · 'Muslim Friendly' · '돼지고기 없는 메뉴' 등으로 검색." },
            {
              t: "인증 단계 확인",
              d: "한국관광공사의 무슬림 친화 식당 분류는 Halal Certified · Self-certified · Muslim Friendly · Pork Free 4가지. 식당별 차이가 있으므로 방문 전 공식 정보나 식당 안내 확인."
            },
            { t: "주문 전 다시 확인", d: "돼지고기나 술이 포함된 양념의 사용 여부와 육수 · 소스 재료를 직원에게 확인." }
          ],
          fallback: "확인이 어렵다면 한국관광공사 무슬림 친화 식당 정보를 참고하거나 할랄 인증 식당 선택."
        }
      ],
      phrases: [
        [
          "이 재료에 알레르기가 있어요. 들어가는지 확인해 주세요.",
          "i jae-ryo-e al-le-reu-gi-ga i-sseo-yo. deu-reo-ga-neun-ji hwa-gin-hae ju-se-yo.",
          "I'm allergic to this ingredient. Please check whether it is used.",
          "반드시 알레르기 재료의 이름이나 사진과 함께 보여 주기"
        ],
        [
          "고기나 생선이 들어가나요? 육수와 소스도 확인해 주세요.",
          "go-gi-na saeng-seo-ni deu-reo-ga-na-yo? yuk-su-wa so-seu-do hwa-gin-hae ju-se-yo.",
          "Does this contain meat or fish? Please also check the broth and sauce.",
          "주문 전 제외할 재료를 추가로 설명"
        ],
        ["돼지고기 없는 메뉴가 있나요?", "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?", "Do you have a menu without pork?", "할랄 · 돼지고기 제외가 필요할 때"]
      ],
      links: [
        { url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=476&vcontsId=140732", label: "한국관광공사 채식 여행·재료 확인 안내" },
        { url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", label: "한국관광공사 무슬림 친화 식당·기도실 안내" }
      ],
      related: [["#tips-food-diet", "채식 · 할랄 · 알레르기 TIP"], ["#tips-food", "맛집 찾는 방법"], ["#during-korean-food", "주문할 때 쓰는 한국어"], ["#during-prayer", "기도 공간 찾기"]],
      playbooks: [
        {
          situation: "식습관 때문에 먹을 곳을 찾기 어려워요.",
          intro: "채식은 HappyCow, 할랄은 한국관광공사 목록부터 확인. 알레르기는 주문 전에 피해야 할 재료를 직원에게 한국어로 제시해 확인하는 과정이 중요.",
          fast: ["happycow", "kto_muslim"],
          search: {
            naver: ["서울 비건 한식", "이태원 할랄 식당", "명동 할랄"],
            google: ["vegan restaurant Seoul", "halal restaurant Itaewon"]
          },
          say: [
            ["저는 고기와 생선을 먹지 않습니다.", "jeo-neun go-gi-wa saeng-seo-neul meok-ji an-seum-ni-da.", "I don't eat meat or fish."],
            ["이 음식에 돼지고기가 들어가나요?", "i eum-si-ge dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Does this dish contain pork?"],
            ["저는 심한 음식 알레르기가 있습니다.", "jeo-neun sim-han eum-sik al-le-reu-gi-ga it-seum-ni-da.", "I have a severe food allergy."]
          ],
          more: [["#tips-food-diet", "식습관 TIP 자세히"]]
        }
      ]
    },
    {
      id: "lost",
      icon: "search",
      stage: "여행 중 · 귀국 후",
      short: "휴대폰·지갑 분실",
      title: "물건을 잃어버리고 어디에 문의할지 모를 때",
      lead: "마지막으로 본 장소와 이용한 교통수단부터 정리. 분실 장소에 따라 문의처가 달라짐.",
      choices: [
        {
          label: "지하철",
          steps: [
            { t: "역 직원에게 바로 알리기", d: "하차역 · 시각 · 탑승했던 칸 위치 전달. 신속히 알릴수록 분실물 수색에 도움." },
            { t: "경찰민원24(구 LOST112)에서 검색", d: "지하철 습득물은 노선별 유실물센터에 보관 후 경찰로 이관." },
            { t: "신분증을 챙겨서 찾으러 가기", d: "여권 등 신분증을 지참해 유실물센터 방문." }
          ],
          fallback: "의사소통이 어려우면 1330 통역 이용."
        },
        {
          label: "버스",
          steps: [
            { t: "버스 번호와 시간 확인", d: "교통카드 이용 내역이나 지도 앱 기록에서 탑승한 버스와 시간 확인." },
            { t: "120 다산콜센터에 문의", d: "서울 버스는 120에서 버스 회사와 분실물 문의 방법 안내." },
            { t: "경찰민원24에서 검색", d: "며칠 후 습득물이 경찰로 이관될 수 있음." }
          ],
          fallback: "다른 도시 버스는 해당 지역 버스 회사나 경찰서에 문의."
        },
        {
          label: "택시",
          steps: [
            { t: "영수증 · 앱 기록 확인", d: "카드 영수증이나 택시 앱 기록에서 차량 번호와 이용 시간 확인 가능." },
            { t: "앱으로 불렀다면 앱 고객센터", d: "앱에서 기사님께 연락하거나 분실물 신고 가능." },
            { t: "그 밖에는 120 · 경찰민원24", d: "서울 택시는 120 다산콜센터에서 안내 가능." }
          ],
          fallback: "차량 번호를 모르면 탑승 시간과 장소를 최대한 자세히 기록."
        },
        {
          label: "공항",
          steps: [
            { t: "어디였는지 확인", d: "출국장 · 입국장 · 기내 중 분실한 장소 확인." },
            { t: "비행기 안이라면 항공사", d: "기내 분실물은 항공사에 먼저 문의." },
            { t: "공항 안이라면 공항 유실물센터", d: "공항 안내데스크나 유실물센터에 문의." }
          ],
          fallback: "출국이 임박했다면 연락받을 이메일을 전달하고 귀국 후 수령 방법도 문의."
        },
        {
          label: "모르겠어요",
          steps: [
            { t: "마지막으로 본 곳 정리", d: "방문한 곳과 이용한 교통수단을 시간 순서대로 기록." },
            { t: "가까운 경찰서 · 파출소", d: "분실 신고 후 경찰민원24에서도 검색." },
            { t: "카드 · 휴대폰 정지", d: "카드사 · 통신사에 즉시 연락해 이용 정지 요청." }
          ],
          fallback: "문의처를 모르겠다면 1330에 전화."
        },
        {
          label: "여권",
          steps: [
            { t: "경찰에 분실 신고", d: "가까운 경찰서에 신고하고 확인서 수령." },
            { t: "대사관 · 영사관에 연락", d: "본국 대사관 · 영사관에서 필요한 서류 확인." },
            { t: "여행증명서 · 임시여권 확인", d: "귀국 일정에 맞춰 여행증명서나 임시여권 발급 절차 확인." }
          ],
          fallback: "항공사에도 상황을 알리고 탑승에 필요한 서류 확인."
        }
      ],
      phrases: [
        [
          "물건을 잃어버렸어요. 분실물은 어디에 문의하나요?",
          "mul-geo-neul i-reo-beo-ryeo-sseo-yo. bun-sil-mu-reun eo-di-e mu-ni-ha-na-yo?",
          "I lost something. Where can I ask about lost property?",
          "분실 장소·시간·물품 사진과 함께 문의"
        ],
        [
          "곧 출국해요. 해외로 배송받을 수 있나요?",
          "got chul-gu-kae-yo. hae-oe-ro bae-song-ba-deul su in-na-yo?",
          "I'm leaving Korea soon. Can the item be shipped overseas?",
          "물품을 찾았다는 확인을 받은 뒤 문의"
        ]
      ],
      links: [
        { url: "https://minwon24.police.go.kr/cvlcpt/cvlcptGdInfo.do?cvlcptId=MW-201", label: "경찰민원24 습득물 조회·분실 신고 안내" },
        { url: "https://www.airport.kr/ap_en/1549/subview.do", label: "인천공항 분실 장소별 담당 기관" }
      ],
      related: [["#during-sos", "SOS 연락처"], ["#help-departure", "귀국 준비"]],
      playbooks: [
        {
          situation: "물건을 잃어버렸어요.",
          intro: "아래에서 분실한 장소부터 선택. 여권은 일반 분실물과 별도 처리.",
          fast: ["lost112", "k1330"],
          say: [
            ["지갑을 잃어버렸어요.", "ji-ga-beul i-reo-beo-ryeo-sseo-yo.", "I lost my wallet."],
            ["물건을 두고 내렸어요.", "mul-geo-neul du-go nae-ryeo-sseo-yo.", "I left something behind when I got off."],
            ["여권을 잃어버렸어요.", "yeo-gwo-neul i-reo-beo-ryeo-sseo-yo.", "I lost my passport."]
          ]
        }
      ]
    },
    {
      id: "departure",
      icon: "bag",
      stage: "귀국 전날 · 공항",
      short: "귀국·수하물·환급",
      title: "귀국 준비와 공항에서의 순서가 헷갈릴 때",
      lead: "항공편 · 터미널 · 수하물 · 환급 물품은 전날부터 확인. 환급 물품의 기내 반입 또는 위탁 여부에 따라 절차가 다름.",
      choices: [
        {
          label: "귀국 전날 준비하는 경우",
          steps: [
            { t: "항공편과 공항 이동 확인", d: "출발 공항 · 터미널 · 항공편 시간을 확인하고 항공사 권장 도착 시간에 맞춰 이동 계획 수립." },
            { t: "수하물과 대여품 정리", d: "이용 항공사의 무게 · 개수 · 기내 반입 규정 확인. 보조배터리 등은 최신 안내 참고. 대여품 반납 장소 · 시간도 저장." },
            { t: "환급 서류와 남은 일 정리", d: "택스리펀드 영수증 · 서류 · 구매 물품 준비. 숙소 체크아웃 · 맡긴 짐 수령 · 교통카드 잔액 처리도 확인." }
          ],
          fallback: "서류나 반납 방법이 불분명하면 출발 전 구매 매장 · 환급 업체 · 대여 업체에 문의. 공항에서 할 일은 목록으로 저장."
        },
        {
          label: "공항에서 택스리펀드를 받으려는 경우",
          steps: [
            { t: "필요한 서류와 물품 준비", d: "여권 · 환급 서류 · 영수증 · 구매 물품을 바로 꺼낼 수 있도록 준비하고 해당 공항의 공식 절차 확인." },
            { t: "위탁 여부에 따라 순서 확인", d: "환급 물품을 위탁수하물에 넣었다면 짐을 부치기 전 항공사 · 환급 안내 직원에게 확인. 물품 확인을 마친 뒤 안내에 따라 수하물 위탁." },
            { t: "환급 처리와 탑승 시간 확인", d: "환급 업체의 수령 방법 · 처리 상태 확인 후 접수 내역 보관. 보안검색 · 출국심사 · 탑승구 이동 시간도 충분히 확보." }
          ],
          fallback: "서류 누락이나 기기 오류는 환급 업체 창구에 문의하고 처리 상태와 이후 문의 방법 기록. 환급 가능 여부는 담당 업체에 확인."
        }
      ],
      phrases: [
        [
          "택스리펀드 물품이 이 가방 안에 있어요. 먼저 무엇을 해야 하나요?",
          "taek-seu-ri-peon-deu mul-pu-mi i ga-bang a-ne i-sseo-yo. meon-jeo mu-eo-seul hae-ya ha-na-yo?",
          "My tax-refund items are in this bag. What should I do first?",
          "환급 물품이 든 짐을 부치기 전에 문의"
        ]
      ],
      links: [
        { url: "https://www.airport.kr/ap_en/1425/subview.do", label: "인천공항 택스리펀드 절차" },
        { url: "https://www.airport.kr/ap_en/1499/subview.do", label: "인천공항 교통 안내" }
      ],
      related: [["#before-card", "교통카드 잔액·환불"], ["#help-lost", "귀국 후 분실물 수령 문의"]],
      playbooks: [
        {
          situation: "출국 전에 무엇을 확인해야 하나요?",
          checkTitle: "출국 전 체크리스트",
          check: ["공항까지 이동시간", "공항철도 · 공항버스 막차", "Tax Refund", "수하물 규정", "교통카드 잔액", "SIM · eSIM 종료일"],
          search: {
            naver: ["인천공항 공항버스 막차", "공항철도 막차 시간"],
            google: ["Incheon Airport tax refund", "AREX last train"]
          },
          say: [["공항 가는 버스는 어디서 타요?", "gong-hang ga-neun beo-seu-neun eo-di-seo ta-yo?", "Where do I catch the bus to the airport?"]]
        }
      ]
    }
  ]
};
