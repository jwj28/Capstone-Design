/* Two entry points into existing guidance. No proficiency score or content restriction. */
window.SL = window.SL || {};
window.SL.guidePaths = {
  ko: {
    title: '나에게 맞는 안내 선택',
    intro: '기초부터 순서대로 살펴보거나, 지금 필요한 정보로 바로 이동.',
    paths: [
      { id: 'step', icon: 'tip', tag: 'STEP BY STEP', title: '처음부터 차근차근',
        desc: '한국 여행이 처음이거나 기본적인 이용 방법부터 알고 싶은 경우. 준비·교통·식사 문화·체험을 순서대로 확인.',
        cta: '여행 준비부터 시작', href: '#before-plan',
        links: [
          ['#before-apps', '지도·번역 앱 익히기'],
          ['#during-subway', '대중교통 이용 및 도움'],
          ['#tips-food', '식당 이용과 식습관 확인'],
          ['#tips-culture', '전시·공연·축제 찾아보기']
        ] },
      { id: 'quick', icon: 'search', tag: 'QUICK HELP', title: '필요한 상황만 빠르게',
        desc: '한국 여행의 기본은 익숙하고 특정 상황의 도움이 필요한 경우. 예약·결제·번역·응급 안내로 바로 이동.',
        cta: '상황별 도움 전체 보기', href: '#home-help',
        links: [
          ['#help-reservation', '예약·전화번호·인증 문제'],
          ['#help-payment', '결제·교통카드 문제'],
          ['#during-translate', '빠른 번역과 현장 회화'],
          ['#during-health', '병원·약국·응급 도움']
        ] }
    ]
  },
  en: {
    title: 'Choose the guidance you need',
    intro: 'Start with the basics, or go straight to help for your situation.',
    paths: [
      { id: 'step', icon: 'tip', tag: 'STEP BY STEP', title: 'Start step by step',
        desc: 'For your first trip to Korea, or when you want the basics explained. Explore preparation, transport, dining customs and cultural experiences in order.',
        cta: 'Start planning your trip', href: '#before-plan',
        links: [
          ['#before-apps', 'Get to know map and translation apps'],
          ['#during-subway', 'Ride the subway and learn basic etiquette'],
          ['#tips-food', 'Dining tips and dietary needs'],
          ['#tips-culture', 'Find exhibitions, shows and festivals']
        ] },
      { id: 'quick', icon: 'search', tag: 'QUICK HELP', title: 'Get help for your situation',
        desc: 'Already familiar with the basics of travelling in Korea? Jump to the help you need for reservations, payments, translation or urgent situations.',
        cta: 'See all help topics', href: '#home-help',
        links: [
          ['#help-reservation', 'Reservations, phone numbers and verification'],
          ['#help-payment', 'Payment and transit card problems'],
          ['#during-translate', 'Quick translation and Korean phrases'],
          ['#during-health', 'Hospitals, pharmacies and emergency help']
        ] }
    ]
  },
  ja: {
    title: '自分に合ったガイドを選ぶ',
    intro: '基本から順番に確認することも、今必要な情報へ直接進むこともできます。',
    paths: [
      { id: 'step', icon: 'tip', tag: 'STEP BY STEP', title: 'はじめから一つずつ',
        desc: '初めて韓国を旅行する方や、基本的な利用方法から知りたい方へ。準備・交通・食事のマナー・文化体験を順番に確認できます。',
        cta: '旅行の準備から始める', href: '#before-plan',
        links: [
          ['#before-apps', '地図・翻訳アプリの使い方'],
          ['#during-subway', '地下鉄の乗り方と基本マナー'],
          ['#tips-food', '飲食店の利用と食事制限の確認'],
          ['#tips-culture', '展示・公演・お祭りを探す']
        ] },
      { id: 'quick', icon: 'search', tag: 'QUICK HELP', title: '必要な情報をすばやく',
        desc: '韓国旅行の基本には慣れていて、特定の場面で助けが必要な方へ。予約・決済・翻訳・緊急時の案内に直接進めます。',
        cta: '状況別のサポートをすべて見る', href: '#home-help',
        links: [
          ['#help-reservation', '予約・電話番号・本人認証の問題'],
          ['#help-payment', '決済・交通カードのトラブル'],
          ['#during-translate', 'クイック翻訳と韓国語フレーズ'],
          ['#during-health', '病院・薬局・緊急時のサポート']
        ] }
    ]
  },
  zh: {
    title: '选择适合自己的指南',
    intro: '可以从基础开始逐步了解，也可以直接查看当前需要的信息。',
    paths: [
      { id: 'step', icon: 'tip', tag: 'STEP BY STEP', title: '从头开始，一步一步',
        desc: '适合首次来韩国旅行，或希望先了解基本使用方法的游客。按顺序查看旅行准备、交通、用餐习惯与文化体验。',
        cta: '从旅行准备开始', href: '#before-plan',
        links: [
          ['#before-apps', '熟悉地图与翻译应用'],
          ['#during-subway', '地铁乘坐方法与基本礼仪'],
          ['#tips-food', '餐厅用餐与饮食限制确认'],
          ['#tips-culture', '寻找展览、演出与庆典']
        ] },
      { id: 'quick', icon: 'search', tag: 'QUICK HELP', title: '快速找到所需帮助',
        desc: '适合已熟悉韩国旅行基础、需要解决具体问题的游客。直接查看预约、支付、翻译与紧急情况指南。',
        cta: '查看全部问题与帮助', href: '#home-help',
        links: [
          ['#help-reservation', '预约、手机号与身份验证问题'],
          ['#help-payment', '支付与交通卡问题'],
          ['#during-translate', '快速翻译与实用韩语'],
          ['#during-health', '医院、药店与紧急求助']
        ] }
    ]
  }
};
