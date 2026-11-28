/* Seoul Landing — English
   Same structure as ko.js. Korean phrases ([0] of phrase rows) and NAVER search keywords stay in Korean on purpose:
   they are what visitors show to staff or type into Korean apps. */
window.SL = window.SL || {};
window.SL.en = {
  meta: { htmlLang: "en", title: "Seoul Landing · SEOUL LANDING" },
  ui: {
    skip: "Skip to content",
    langLabel: "Choose language",
    nav: { before: "Before", during: "During", tips: "Tips", where: "Where to go" },
    back: "← Home",
    backHome: "Back to home",
    onPage: "Shortcuts",
    tipsSub: "What visitors often miss",
    realSub: "From our own experience",
    realBy: "Experience of our international team members",
    watchSub: "Watch first",
    officialSub: "Check official info",
    caution: "Note",
    short: "Shorts",
    video: "Video",
    mapSearch: "NAVER Map",
    map: "Map",
    copy: "Copy",
    copied: "Copied",
    newTab: "Opens in a new tab",
    nextStep: "NEXT",
    nextStage: "Next step",
    journeyLabel: "Travel stages",
    help: "HELP",
    helpOpen: "Open quick help menu",
    close: "Close",
    show: "Show large",
    quickSub: "Find what you need fast during your trip",
    quick: {
      card: "Transport card",
      subway: "Subway",
      bus: "Bus",
      taxi: "Taxi",
      food: "Restaurants",
      reserve: "Reservations",
      popup: "Pop-ups",
      where: "Destinations",
      sos: "Help by situation (SOS)"
    },
    emergency: "Emergency · help lines (tap to call)",
    emgList: [["112", "Police"], ["119", "Fire · ambulance"], ["1330", "Tourist interpretation · info"], ["02-120", "Seoul living info (press 9 for languages)"]],
    footerTag: "Korea travel, from arrival to departure.",
    footerNote: "A step-by-step Korea travel guide for international visitors · info as of November 2026",
    app: { use: "What it's for", lang: "Languages", signup: "Sign-up", phone: "Korean number", when: "Use it when", open: "Official site" },
    where: {
      listHead: "9 destinations",
      listSub: "Recommended destinations grouped by trip length. Tap 'Add to compare' to see places side by side.",
      groups: ["Day trip", "1 night, 2 days", "2 nights, 3 days"],
      detail: "Details",
      add: "Add to compare",
      added: "Added",
      remove: "Remove from compare",
      cmpHead: "Compare destinations",
      cmpSub: "Compare 2–3 destinations at a glance",
      cmpHint: "Pick 2–3 places with 'Add to compare' on a destination card or in your Trip Finder results to see a comparison table below.",
      cmpNow: "Selected:",
      cmpFull: "You can compare up to 3 places. To add a new one, remove one of your current picks first.",
      cmpClear: "Clear comparison",
      rows: {
        duration: "Trip length",
        time: "Travel time",
        transport: "Getting there",
        theme: "Theme",
        sights: "Main sights",
        experience: "Activities",
        access: "Ease of transport",
        style: "Travel style"
      },
      hour: "h",
      min: "min"
    },
    place: {
      back: "← All destinations",
      basicSub: "Basics before you go",
      period: "Recommended length",
      time: "Travel time",
      transport: "Transport",
      fare: "One-way fare",
      difficulty: "Getting around locally",
      theme: "Theme",
      levels: ["Easy", "Moderate", "Hard"],
      arrive: "Arrival station",
      beforeGo: "Before you go",
      beforeLinks: [["#before-card", "Get a transport card"], ["#before-apps", "Install a map app"], ["#during-subway", "How to ride the subway"]],
      whySub: "Why we recommend it to visitors",
      courseSub: "Suggested route",
      mustSub: "Use the map button for directions and the copy button to save the Korean name",
      foodSub: "Local specialties",
      findFoodSub: "Find local restaurants yourself",
      findFoodSteps: ["Search 'area + food' on NAVER Map", "Check review count and recent photos", "Check opening hours and days off before you go"],
      findFoodBtn: "Search '{q}' on NAVER Map",
      moreFood: "More on finding restaurants",
      videoSub: "Travel vlog",
      vlogSearch: "Find travel vlogs on YouTube",
      vlogPending: "We're still choosing a vlog. Search YouTube to get a feel for the place first.",
      korail: "Book Korail trains",
      finder: "Get another recommendation",
      more: "Other destinations"
    }
  },
  home: {
    eyebrow: "KOREA TRAVEL GUIDE",
    title: "Stuck on your\nKorea trip?",
    sub: "Find what you need, right now.\nDescribe your problem and we'll show you services, search terms and Korean you can use right away.",
    ctaStart: "Start preparing",
    ctaFinder: "Find my destination",
    guideHead: "Choose your travel stage",
    guideSub: "Step-by-step guides in the order you travel",
    cards: {
      before: { title: "Before your trip", desc: "Plan your days, install key apps, get a transport card. What to prepare before you leave." },
      during: { title: "During your trip", desc: "How to ride the subway, bus and taxi, SOS when you're stuck, and Korean for the moment." },
      tips: { title: "Travel tips", desc: "How to find restaurants, cafés, pop-ups and shows, plus reservations and waiting lists." },
      where: { title: "Where to go", desc: "4 questions for your top 3. Compare destinations and see full routes." }
    },
    journey: {
      eyebrow: "FROM ARRIVAL TO DEPARTURE",
      head: "Korea from start to finish, with Seoul Landing",
      sub: "From arrival to departure. Tap your current stage to jump to the guide you need.",
      steps: [
        {
          en: "ARRIVAL",
          t: "Just landed",
          d: "SIM, internet and a transport card first",
          href: "#help-arrival",
          icon: "plane",
          links: [
            ["#help-arrival", "Airport to the city"],
            ["#help-connection", "Check SIM/eSIM"],
            ["#before-card", "Get a transport card"],
            ["#help-payment", "When you need cash"]
          ]
        },
        {
          en: "PREPARE",
          t: "Before you head out",
          d: "Apps, top-up, closing days",
          href: "#before",
          icon: "card",
          links: [
            ["#before-apps", "Install NAVER Map"],
            ["#before-apps", "Install Papago"],
            ["#before-card", "Top up your card"],
            ["#before-plan", "Today's plan · closing days"],
            ["#before-plan", "Last entry times"]
          ]
        },
        {
          en: "MOVE",
          t: "Getting around",
          d: "Subway · bus · taxi · train",
          href: "#during",
          icon: "subway",
          links: [["#during-subway", "Subway"], ["#during-bus", "Bus"], ["#during-taxi", "Taxi"], ["#before-plan-holiday", "Book a train"]]
        },
        {
          en: "DISCOVER",
          t: "Finding things to do",
          d: "Food · pop-ups · shows · K-POP",
          href: "#tips",
          icon: "compass",
          links: [
            ["#tips-food", "Restaurants"],
            ["#tips-cafe", "Cafés"],
            ["#tips-popup", "Pop-ups"],
            ["#tips-culture", "Exhibitions · shows"],
            ["#tips-kpop", "K-POP events"]
          ]
        },
        {
          en: "EXPERIENCE",
          t: "Actually going",
          d: "Bookings · waiting lists · entry rules",
          href: "#tips-culture",
          icon: "ticket",
          links: [
            ["#tips-reserve", "Bookings"],
            ["#tips-waiting", "Waiting lists"],
            ["#tips-popup", "Entry rules"],
            ["#tips-kpop", "ID"],
            ["#help-connection", "Phone verification"]
          ]
        },
        {
          en: "HELP",
          t: "When something goes wrong",
          d: "Hospital · lost items · luggage · interpreter",
          href: "#home-help",
          icon: "lifebuoy",
          links: [
            ["#during-health", "Hospital · pharmacy"],
            ["#during-sos", "119"],
            ["#help-lost", "Lost items · passport"],
            ["#help-stay", "Luggage storage"],
            ["#during-korean", "Travel Korean"],
            ["#during-sos-1330", "1330 interpreter"]
          ]
        },
        {
          en: "DEPARTURE",
          t: "Before you fly home",
          d: "Airport · refunds · card balance",
          href: "#help-departure",
          icon: "takeoff",
          links: [
            ["#help-departure", "Time to the airport"],
            ["#help-departure", "Last airport train · bus"],
            ["#help-departure", "Tax refund · baggage"],
            ["#before-card", "Card balance"],
            ["#help-connection", "End your SIM/eSIM"]
          ]
        }
      ]
    },
    flowHead: "Follow Seoul Landing like this",
    flowSub: "From the day you land to the day you leave, in real travel order",
    flow: [
      ["before", "Enter Korea", "#help-entry", "Entry papers · airport arrival"],
      ["before", "SIM · internet", "#help-connection", "Check data and SMS verification separately"],
      ["before", "Buy a transport card", "#before-card", "T-money · EZL at a convenience store"],
      ["during", "Ride the subway", "#during-subway", "Tap your card, transfer, exit numbers"],
      ["where", "Head to a destination", "#where", "Pick with Trip Finder and follow the route"],
      ["tips", "Search restaurants", "#tips-food", "Search 'area + food'"],
      ["tips", "Vegetarian? Tips for finding vegan places", "#tips-food-diet", "Vegetarian · halal · allergy tips"],
      ["tips", "Spot a pop-up", "#tips-popup", "Check if you need to book first"],
      ["tips", "Booking · waiting lists", "#tips-reserve", "Including what to do without a Korean number"],
      ["during", "Find a place to pray", "#during-prayer", "How to find a prayer room"],
      ["during", "When you feel sick", "#during-health", "Choose pharmacy · hospital · 119"],
      ["where", "Get ready to leave", "#help-departure", "Luggage · tax refund · to the airport"]
    ],
    flowSum: ["Arrive", "Prepare", "Move", "Explore", "Experience", "Get help", "Depart"]
  },
  /* ---------------- 01 BEFORE TRIP ---------------- */
  before: {
    title: "Essentials\nbefore you go",
    intro: "Plan your days, install key apps and buy a transport card, so you can get around from day one.",
    cards: [
      {
        id: "before-plan",
        num: "1-1",
        short: "Plan your trip",
        title: "How to plan your trip",
        lead: "Decide on length and theme first, then pick the places you want and build your plan.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "Decide how long", d: "Choose a day trip, 1 night 2 days, or 2 nights 3 days first. Your trip length decides how far you can go." },
              { t: "Pick a theme", d: "Nature, history, hands-on activities or cafés: pick what you most want to do this time." },
              {
                t: "Choose an area",
                d: "Choose an area that fits your length and theme. Not sure? Let Trip Finder suggest your top 3.",
                go: ["#where-finder", "Open Trip Finder"]
              },
              { t: "Check travel times", d: "Check public transport times from start to destination on NAVER Map. Count the way back too." },
              { t: "Group nearby places", d: "Group nearby sights into one day. Avoid going back and forth in opposite directions on the same day." },
              { t: "Check hours and days off", d: "Check if museums close on Mondays, and if restaurants have an afternoon break." },
              { t: "Have a rainy-day backup", d: "Pick one or two indoor options in advance, like museums, markets or cafés." }
            ]
          },
          {
            type: "checklist",
            title: "Check the day before",
            items: [
              "Regular closing days (often Mondays)",
              "Break times",
              "Last entry times",
              "Whether you need to book",
              "Last train times",
              "Rain · heat waves · cold snaps"
            ]
          },
          {
            type: "keyset",
            title: "If the weather ruins your plans",
            items: [
              ["Rainy day", "서울 비 오는 날 갈 만한 곳", "서울 실내 데이트", "서울 실내 전시"],
              ["Heat wave", "서울 실내 관광지", "서울 박물관", "서울 쇼핑몰"],
              ["Cold snap", "서울 실내 관광지", "서울 실내 체험", "서울 박물관"]
            ],
            caption: "In a cold snap, cut outdoor plans and switch to museums, exhibitions and shopping malls."
          },
          {
            type: "playbook",
            id: "before-plan-holiday",
            situation: "I'm traveling over a big holiday like Seollal or Chuseok.",
            fast: ["korail"],
            search: {
              naver: ["설 연휴 영업하는 식당", "추석 연휴 서울 가볼 만한 곳", "명절 연휴 문 여는 곳"],
              google: ["Korea public holidays", "Chuseok Seollal closures Seoul"]
            },
            check: ["Some restaurants and shops close", "Train tickets sell out early", "Heavy traffic on long trips"],
            note: "Holiday dates change every year. Check whether they overlap with your trip first."
          }
        ],
        tips: [
          "Alternating busy days with rest days keeps you from getting worn out.",
          "KTX, ITX and Mugunghwa trains sell out quickly on weekends, so book as soon as your dates are set.",
          "Write the Korean station names in your plan too. They help when you search for directions."
        ],
        links: [
          { href: "visitkorea", label: "VISITKOREA (Korea Tourism Organization)" },
          { href: "korail", label: "Book Korail trains" }
        ],
        next: ["#before-apps", "Install key apps before you go"],
        top: [
          {
            type: "routes",
            title: "Sample day routes in Seoul",
            lead: "What matters more than choosing days and areas is your route each day. Group nearby places together. Don't zigzag across Seoul in one day.",
            bad: {
              title: "Not recommended · all of Seoul in a day",
              stops: ["Gyeongbokgung", "Seongsu", "Hongdae", "Jamsil"],
              note: "You'll spend hours just getting around. Stick to one area per day."
            },
            good: [
              {
                title: "Traditional Seoul",
                stops: ["Gyeongbokgung", "Bukchon", "Insadong", "Ikseon-dong"]
              },
              {
                title: "Seongsu area",
                stops: ["Seongsu", "Seoul Forest", "Konkuk Univ."]
              },
              {
                title: "Northwest Seoul",
                stops: ["Hongdae", "Yeonnam-dong", "Mangwon", "Han River"]
              }
            ]
          }
        ]
      },
      {
        id: "before-apps",
        num: "1-2",
        short: "Must-have apps",
        title: "Must-have apps before your trip",
        lead: "For directions in Korea, use NAVER Map and KakaoMap. Install them and set the language before you leave.",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "NAVER Map",
                sub: "NAVER Map",
                use: "Public transport directions, transfers, bus arrivals, walking routes, restaurant and café search",
                lang: "Korean · English · 中文 · 日本語",
                signup: "Not needed for directions or search (a NAVER account is needed to save places and write reviews)",
                phone: "Not needed",
                when: "Getting to your destination, finding food nearby",
                tip: "Search places by their Korean name. Use the 'Copy' button on Seoul Landing.",
                href: "naver"
              },
              {
                name: "KakaoMap",
                sub: "KakaoMap",
                use: "Bus, subway and walking directions, live bus locations, subway arrival times",
                lang: "Mainly Korean",
                signup: "Not needed for basic features",
                phone: "Not needed",
                when: "When you want to see where your bus is right now",
                tip: "Install it alongside NAVER Map to compare routes.",
                href: "kakao"
              },
              {
                name: "Papago",
                sub: "Papago",
                use: "Translates text, voice, photos (menus) and conversations",
                lang: "Korean ↔ English · 中文 · 日本語 and more",
                signup: "Not needed",
                phone: "Not needed",
                when: "Reading menus, asking staff",
                tip: "Take a photo of the menu to translate it instantly.",
                href: "papago"
              },
              {
                name: "Korail",
                sub: "Korail · Let's Korail",
                use: "Book KTX, ITX, Mugunghwa and other trains, check timetables",
                lang: "Foreign-language booking pages: English · 中文 · 日本語",
                signup: "Book as a member or guest",
                phone: "The Korean app (Korail Talk) may require Korean identity verification.",
                when: "When buying train tickets for trips outside Seoul",
                tip: "For booking in other languages, use the Let's Korail foreign-language pages. Metropolitan lines like the Gyeongui–Jungang, Gyeonggang and Line 1 need no booking: just tap your transport card.",
                href: "korail"
              },
              {
                name: "VISITKOREA",
                sub: "Korea Tourism Organization",
                use: "Official travel info, festival and event schedules, 1330 travel helpline chat",
                lang: "English · 中文 · 日本語 and more",
                signup: "Not needed",
                phone: "Not needed",
                when: "When you want to double-check official info or need an interpreter",
                tip: "Besides calling, you can reach 1330 by app or web chat.",
                href: "visitkorea"
              }
            ],
            caption: "As of November 2026. App policies may change."
          }
        ],
        tips: [
          "You'll need mobile data for map and translation apps. At the airport, choose an eSIM, a SIM card or pocket Wi-Fi.",
          "For taxi apps (k.ride · Uber · Kakao T), see 'During → Taxi'."
        ],
        next: ["#before-card", "Get a transport card"]
      },
      {
        id: "before-card",
        num: "1-3",
        short: "Transport card",
        title: "Transport card guide",
        lead: "One card works for both buses and the subway. Step by step: buying, topping up, using it and dealing with the leftover balance.",
        blocks: [
          {
            type: "defs",
            title: "Which card should I buy?",
            items: [
              [
                "T-money (티머니)",
                "The most widely used prepaid transport card. Works on buses and subways nationwide and in some taxis.",
                "assets/cards/tmoney.jpg"
              ],
              [
                "EZL (formerly Cashbee/캐시비)",
                "A prepaid card that works the same way as T-money. Some signs still use the old name, 'Cashbee'.",
                "assets/cards/ezl.jpg"
              ]
            ]
          },
          { type: "text", text: "Both cards work the same way. Just buy whichever one the convenience store has." },
          {
            type: "steps",
            title: "Buy → top up → use → check balance → end of trip",
            items: [
              {
                t: "Buy",
                d: "Buy one at convenience stores like CU, GS25 or 7-Eleven, or at subway station ticket and top-up machines. Card prices vary by design.",
                list: [
                  "Convenience store: say '티머니 카드 주세요' (a T-money card, please) at the counter",
                  "Subway station: transport card vending or top-up machine"
                ]
              },
              {
                t: "Top up",
                d: "A new card starts at 0 won, so top it up before use. Top-ups are mostly cash only.",
                list: [
                  "Convenience store counter: hand over the card and cash and say '충전해 주세요' (please top it up)",
                  "Subway top-up machine: place the card, choose an amount → insert cash",
                  "App: some Android phones can top up with the mobile T-money or EZL app."
                ]
              },
              {
                t: "Use",
                d: "Tap your card both when you get on and when you get off. Transfers within 30 minutes of getting off are discounted.",
                go: ["#during-subway", "See how to ride the subway"]
              },
              {
                t: "Check your balance",
                list: [
                  "Your balance shows when you tap the card on a bus or subway reader.",
                  "Ask at a convenience store counter",
                  "Place the card on a subway top-up machine",
                  "T-money · EZL app (phone NFC)"
                ]
              },
              {
                t: "What about the money left at the end?",
                list: [
                  "Refund: get the balance refunded at a convenience store or designated location. T-money charges a 500-won fee, and the refundable amount depends on the location.",
                  "Keep it: use it again on your next trip to Korea.",
                  "Pass it on: give it to a friend who's coming to Korea."
                ]
              }
            ],
            caption: "Only the topped-up balance is refundable. The card price itself is not."
          },
          {
            type: "tipbox",
            icon: "card",
            situation: "Can't top up with a card issued abroad?",
            text: "Many top-up points take cash only, so a card issued abroad may not work. Check which payment methods are accepted before topping up, and keep some Korean won in cash just in case.",
            go: ["#help-payment", "Fixing payment and top-up problems"]
          }
        ],
        tips: [
          "Check your balance before boarding. Top up in advance so you don't run short when getting off.",
          "Two cards stacked together can cause a read error. Take out just one card to tap.",
          "If you forget to tap when getting off, you won't get the transfer discount next time.",
          "To avoid a big leftover balance, top up little by little to match your trip."
        ],
        links: [
          { href: "tmoney", label: "T-money (티머니)" },
          { href: "ezl", label: "EZL (이즐)" }
        ],
        next: ["#during-subway", "During: ride the subway"]
      }
    ]
  },
  /* ---------------- 02 DURING TRIP ---------------- */
  during: {
    title: "What you need on the move,\nright on your phone",
    intro: "How to use the subway, bus and taxi, what to do in an SOS, and Korean you can use on the spot.",
    cards: [
      {
        id: "during-subway",
        num: "2-1",
        short: "Subway",
        title: "How to ride the subway",
        lead: "Once going in, once going out. Tap your transport card twice.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "Find the station", d: "Search your destination on NAVER Map → choose 'Public transport' → check the boarding station and line." },
              { t: "Tap your card", d: "Tap your card on the gate reader and walk through." },
              {
                t: "Check the line and direction",
                d: "Follow the line color and number. On the platform sign, check '○○ 방면' (towards ○○) and the next station name."
              },
              {
                t: "Board the train",
                d: "Let passengers get off first, then board. Check the next station on the screen and announcements inside the train."
              },
              { t: "Transfer", d: "Follow the '갈아타는 곳 (Transfer)' signs and the color of the line you're changing to." },
              {
                t: "Check the exit number",
                d: "Find the exit closest to your destination in your map app, then follow the signs inside the station."
              },
              { t: "Tap again to exit", d: "Tap your card once more at the exit gate to pay the fare." }
            ]
          },
          {
            type: "faq",
            title: "Common confusions",
            items: [
              [
                "Q. Do I tap again when transferring?",
                "Usually not, if you transfer inside the gates. But between lines run by different operators there may be a reader in the transfer passage. If you see one, tap your card."
              ],
              [
                "Q. How do I know which direction to take?",
                "Check '○○ 방면' (towards ○○) and the next station on the platform sign. Make sure it matches the route in your map app before boarding."
              ],
              [
                "Q. How do I find the exit nearest my destination?",
                "Look for '○번 출구' (exit no. ○) in your map app's route. At big stations, going out the wrong side means a long walk back, so also check the nearby building names on the exit signs."
              ],
              [
                "Q. The gate won't open or beeps. What now?",
                "Your balance may be too low or the card wasn't read. Top up at the station machine or ask at the station's customer safety office."
              ]
            ]
          },
          {
            type: "tipbox",
            icon: "subway",
            situation: "Leaving a big station with more than 10 exits?",
            text: "Korean subway stations can have a lot of exits. When you search your destination, also check the nearest exit number, then follow the exit number signs in the station.",
            phrases: [["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?"]],
            go: ["#during-korean-move", "Korean for asking directions"]
          },
          {
            type: "playbook",
            id: "during-subway-last",
            situation: "I'm worried about the last train. What if I already missed it?",
            fast: ["navermap_route"],
            stepsTitle: "If you've already missed the last train",
            steps: [
              "Search for late-night buses (N buses) on NAVER Map.",
              "Check the estimated fare in a taxi app.",
              "Choose the safest way back to your accommodation."
            ],
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
        tips: [
          "Weekdays 8–9 am and 6–7 pm are rush hours. Avoid them if you have big luggage.",
          "Leave seats for seniors, people with disabilities and pregnant women free for those who need them.",
          "The last train usually runs around midnight. Late at night, check the last train time for your line in your map app."
        ],
        watch: [
          { ref: "V05", title: "Learn Korean public transport by video", summary: "See how a transport card works with real bus and subway rides." }
        ],
        links: [
          { href: "seoulmetro", label: "Seoul Metro" }
        ],
        next: ["#during-bus", "Take the bus"]
      },
      {
        id: "during-bus",
        num: "2-2",
        short: "Bus",
        title: "How to ride the bus",
        lead: "Get on at the front door, off at the back. Tap your transport card when getting off too.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "Find the bus number on NAVER Map", d: "Check the bus number and stop name in your map app's route." },
              {
                t: "Check the stop",
                d: "Stops with the same name can be on both sides of the road, so check '다음 정류장' (next stop) on the sign to confirm the direction."
              },
              { t: "Board at the front", d: "Double-check the number of the arriving bus, then get on at the front door." },
              { t: "Tap your card", d: "Tap your card on the reader next to the driver." },
              { t: "Check where you are", d: "Use the screen and announcements on the bus, or your map app, to see where you are." },
              { t: "Press the stop bell before your stop", d: "Press the stop bell once you pass the stop just before yours." },
              { t: "Tap before getting off", d: "Tap your card on the reader near the back door." },
              { t: "Get off at the back door", d: "Wait until the bus fully stops before standing up to get off." }
            ]
          },
          {
            type: "warn",
            title: "Common mistakes",
            items: [
              "You must tap when getting off too. If you don't, you won't get the transfer discount.",
              "Press the stop bell before your stop, or the bus may drive past it.",
              "Even with the same bus number, check which direction it's going.",
              "Check where the stop is. Yours may be across the street."
            ]
          },
          {
            type: "tipbox",
            icon: "bus",
            situation: "Worried you'll miss your stop?",
            text: "On a bus you need to press the stop bell before getting off. Press it once you pass the stop just before yours, and tap your transport card when you get off too."
          }
        ],
        tips: [
          "Carry a transport card in case the bus doesn't take cash.",
          "Small green village buses (마을버스) run short routes within a neighborhood. Handy in hilly areas like Seongbuk-dong."
        ],
        real: ["When I first came to Korea, I didn't know you had to tap your card when getting off the bus too."],
        watch: [
          {
            query: "how to ride a bus in Korea",
            title: "Watch videos on riding buses in Korea",
            summary: "Before your first ride, get used to boarding and getting off by video so you feel less nervous."
          }
        ],
        links: [
          { href: "topis", label: "Seoul Transport Info TOPIS" }
        ],
        next: ["#during-taxi", "Take a taxi"]
      },
      {
        id: "during-taxi",
        num: "2-3",
        short: "Taxi",
        title: "How to take a taxi",
        lead: "Taxis are handy with lots of luggage or late at night. With an app, you don't need to explain where you're going.",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "Kakao T",
                sub: "Kakao T",
                use: "The most widely used taxi app in Korea",
                lang: "Mainly Korean",
                signup: "Kakao account required",
                phone: "May be needed during account verification.",
                when: "International students with a Kakao account",
                tip: "If your foreign card won't register, choose '기사님께 직접 결제' (pay the driver directly) and pay by card when you get out."
              },
              {
                name: "Uber Taxi",
                sub: "Uber",
                use: "Call Korean taxis with the Uber app",
                lang: "Multilingual",
                signup: "Use your existing Uber account",
                phone: "Not needed",
                when: "Travelers who already use Uber",
                tip: "In Korea, Uber sends you a licensed taxi.",
                href: "uber"
              },
              {
                name: "k.ride",
                sub: "k.ride",
                use: "Kakao Mobility's taxi app for international visitors",
                lang: "English · 中文 · 日本語 (chat with the driver, auto-translated)",
                signup: "Phone number + email · Google · Apple",
                phone: "Not needed (foreign numbers work)",
                when: "Short-term visitors without a Korean number",
                tip: "It can only call certain taxi types, so fares may be higher than a regular taxi."
              }
            ]
          },
          {
            type: "steps",
            title: "How it works",
            items: [
              { t: "Set your pickup", d: "Check that your current location and pickup point match on the map." },
              { t: "Set your destination", d: "Search your destination by its Korean name or address." },
              { t: "Check the estimated fare" },
              { t: "Call the taxi" },
              { t: "Check the plate number", d: "Make sure the plate number in the app matches the car before getting in." },
              { t: "Get in", d: "Wear your seat belt in the back seat too." },
              { t: "Pay", d: "Pay automatically in the app, or by card or transport card when you get out." }
            ]
          },
          {
            type: "tipbox",
            icon: "taxi",
            situation: "Hard to communicate with the driver?",
            text: "Talking with the driver can be hard, so have your destination's Korean address ready. Show it on your screen and you won't need to explain.",
            phrases: [["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address."]]
          }
        ],
        tips: [
          "Have the Korean address ready before you ride. Save Korean place names with the 'Copy' button on destination pages.",
          "Before getting in, check that the plate number matches the app.",
          "Check whether the app pays automatically. If it already did, don't hand over your card again when you get out (avoid paying twice).",
          "Check the estimated fare first. A late-night surcharge may apply after 10 pm."
        ],
        links: [
          { href: "uber", label: "Uber" }
        ],
        next: ["#during-sos", "When something goes wrong"]
      },
      {
        id: "during-sos",
        num: "2-4",
        short: "SOS",
        title: "SOS · when you need help",
        lead: "Choose the number for your situation. Tap to call right away.",
        blocks: [
          {
            type: "sos",
            items: [
              { num: "119", title: "Fire · ambulance (emergency)", desc: "When you're hurt or sick, or there's been an accident", urgent: true },
              { num: "112", title: "Police", desc: "Crime, dangerous situations, reporting lost items", urgent: true },
              {
                num: "1330",
                title: "Tourist interpretation · info",
                desc: "English · 中文 · 日本語. Directions, interpretation, travel complaints. Check official info for hours."
              },
              {
                num: "02-120",
                tel: "02120",
                title: "Seoul Dasan Call Center",
                desc: "Questions about living and transport in Seoul. Press 9 for other languages (weekdays 9 am–6 pm)"
              }
            ],
            caption: "From a foreign number, call 1330 at +82-2-1330. You can also use the VISITKOREA app or web chat."
          },
          {
            type: "playbook",
            id: "during-sos-1330",
            situation: "I can't communicate with the staff, or I don't know who to ask.",
            fast: ["k1330", "papago"],
            checkTitle: "Contact 1330 when",
            check: ["You can't communicate with staff", "You have a tourism question", "Something goes wrong on your trip", "You don't know who to contact"],
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
            title: "What to do, by situation",
            items: [
              {
                icon: "taxi",
                title: "A problem during a taxi ride",
                steps: [
                  "Check the plate number and ride time on your receipt or in the app history.",
                  "If you called through an app, contact that app's customer service first.",
                  "You can report fare problems or complaints with interpretation help from 1330."
                ]
              },
              {
                icon: "map",
                title: "If you get lost",
                steps: [
                  "Find the name of the nearest station or a big building.",
                  "Turn on your location in NAVER Map and search your destination again.",
                  "If it's hard to communicate, call 1330 and hand the phone to the staff or driver for interpretation."
                ]
              },
              {
                icon: "card",
                title: "Transport card not working",
                steps: [
                  "If it beeps, first check your balance at a station machine or convenience store.",
                  "Make sure two transport cards aren't stacked together.",
                  "If it still won't read, show the card at the station's customer safety office or to the bus driver and ask for help."
                ]
              },
              {
                icon: "bag",
                title: "If you lose something",
                steps: [
                  "Subway: ask station staff right away. Tell them when you got off and which car you were in.",
                  "Bus · taxi: in Seoul, call 120 to find out where to report lost items.",
                  "Check how to search found items and report losses on Police Civil Service 24.",
                  "Bring your passport or other ID when picking up lost items."
                ],
                link: { href: "lost112", label: "Police Civil Service 24 · lost and found" }
              }
            ]
          }
        ],
        tips: [
          "Save 112, 119 and 1330 in your phone contacts before you go.",
          "Items found on the subway are kept at each line's lost and found center for about a week, then sent to the police. Ask as soon as you notice something is missing.",
          "If you lose your passport, report it to 112 and contact your embassy."
        ],
        links: [
          { href: "lost112", label: "Police Civil Service 24 · lost and found" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330" }
        ],
        next: ["#during-health", "Get help when you're sick"]
      },
      {
        id: "during-health",
        num: "2-5",
        short: "When you're sick",
        kicker: "HEALTH HELP",
        title: "Feeling sick during your trip?",
        lead: "Start by choosing the help that fits your situation. Seoul Landing doesn't diagnose symptoms. It only shows where to get help.",
        top: [
          {
            type: "health",
            alert: "For an emergency like a serious injury, trouble breathing or losing consciousness, call 119 right away (tap to call)",
            items: [
              {
                key: "pharmacy",
                icon: "pill",
                label: "PHARMACY",
                title: "If you need medicine",
                text: "For mild symptoms, find a pharmacy nearby.",
                steps: ["Search '약국' (pharmacy) on NAVER Map", "Check which pharmacies are open now", "Go to the nearest one"],
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
                title: "If you need to see a doctor",
                text: "Before you go, it's best to check whether the hospital treats international patients or offers help in other languages.",
                steps: [
                  "Search for a hospital on NAVER Map (e.g. 내과, internal medicine)",
                  "Check whether they treat international patients",
                  "Check whether they offer care in English or other languages"
                ],
                search: ["내과", "병원"],
                note: "If it's hard to ask by phone, get interpretation help from the 1330 travel helpline.",
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
                title: "Emergency",
                num: "119",
                call: "Emergency Help",
                sub: "Tap to call right away",
                text: "For emergencies that need immediate help, such as a serious injury, trouble breathing or losing consciousness, call 119.",
                note: "119 ambulances are free, and interpretation is available. Start by saying where you are (nearby building or station name).",
                phrases: [["도와주세요.", "do-wa-ju-se-yo.", "Please help me."], ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "Please call 119."]]
              }
            ],
            caption: "Leave decisions about medicine and treatment to pharmacists and doctors. This guide is only for finding where to get help."
          }
        ],
        blocks: [
          {
            type: "checklist",
            title: "Bring this to the pharmacy or hospital",
            items: ["Passport", "Names of medicines you take", "Allergy note", "Your accommodation address (in Korean)", "Travel insurance details"]
          }
        ],
        tips: [
          "If it's hard to communicate, call 1330 (travel helpline) for interpretation.",
          "Many pharmacies and clinics close on Sundays and public holidays. Check E-Gen for ones that are open.",
          "If you have travel insurance, keep your receipts and copies of the medical certificate and prescription."
        ],
        links: [
          { url: "https://www.e-gen.or.kr", label: "E-Gen emergency medical portal (open hospitals · pharmacies)" },
          { url: "https://medical.visitseoul.net", label: "Seoul Medical Tourism (support for international patients)" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330 interpretation" }
        ],
        next: ["#during-prayer", "When you need a place to pray"]
      },
      {
        id: "during-prayer",
        num: "2-6",
        short: "Prayer space",
        kicker: "RELIGIOUS TRAVEL TIP",
        title: "Need a place to pray during your trip?",
        lead: "Airports and some tourist and shopping facilities have prayer rooms. Search in a map app or check official tourism info.",
        top: [
          {
            type: "spots",
            title: "Where can I find one?",
            items: [
              {
                icon: "plane",
                t: "Airport prayer rooms",
                d: "Major airports like Incheon have prayer rooms. Many are inside the departure area, so ask the information desk for the location."
              },
              {
                icon: "popup",
                t: "Shopping malls · complexes",
                d: "Some large malls, complexes and tourist sites have prayer rooms. Ask the information desk where the '기도실' (prayer room) is."
              },
              {
                icon: "pray",
                t: "Mosques · places of worship",
                d: "Mosques and other places of worship, such as the Seoul Central Mosque in Itaewon. Check opening hours before you go."
              },
              {
                icon: "map",
                t: "Tourism info sites",
                d: "Use the prayer room info on VISITKOREA's Muslim-friendly travel page and the 1330 travel helpline."
              }
            ]
          }
        ],
        blocks: [
          {
            type: "playbook",
            situation: "I need a place to pray during my trip.",
            intro: "At an airport, mall or large tourist site, show these sentences at the information desk.",
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
        tips: [
          "Hours and rules differ by facility, so check with the information desk or official info before you go.",
          "Asking for '기도실' (gi-do-sil) usually works.",
          "Some Muslim-friendly restaurants also have a prayer space. Check the restaurant's info."
        ],
        links: [
          { url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", label: "VISITKOREA · Muslim-friendly Travel (Prayer Room)" },
          { url: "https://www.airport.kr", label: "Incheon International Airport" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 travel helpline" }
        ],
        next: ["#during-korean", "Korean to use on the spot"]
      },
      {
        id: "during-korean",
        num: "2-7",
        short: "Korean",
        title: "Korean for your trip",
        lead: "Your pronunciation doesn't have to be perfect. If speaking is hard, use 'Show large' to show the screen.",
        blocks: [
          {
            type: "jump",
            title: "Jump to a situation",
            items: [
              ["#during-korean-move", "Transport", "subway"],
              ["#during-korean-food", "Vegetarian · food", "leaf"],
              ["#during-korean-health", "Hospital · pharmacy", "hospital"],
              ["#during-korean-sos", "Emergency", "sos"]
            ]
          },
          {
            type: "phrases",
            groups: [
              {
                id: "during-korean-move",
                title: "Transport",
                items: [
                  ["여기 어떻게 가요?", "yeo-gi eo-tteo-ke ga-yo?", "How do I get here?", "While showing the map screen"],
                  ["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "Which exit number is it?", "At a subway station"],
                  ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "In a taxi, showing the address"],
                  ["여기서 내려 주세요.", "yeo-gi-seo nae-ryeo ju-se-yo.", "Please let me off here.", "When getting out of a taxi"]
                ]
              },
              {
                title: "Restaurants",
                items: [
                  ["두 명이에요.", "du myeong-i-e-yo.", "There are two of us.", "Say how many as soon as you walk in"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "When the line is long"],
                  ["이거 주세요.", "i-geo ju-se-yo.", "This one, please.", "While pointing at the menu"]
                ]
              },
              {
                title: "Reservations",
                items: [["예약했어요.", "ye-yak hae-sseo-yo.", "I have a reservation.", "At the entrance, with your name"]]
              },
              {
                title: "Pop-ups · shows",
                items: [
                  ["예약이 필요해요?", "ye-ya-gi pi-ryo-hae-yo?", "Do I need a reservation?", "At a pop-up entrance"],
                  ["현장 입장 가능해요?", "hyeon-jang ip-jang ga-neung-hae-yo?", "Can I enter without a reservation?", "When you went without booking"]
                ]
              },
              {
                title: "Shopping",
                items: [
                  ["카드 돼요?", "ka-deu dwae-yo?", "Do you take cards?", "Before paying"],
                  ["얼마예요?", "eol-ma-ye-yo?", "How much is it?", "When asking the price"]
                ]
              },
              {
                id: "during-korean-food",
                title: "Vegetarian · food",
                items: [
                  ["고기가 들어가나요?", "go-gi-ga deu-reo-ga-na-yo?", "Is there meat in this?", "Before ordering"],
                  ["돼지고기가 들어가나요?", "dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Is there pork in this?", "While pointing at the menu"],
                  ["채식 메뉴가 있나요?", "chae-sik me-nyu-ga in-na-yo?", "Do you have vegetarian dishes?", "Before sitting down"]
                ]
              },
              {
                title: "Religion · diet",
                items: [
                  [
                    "돼지고기 없는 메뉴가 있나요?",
                    "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?",
                    "Do you have a menu without pork?",
                    "When you need halal or no pork"
                  ],
                  ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "Where is the prayer room?", "At an airport or mall information desk"]
                ]
              },
              {
                id: "during-korean-health",
                title: "Hospital",
                items: [
                  ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "I want to go to a hospital.", "To staff at your accommodation or an info center"],
                  ["많이 아파요.", "ma-ni a-pa-yo.", "It hurts a lot. / I feel very sick.", "While pointing where it hurts"]
                ]
              },
              {
                id: "during-korean-pharmacy",
                title: "Pharmacy",
                items: [
                  ["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "I need cold medicine.", "At a pharmacy"],
                  ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "I need headache medicine.", "At a pharmacy"]
                ]
              },
              {
                id: "during-korean-sos",
                title: "Emergency",
                items: [
                  ["도와주세요.", "do-wa-ju-se-yo.", "Please help me.", "Loudly, to people nearby"],
                  ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "Please call 119.", "When asking people nearby for help"]
                ]
              }
            ]
          }
        ],
        tips: ["A phrase that works in many situations: '~주세요' (…please).", "You can show the number of people with your fingers."],
        links: [
          { href: "papago", label: "Papago translator" }
        ],
        next: ["#tips-food", "Next: find restaurants · pop-ups · bookings"]
      }
    ]
  },
  /* ---------------- 03 TRAVEL TIPS ---------------- */
  tips: {
    title: "From food to culture,\nhow to find local info",
    intro: "How to find restaurant and event info that changes often, plus what international visitors should check before going.",
    cards: [
      {
        id: "tips-food",
        num: "3-1",
        short: "Restaurants",
        title: "How to find restaurants",
        lead: "How to find popular restaurants yourself on NAVER Map.",
        top: [
          {
            type: "search",
            title: "STEP 1 · Search 'area + food you want'",
            items: ["성수 한식", "홍대 삼겹살", "명동 냉면", "종로 혼밥"],
            caption: "Tap a keyword to open NAVER Map results. Swap in 'destination + food you want' to search your own."
          },
          {
            type: "tipgrid",
            id: "tips-food-diet",
            title: "Check this too if you have dietary needs",
            items: [
              {
                tone: "veg",
                icon: "leaf",
                label: "VEGETARIAN TIP",
                title: "If you're vegetarian",
                text: "See vegan places all at once on HappyCow, or search 'area + 비건 식당' (vegan restaurant) on NAVER Map.",
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
                note: "Even when you can't see meat, Korean dishes may use animal products in broth, 젓갈 (salted seafood) or sauce. Don't just ask whether there's meat; ask about the broth and sauce too.",
                go: ["#during-korean-food", "More Korean for ordering food"],
                services: ["happycow"]
              },
              {
                tone: "muslim",
                icon: "moon",
                label: "MUSLIM TRAVELER TIP",
                title: "If you need halal food or don't eat pork",
                text: "Start with the Korea Tourism Organization's official list. Halal Certified means certified by an accredited body; Self-certified means the Muslim owner confirms it. Muslim Friendly and Pork Free are not the same as halal certified.",
                search: ["이태원 할랄 식당", "명동 할랄", "강남 Muslim Friendly", "홍대 돼지고기 없는 식당"],
                phrases: [
                  ["돼지고기를 먹지 않습니다.", "dwae-ji-go-gi-reul meok-ji an-seum-ni-da.", "I don't eat pork."],
                  ["이 음식에 돼지고기가 들어가나요?", "i eum-si-ge dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "Does this dish contain pork?"],
                  ["돼지고기 육수가 들어가나요?", "dwae-ji-go-gi yuk-su-ga deu-reo-ga-na-yo?", "Is there pork broth in it?"],
                  ["알코올이 들어가나요?", "al-ko-o-ri deu-reo-ga-na-yo?", "Does it contain alcohol?"]
                ],
                note: "Muslim Friendly and Pork Free restaurants may serve alcohol.",
                go: ["#during-prayer", "How to find a place to pray"],
                services: ["kto_muslim"],
                kw: {
                  google: ["halal restaurant Itaewon", "halal Korean food Seoul"]
                }
              },
              {
                tone: "allergy",
                icon: "alert",
                label: "ALLERGY TIP",
                title: "If you have a food allergy",
                text: "Checking on the spot matters more than a list of allergy-friendly restaurants. Save the Korean names of what you must avoid, and show the staff before you order.",
                phrases: [
                  ["저는 심한 음식 알레르기가 있습니다.", "jeo-neun sim-han eum-sik al-le-reu-gi-ga it-seum-ni-da.", "I have a severe food allergy."],
                  ["이 음식에 땅콩이 들어가나요?", "i eum-si-ge ttang-kong-i deu-reo-ga-na-yo?", "Does this dish contain peanuts?"],
                  [
                    "소스나 육수에도 땅콩이 들어가면 먹을 수 없습니다.",
                    "so-seu-na yuk-su-e-do ttang-kong-i deu-reo-ga-myeon meo-geul su eop-seum-ni-da.",
                    "If there's peanut even in the sauce or broth, I can't eat it."
                  ]
                ],
                note: "Swap '땅콩' (peanut) for your own ingredient when you show it.",
                go: ["#help-food", "More on handling allergies"],
                wordsTitle: "Save your allergens in Korean",
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
              {
                t: "Check reviews and photos",
                d: "Look at the number of reviews and how recent they are, and check the real dishes in visitors' photos."
              },
              { t: "Check business info", d: "Check opening hours, days off and the afternoon break." },
              {
                t: "Check waiting and bookings, then go",
                d: "If there's a '예약' (Book) button, you can book through NAVER. Go early to places with long waits.",
                go: ["#tips-reserve", "See how to book"]
              }
            ]
          },
          {
            type: "checklist",
            title: "After searching, check these",
            items: ["Open right now?", "Break time", "Last order", "Recent reviews", "Waiting list", "Booking button?", "Menu photos"]
          },
          {
            type: "keyset",
            title: "More useful searches for your situation",
            items: [
              ["Traveling solo", "성수 혼밥", "종로 혼밥", "1인 메뉴 맛집"],
              ["Late at night", "홍대 늦게까지 하는 식당", "강남 24시 식당"],
              ["Don't want to book", "성수 웨이팅 없는 맛집", "예약 없이 가는 맛집"]
            ]
          }
        ],
        tips: [
          "Places close or change their info, so search for the latest details yourself before you go.",
          "Many Korean BBQ places only take orders of 2 servings or more.",
          "Some places are hard to eat at alone, so search reviews for '1인' (one person)."
        ],
        links: [
          { href: "naver", label: "NAVER Map" }
        ],
        next: ["#tips-cafe", "Find cafés"]
      },
      {
        id: "tips-cafe",
        num: "3-2",
        short: "Cafés",
        title: "How to find cafés",
        lead: "Pick cafés by photos and atmosphere. Use maps and Instagram together to find where to go.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "Search 'area name + 카페' on NAVER Map", d: "Check the vibe in the photos tab first." },
              { t: "Search hashtags on Instagram", d: "Find recent visitor photos with Korean hashtags like #성수카페 (Seongsu café)." },
              { t: "Check hours and days off", d: "Days off can change, so check the café's Instagram notices before you go." },
              { t: "Check the house rules", d: "Check one-drink-per-person rules, time limits and photo rules." }
            ]
          },
          {
            type: "keyset",
            title: "Search by what you want",
            items: [["Photos", "성수 감성카페", "서울 사진찍기 좋은 카페"], ["Hanok", "익선동 한옥카페", "북촌 한옥카페"], ["Views", "서울 한강뷰 카페"], ["Desserts", "성수 디저트 카페"]]
          }
        ],
        tips: [
          "Most Korean cafés expect one drink per person.",
          "Some cafés limit photos. Check whether it's allowed and be careful not to include other customers.",
          "Popular cafés may be full on weekend afternoons. Mornings are quieter."
        ],
        next: ["#tips-popup", "Find pop-up stores"]
      },
      {
        id: "tips-popup",
        num: "3-3",
        short: "Pop-ups",
        title: "How to find pop-up stores",
        lead: "Pop-up stores don't stay open long. Where to find them, and what to check before you go.",
        blocks: [
          {
            type: "playbook",
            id: "tips-popup-find",
            situation: "I want pop-ups worth visiting on the dates I'm traveling.",
            intro: "You don't need to start with brand social media. Pick by date and area first, then check the official account at the end.",
            fast: ["popga", "sungsuya", "popnol"],
            search: {
              naver: ["성수 팝업 오늘", "성수 팝업 이번주", "서울 팝업 이번주", "홍대 팝업 이번주", "더현대 팝업 이번주", "잠실 팝업 이번주"],
              insta: ["#성수팝업", "#서울팝업", "#팝업스토어", "#이번주팝업"],
              google: ["Seoul pop up store this week"]
            },
            checkTitle: "Check the official Instagram of the pop-up you pick",
            check: ["Booking needed?", "Walk-ins allowed?", "Opening hours", "Last entry", "ID", "Event rules", "Merch purchase rules"],
            say: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "Can I go in without a reservation?"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "What time is last entry?"],
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "Can I use my passport as ID?"]
            ]
          },
          {
            type: "spots",
            title: "STEP 1 · Pick an area first",
            items: [
              { icon: "popup", t: "Seongsu", d: "The most pop-ups: fashion, beauty, characters and brands." },
              { icon: "ticket", t: "Hongdae · Yeonnam", d: "Lots of character, webtoon, idol and young-brand pop-ups." },
              { icon: "home", t: "Yeouido", d: "Indoor pop-ups centered on The Hyundai Seoul. Good on rainy days." },
              { icon: "compass", t: "Jamsil", d: "Pop-ups centered on Lotte World Mall." }
            ]
          },
          {
            type: "steps",
            title: "Discover → choose → check official info",
            items: [
              { t: "Discover", d: "Find pop-ups open on your dates on POPGA, 성수야 (SUNGSUYA) or 팝놀 (POPNOL)." },
              { t: "Choose", d: "Pick one by location, dates and reviews." },
              { t: "Check official info", d: "On the pop-up's official Instagram, check whether you need to book and the entry rules." }
            ]
          },
          {
            type: "tipbox",
            icon: "popup",
            situation: "Turned away because it's reservations only?",
            text: "Some pop-ups may require advance booking or a Korean phone number. Check the official social media before you go to see whether you need to book and whether walk-ins are allowed.",
            phrases: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "Can I go in without a reservation?"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "What time is last entry?"]
            ],
            go: ["#help-reservation", "When you can't book without a Korean number"]
          }
        ],
        tips: [
          "If pre-booking requires Korean phone verification, it may be hard for visitors to book. Check for separate walk-in times.",
          "Popular pop-ups get especially crowded on the first weekend.",
          "Merch often has a per-person purchase limit."
        ],
        real: ["I thought I could just walk into pop-up stores, but some needed advance booking."],
        links: [
          { href: "popga", label: "POPGA (팝가)" }
        ],
        next: ["#tips-culture", "Find exhibitions · shows · festivals"]
      },
      {
        id: "tips-culture",
        num: "3-4",
        short: "Exhibitions · shows · festivals",
        title: "How to find exhibitions, shows and festivals",
        lead: "How to find exhibition, show and festival info on official channels.",
        blocks: [
          {
            type: "playbook",
            situation: "What's on in Seoul this week?",
            fast: ["visitseoul_events", "culture_portal"],
            search: {
              naver: ["이번 주 서울 전시", "서울 무료 전시", "서울 축제 이번주", "서울 공연 오늘"],
              google: ["things to do in Seoul this week", "Seoul festival this month"]
            },
            check: ["Date", "Time", "Booking needed?", "Price", "Last entry", "Open to foreigners?"],
            say: [
              ["오늘 현장 예매 되나요?", "o-neul hyeon-jang ye-mae doe-na-yo?", "Can I buy a ticket here today?"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "Can foreigners join too?"]
            ]
          },
          {
            type: "steps",
            title: "Where to check",
            items: [
              { t: "Official website · official social media", d: "Check dates, times and prices on the event's official channels." },
              { t: "Seoul cultural events site", d: "Search Seoul's shows, exhibitions and festivals by date on the Seoul Culture Portal." },
              { t: "VISITKOREA · Visit Seoul", d: "The official tourism site with festival and event info in several languages." },
              {
                t: "Official ticketing sites for shows · exhibitions",
                d: "Use ticket sites with foreign-language support, like NOL World (formerly Interpark Global)."
              }
            ]
          }
        ],
        tips: [
          "Even at free festivals, some programs need advance registration.",
          "Outdoor events may be canceled or changed if it rains, so check the official social media that morning."
        ],
        links: [
          { href: "culture", label: "Seoul Culture Portal (Seoul cultural events)" },
          { href: "visitkorea", label: "VISITKOREA" },
          { href: "visitseoul", label: "Visit Seoul" },
          { href: "nolworld", label: "NOL World (tickets for international visitors)" }
        ],
        next: ["#tips-kpop", "Find K-POP events"]
      },
      {
        id: "tips-kpop",
        num: "3-5",
        short: "K-POP",
        title: "How to find K-POP events",
        lead: "From finding K-POP events to checking the rules for joining.",
        blocks: [
          {
            type: "playbook",
            label: "CASE A",
            situation: "I don't have a favorite artist yet. Any K-POP events worth going to this week?",
            intro: "Check Visit Seoul's Hallyu listings, the K-POP category in pop-up apps, and what's on at ticketing sites.",
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
            situation: "I'm looking for my favorite artist's events.",
            fast: ["weverse"],
            stepsTitle: "Check in this order",
            steps: ["Official fan platforms like Weverse", "The artist's official X", "Official Instagram", "Agency announcements"],
            check: ["Advance registration", "Fan club requirements", "ID", "Open to foreigners?", "Entry time"],
            say: [
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "Can I use my passport as ID?"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "Can foreigners join too?"]
            ]
          }
        ],
        tips: [
          "The booker's details must match the actual attendee's. ID is often checked at entry, so bring your passport.",
          "Presale dates can differ between Korean and global memberships, so check both.",
          "Announcement times are in Korea Standard Time (KST). Convert to your local time and set an alarm.",
          "Tickets bought from unofficial sellers may be refused at the entrance."
        ],
        links: [
          { href: "weverse", label: "Weverse" },
          { href: "nolworld", label: "NOL World" }
        ],
        next: ["#tips-reserve", "How to book"]
      },
      {
        id: "tips-reserve",
        num: "3-6",
        short: "Bookings",
        title: "How to book",
        lead: "Five booking methods commonly used in Korea, step by step.",
        blocks: [
          {
            type: "accordion",
            items: [
              {
                title: "NAVER Booking",
                sub: "Restaurants · cafés · activities",
                lead: "Available when there's a '예약' (Book) button on the NAVER Map place page.",
                steps: [
                  "Search the place on NAVER Map",
                  "Tap the '예약' (Book) button",
                  "Choose date, time and number of people",
                  "Log in to NAVER and request the booking",
                  "Check the confirmation (and check again on the day)"
                ],
                note: "A NAVER account is required. If signing up is hard, see whether you can book by phone, in person or through another app."
              },
              {
                title: "Pop-up pre-booking",
                sub: "Brand pop-up stores",
                steps: [
                  "Find the booking link on the brand's Instagram or notices",
                  "Open the booking page right when booking opens",
                  "Choose a date and entry time",
                  "Verify your identity · enter your details",
                  "Save the entry QR code or text message and arrive on time"
                ],
                note: "Booking opening times are in Korea time. If Korean number verification is required, check whether walk-ins are possible."
              },
              {
                title: "Show bookings",
                sub: "Concerts · musicals · exhibitions",
                steps: [
                  "Find the official ticket seller (for international visitors, e.g. NOL World)",
                  "Sign up and log in in advance",
                  "Choose a date and seat, then pay",
                  "Check whether it's a mobile ticket or on-site pickup",
                  "Bring your passport or other ID on the day"
                ],
                link: { href: "nolworld", label: "NOL World" }
              },
              {
                title: "Restaurant bookings",
                sub: "Restaurants · popular eateries",
                steps: [
                  "Look for a '예약' (Book) button on the NAVER Map place page",
                  "International visitors can also use the Catchtable Global app.",
                  "Choose a date and party size; pay a deposit if needed",
                  "Arrive 10 minutes before your booking"
                ],
                note: "You can sign up for Catchtable Global with an email, no Korean number needed."
              },
              {
                title: "On-site waiting list",
                sub: "Restaurants, cafés and pop-ups with lines",
                steps: ["Register on the waiting kiosk in front of the place", "Go in when you're called"],
                note: "See 'On-site waiting' below for the detailed steps."
              }
            ]
          },
          {
            type: "tipbox",
            icon: "phone",
            situation: "Booking page asking for a Korean phone number?",
            text: "Some booking services may require a Korean phone number. If you don't have one, first check whether foreign visitors can book (e.g. Catchtable Global) or whether on-site booking or waiting lists are available.",
            phrases: [
              [
                "한국 전화번호가 없어요. 다른 방법이 있나요?",
                "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?",
                "I don't have a Korean phone number. Is there another way?"
              ]
            ],
            go: ["#help-reservation", "What to do when you can't book"]
          }
        ],
        tips: [
          "No-shows can cost you your deposit or lead to restrictions, so cancel if you can't make it.",
          "Screenshot your booking confirmation. You can show it to staff even without a data connection."
        ],
        next: ["#tips-waiting", "On-site waiting list"]
      },
      {
        id: "tips-waiting",
        num: "3-7",
        short: "Waiting",
        title: "On-site waiting list",
        lead: "Register with the waiting kiosk (tablet) in front of popular restaurants, cafés and pop-ups. Follow the steps below.",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "Arrive at the place" },
              { t: "Find the waiting kiosk", d: "Look for a tablet near the entrance. If there isn't one, ask the staff." },
              { t: "Enter party size" },
              { t: "Enter your phone number", d: "You'll get a notification at that number when it's your turn." },
              { t: "Check your queue number", d: "Screenshot the queue number shown on the screen." },
              { t: "Watch for your call", d: "When the KakaoTalk message or text arrives, go to the entrance right away." },
              { t: "Go in" }
            ]
          },
          {
            type: "phrases",
            groups: [
              {
                title: "Phrases for the moment",
                items: [
                  ["전화번호가 없어요.", "jeon-hwa-beon-ho-ga eop-seo-yo.", "I don't have a Korean phone number.", "At the waiting kiosk"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "Is there a wait?", "When you see a line"]
                ]
              }
            ]
          }
        ],
        tips: [
          "If you don't have a Korean phone number, ask the staff whether you can register with your name.",
          "If you don't show up within the set time after being called, you may lose your turn.",
          "Places that support remote waiting on Catchtable, POPGA and similar apps let you register before you arrive."
        ],
        next: ["#where", "Next: choose a destination"]
      }
    ]
  },
  /* ---------------- 04 WHERE TO GO ---------------- */
  where: {
    title: "Find your destination,\nfrom choosing to comparing",
    intro: "9 places in and around Seoul you can reach by public transport, no rental car needed. Get your top 3 from 4 questions, compare places, and see full routes.",
    why: "A decision guide that helps you choose destinations that fit your trip length and taste.",
    note: "Travel times and fares are based on weekdays in October 2026, adult standard class. They vary by departure time and train type, so check Korail or a map app before you go."
  }
};
