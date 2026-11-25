/* Seoul Landing — Quick Help (English). Same structure as help-ko.js. */
window.SL = window.SL || {};
window.SL.help = window.SL.help || {};
window.SL.help.en = {
  ui: {
    intro: "What's the problem right now? Pick your situation to jump straight to the fix.",
    shortcuts: "Jump to the guides",
    back: "Back to help list",
    choose: "Choose your situation",
    first: "3 things to do first",
    alternative: "If that doesn't solve it",
    phrases: "Korean to show the staff",
    official: "Check official info",
    related: "Related guides",
    all: "Solve another problem",
    updated: "Check official rules, product terms and opening hours again before use."
  },
  quick: [
    { href: "#help-food", icon: "leaf", short: "Diet", sub: "Vegetarian / allergies / halal" },
    { href: "#during-prayer", icon: "pray", short: "Prayer space", sub: "Prayer room / places of worship" },
    { href: "#during-health", icon: "pill", short: "I'm sick", sub: "Hospital / pharmacy / 119", urgent: true },
    { href: "#help-reservation", icon: "phone", short: "Can't book", sub: "Korean phone number / verification" },
    { href: "#help-stay", icon: "luggage", short: "I have luggage", sub: "Luggage storage / suitcases" },
    { href: "#during-sos", icon: "sos", short: "Urgent help", sub: "Lost items / emergencies", urgent: true }
  ],
  items: [
    {
      id: "entry",
      icon: "passport",
      stage: "Before departure",
      short: "Entry documents",
      title: "When you're not sure which entry documents you need",
      lead: "Check visas, K-ETA and the arrival card separately. What you need can differ by nationality, purpose of visit and length of stay.",
      choices: [
        {
          label: "If you haven't started preparing yet",
          steps: [
            {
              t: "Sort out your passport and trip details",
              d: "Check your passport nationality, purpose of visit, length of stay and your arrival and departure flights."
            },
            {
              t: "Check whether you need a visa or K-ETA",
              d: "Check the requirements that apply to you on the official visa portal and K-ETA site. Don't decide based only on other travelers' exemptions."
            },
            {
              t: "Prepare the arrival card and accommodation details",
              d: "The e-Arrival Card is free. Check on the official site who must submit it and when. Have your passport, email, flight and accommodation address ready."
            }
          ],
          fallback: "If you're unsure whether it applies to you, ask a Korean embassy or consulate before departure, giving your nationality, purpose and length of stay. Also ask your airline which documents they check at boarding."
        },
        {
          label: "If you made an input error or your plans changed",
          steps: [
            {
              t: "Work out which application has the error",
              d: "Check whether it's your visa, K-ETA or e-Arrival Card that needs fixing. They're separate procedures, so check each one."
            },
            {
              t: "Find the official lookup and edit menu",
              d: "Compare your passport details with your flight and accommodation info, and follow that service's instructions for editing or reapplying."
            },
            {
              t: "Save the result",
              d: "Save the application number and completion screen, and check your email. For visas and K-ETA, confirm the approval status. For the e-Arrival Card, confirm it was submitted."
            }
          ],
          fallback: "If there's no way to edit or the status is unclear, contact that service's official support. If you leave soon, tell your airline the current status too."
        }
      ],
      phrases: [
        [
          "전자입국신고를 확인하고 싶어요.",
          "jeon-ja-ip-guk-sin-go-reul hwa-gin-ha-go si-peo-yo.",
          "I'd like to check my e-Arrival card.",
          "When asking airport information staff"
        ]
      ],
      links: [
        { url: "https://www.visa.go.kr", label: "Korea Visa Portal" },
        { url: "https://www.k-eta.go.kr", label: "K-ETA official site" },
        { url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do?locale=E", label: "e-Arrival Card guide" },
        { url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do?locale=E", label: "Who must submit the e-Arrival Card" }
      ],
      related: [["#before-plan", "Plan your trip"], ["#help-connection", "Get connected"]]
    },
    {
      id: "connection",
      icon: "phone",
      stage: "Before departure · just after arrival",
      short: "Internet · phone · verification",
      title: "When internet or phone/SMS verification doesn't work",
      lead: "Data, receiving calls and texts, and Korean identity verification are different things. Even with a Korean phone number, check separately whether identity verification works.",
      choices: [
        {
          label: "Choosing or installing a SIM",
          steps: [
            { t: "Check your phone is compatible", d: "Check with the seller whether your phone model supports eSIM and is carrier-unlocked." },
            {
              t: "Check each feature you need",
              d: "Compare data, calls, SMS reception and Korean identity verification separately. Also check the usage period and when it's installed and activated."
            },
            {
              t: "Set it up where you have a connection",
              d: "Follow the seller's setup guide and check the connection. Save your accommodation address and bookings so you can see them offline."
            }
          ],
          fallback: "Have your error screen and order number ready and contact the seller. Only delete and reinstall an eSIM after checking whether it can be reused."
        },
        {
          label: "When the internet works but texts or verification don't",
          steps: [
            {
              t: "Check the type of verification",
              d: "Check on screen whether it's a simple SMS code or Korean identity verification through a carrier."
            },
            {
              t: "Check what your plan includes",
              d: "Check whether you were given a number and whether it receives SMS. Also check whether the plan needs entry confirmation before texts work. Ask the seller separately about Korean identity verification."
            },
            { t: "Find another way in", d: "Check whether the service offers email login, a page for foreigners or on-site registration." }
          ],
          fallback: "If it's for a restaurant booking or waiting list, ask staff how to register without a phone number. For connection problems, contact the seller's support over Wi-Fi."
        }
      ],
      phrases: [
        [
          "한국 전화번호가 없어요. 다른 방법이 있나요?",
          "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?",
          "I don't have a Korean phone number. Is there another way?",
          "When you're stuck on a booking or verification screen"
        ]
      ],
      links: [
        { url: "https://m.roaming.kt.com/eng/esim", label: "KT tourist eSIM features and devices" }
      ],
      related: [["#before-apps", "Get your apps ready"], ["#help-reservation", "Fix booking and waiting problems"]],
      playbooks: [
        {
          situation: "I bought an eSIM but verification texts don't arrive.",
          stepsTitle: "First, tell these apart",
          steps: [
            "Data-only eSIM: internet works, but you may have no phone number or SMS.",
            "SIM or eSIM with a number: check with the seller that calls and SMS work.",
            "Even with a Korean number, Korean identity verification may not work. Before booking or signing up, check whether you just need to receive a text or need identity verification."
          ]
        }
      ]
    },
    {
      id: "payment",
      icon: "card",
      stage: "Just after arrival · during your trip",
      short: "Payment · transport card errors",
      title: "When card payments or transport card top-ups don't work",
      lead: "Paying in shops and tapping or topping up a transport card are separate. Start from the step where the error happened, and have a backup.",
      choices: [
        {
          label: "When a payment is declined in a shop or online",
          steps: [
            {
              t: "Check the payment method and the error",
              d: "Ask the staff or service whether cards issued abroad are accepted, and what the error message says."
            },
            {
              t: "Check the approval history",
              d: "Check approval or cancellation in your card app. If you got an approval alert, ask the shop whether you were actually charged before paying again."
            },
            {
              t: "Have another way to pay",
              d: "Check whether another card or cash works. Withdraw cash at an ATM that shows foreign card support, and check the fee."
            }
          ],
          fallback: "Save the approval record and receipt and contact your card company or the payment service. If the payment method doesn't work there, look for another shop or booking route."
        },
        {
          label: "When tapping or topping up a transport card doesn't work",
          steps: [
            {
              t: "Check the card type and balance",
              d: "Tell a regular credit card apart from a transport card, and check that the card is accepted for the transport you're using."
            },
            {
              t: "Check how the top-up point accepts payment",
              d: "Check whether the machine or convenience store takes cash or foreign cards. Have Korean won in cash ready."
            },
            {
              t: "Ask staff to check your record",
              d: "If the gate shows an error or an extra fare, show your card and route to station staff and ask them to check."
            }
          ],
          fallback: "Until the card is fixed, ask station staff which single-journey tickets you can use and how to buy them. Keep the receipt if a top-up doesn't show."
        }
      ],
      phrases: [
        ["이 카드로 결제할 수 있나요?", "i ka-deu-ro gyeol-je-hal su in-na-yo?", "Can I pay with this card?", "Before paying, or when your card is declined"],
        [
          "교통카드를 충전하고 싶어요.",
          "gyo-tong-ka-deu-reul chung-jeon-ha-go si-peo-yo.",
          "I'd like to top up my transit card.",
          "When topping up at a convenience store or station"
        ]
      ],
      links: [
        {
          url: "https://english.visitkorea.or.kr/public/contents/travel/KoreaTransportationGuide_enu.pdf",
          label: "KTO guide to transport and payment (PDF)"
        }
      ],
      related: [["#before-card", "Buying and topping up a transport card"], ["#during-subway", "How to ride the subway"]],
      playbooks: [
        {
          situation: "My foreign card doesn't work at the kiosk.",
          intro: "A failed kiosk payment doesn't mean your card can't be used at all. Ask to pay at the counter first.",
          check: ["Does another Visa or Mastercard work?", "Can staff process the payment?", "Can you pay cash?", "Is it only the kiosk that fails?"],
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
          situation: "Ordering at a kiosk is hard.",
          fast: ["papago"],
          stepsTitle: "Kiosk ordering steps",
          steps: [
            "Find the English / Language button.",
            "Choose Eat here or Take out.",
            "Choose your items.",
            "Choose the required options.",
            "Check the quantity.",
            "Pay.",
            "Check your order number.",
            "Pick up when your number is called."
          ],
          say: [["키오스크 사용을 도와주세요.", "ki-o-seu-keu sa-yong-eul do-wa-ju-se-yo.", "Please help me use the kiosk."]]
        }
      ]
    },
    {
      id: "arrival",
      icon: "plane",
      stage: "Airport arrival",
      short: "Late arrival · getting to your stay",
      title: "When you arrive late and getting to your accommodation is hard",
      lead: "Your landing time and the time you can leave the airport are different. Check which transport is still running after immigration and baggage claim.",
      choices: [
        {
          label: "If public transport is still running",
          steps: [
            {
              t: "Check your terminal and accommodation location",
              d: "Check your current terminal and the Korean address of your accommodation, and save it in your map app."
            },
            {
              t: "Check last trains and transfers",
              d: "Check rail and bus times from your terminal in the airport's official transport guide. Check not just the first ride but also the last transfer to your accommodation."
            },
            { t: "Find where to board and prepare the fare", d: "Check the stop or platform, how to buy a ticket and where to get off, then go." }
          ],
          fallback: "If you can't make the last service, check for late-night buses or the official taxi stand. Let your accommodation know your expected arrival time on the way."
        },
        {
          label: "If you missed the last service or arrived late",
          steps: [
            {
              t: "Check what transport is left",
              d: "Check late-night bus and taxi info for your terminal at the airport information desk or official site."
            },
            {
              t: "Check whether you can still check in",
              d: "Message your accommodation about your late arrival and check front desk hours and how self check-in works."
            },
            {
              t: "Share your address and check the expected cost",
              d: "For a taxi, show the Korean address of your accommodation and check the expected fare and payment method before getting in."
            }
          ],
          fallback: "If you can't reach your accommodation, contact the booking platform's support. For help with transport or language, use the airport information desk or 1330."
        }
      ],
      phrases: [
        ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "Please take me to this address.", "Show this with your accommodation's Korean address"],
        [
          "늦게 도착할 것 같아요. 체크인할 수 있나요?",
          "neut-ge do-chak-hal geot ga-ta-yo. che-keu-in-hal su in-na-yo?",
          "I expect to arrive late. Can I still check in?",
          "When telling your accommodation you'll be late"
        ]
      ],
      links: [
        { url: "https://www.airport.kr/ap_en/1499/subview.do", label: "Incheon Airport public transport · late-night buses" }
      ],
      related: [["#during-taxi", "How to take a taxi"], ["#help-stay", "Fix accommodation and luggage problems"]],
      playbooks: [
        {
          situation: "I'm arriving late. How do I get to my accommodation?",
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
      stage: "At your accommodation",
      short: "Check-in · luggage storage",
      title: "When check-in or luggage storage is a problem",
      lead: "Check-in times, luggage storage and front desk hours differ by accommodation. Start with your accommodation's own instructions.",
      choices: [
        {
          label: "When you need to leave luggage before check-in or after check-out",
          steps: [
            {
              t: "Ask your accommodation if they can store it",
              d: "Tell them the date and when you'll drop off and pick up, and check the cost, where it's kept and the closing time."
            },
            {
              t: "Find another storage option",
              d: "If your accommodation can't keep it, check the location, sizes, hours and payment of station lockers or luggage storage services."
            },
            {
              t: "Save what you need for pickup",
              d: "Save your receipt, reference number and location, and keep your passport and travel essentials with you."
            }
          ],
          fallback: "If lockers are full or your bag doesn't fit, ask staff about other storage. Plan your pickup around the storage closing time and your next departure."
        },
        {
          label: "When self check-in or getting into the building doesn't work",
          steps: [
            {
              t: "Check your booking and instructions",
              d: "Check the accommodation name, address and dates, and look for the access instructions in your email or booking app messages."
            },
            {
              t: "Check the building and entrance",
              d: "Make sure it isn't another branch with the same name. Compare the entrance, floor and key pickup spot with the instructions again."
            },
            {
              t: "Tell the host what's happening",
              d: "Send your booking number, current location and the error screen, and ask how to get in. Never post door codes publicly."
            }
          ],
          fallback: "If you can't reach them, contact the booking platform's support and save the case number. For language help, contact 1330 for tourist info and interpretation."
        }
      ],
      phrases: [
        [
          "체크인 전에 짐을 맡길 수 있나요?",
          "che-keu-in jeo-ne ji-meul mat-gil su in-na-yo?",
          "Can I leave my luggage before check-in?",
          "Ask, with the time you want to store it"
        ],
        [
          "예약했는데 문을 열 수 없어요. 도와주세요.",
          "ye-ya-kaet-neun-de mu-neul yeol su eop-seo-yo. do-wa-ju-se-yo.",
          "I have a reservation, but I can't open the door. Please help.",
          "Share your booking number with the accommodation address"
        ]
      ],
      links: [
        { url: "https://www.tluggage.co.kr/eng", label: "T-Luggage storage and delivery booking" },
        { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 tourist info · interpretation · chat" }
      ],
      related: [["#help-arrival", "Dealing with a late arrival"], ["#during-korean", "Korean to use on the spot"]],
      playbooks: [
        {
          situation: "I need somewhere to leave my suitcase.",
          fast: ["tluggage"],
          search: {
            naver: ["홍대입구 짐 보관", "명동 캐리어 보관", "서울역 물품보관함"],
            google: ["luggage storage Hongdae", "luggage storage Myeongdong"]
          },
          check: ["Size limits", "Closing time", "Same-day or next-day pickup", "Payment method"],
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
      stage: "Bookings · activities",
      short: "Booking or waiting blocked",
      title: "When you can't book or join a waiting list without a Korean number",
      lead: "Start with options that don't need a phone number. Bookings and on-site waiting may confirm and call you in different ways.",
      choices: [
        {
          label: "When an online booking won't go through",
          steps: [
            { t: "Find the step that's blocked", d: "Check which step needs what: a Korean number, SMS, Korean identity verification or payment." },
            {
              t: "Look for a booking route for foreigners",
              d: "Check the place's official info for a booking page for foreigners or an email contact. For restaurants, you can also check whether they're on CATCHTABLE GLOBAL."
            },
            {
              t: "Check the confirmation and cancellation terms",
              d: "Check the date, time, party size and any prepayment, and save the confirmation screen. Check the cancellation deadline and refund terms too."
            }
          ],
          fallback: "If there's no route for foreigners, ask the place directly whether you can book or register on site. Before using someone else's phone number, make sure you'll still get the call."
        },
        {
          label: "When the waiting kiosk asks for a Korean number",
          steps: [
            { t: "Tell the staff you don't have a number", d: "Ask whether you can register with your name instead, or whether staff can help." },
            {
              t: "Check how you'll be called",
              d: "Check which actually works for you: called in person, app notification or text. Save your queue number and party size."
            },
            {
              t: "Check where to wait and what happens if you miss your turn",
              d: "Ask the staff where to wait and what happens if you miss the call."
            }
          ],
          fallback: "If there's no alternative, ask about walk-in times or another branch. If you leave, check how to cancel your place in line."
        }
      ],
      phrases: [
        [
          "한국 전화번호가 없어요. 이름으로 대기할 수 있나요?",
          "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. i-reu-meu-ro dae-gi-hal su in-na-yo?",
          "I don't have a Korean phone number. Can I join the waitlist using my name?",
          "Asking staff at the waiting kiosk"
        ],
        ["예약이 확정됐나요?", "ye-ya-gi hwak-jeong-dwaet-na-yo?", "Is my reservation confirmed?", "When you're not sure your request was confirmed"]
      ],
      links: [
        {
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1590988",
          label: "KTO guide to using CATCHTABLE GLOBAL"
        }
      ],
      related: [["#tips-reserve", "How to book"], ["#tips-waiting", "On-site waiting list"], ["#help-connection", "Phone, SMS and verification explained"]],
      playbooks: [
        {
          situation: "I can't book because I don't have a Korean phone number.",
          fast: ["catchtable"],
          checkTitle: "Check first",
          check: ["Can you enter a foreign number?", "Can you book by email?", "Can you register on site?", "Is there a booking page for foreigners?"],
          stepsTitle: "How to use the waiting kiosk",
          steps: [
            "Choose your party size.",
            "Enter a phone number. No Korean number? Ask the staff.",
            "Check your queue number.",
            "Watch for a text or an on-screen call."
          ],
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
      stage: "Meals",
      short: "Diet (vegetarian · halal · allergies)",
      title: "When dietary needs make it hard to find food you can eat",
      lead: "Explain allergies, vegetarianism and religious dietary rules separately. Don't judge ingredients by a dish's name or photo alone.",
      choices: [
        {
          label: "If you have a food allergy",
          steps: [
            {
              t: "Be specific about your allergens",
              d: "Prepare the Korean names and photos or a list of what you must avoid, and show the staff before ordering."
            },
            {
              t: "Check broth, sauce and toppings too",
              d: "Ask whether the ingredient is in the broth, seasoning or garnish, not just the main ingredients."
            },
            {
              t: "Check for cross-contact",
              d: "Ask whether they use the same utensils, fryer or prep area, and whether they can confirm the ingredients exactly."
            }
          ],
          fallback: "If you can't confirm the ingredients or how it's cooked, skip that dish and choose another menu item or place where you can check."
        },
        {
          label: "If you're vegetarian or have religious dietary rules",
          steps: [
            {
              t: "Say exactly what to leave out",
              d: "Be specific about what you don't eat: meat, fish, seafood, eggs, dairy and so on. Check separately whether any certification you need applies."
            },
            {
              t: "Ask about hidden ingredients",
              d: "Even for vegetable dishes, ask whether the broth, sauce or 젓갈 (salted seafood) contains anything you avoid."
            },
            {
              t: "Check which dishes can be changed",
              d: "Ask whether they can cook it without that ingredient, and confirm your order with the staff again."
            }
          ],
          fallback: "If dishes can't be changed, look for restaurants that state the dietary standard you need and check yourself. Vegetarian labels and religious certification are separate things."
        },
        {
          label: "If you need halal food or don't eat pork",
          steps: [
            {
              t: "Find restaurants by keyword",
              d: "Search NAVER Map for keywords like '할랄' (halal), 'Muslim Friendly' and '돼지고기 없는 메뉴' (no-pork menu)."
            },
            {
              t: "Check the certification level",
              d: "The Korea Tourism Organization divides Muslim-friendly restaurants into 4 levels: halal certified, self-certified, Muslim Friendly and Pork Free. It differs by restaurant, so check official info or the restaurant's notice before going."
            },
            {
              t: "Check again before ordering",
              d: "Ask the staff whether any seasoning contains pork or alcohol, and what's in the broth and sauces."
            }
          ],
          fallback: "If it's hard to confirm, refer to the KTO's Muslim-friendly restaurant info or choose a halal-certified restaurant."
        }
      ],
      phrases: [
        [
          "이 재료에 알레르기가 있어요. 들어가는지 확인해 주세요.",
          "i jae-ryo-e al-le-reu-gi-ga i-sseo-yo. deu-reo-ga-neun-ji hwa-gin-hae ju-se-yo.",
          "I'm allergic to this ingredient. Please check whether it is used.",
          "Always show this with the name or photo of your allergen"
        ],
        [
          "고기나 생선이 들어가나요? 육수와 소스도 확인해 주세요.",
          "go-gi-na saeng-seo-ni deu-reo-ga-na-yo? yuk-su-wa so-seu-do hwa-gin-hae ju-se-yo.",
          "Does this contain meat or fish? Please also check the broth and sauce.",
          "To explain more ingredients to leave out before ordering"
        ],
        ["돼지고기 없는 메뉴가 있나요?", "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?", "Do you have a menu without pork?", "When you need halal or no pork"]
      ],
      links: [
        {
          url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=476&vcontsId=140732",
          label: "KTO guide to vegetarian travel and checking ingredients"
        },
        {
          url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do",
          label: "KTO guide to Muslim-friendly restaurants and prayer rooms"
        }
      ],
      related: [
        ["#tips-food-diet", "Vegetarian · halal · allergy tips"],
        ["#tips-food", "How to find restaurants"],
        ["#during-korean-food", "Korean for ordering"],
        ["#during-prayer", "Find a place to pray"]
      ],
      playbooks: [
        {
          situation: "My diet makes it hard to find places to eat.",
          intro: "Vegetarian? Start with HappyCow. Halal? Start with the Korea Tourism Organization list. For allergies, showing the staff in Korean before you order is the surest way.",
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
          more: [["#tips-food-diet", "More diet tips"]]
        }
      ]
    },
    {
      id: "lost",
      icon: "search",
      stage: "During your trip · after returning home",
      short: "Lost phone · wallet",
      title: "When you've lost something and don't know who to ask",
      lead: "Start by noting where you last saw it and what transport you used. Who to contact depends on where you lost it.",
      choices: [
        {
          label: "Subway",
          steps: [
            { t: "Tell station staff right away", d: "Say which station you got off at, the time and which car you were in. The sooner, the better." },
            {
              t: "Search Police Civil Service 24 (formerly LOST112)",
              d: "Items found on the subway are kept at each line's lost and found center, then sent to the police."
            },
            { t: "Bring ID to pick it up", d: "Take your passport or other ID to the lost and found center." }
          ],
          fallback: "If it's hard to communicate, use 1330 interpretation."
        },
        {
          label: "Bus",
          steps: [
            { t: "Check the bus number and time", d: "Find the bus and time in your transport card history or map app." },
            { t: "Call the 120 Dasan Call Center", d: "For Seoul buses, 120 tells you the bus company and how to ask about lost items." },
            { t: "Search Police Civil Service 24", d: "After a few days, found items may be sent to the police." }
          ],
          fallback: "For buses in other cities, ask the local bus company or police."
        },
        {
          label: "Taxi",
          steps: [
            { t: "Check your receipt or app history", d: "Your card receipt or taxi app shows the car number and time." },
            { t: "Called by app? Contact app support", d: "You can contact the driver or report a lost item in the app." },
            { t: "Otherwise, 120 or Police Civil Service 24", d: "For Seoul taxis, the 120 Dasan Call Center can help." }
          ],
          fallback: "If you don't know the car number, note the time and place as precisely as you can."
        },
        {
          label: "Airport",
          steps: [
            { t: "Work out where it was", d: "Departures, arrivals or on the plane?" },
            { t: "On the plane? Ask the airline", d: "If you left it on board, contact your airline first." },
            { t: "In the airport? Airport lost and found", d: "Ask at the airport information desk or lost and found center." }
          ],
          fallback: "If you're about to fly out, ask for a contact email and how to collect it after you're home."
        },
        {
          label: "Not sure",
          steps: [
            { t: "List where you last saw it", d: "Write down the places you visited and the transport you took, in order." },
            { t: "Go to a nearby police station", d: "Report the loss and also search Police Civil Service 24." },
            { t: "Block your cards and phone", d: "Contact your card company and carrier right away." }
          ],
          fallback: "Not sure who to ask? Call 1330."
        },
        {
          label: "Passport",
          steps: [
            { t: "Report it to the police", d: "Report the loss at a nearby police station and get a confirmation." },
            { t: "Contact your embassy or consulate", d: "Check which documents you need." },
            {
              t: "Check travel certificates or emergency passports",
              d: "Check how to get a travel certificate or emergency passport in time for your flight."
            }
          ],
          fallback: "Also tell your airline and check which documents you need to board."
        }
      ],
      phrases: [
        [
          "물건을 잃어버렸어요. 분실물은 어디에 문의하나요?",
          "mul-geo-neul i-reo-beo-ryeo-sseo-yo. bun-sil-mu-reun eo-di-e mu-ni-ha-na-yo?",
          "I lost something. Where can I ask about lost property?",
          "Ask with the place, time and a photo of the item"
        ],
        [
          "곧 출국해요. 해외로 배송받을 수 있나요?",
          "got chul-gu-kae-yo. hae-oe-ro bae-song-ba-deul su in-na-yo?",
          "I'm leaving Korea soon. Can the item be shipped overseas?",
          "Ask after you've been told the item was found"
        ]
      ],
      links: [
        {
          url: "https://minwon24.police.go.kr/cvlcpt/cvlcptGdInfo.do?cvlcptId=MW-201",
          label: "Police Civil Service 24 · found items and loss reports"
        },
        { url: "https://www.airport.kr/ap_en/1549/subview.do", label: "Incheon Airport: who to contact by place of loss" }
      ],
      related: [["#during-sos", "SOS contacts"], ["#help-departure", "Getting ready to go home"]],
      playbooks: [
        {
          situation: "I lost something.",
          intro: "First, pick where you lost it below. Passports are handled separately from other lost items.",
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
      stage: "Day before departure · airport",
      short: "Departure · luggage · refunds",
      title: "When you're confused about preparing to go home and what to do at the airport",
      lead: "Check your flight, terminal, luggage and tax refund items from the day before. The process depends on whether refund items go in your carry-on or checked bag.",
      choices: [
        {
          label: "Preparing the day before",
          steps: [
            {
              t: "Check your flight and how to get to the airport",
              d: "Check your departure airport, terminal and flight time, and plan your ride to match the airline's recommended arrival time."
            },
            {
              t: "Sort out luggage and rentals",
              d: "Check your airline's weight, piece and carry-on rules. Check the latest rules for power banks and similar items. Save where and when to return rentals too."
            },
            {
              t: "Sort out refund papers and loose ends",
              d: "Get your tax refund receipts, forms and purchases ready. Check out of your accommodation, pick up stored luggage, and see whether you can deal with your transport card balance."
            }
          ],
          fallback: "If documents or return methods are unclear, ask the store, refund company or rental company before you leave. Save a list of things to do at the airport."
        },
        {
          label: "Getting a tax refund at the airport",
          steps: [
            {
              t: "Prepare documents and items",
              d: "Keep your passport, refund forms, receipts and purchases easy to reach, and check the official process at your airport."
            },
            {
              t: "Check the order depending on checked luggage",
              d: "If refund items are in your checked bag, ask airline or refund staff before checking it in. Check it in as instructed after the item check is done."
            },
            {
              t: "Check the refund and your boarding time",
              d: "Check how the refund company pays out and the processing status, and keep the record. Leave time for security, immigration and walking to your gate."
            }
          ],
          fallback: "If a document is missing or a machine fails, ask at the refund company's counter and note the status and how to follow up. Whether you're eligible is up to the refund company."
        }
      ],
      phrases: [
        [
          "택스리펀드 물품이 이 가방 안에 있어요. 먼저 무엇을 해야 하나요?",
          "taek-seu-ri-peon-deu mul-pu-mi i ga-bang a-ne i-sseo-yo. meon-jeo mu-eo-seul hae-ya ha-na-yo?",
          "My tax-refund items are in this bag. What should I do first?",
          "Ask before checking in luggage with refund items"
        ]
      ],
      links: [
        { url: "https://www.airport.kr/ap_en/1425/subview.do", label: "Incheon Airport tax refund process" },
        { url: "https://www.airport.kr/ap_en/1499/subview.do", label: "Incheon Airport transport info" }
      ],
      related: [["#before-card", "Transport card balance · refund"], ["#help-lost", "Asking about lost items after you're home"]],
      playbooks: [
        {
          situation: "What should I check before flying home?",
          checkTitle: "Pre-departure checklist",
          check: [
            "Travel time to the airport",
            "Last airport train · airport bus",
            "Tax refund",
            "Baggage rules",
            "Transport card balance",
            "SIM · eSIM end date"
          ],
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
