/* 서울 착륙 — 日本語 · 유학생 팀원 검수 필요
   구조는 ko.js 와 같아요. */
window.SL = window.SL || {};
window.SL.ja = {
  meta: { htmlLang: "ja", title: "ソウル着陸 SEOUL LANDING" },
  ui: {
    skip: "本文へ移動",
    langLabel: "言語を選ぶ",
    nav: { before: "出発前", during: "旅行中", tips: "旅のTIP", where: "旅先" },
    back: "← トップへ",
    backHome: "トップに戻る",
    onPage: "このページ",
    tipsSub: "外国人が見落としがちなこと",
    realSub: "実際に体験しました",
    realBy: "ソウル着陸の外国人メンバーの体験",
    watchSub: "まずは動画で",
    officialSub: "公式情報を確認する",
    caution: "注意",
    short: "ショート",
    video: "動画",
    mapSearch: "NAVER マップ",
    map: "地図",
    copy: "コピー",
    copied: "コピー済み",
    newTab: "新しいタブで開きます",
    nextStep: "NEXT",
    nextStage: "次のステップ",
    journeyLabel: "旅のステップ",
    help: "HELP",
    helpOpen: "困ったときのメニューを開く",
    close: "閉じる",
    show: "大きく表示",
    quickSub: "旅の途中で急いでいるとき、必要なものだけすぐ開けます",
    quick: { card: "交通カード", subway: "地下鉄", bus: "バス", taxi: "タクシー", food: "グルメ", reserve: "予約", popup: "ポップアップ", where: "旅先", sos: "困ったことが起きた (SOS)" },
    emergency: "緊急 · ヘルプ電話 (タップですぐ発信)",
    emgList: [["112", "警察"], ["119", "火事 · 救急"], ["1330", "観光通訳 · 案内"], ["02-120", "ソウル生活相談 (外国語は9番)"]],
    footerTag: "韓国旅行を、準備から帰国までいっしょに。",
    footerNote: "外国人のための韓国旅行プロセスガイド · 2026年11月時点の情報",
    app: { use: "主な用途", lang: "外国語", signup: "会員登録", phone: "韓国の番号", when: "こんなとき", open: "公式サイト" },
    where: {
      listHead: "旅先 9か所",
      listSub: "日程別にまとめました。気になる場所は「比較に追加」で並べて見られます。",
      groups: ["日帰り", "1泊2日", "2泊3日"],
      detail: "詳しく見る",
      add: "比較に追加",
      added: "追加済み",
      remove: "比較から外す",
      cmpHead: "旅先を比較する",
      cmpSub: "2~3か所を選んで、ひとつの表で比べます。",
      cmpHint: "上の旅先カードや Trip Finder の結果で「比較に追加」を2~3か所押すと、ここに比較表が出ます。",
      cmpNow: "追加した場所：",
      cmpFull: "比較は最大3か所までです。1か所外してから追加してください。",
      cmpClear: "比較をリセット",
      rows: { duration: "旅行期間", time: "所要時間", transport: "交通手段", theme: "テーマ", sights: "代表的な観光地", experience: "体験", access: "交通の便", style: "旅のスタイル" },
      hour: "時間",
      min: "分"
    },
    place: {
      back: "← 旅先リスト",
      basicSub: "出発前の基本情報",
      period: "おすすめ日程",
      time: "所要時間",
      transport: "交通手段",
      fare: "片道料金",
      difficulty: "現地での移動のしやすさ",
      theme: "テーマ",
      levels: ["かんたん", "ふつう", "むずかしい"],
      arrive: "到着駅",
      beforeGo: "行く前に",
      beforeLinks: [["#before-card", "交通カードを準備"], ["#before-apps", "地図アプリを入れる"], ["#during-subway", "地下鉄の乗り方"]],
      whySub: "なぜ外国人におすすめ？",
      courseSub: "この順番でまわります",
      mustSub: "「地図」ですぐ道案内、「コピー」で韓国語の名前を保存",
      foodSub: "この地域の名物",
      findFoodSub: "地元のお店は自分で探す",
      findFoodSteps: ["NAVER マップで「地域 + 料理」を検索", "レビュー数 · 最近の写真を確認", "営業時間 · 定休日を確認して出発"],
      findFoodBtn: "NAVER マップで「{q}」を検索",
      moreFood: "お店の探し方を詳しく見る",
      videoSub: "旅行 Vlog",
      vlogSearch: "YouTube で旅行 Vlog を探す",
      vlogPending: "おすすめの Vlog を選んでいるところです。まずは YouTube の検索結果で雰囲気をのぞいてみてください。",
      korail: "Korail 乗車券予約",
      finder: "ほかの旅先をおすすめしてもらう",
      more: "ほかの旅先"
    }
  },
  home: {
    eyebrow: "KOREA TRAVEL GUIDE",
    title: "韓国旅行中に\n困っていますか？",
    sub: "いま必要な情報を、すぐに探しましょう。\n困りごとを書くと、すぐ使えるサービス・検索ワード・韓国語をお伝えします。",
    ctaStart: "旅の準備をはじめる",
    ctaFinder: "わたしに合う旅先を探す",
    guideHead: "いま、旅のどのステップですか？",
    guideSub: "情報の種類ではなく、旅の順番でまとめました",
    cards: {
      before: { title: "出発前", desc: "日程づくり、必須アプリ、交通カード。出かける前の準備。" },
      during: { title: "旅行中のヘルプ", desc: "地下鉄 · バス · タクシーの乗り方、困ったときの SOS と現地の韓国語。" },
      tips: { title: "旅のTIP", desc: "グルメ · カフェ · ポップアップ · 公演の探し方と、予約 · ウェイティング。" },
      where: { title: "旅先", desc: "4つの質問で TOP 3 をおすすめ。比べてからコースまで確認。" }
    },
    journey: {
      eyebrow: "FROM ARRIVAL TO DEPARTURE",
      head: "韓国旅行のはじめから終わりまで、ソウル着陸といっしょに",
      sub: "入国から出国まで。いまの旅のステップをタップすると、必要なガイドへすぐ移動できます。",
      steps: [
        {
          en: "ARRIVAL",
          t: "韓国に着いたら",
          d: "SIM・ネット・交通カードから",
          href: "#help-arrival",
          icon: "plane",
          links: [["#help-arrival", "空港から市内へ"], ["#help-connection", "SIM/eSIM の確認"], ["#before-card", "交通カードの準備"], ["#help-payment", "現金が必要なとき"]]
        },
        {
          en: "PREPARE",
          t: "出かける前に",
          d: "アプリ・チャージ・休業日の確認",
          href: "#before",
          icon: "card",
          links: [
            ["#before-apps", "NAVER マップを入れる"],
            ["#before-apps", "Papago を入れる"],
            ["#before-card", "交通カードのチャージ"],
            ["#before-plan", "今日の予定・休業日"],
            ["#before-plan", "最終入場時間"]
          ]
        },
        {
          en: "MOVE",
          t: "実際に移動する",
          d: "地下鉄・バス・タクシー・列車",
          href: "#during",
          icon: "subway",
          links: [["#during-subway", "地下鉄"], ["#during-bus", "バス"], ["#during-taxi", "タクシー"], ["#before-plan-holiday", "列車の予約"]]
        },
        {
          en: "DISCOVER",
          t: "何をするか探す",
          d: "グルメ・ポップアップ・展示・K-POP",
          href: "#tips",
          icon: "compass",
          links: [["#tips-food", "グルメ"], ["#tips-cafe", "カフェ"], ["#tips-popup", "ポップアップ"], ["#tips-culture", "展示・公演"], ["#tips-kpop", "K-POP イベント"]]
        },
        {
          en: "EXPERIENCE",
          t: "実際に参加する",
          d: "予約・ウェイティング・入場条件",
          href: "#tips-culture",
          icon: "ticket",
          links: [["#tips-reserve", "予約"], ["#tips-waiting", "ウェイティング"], ["#tips-popup", "入場条件"], ["#tips-kpop", "身分証"], ["#help-connection", "電話番号認証"]]
        },
        {
          en: "HELP",
          t: "困ったことが起きたら",
          d: "病院・紛失・荷物・通訳",
          href: "#home-help",
          icon: "lifebuoy",
          links: [
            ["#during-health", "病院・薬局"],
            ["#during-sos", "119"],
            ["#help-lost", "落とし物・パスポート"],
            ["#help-stay", "荷物預かり"],
            ["#during-korean", "旅の韓国語"],
            ["#during-sos-1330", "1330 通訳"]
          ]
        },
        {
          en: "DEPARTURE",
          t: "出国の前に",
          d: "空港・免税・残高の整理",
          href: "#help-departure",
          icon: "takeoff",
          links: [
            ["#help-departure", "空港までの時間"],
            ["#help-departure", "空港鉄道・バスの最終便"],
            ["#help-departure", "Tax Refund・手荷物"],
            ["#before-card", "交通カードの残高"],
            ["#help-connection", "SIM/eSIM の終了"]
          ]
        }
      ]
    },
    flowHead: "ソウル着陸、この順番で使う",
    flowSub: "韓国に着いた日から帰る日まで、実際の旅の順番で",
    flow: [
      ["before", "韓国に入国", "#help-entry", "入国書類 · 空港到着"],
      ["before", "SIM · ネットの準備", "#help-connection", "データとSMS認証は別々に確認"],
      ["before", "交通カードを買う", "#before-card", "コンビニで T-money · EZL"],
      ["during", "地下鉄に乗る", "#during-subway", "タッチ、乗り換え、出口番号"],
      ["where", "旅先へ移動", "#where", "Trip Finder で選んでコースどおりに"],
      ["tips", "グルメを検索", "#tips-food", "「地域 + 料理」で検索"],
      ["tips", "ベジタリアンならヴィーガン店の検索TIP", "#tips-food-diet", "ベジタリアン · ハラール · アレルギー TIP"],
      ["tips", "ポップアップを見つける", "#tips-popup", "まず予約が必要か確認"],
      ["tips", "予約 · ウェイティング", "#tips-reserve", "韓国の番号がないときの方法まで"],
      ["during", "お祈りの場所を探す", "#during-prayer", "Prayer Room の探し方"],
      ["during", "体調が悪いとき", "#during-health", "薬局 · 病院 · 119 から選ぶ"],
      ["where", "出国の準備", "#help-departure", "荷物 · Tax Refund · 空港への移動"]
    ],
    flowSum: ["入国", "準備", "移動", "探す", "体験", "トラブル解決", "出国"]
  },
  /* ---------------- 01 BEFORE TRIP ---------------- */
  before: {
    title: "出発前に、\nこれだけ準備しましょう。",
    intro: "日程は STEP どおりに組んで、必要なアプリを入れて、交通カードを買えば準備完了。韓国に着いた初日からすぐに動けます。",
    cards: [
      {
        id: "before-plan",
        num: "1-1",
        short: "日程づくり",
        title: "旅行日程の組み方",
        lead: "行きたい場所を並べる前に、日程とテーマを先に決めると、ずっと組みやすくなります。",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "旅行期間を決める", d: "日帰り、1泊2日、2泊3日のどれかを先に選びます。期間が決まれば、行ける距離も決まります。" },
              { t: "旅のテーマを選ぶ", d: "自然 · 歴史 · 体験 · カフェのように、今回いちばんしたいことをひとつ決めます。" },
              {
                t: "旅先の地域を選ぶ",
                d: "期間とテーマに合う地域を選びます。迷ったら Trip Finder が TOP 3 を選んでくれます。",
                go: ["#where-finder", "Trip Finder を開く"]
              },
              { t: "移動時間を確認する", d: "NAVER マップで出発地 → 目的地の公共交通の時間を確認します。帰りの時間も計算しておきましょう。" },
              { t: "近い場所どうしをまとめる", d: "観光地を地域ごとにまとめて、1日のルートをつくります。同じ日に逆方向を行ったり来たりしないように。" },
              { t: "営業時間 · 定休日を確認する", d: "博物館は月曜休みのところが多いです。飲食店は午後の休憩時間 (ブレイクタイム) も確認しましょう。" },
              { t: "雨の日のプランを用意する", d: "博物館 · 市場 · カフェなど、屋内で楽しめる場所を1~2か所決めておきましょう。" }
            ]
          },
          {
            type: "checklist",
            title: "旅行の前日に必ず確認",
            items: ["定期休館 (月曜日など)", "ブレイクタイム", "最終入場時間", "事前予約が必要か", "終電の時間", "雨・猛暑・寒波"]
          },
          {
            type: "keyset",
            title: "天気で予定がくずれたら",
            items: [["雨の日", "서울 비 오는 날 갈 만한 곳", "서울 실내 데이트", "서울 실내 전시"], ["猛暑", "서울 실내 관광지", "서울 박물관", "서울 쇼핑몰"], ["寒波", "서울 실내 관광지", "서울 실내 체험", "서울 박물관"]],
            caption: "寒波のときは屋外の予定を減らし、博物館・展示・ショッピングモール中心に切り替えましょう。"
          },
          {
            type: "playbook",
            id: "before-plan-holiday",
            situation: "旧正月・秋夕などの大型連休に旅行します。",
            fast: ["korail"],
            search: {
              naver: ["설 연휴 영업하는 식당", "추석 연휴 서울 가볼 만한 곳", "명절 연휴 문 여는 곳"],
              google: ["Korea public holidays", "Chuseok Seollal closures Seoul"]
            },
            check: ["一部の飲食店・お店がお休み", "列車のきっぷが早く売り切れる", "長距離の交通が混雑する"],
            note: "連休の日付は毎年変わります。旅行の日程と重なるか先に確認しましょう。"
          }
        ],
        tips: ["移動の多い日と休む日を交互にすると、疲れにくくなります。", "KTX · ITX · ムグンファ号などの列車は週末に売り切れやすいです。日にちが決まったらすぐ予約を。", "日程表に駅名を韓国語でも書いておくと、道を探すときに便利です。"],
        links: [
          { href: "visitkorea", label: "VISITKOREA (韓国観光公社)" },
          { href: "korail", label: "Korail 乗車券予約" }
        ],
        next: ["#before-apps", "出発前の必須アプリを入れる"],
        top: [
          {
            type: "routes",
            title: "ソウル1日のルート例",
            lead: "日数や地域の選び方より大事なのは、1日の動き方です。近い場所どうしをまとめて回りましょう。 1日でソウルを横断しないこと。",
            bad: {
              title: "おすすめしない・1日でソウル一周",
              stops: ["景福宮", "聖水", "弘大", "蚕室"],
              note: "移動だけで何時間もかかってしまいます。同じエリアどうしでまとめましょう。"
            },
            good: [
              {
                title: "伝統のソウル",
                stops: ["景福宮", "北村", "仁寺洞", "益善洞"]
              },
              {
                title: "聖水エリア",
                stops: ["聖水", "ソウルの森", "建大"]
              },
              {
                title: "北西エリア",
                stops: ["弘大", "延南洞", "望遠", "漢江"]
              }
            ]
          }
        ]
      },
      {
        id: "before-apps",
        num: "1-2",
        short: "必須アプリ",
        title: "出発前の必須アプリ",
        lead: "韓国では Google マップより NAVER マップ · KakaoMap のほうが正確です。出発前に入れて、言語設定まで済ませておきましょう。",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "NAVER Map",
                sub: "NAVER マップ",
                use: "公共交通の道案内、乗り換え、バスの到着情報、徒歩ルート、飲食店 · カフェ検索",
                lang: "韓国語 · English · 中文 · 日本語",
                signup: "道案内 · 検索は不要 (保存 · レビューは NAVER アカウント)",
                phone: "不要",
                when: "目的地への行き方、近くのお店探し",
                tip: "場所は韓国語の名前で検索するといちばん正確です。ソウル着陸の「コピー」ボタンを使ってください。",
                href: "naver"
              },
              {
                name: "KakaoMap",
                sub: "カカオマップ",
                use: "バス · 地下鉄 · 徒歩の道案内、バスのリアルタイム位置、地下鉄の到着情報",
                lang: "韓国語中心",
                signup: "基本機能は不要",
                phone: "不要",
                when: "バスがいまどこを走っているか見たいとき",
                tip: "NAVER マップといっしょに入れて、ルートを比べてみましょう。",
                href: "kakao"
              },
              {
                name: "Papago",
                sub: "パパゴ",
                use: "文字 · 音声 · 写真 (メニュー) · 会話の翻訳",
                lang: "韓国語 ↔ English · 中文 · 日本語 など",
                signup: "不要",
                phone: "不要",
                when: "メニューを読む、店員さんに質問する",
                tip: "メニューはカメラで撮るとすぐに翻訳されます。",
                href: "papago"
              },
              {
                name: "Korail",
                sub: "コレイル · Let's Korail",
                use: "KTX · ITX · ムグンファ号などの乗車券予約、時刻表の確認",
                lang: "外国語の予約ページ：English · 中文 · 日本語",
                signup: "会員または非会員で予約",
                phone: "韓国のアプリ (コレイルトーク) は本人認証が必要な場合があります",
                when: "近郊旅行の乗車券を買うとき",
                tip: "外国人は Let's Korail の外国語ページが便利です。京義・中央線、京江線、1号線などの首都圏電車は予約なしで交通カードで乗れます。",
                href: "korail"
              },
              {
                name: "VISITKOREA",
                sub: "韓国観光公社",
                use: "公式観光情報、祭り · イベント日程、1330 観光通訳チャット",
                lang: "English · 中文 · 日本語 など",
                signup: "不要",
                phone: "不要",
                when: "公式情報をもう一度確認したいとき、通訳が必要なとき",
                tip: "1330 は電話だけでなく、アプリ · ウェブのチャットでも質問できます。",
                href: "visitkorea"
              }
            ],
            caption: "アプリのルールは変わることがあります。2026年11月時点でまとめました。"
          }
        ],
        tips: ["データ通信は必須です。空港で eSIM · SIM · ポケット Wi-Fi のどれかを用意しましょう。", "タクシーアプリ (k.ride · Uber · Kakao T) は「旅行中 → タクシー」にまとめています。"],
        next: ["#before-card", "交通カードを買う"]
      },
      {
        id: "before-card",
        num: "1-3",
        short: "交通カード",
        title: "交通カードガイド",
        lead: "バスと地下鉄は交通カード1枚で乗れます。買う、チャージする、使う、残ったお金の処理まで順番に紹介します。",
        blocks: [
          {
            type: "defs",
            title: "どのカードを買う？",
            items: [
              ["T-money (ティーマネー)", "いちばんよく使われるプリペイド交通カードです。全国のバス · 地下鉄と一部のタクシーで使えます。", "assets/cards/tmoney.jpg"],
              ["EZL (旧 Cashbee/キャッシュビー)", "T-money と同じように使えるプリペイド交通カードです。以前の名前が Cashbee なので、旧名で書かれた案内もあります。", "assets/cards/ezl.jpg"]
            ]
          },
          { type: "text", text: "2つのカードの使い方は同じです。コンビニで見つけたほうを買えば大丈夫。" },
          {
            type: "steps",
            title: "購入 → チャージ → 使う → 残高確認 → 旅の終わり",
            items: [
              {
                t: "購入",
                d: "CU · GS25 · セブン-イレブンなどのコンビニや、地下鉄駅の券売機 · チャージ所で買えます。カード代はデザインによって違います。",
                list: ["コンビニ：レジで「티머니 카드 주세요 (T-money カードください)」", "地下鉄駅：交通カード券売機 · チャージ所"]
              },
              {
                t: "チャージ",
                d: "買ったばかりのカードは残高0ウォンです。必ずチャージしましょう。チャージはほとんど現金です。",
                list: ["コンビニのレジ：カードと現金を出して「충전해 주세요 (チャージしてください)」", "地下鉄駅のチャージ機：カードを置いて金額を選ぶ → 現金を入れる", "アプリ：一部の Android スマホはモバイル T-money · EZL アプリでチャージできます"]
              },
              {
                t: "使う",
                d: "乗るときにタッチ、降りるときもタッチ。降りてから30分以内に乗り換えると乗り換え割引になります。",
                go: ["#during-subway", "地下鉄の乗り方を見る"]
              },
              {
                t: "残高確認",
                list: ["バス · 地下鉄の端末にタッチすると画面に残高が出ます", "コンビニのレジで聞く", "地下鉄駅のチャージ機にカードを置く", "T-money · EZL アプリ (スマホの NFC)"]
              },
              {
                t: "旅が終わったら、残ったお金は？",
                list: ["払い戻し：コンビニ · 指定の場所で残高を返金してもらえます (T-money は手数料500ウォン、場所によって払い戻しできる金額が違います)", "保管：次の韓国旅行でそのまま使えます", "譲る：韓国に来る友だちにあげれば、すぐに使えます"]
              }
            ],
            caption: "カード代は戻らず、チャージした残高だけが払い戻されます。"
          },
          {
            type: "tipbox",
            icon: "card",
            situation: "海外発行のカードでチャージできないときは？",
            text: "交通カードのチャージは現金のみの場所が多く、海外発行のカードではチャージできないことがあります。チャージ前に使える支払い方法を確認し、必要ならウォンの現金を用意しましょう。",
            go: ["#help-payment", "支払い · チャージのトラブル解決"]
          }
        ],
        tips: [
          "乗る前に残高を確認しましょう。バスを降りるときに残高が足りないと困ります。",
          "財布に交通カードが2枚あると読み取りエラーになります。1枚だけタッチしましょう。",
          "降りるときにタッチしないと、次の乗り換え割引が受けられません。",
          "旅行の日数に合わせて少しずつチャージすると、残るお金が少なくてすみます。"
        ],
        links: [
          { href: "tmoney", label: "T-money (티머니)" },
          { href: "ezl", label: "EZL (이즐)" }
        ],
        next: ["#during-subway", "旅行中：地下鉄に乗る"]
      }
    ]
  },
  /* ---------------- 02 DURING TRIP ---------------- */
  during: {
    title: "いま移動中なら、\nスマホですぐ確認。",
    intro: "地下鉄 · バス · タクシーの乗り方と迷いやすいポイント、困ったときの助けの求め方、現地で使える韓国語までまとめました。",
    cards: [
      {
        id: "during-subway",
        num: "2-1",
        short: "地下鉄",
        title: "地下鉄の乗り方",
        lead: "入るときに1回、出るときに1回。カードは2回タッチします。",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "地下鉄の駅を探す", d: "NAVER マップで目的地を検索して「公共交通」を押すと、乗る駅と路線が出ます。" },
              { t: "交通カードをタッチ", d: "改札の端末にカードをタッチして入ります。" },
              { t: "路線と方向を確認", d: "路線の色 · 番号をたどり、ホームの表示で「○○ 방면 (方面)」と次の駅名を確認します。" },
              { t: "電車に乗る", d: "降りる人が先に降りてから乗ります。車内の画面と放送で次の駅を確認します。" },
              { t: "乗り換え", d: "「갈아타는 곳 (Transfer)」の表示と、乗り換える路線の色をたどります。" },
              { t: "出口番号を確認", d: "地図アプリで目的地にいちばん近い出口番号を確認して、駅の出口案内板に従います。" },
              { t: "出るときにもう一度タッチ", d: "改札でもう一度タッチすると運賃が精算されます。" }
            ]
          },
          {
            type: "faq",
            title: "迷いやすいポイント",
            items: [
              ["Q. 乗り換えのときもカードをタッチしますか？", "改札の外に出ずに中で乗り換えるなら、タッチしなくて大丈夫です。ただし運営会社が違う路線どうしの乗り換えでは、乗り換え通路に端末がある場合があります。端末があればタッチしましょう。"],
              ["Q. どちら方面の電車に乗ればいいですか？", "ホームの表示に「○○ 방면」と次の駅名が書いてあります。地図アプリのルートの次の駅と同じか確認してから乗りましょう。"],
              ["Q. 目的地ではどの出口から出ればいいですか？", "地図アプリのルート画面に「○번 출구 (○番出口)」が出ます。大きな駅は出口が10以上あり、反対側に出るとかなり遠回りになります。出口案内板には周辺の建物名も書いてあります。"],
              ["Q. 改札が開かず、警告音が鳴りました。", "残高不足か、カードがうまく読み取れなかったのかもしれません。駅のチャージ機でチャージするか、駅の顧客安全室 (고객안전실) に聞いてみましょう。"]
            ]
          },
          {
            type: "tipbox",
            icon: "subway",
            situation: "出口が10以上ある大きな駅で降りるときは？",
            text: "韓国の地下鉄駅は出口が多いことがあります。目的地を検索するときに一番近い出口番号もいっしょに確認し、駅の中では出口番号の案内板に沿って進みましょう。",
            phrases: [["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "何番出口ですか？"]],
            go: ["#during-korean-move", "道をたずねるときの韓国語"]
          },
          {
            type: "playbook",
            id: "during-subway-last",
            situation: "終電が心配です。もう逃してしまったら？",
            fast: ["navermap_route"],
            stepsTitle: "終電を逃してしまったら",
            steps: ["NAVER マップで深夜バス (N バス) を検索しましょう。", "タクシーアプリで料金の目安を確認しましょう。", "宿までいちばん安全な方法を選びましょう。"],
            search: {
              naver: ["홍대입구 강남 막차", "강남역 서울역 막차", "서울 심야버스"],
              google: ["Seoul last train time", "Seoul night bus N bus"]
            },
            say: [["막차가 몇 시예요?", "mak-cha-ga myeot si-ye-yo?", "終電は何時ですか？"], ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "この住所まで行ってください。"]]
          }
        ],
        tips: ["平日の朝8~9時、夕方6~7時はとても混みます。大きな荷物があるならこの時間は避けましょう。", "優先席 · 妊婦さん配慮席は空けておくのがマナーです。", "終電はだいたい深夜0時ごろです。遅い時間は地図アプリで終電の時間を確認しましょう。"],
        watch: [
          { ref: "V05", title: "動画で学ぶ韓国の公共交通 (韓国語)", summary: "バスと地下鉄に実際に乗る様子で、交通カードの使い方を最初から最後まで見せてくれます。" }
        ],
        links: [
          { href: "seoulmetro", label: "ソウル交通公社 (서울교통공사)" }
        ],
        next: ["#during-bus", "バスに乗る"]
      },
      {
        id: "during-bus",
        num: "2-2",
        short: "バス",
        title: "バスの乗り方",
        lead: "前のドアから乗って、後ろのドアから降ります。降りるときもカードをタッチするのがポイントです。",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "NAVER マップでバスの番号を確認", d: "ルート画面で乗るバスの番号と停留所名を確認します。" },
              { t: "停留所を確認", d: "道の両側に同じ名前の停留所があります。案内板の「次の停留所」で方向を確認しましょう。" },
              { t: "前のドアから乗る", d: "バスが来たら番号をもう一度確認して、前のドアから乗ります。" },
              { t: "交通カードをタッチ", d: "運転手さんの横の端末にカードをタッチします。" },
              { t: "現在地を確認", d: "車内の画面 · 放送や地図アプリで、いまどこにいるか確認します。" },
              { t: "目的地の前で降車ボタンを押す", d: "降りる停留所のひとつ前を過ぎたら、赤いボタンを押します。" },
              { t: "降りる前にカードをタッチ", d: "後ろのドア近くの端末にタッチします。" },
              { t: "後ろのドアから降りる", d: "バスが完全に止まってから立ち上がって降ります。" }
            ]
          },
          {
            type: "warn",
            title: "外国人がよくする失敗",
            items: ["降りるときもカードをタッチ — しないと乗り換え割引が受けられません", "目的地の前で降車ボタンを押す — 押さないとそのまま通過します", "同じ番号でも方向を確認", "停留所の位置を確認 — 道の反対側かもしれません"]
          },
          {
            type: "tipbox",
            icon: "bus",
            situation: "降りるバス停を通り過ぎないか心配なときは？",
            text: "バスでは降りる前に降車ボタンを押す必要があります。目的地のひとつ手前のバス停を過ぎたらボタンを押し、降りるときも交通カードをタッチしましょう。"
          }
        ],
        tips: ["現金を受け付けないバスが増えています。交通カードを必ず持っていきましょう。", "緑色の小さなマウルバスは、町の中を短くまわります。城北洞のような坂の多い場所で便利です。"],
        real: ["韓国に来たばかりのころ、バスを降りるときもカードをタッチしなければいけないことを知りませんでした。"],
        watch: [
          { query: "韓国 バス 乗り方", title: "韓国のバスの乗り方の動画を探す", summary: "乗り降りの様子を動画で先に見ておくと、実際に乗るときに緊張しにくくなります。" }
        ],
        links: [
          { href: "topis", label: "ソウル市交通情報 TOPIS" }
        ],
        next: ["#during-taxi", "タクシーに乗る"]
      },
      {
        id: "during-taxi",
        num: "2-3",
        short: "タクシー",
        title: "タクシーの乗り方",
        lead: "荷物が多いときや夜遅いときはタクシーが便利です。アプリで呼べば、行き先を口で説明しなくて大丈夫。",
        blocks: [
          {
            type: "apps",
            apps: [
              {
                name: "Kakao T",
                sub: "カカオT",
                use: "韓国でいちばん使われているタクシー配車アプリ",
                lang: "韓国語中心",
                signup: "カカオアカウントが必要",
                phone: "アカウント認証で必要な場合があります",
                when: "カカオアカウントがある留学生",
                tip: "海外カードが登録できないときは「運転手に直接支払う」を選んで、降りるときにカードで払いましょう。"
              },
              {
                name: "Uber Taxi",
                sub: "ウーバー",
                use: "Uber アプリで韓国のタクシーを呼ぶ",
                lang: "多言語",
                signup: "いつもの Uber アカウントでOK",
                phone: "不要",
                when: "ふだんから Uber を使っている旅行者",
                tip: "韓国では Uber で呼んでも、免許のあるタクシーが来ます。",
                href: "uber"
              },
              {
                name: "k.ride",
                sub: "ケーライド",
                use: "カカオモビリティの外国人専用タクシーアプリ",
                lang: "English · 中文 · 日本語 (運転手さんとのチャットは自動翻訳)",
                signup: "電話番号 + メール · Google · Apple",
                phone: "不要 (海外の番号でOK)",
                when: "韓国の番号がない短期旅行者",
                tip: "呼べるタクシーの種類が決まっているので、一般のタクシーより料金が高くなることがあります。"
              }
            ]
          },
          {
            type: "steps",
            title: "使い方",
            items: [
              { t: "出発地を入力", d: "いまの位置が合っているか地図で確認します。" },
              { t: "目的地を入力", d: "韓国語の名前や住所で検索するといちばん正確です。" },
              { t: "予想料金を確認" },
              { t: "タクシーを呼ぶ" },
              { t: "車両番号を確認", d: "アプリに出た番号と同じ車か確認してから乗ります。" },
              { t: "乗車", d: "後部座席でもシートベルトを締めましょう。" },
              { t: "支払い", d: "アプリの自動決済、または降りるときにカード · 交通カードで支払います。" }
            ]
          },
          {
            type: "tipbox",
            icon: "taxi",
            situation: "運転手さんと言葉が通じないときは？",
            text: "運転手さんとのやりとりが難しいことがあるので、目的地の韓国語の住所を前もって用意しておきましょう。画面を見せれば、口で説明しなくても大丈夫です。",
            phrases: [["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "この住所まで行ってください。"]]
          }
        ],
        tips: [
          "韓国語の住所を準備しておきましょう。旅先ページの「コピー」ボタンで韓国語の名前をコピーしておくと便利です。",
          "乗るときに、車両番号がアプリと同じか必ず確認しましょう。",
          "アプリで支払い済みなら、降りるときにカードでまた払わないよう注意 (二重決済)。",
          "予想料金を先に確認して、夜10時以降は深夜割増がつくこともあると覚えておきましょう。"
        ],
        links: [
          { href: "uber", label: "Uber" }
        ],
        next: ["#during-sos", "困ったときは"]
      },
      {
        id: "during-sos",
        num: "2-4",
        short: "SOS",
        title: "SOS · 助けが必要なとき",
        lead: "あわてずに、状況に合った番号から押しましょう。番号をタップするとすぐに電話がかかります。",
        blocks: [
          {
            type: "sos",
            items: [
              { num: "119", title: "火事 · 救急 (緊急)", desc: "けがや病気、事故が起きたとき", urgent: true },
              { num: "112", title: "警察", desc: "犯罪 · 危険な状況、紛失の届け出", urgent: true },
              { num: "1330", title: "観光通訳 · 案内", desc: "English · 中文 · 日本語。道案内、通訳、観光に関する苦情相談。受付時間は公式案内で確認。" },
              { num: "02-120", tel: "02120", title: "ソウル茶山コールセンター", desc: "ソウルの生活 · 交通の相談。外国語は9番 (平日9~18時)" }
            ],
            caption: "海外の番号から1330にかけるときは +82-2-1330。1330 は VISITKOREA のアプリ · ウェブのチャットでも使えます。"
          },
          {
            type: "playbook",
            id: "during-sos-1330",
            situation: "店員さんと言葉が通じない、どこに聞けばいいか分からない。",
            fast: ["k1330", "papago"],
            checkTitle: "こんなときは 1330 に連絡しましょう",
            check: ["店員さんと話が通じないとき", "観光情報を知りたいとき", "旅行中に困ったことが起きたとき", "どこに問い合わせればいいか分からないとき"],
            say: [["통역 서비스예요. 잠깐 통화해 주시겠어요?", "tong-yeok seo-bi-seu-ye-yo. jam-kkan tong-hwa-hae ju-si-ge-sseo-yo?", "通訳サービスです。少し電話で話していただけますか？"]],
            fallback: false
          },
          {
            type: "cases",
            title: "状況別の対処法",
            items: [
              {
                icon: "taxi",
                title: "タクシーでトラブルがあった",
                steps: ["領収書やアプリの履歴で車両番号と時間を確認します", "アプリで呼んだなら、まずアプリのカスタマーセンターに問い合わせます", "料金トラブルや嫌なことがあったら、1330 で通訳を通して申告できます"]
              },
              {
                icon: "map",
                title: "道に迷った",
                steps: ["近くの駅や大きな建物の名前を確認します", "NAVER マップで現在地をオンにして、目的地をもう一度検索します", "言葉が通じないときは1330に電話して、電話を店員さん · 運転手さんに渡すと通訳してくれます"]
              },
              {
                icon: "card",
                title: "交通カードが使えない",
                steps: ["警告音が鳴ったら、まず残高を確認します (駅のチャージ機 · コンビニ)", "カードが2枚重なっていないか確認します", "それでもだめなら、駅の顧客安全室やバスの運転手さんにカードを見せましょう"]
              },
              {
                icon: "bag",
                title: "物をなくした",
                steps: [
                  "地下鉄：すぐに駅員さんに伝えましょう。降りた時間と何両目かがわかると見つかりやすいです",
                  "バス · タクシー：ソウルでは120で落とし物の問い合わせ先を確認できます",
                  "警察民願24で拾得物の検索・紛失届の手続き方法を確認します",
                  "受け取りに行くときは、パスポートなどの身分証を持っていきましょう"
                ],
                link: { href: "lost112", label: "警察民願24 遺失物案内" }
              }
            ]
          }
        ],
        tips: [
          "出発前に 112 · 119 · 1330 をスマホの連絡先に登録しておきましょう。",
          "地下鉄の落とし物は路線ごとの遺失物センターで1週間ほど保管され、そのあと警察署に移されます。早く探すほどいいです。",
          "パスポートをなくしたら、112に届け出て、自国の大使館に連絡しましょう。"
        ],
        links: [
          { href: "lost112", label: "警察民願24 遺失物案内" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330" }
        ],
        next: ["#during-health", "体調が悪いとき"]
      },
      {
        id: "during-health",
        num: "2-5",
        short: "体調不良",
        kicker: "HEALTH HELP",
        title: "旅行中に体調をくずしたら？",
        lead: "いまの状況に合ったヘルプを選びましょう。ソウル着陸は症状を診断せず、どこで助けを受けられるかだけを案内します。",
        top: [
          {
            type: "health",
            alert: "大けが · 呼吸が苦しい · 意識がはっきりしないなどの緊急時は、すぐ 119 へ (タップで発信)",
            items: [
              {
                key: "pharmacy",
                icon: "pill",
                label: "PHARMACY",
                title: "薬が必要なとき",
                text: "軽い症状で薬が必要なときは、近くの薬局を探しましょう。",
                steps: ["NAVER マップで「약국 (薬局)」を検索", "いま営業中の薬局を確認", "近くの薬局へ移動"],
                search: ["약국", "야간 약국"],
                phrases: [
                  ["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "風邪薬がほしいです。"],
                  ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "頭痛薬がほしいです。"],
                  ["약국이 어디에 있나요?", "yak-gu-gi eo-di-e in-na-yo?", "薬局はどこですか？"]
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
                title: "病院で診てもらいたいとき",
                text: "病院に行く前に、外国人の診療や外国語での対応ができるか確認しておくと安心です。",
                steps: ["NAVER マップで病院を検索 (例：내과 内科)", "外国人の診療ができるか確認", "英語など外国語での診療ができるか確認"],
                search: ["내과", "병원"],
                note: "電話で聞くのが難しければ、1330 観光通訳案内に通訳をお願いできます。",
                phrases: [
                  ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "病院に行きたいです。"],
                  ["영어 가능한 직원이 있나요?", "yeong-eo ga-neung-han ji-gwo-ni in-na-yo?", "英語が話せるスタッフはいますか？"]
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
                title: "緊急時",
                num: "119",
                call: "Emergency Help",
                sub: "タップするとすぐ電話がつながります",
                text: "大けが、呼吸困難、意識の低下など、すぐに助けが必要な緊急時は 119 に連絡しましょう。",
                note: "119 の救急車は無料で、外国語の通訳にも対応しています。まず今いる場所 (近くの建物 · 駅の名前) を伝えましょう。",
                phrases: [["도와주세요.", "do-wa-ju-se-yo.", "助けてください。"], ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "119 を呼んでください。"]]
              }
            ],
            caption: "薬や診療についての判断は、薬剤師 · 医師に。この案内は、助けを受けられる場所を探すためのものです。"
          }
        ],
        blocks: [
          {
            type: "checklist",
            title: "薬局 · 病院に行く前に持っていくもの",
            items: ["パスポート", "飲んでいる薬の名前", "アレルギーのメモ", "宿の住所 (韓国語)", "旅行保険の情報"]
          }
        ],
        tips: [
          "言葉が通じにくいときは 1330 (観光通訳案内) に電話して通訳をお願いしましょう。",
          "日曜 · 祝日は閉まっている薬局や病院が多いです。E-Gen で開いているところを確認できます。",
          "旅行保険に入っているなら、診療費の領収書と診断書 · 処方箋のコピーを保管しておきましょう。"
        ],
        links: [
          { url: "https://www.e-gen.or.kr", label: "E-Gen 救急医療ポータル (開いている病院 · 薬局)" },
          { url: "https://medical.visitseoul.net", label: "ソウル医療観光 (外国人患者サポート)" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "VISITKOREA · 1330 通訳案内" }
        ],
        next: ["#during-prayer", "お祈りの場所が必要なとき"]
      },
      {
        id: "during-prayer",
        num: "2-6",
        short: "お祈りの場所",
        kicker: "RELIGIOUS TRAVEL TIP",
        title: "旅行中にお祈りの場所が必要なら？",
        lead: "空港や一部の観光施設 · ショッピング施設には Prayer Room (礼拝室) があります。地図アプリで検索するか、公式の観光情報を確認しましょう。",
        top: [
          {
            type: "spots",
            title: "どこで見つかる？",
            items: [
              { icon: "plane", t: "空港の Prayer Room", d: "仁川空港など主要な空港に礼拝室があります。出国エリアの中にあることが多いので、案内デスクで場所を確認しましょう。" },
              { icon: "popup", t: "ショッピングモール · 複合施設", d: "一部の大型モール · 複合施設 · 観光地に礼拝室があります。案内デスクで「기도실 (礼拝室)」の場所をたずねましょう。" },
              { icon: "pray", t: "Mosque · 宗教施設", d: "ソウル中央聖院 (梨泰院) などのモスクや宗教施設。行く前に開いている時間を確認しましょう。" },
              { icon: "map", t: "観光案内サイト", d: "VISITKOREA のムスリムフレンドリー旅行ページの Prayer Room 情報や、1330 観光通訳案内を活用できます。" }
            ]
          }
        ],
        blocks: [
          {
            type: "playbook",
            situation: "旅行中にお祈りの場所が必要です。",
            intro: "空港・ショッピングモール・大きな観光施設なら、案内デスクで下の文章を見せましょう。",
            fast: ["kto_muslim"],
            search: {
              naver: ["명동 기도실", "강남 기도실", "잠실 Prayer Room", "이태원 모스크"],
              google: ["prayer room Myeongdong", "prayer room Seoul", "mosque near me Seoul"]
            },
            say: [
              ["기도할 수 있는 공간이 있나요?", "gi-do-hal su in-neun gong-ga-ni in-na-yo?", "お祈りできるスペースはありますか？"],
              ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "礼拝室はどこですか？"]
            ]
          }
        ],
        tips: ["開いている時間 · 利用ルールは施設ごとに違うので、行く前に案内デスクや公式案内で確認しましょう。", "「기도실 (ギドシル)」とたずねれば、たいてい通じます。", "一部のムスリムフレンドリーなお店は、お祈りのスペースも用意しています。お店の案内で確認しましょう。"],
        links: [
          { url: "https://english.visitkorea.or.kr/svc/thingsToDo/subMuslimFriendly.do", label: "VISITKOREA · Muslim-friendly Travel (Prayer Room)" },
          { url: "https://www.airport.kr", label: "仁川国際空港" },
          { url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140632", label: "1330 観光通訳案内" }
        ],
        next: ["#during-korean", "現地で使える韓国語"]
      },
      {
        id: "during-korean",
        num: "2-7",
        short: "韓国語",
        title: "旅行中に使える韓国語",
        lead: "発音が完璧でなくても大丈夫。話すのが難しければ「大きく表示」で画面を見せましょう。",
        blocks: [
          {
            type: "jump",
            title: "場面別ショートカット",
            items: [
              ["#during-korean-move", "交通", "subway"],
              ["#during-korean-food", "ベジタリアン · 食事", "leaf"],
              ["#during-korean-health", "病院 · 薬局", "hospital"],
              ["#during-korean-sos", "緊急時", "sos"]
            ]
          },
          {
            type: "phrases",
            groups: [
              {
                id: "during-korean-move",
                title: "交通",
                items: [
                  ["여기 어떻게 가요?", "yeo-gi eo-tteo-ke ga-yo?", "ここへはどうやって行きますか？", "地図の画面を見せながら"],
                  ["몇 번 출구예요?", "myeot beon chul-gu-ye-yo?", "何番出口ですか？", "地下鉄の駅で"],
                  ["이 주소로 가 주세요.", "i ju-so-ro ga ju-se-yo.", "この住所まで行ってください。", "タクシーで住所を見せながら"],
                  ["여기서 내려 주세요.", "yeo-gi-seo nae-ryeo ju-se-yo.", "ここで降ろしてください。", "タクシーを降りるとき"]
                ]
              },
              {
                title: "飲食店",
                items: [
                  ["두 명이에요.", "du myeong-i-e-yo.", "2人です。", "お店に入ってすぐ人数を伝える"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "待ち時間はありますか？", "列ができているとき"],
                  ["이거 주세요.", "i-geo ju-se-yo.", "これをください。", "メニューを指さしながら"]
                ]
              },
              {
                title: "予約",
                items: [["예약했어요.", "ye-yak hae-sseo-yo.", "予約しています。", "入口で名前といっしょに"]]
              },
              {
                title: "ポップアップ · 公演",
                items: [
                  ["예약이 필요해요?", "ye-ya-gi pi-ryo-hae-yo?", "予約が必要ですか？", "ポップアップの入口で"],
                  ["현장 입장 가능해요?", "hyeon-jang ip-jang ga-neung-hae-yo?", "当日そのまま入れますか？", "予約なしで行ったとき"]
                ]
              },
              {
                title: "ショッピング",
                items: [["카드 돼요?", "ka-deu dwae-yo?", "カードは使えますか？", "会計の前に"], ["얼마예요?", "eol-ma-ye-yo?", "いくらですか？", "値段を聞くとき"]]
              },
              {
                id: "during-korean-food",
                title: "ベジタリアン · 食事",
                items: [
                  ["고기가 들어가나요?", "go-gi-ga deu-reo-ga-na-yo?", "肉は入っていますか？", "注文の前に"],
                  ["돼지고기가 들어가나요?", "dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "豚肉は入っていますか？", "メニューを指さしながら"],
                  ["채식 메뉴가 있나요?", "chae-sik me-nyu-ga in-na-yo?", "ベジタリアンメニューはありますか？", "席に着く前に"]
                ]
              },
              {
                title: "宗教 · 食事制限",
                items: [
                  ["돼지고기 없는 메뉴가 있나요?", "dwae-ji-go-gi eom-neun me-nyu-ga in-na-yo?", "豚肉が入っていないメニューはありますか？", "ハラール · 豚肉抜きが必要なとき"],
                  ["기도실이 어디에 있나요?", "gi-do-si-ri eo-di-e in-na-yo?", "礼拝室はどこですか？", "空港 · モールの案内デスクで"]
                ]
              },
              {
                id: "during-korean-health",
                title: "病院",
                items: [
                  ["병원에 가고 싶어요.", "byeong-wo-ne ga-go si-peo-yo.", "病院に行きたいです。", "宿 · 案内所のスタッフに"],
                  ["많이 아파요.", "ma-ni a-pa-yo.", "とても痛いです / 具合がとても悪いです。", "痛いところを指しながら"]
                ]
              },
              {
                id: "during-korean-pharmacy",
                title: "薬局",
                items: [["감기약이 필요해요.", "gam-gi-ya-gi pi-ryo-hae-yo.", "風邪薬がほしいです。", "薬局で"], ["두통약이 필요해요.", "du-tong-ya-gi pi-ryo-hae-yo.", "頭痛薬がほしいです。", "薬局で"]]
              },
              {
                id: "during-korean-sos",
                title: "緊急時",
                items: [["도와주세요.", "do-wa-ju-se-yo.", "助けてください。", "周りの人に大きな声で"], ["119를 불러주세요.", "il-il-gu-reul bul-leo-ju-se-yo.", "119 を呼んでください。", "周りの人に頼むとき"]]
              }
            ]
          }
        ],
        tips: ["「~주세요 (~ください)」だけ覚えておけば、多くの場面で通じます。", "人数は言葉のかわりに指で見せても大丈夫です。"],
        links: [
          { href: "papago", label: "Papago 翻訳" }
        ],
        next: ["#tips-food", "次のステップ：グルメ · ポップアップ · 予約を探す"]
      }
    ]
  },
  /* ---------------- 03 TRAVEL TIPS ---------------- */
  tips: {
    title: "韓国の人はどこで探す？\n探し方を教えます。",
    intro: "グルメのリストやイベントの日程はすぐに変わります。だから、韓国の人が実際に情報を探している場所と、外国人が必ず確認すべきことをまとめました。",
    cards: [
      {
        id: "tips-food",
        num: "3-1",
        short: "グルメ",
        title: "グルメの探し方",
        lead: "お店のリストではなく、NAVER マップでいま人気のお店を自分で探す方法を紹介します。",
        top: [
          {
            type: "search",
            title: "STEP 1 · 「地域 + 食べたい料理」で検索",
            items: ["성수 한식", "홍대 삼겹살", "명동 냉면", "종로 혼밥"],
            caption: "検索ワードをタップすると NAVER マップの検索結果が開きます。旅先の名前 + 食べたい料理に変えて検索してみましょう。"
          },
          {
            type: "tipgrid",
            id: "tips-food-diet",
            title: "食事の制限があれば、あわせて確認",
            items: [
              {
                tone: "veg",
                icon: "leaf",
                label: "VEGETARIAN TIP",
                title: "ベジタリアンなら",
                text: "HappyCow でヴィーガンのお店をまとめて見るか、NAVER マップで「地域 + 비건 식당 (ヴィーガン食堂)」と検索しましょう。",
                search: ["성수 비건 식당", "홍대 채식 식당", "명동 비건", "서울 비건 한식", "서울 비건 베이커리", "서울 사찰음식"],
                phrases: [
                  ["저는 고기와 생선을 먹지 않습니다.", "jeo-neun go-gi-wa saeng-seo-neul meok-ji an-seum-ni-da.", "私は肉と魚を食べません。"],
                  ["고기나 생선으로 만든 육수도 먹지 않습니다.", "go-gi-na saeng-seo-neu-ro man-deun yuk-su-do meok-ji an-seum-ni-da.", "肉や魚でとったスープも食べません。"],
                  [
                    "소스나 육수에도 고기 또는 생선이 들어가지 않았는지 확인해 주세요.",
                    "so-seu-na yuk-su-e-do go-gi tto-neun saeng-seo-ni deu-reo-ga-ji a-nan-neun-ji hwa-gin-hae ju-se-yo.",
                    "ソースやスープにも肉や魚が入っていないか確認してください。"
                  ]
                ],
                note: "韓国料理は肉が見えなくても、スープ・塩辛 (젓갈)・ソースに動物性の材料が入っていることがあります。「肉なしですか？」だけでなく、スープやソースまで確認しましょう。",
                go: ["#during-korean-food", "注文で使える韓国語をもっと見る"],
                services: ["happycow"]
              },
              {
                tone: "muslim",
                icon: "moon",
                label: "MUSLIM TRAVELER TIP",
                title: "ハラール料理が必要、または豚肉を食べないなら",
                text: "まずは韓国観光公社の公式リストから探しましょう。Halal Certified は公認の認証機関が認証したお店、Self-certified はムスリムの経営者が自分で確認したお店です。Muslim Friendly と Pork Free はハラール認証と同じではありません。",
                search: ["이태원 할랄 식당", "명동 할랄", "강남 Muslim Friendly", "홍대 돼지고기 없는 식당"],
                phrases: [
                  ["돼지고기를 먹지 않습니다.", "dwae-ji-go-gi-reul meok-ji an-seum-ni-da.", "豚肉を食べません。"],
                  ["이 음식에 돼지고기가 들어가나요?", "i eum-si-ge dwae-ji-go-gi-ga deu-reo-ga-na-yo?", "この料理に豚肉は入っていますか？"],
                  ["돼지고기 육수가 들어가나요?", "dwae-ji-go-gi yuk-su-ga deu-reo-ga-na-yo?", "豚肉のスープは入っていますか？"],
                  ["알코올이 들어가나요?", "al-ko-o-ri deu-reo-ga-na-yo?", "アルコールは入っていますか？"]
                ],
                note: "Muslim Friendly・Pork Free のお店ではお酒を出すことがあります。",
                go: ["#during-prayer", "お祈りの場所の探し方を見る"],
                services: ["kto_muslim"],
                kw: {
                  google: ["halal restaurant Itaewon", "halal Korean food Seoul"]
                }
              },
              {
                tone: "allergy",
                icon: "alert",
                label: "ALLERGY TIP",
                title: "食物アレルギーがあるなら",
                text: "アレルギー対応のお店リストより、現地で確認することのほうが大事です。避けたい食材を韓国語で保存しておき、注文前にスタッフに見せましょう。",
                phrases: [
                  ["저는 심한 음식 알레르기가 있습니다.", "jeo-neun sim-han eum-sik al-le-reu-gi-ga it-seum-ni-da.", "私はひどい食物アレルギーがあります。"],
                  ["이 음식에 땅콩이 들어가나요?", "i eum-si-ge ttang-kong-i deu-reo-ga-na-yo?", "この料理にピーナッツは入っていますか？"],
                  [
                    "소스나 육수에도 땅콩이 들어가면 먹을 수 없습니다.",
                    "so-seu-na yuk-su-e-do ttang-kong-i deu-reo-ga-myeon meo-geul su eop-seum-ni-da.",
                    "ソースやスープにピーナッツが入っていても食べられません。"
                  ]
                ],
                note: "「땅콩 (ピーナッツ)」の部分を自分の食材に変えて見せましょう。",
                go: ["#help-food", "アレルギーのときの対処法"],
                wordsTitle: "避けたい食材を韓国語で保存しましょう",
                words: [["땅콩", "ピーナッツ"], ["갑각류", "甲殻類"], ["우유", "牛乳"], ["계란", "卵"], ["밀", "小麦"]]
              }
            ]
          }
        ],
        blocks: [
          {
            type: "steps",
            start: 1,
            items: [
              { t: "レビューと写真を見る", d: "レビュー数が多く、最近もレビューが続いているお店が安心です。お客さんの写真で実際のメニューを確認しましょう。" },
              { t: "営業情報を確認", d: "営業時間、定休日、午後のブレイクタイムを確認します。" },
              {
                t: "ウェイティング · 予約を確認して出発",
                d: "「예약 (予約)」ボタンがあれば NAVER 予約ができます。行列の長いお店は早めに行きましょう。",
                go: ["#tips-reserve", "予約の方法を見る"]
              }
            ]
          },
          {
            type: "checklist",
            title: "検索したあと必ず確認しましょう",
            items: ["いま営業中か", "ブレイクタイム", "ラストオーダー", "最近の口コミ", "ウェイティング", "予約ボタンがあるか", "メニュー写真"]
          },
          {
            type: "keyset",
            title: "状況別にもっと使える検索ワード",
            items: [["ひとり旅", "성수 혼밥", "종로 혼밥", "1인 메뉴 맛집"], ["遅い時間", "홍대 늦게까지 하는 식당", "강남 24시 식당"], ["予約したくないなら", "성수 웨이팅 없는 맛집", "예약 없이 가는 맛집"]]
          }
        ],
        tips: ["リストを載せない理由：決まったリストは、時間がたつと閉店したり変わったりします。自分で探せば、いつも最新の情報です。", "焼肉店は2人前から注文を受けるところが多いです。", "ひとりでは入りにくいお店もあります。レビューで「1인 (1人)」を検索してみましょう。"],
        links: [
          { href: "naver", label: "NAVER マップ" }
        ],
        next: ["#tips-cafe", "カフェを探す"]
      },
      {
        id: "tips-cafe",
        num: "3-2",
        short: "カフェ",
        title: "カフェの探し方",
        lead: "韓国のカフェは写真や雰囲気で選ぶことが多いです。地図と Instagram をいっしょに使いましょう。",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "NAVER マップで「地名 + 카페」を検索", d: "写真タブで先に雰囲気を見てみましょう。" },
              { t: "Instagram でハッシュタグ検索", d: "#성수카페 のように韓国語のハッシュタグで探すと、最新の写真がたくさん出ます。" },
              { t: "営業時間 · 定休日を確認", d: "小さなカフェは定休日がよく変わります。お店の Instagram のお知らせを確認しましょう。" },
              { t: "利用ルールを確認", d: "1人1ドリンク、利用時間の制限、撮影ルールなどを確認します。" }
            ]
          },
          {
            type: "keyset",
            title: "目的別に検索しましょう",
            items: [["写真", "성수 감성카페", "서울 사진찍기 좋은 카페"], ["韓屋", "익선동 한옥카페", "북촌 한옥카페"], ["眺め", "서울 한강뷰 카페"], ["デザート", "성수 디저트 카페"]]
          }
        ],
        tips: ["韓国のカフェは「1人1ドリンク」が基本のところがほとんどです。", "店内の撮影を禁止しているお店もあります。ほかのお客さんが写らないように撮りましょう。", "人気のカフェは週末の午後は満席のことも。午前中がゆったりしています。"],
        next: ["#tips-popup", "ポップアップストアを探す"]
      },
      {
        id: "tips-popup",
        num: "3-3",
        short: "ポップアップ",
        title: "ポップアップストアの探し方",
        lead: "ポップアップは短い期間だけ開いて、すぐに終わります。だからカレンダーではなく、どこで探して、行く前に何を確認するかを紹介します。",
        blocks: [
          {
            type: "playbook",
            id: "tips-popup-find",
            situation: "旅行する日に行けるポップアップを探したいです。",
            intro: "ブランドの SNS から探さなくて大丈夫。まず日付と地域で選んで、最後に公式アカウントを確認すればOKです。",
            fast: ["popga", "sungsuya", "popnol"],
            search: {
              naver: ["성수 팝업 오늘", "성수 팝업 이번주", "서울 팝업 이번주", "홍대 팝업 이번주", "더현대 팝업 이번주", "잠실 팝업 이번주"],
              insta: ["#성수팝업", "#서울팝업", "#팝업스토어", "#이번주팝업"],
              google: ["Seoul pop up store this week"]
            },
            checkTitle: "選んだポップアップの公式 Instagram で確認しましょう",
            check: ["予約が必要か", "当日入場できるか", "営業時間", "最終入場", "身分証", "イベント参加の条件", "グッズ購入の条件"],
            say: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "予約していなくても入れますか？"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "最終入場は何時ですか？"],
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "身分証としてパスポートを使えますか？"]
            ]
          },
          {
            type: "spots",
            title: "STEP 1・まず地域を選ぶ",
            items: [
              { icon: "popup", t: "聖水", d: "ファッション・ビューティー・キャラクター・ブランドのポップアップがいちばん多いエリアです。" },
              { icon: "ticket", t: "弘大・延南", d: "キャラクター・ウェブトゥーン・アイドル・若いブランドのポップアップが多いです。" },
              { icon: "home", t: "汝矣島", d: "ザ・現代ソウル中心の屋内ポップアップなので、雨の日にもおすすめです。" },
              { icon: "compass", t: "蚕室", d: "ロッテワールドモールを中心にポップアップが開かれます。" }
            ]
          },
          {
            type: "steps",
            title: "見つける → 選ぶ → 公式情報を確認",
            items: [
              { t: "見つける", d: "POPGA・성수야・팝놀で、旅行する日に開いているポップアップを探します。" },
              { t: "選ぶ", d: "場所・期間・口コミを見て、行く場所を決めます。" },
              { t: "公式情報を確認", d: "選んだポップアップの公式 Instagram で、予約の有無と入場条件を確認します。" }
            ]
          },
          {
            type: "tipbox",
            icon: "popup",
            situation: "行ってみたら予約者しか入れなかったときは？",
            text: "一部のポップアップは事前予約や韓国の電話番号が必要なことがあります。行く前に公式SNSで予約の有無と、当日そのまま入れるかを確認しましょう。",
            phrases: [
              ["예약 안 했는데 들어갈 수 있나요?", "ye-yak an haen-neun-de deu-reo-gal su in-na-yo?", "予約していなくても入れますか？"],
              ["마지막 입장은 몇 시예요?", "ma-ji-mak ip-jang-eun myeot si-ye-yo?", "最終入場は何時ですか？"]
            ],
            go: ["#help-reservation", "韓国の番号がなくて予約できないとき"]
          }
        ],
        tips: ["事前予約に「韓国の携帯電話での本人認証」が必要な場合、外国人は予約が難しいことがあります。当日入場の時間が別にあるか確認しましょう。", "人気のポップアップは、オープン直後の最初の週末がいちばん混みます。", "グッズは1人あたりの購入数に制限があることが多いです。"],
        real: ["ポップアップストアはそのまま行けばいいと思っていたのですが、事前予約が必要なこともありました。"],
        links: [
          { href: "popga", label: "POPGA (팝가)" }
        ],
        next: ["#tips-culture", "展示 · 公演 · 祭りを探す"]
      },
      {
        id: "tips-culture",
        num: "3-4",
        short: "展示 · 公演 · 祭り",
        title: "展示 · 公演 · 祭りの探し方",
        lead: "特定のイベントのリストではなく、信頼できる情報をどこで確認するかを紹介します。",
        blocks: [
          {
            type: "playbook",
            situation: "今週ソウルで楽しめることは何がありますか？",
            fast: ["visitseoul_events", "culture_portal"],
            search: {
              naver: ["이번 주 서울 전시", "서울 무료 전시", "서울 축제 이번주", "서울 공연 오늘"],
              google: ["things to do in Seoul this week", "Seoul festival this month"]
            },
            check: ["日付", "時間", "予約が必要か", "料金", "最終入場", "外国人も参加できるか"],
            say: [
              ["오늘 현장 예매 되나요?", "o-neul hyeon-jang ye-mae doe-na-yo?", "今日、現地でチケットを買えますか？"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "外国人も参加できますか？"]
            ]
          },
          {
            type: "steps",
            title: "どこで確認する？",
            items: [
              { t: "公式サイト · 公式 SNS", d: "日付 · 時間 · 料金は、イベントの公式チャンネルがいちばん正確です。" },
              { t: "ソウル市の文化イベントサイト", d: "ソウル文化ポータル (서울문화포털) で、ソウルの公演 · 展示 · 祭りを日付ごとに見られます。" },
              { t: "VISITKOREA · Visit Seoul", d: "外国語で祭りやイベントの情報を見られる公式観光サイトです。" },
              { t: "公演 · 展示の公式チケットサイト", d: "外国人は NOL World (旧 Interpark Global) のように外国語に対応したチケットサイトが便利です。" }
            ]
          }
        ],
        tips: ["無料の祭りでも、一部のプログラムは事前申し込みが必要です。", "屋外イベントは雨で中止や変更になることがあります。当日の朝、公式 SNS を確認しましょう。"],
        links: [
          { href: "culture", label: "ソウル文化ポータル (ソウル市の文化イベント)" },
          { href: "visitkorea", label: "VISITKOREA" },
          { href: "visitseoul", label: "Visit Seoul" },
          { href: "nolworld", label: "NOL World (外国人向けチケット予約)" }
        ],
        next: ["#tips-kpop", "K-POP イベントを探す"]
      },
      {
        id: "tips-kpop",
        num: "3-5",
        short: "K-POP",
        title: "K-POP イベントの探し方",
        lead: "聖地巡礼コースではなく、K-POP イベントの情報をどこで探し、参加条件をどう確認するかに絞りました。",
        blocks: [
          {
            type: "playbook",
            label: "CASE A",
            situation: "まだ好きなアーティストが決まっていません。今週行けそうな K-POP イベントはありますか？",
            intro: "Visit Seoul の Hallyu 日程、ポップアップアプリの K-POP カテゴリー、チケットサイトの上演中の公演を見てみましょう。",
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
            situation: "好きなアーティストのイベントを探しています。",
            fast: ["weverse"],
            stepsTitle: "この順番で確認しましょう",
            steps: ["Weverse などの公式ファンプラットフォーム", "アーティストの公式 X", "公式 Instagram", "事務所のお知らせ"],
            check: ["事前申し込み", "ファンクラブの条件", "身分証", "外国人も参加できるか", "入場時間"],
            say: [
              ["신분증으로 여권 써도 되나요?", "sin-bun-jeung-eu-ro yeo-gwon sseo-do doe-na-yo?", "身分証としてパスポートを使えますか？"],
              ["외국인도 참여할 수 있나요?", "oe-gu-gin-do cham-yeo-hal su in-na-yo?", "外国人も参加できますか？"]
            ]
          }
        ],
        tips: [
          "公演は予約者と実際の観客の情報が同じである必要があり、入場時に身分証を確認することが多いです。外国人はパスポートを持っていきましょう。",
          "先行予約は、国内メンバーシップとグローバルメンバーシップで日程が別に出ることもあります。",
          "お知らせの時間は韓国時間 (KST) です。自分の国の時間に直してアラームを設定しましょう。",
          "公式販売先以外で買ったチケットは、入場を断られることがあります。"
        ],
        links: [
          { href: "weverse", label: "Weverse" },
          { href: "nolworld", label: "NOL World" }
        ],
        next: ["#tips-reserve", "予約の方法"]
      },
      {
        id: "tips-reserve",
        num: "3-6",
        short: "予約",
        title: "予約の方法",
        lead: "韓国でよく出会う予約5つ。サービスの紹介ではなく、実際の手順で見せます。",
        blocks: [
          {
            type: "accordion",
            items: [
              {
                title: "NAVER 予約",
                sub: "飲食店 · カフェ · 体験",
                lead: "NAVER マップの場所ページに「예약 (予約)」ボタンがあれば使えます。",
                steps: ["NAVER マップで場所を検索", "「예약」ボタンを押す", "日付 · 時間 · 人数を選ぶ", "NAVER にログインして予約を申し込む", "確定のお知らせを確認 (当日もう一度確認)"],
                note: "NAVER の ID が必要です。登録が難しい場合は、電話 · 当日 · ほかの予約アプリを探しましょう。"
              },
              {
                title: "ポップアップの事前予約",
                sub: "ブランドのポップアップストア",
                steps: ["ブランドの Instagram · お知らせで予約リンクを確認", "予約オープンの時間に合わせて予約ページにアクセス", "日付 · 入場時間を選ぶ", "本人認証 · 情報入力", "入場用の QR やメッセージを保存して、時間どおりに行く"],
                note: "予約オープンの時間は韓国時間です。韓国の番号での認証が必要なら、当日入場をねらいましょう。"
              },
              {
                title: "公演の予約",
                sub: "コンサート · ミュージカル · 展示",
                steps: ["公式チケットサイトを確認 (外国人は NOL World など)", "前もって会員登録 · ログイン", "日付 · 座席を選んで支払い", "モバイルチケットか当日受け取りかを確認", "公演当日はパスポートなどの身分証を持っていく"],
                link: { href: "nolworld", label: "NOL World" }
              },
              {
                title: "飲食店の予約",
                sub: "レストラン · 人気のお店",
                steps: ["NAVER マップの場所ページで「예약」ボタンを確認", "外国人は Catchtable Global (캐치테이블 글로벌) アプリも使えます", "日付 · 人数を選び、必要なら予約金を支払う", "予約時間の10分前に到着"],
                note: "Catchtable Global は、韓国の番号なしでメールアドレスで登録できます。"
              },
              {
                title: "当日ウェイティング",
                sub: "行列のお店 · カフェ · ポップアップ",
                steps: ["お店の前のウェイティング端末に登録", "呼ばれたら入店"],
                note: "詳しい手順は下の「当日ウェイティング」にあります。"
              }
            ]
          },
          {
            type: "tipbox",
            icon: "phone",
            situation: "予約画面で韓国の電話番号を求められたら？",
            text: "一部の予約サービスでは韓国の電話番号が必要なことがあります。韓国の番号がなければ、外国人向けの予約（Catchtable Global など）や、当日予約 · ウェイティングができるかを先に確認しましょう。",
            phrases: [["한국 전화번호가 없어요. 다른 방법이 있나요?", "han-guk jeon-hwa-beon-ho-ga eop-seo-yo. da-reun bang-beo-bi in-na-yo?", "韓国の電話番号がありません。ほかの方法はありますか？"]],
            go: ["#help-reservation", "予約できないときの解決方法"]
          }
        ],
        tips: ["予約して行かない (ノーショー) と、予約金が戻らなかったり利用が制限されたりすることがあります。行けないときは必ずキャンセルしましょう。", "予約確定の画面はスクリーンショットしておきましょう。通信できないときも見せられます。"],
        next: ["#tips-waiting", "当日ウェイティング"]
      },
      {
        id: "tips-waiting",
        num: "3-7",
        short: "ウェイティング",
        title: "当日ウェイティング",
        lead: "人気の飲食店 · カフェ · ポップアップの前には、ウェイティング端末 (タブレット) があります。順番どおりに操作すれば大丈夫。",
        blocks: [
          {
            type: "steps",
            items: [
              { t: "お店に到着" },
              { t: "ウェイティング端末を確認", d: "入口近くのタブレットを探します。なければ店員さんに聞きましょう。" },
              { t: "人数を入力" },
              { t: "電話番号を入力", d: "順番が来たら、この番号にお知らせが届きます。" },
              { t: "待ち番号を確認", d: "画面に出た番号をスクリーンショットしておきましょう。" },
              { t: "呼び出しを確認", d: "カカオトークのお知らせやメッセージが来たら、すぐお店に戻ります。" },
              { t: "入店" }
            ]
          },
          {
            type: "phrases",
            groups: [
              {
                title: "こんなときはこう言います",
                items: [
                  ["전화번호가 없어요.", "jeon-hwa-beon-ho-ga eop-seo-yo.", "韓国の電話番号がありません。", "ウェイティング端末の前で"],
                  ["웨이팅 있어요?", "we-i-ting i-sseo-yo?", "待ち時間はありますか？", "列が見えるとき"]
                ]
              }
            ]
          }
        ],
        tips: ["韓国の電話番号がない場合は、名前で待てるか店員さんに聞いてみましょう。", "呼ばれてから決められた時間内に行かないと、順番が飛ばされることがあります。", "Catchtable · POPGA のようにリモートウェイティングができるお店なら、着く前に並べます。"],
        next: ["#where", "次のステップ：旅先を選ぶ"]
      }
    ]
  },
  /* ---------------- 04 WHERE TO GO ---------------- */
  where: {
    title: "わたしに合う旅先を、\n選んで、比べて、出かけよう。",
    intro: "レンタカーなしで公共交通で行けるソウル · 近郊の9か所。4つの質問で TOP 3 をおすすめしてもらい、2~3か所を比べてから、詳しいコースまで確認しましょう。",
    why: "ソウル着陸の旅先は、特定のテーマツアーではありません。旅行の期間と好みに合う場所を自分で選べるようにする「旅の決定サポート」です。",
    note: "所要時間と料金は2026年10月の平日、大人の一般席の基準です。出発時刻や列車の種類で変わるので、出かける前に Korail や地図アプリで確認してください。"
  }
};
