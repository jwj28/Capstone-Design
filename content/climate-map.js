/* Climate Card short-term pass: selected routes, not a full network or fare calculator.
   Station boarding/alighting eligibility: Seoul Metropolitan Government, checked 2026-11-28.
   https://english.seoul.go.kr/policy/transportation/climate-card/
   https://func.seoul.go.kr/climateCard/rangeList.do
   Stations between the displayed stops are omitted; the diagram is not to scale. */
(function () {
  'use strict';
  var SL = window.SL;
  var source = 'https://english.seoul.go.kr/policy/transportation/climate-card/';
  // Station: Korean name, English name, boarding/alighting status (yes / no / exit).
  var routes = [
    {id:'l4',line:'4',color:'#299bc5',from:0,stops:[['명동','Myeong-dong','yes'],['사당','Sadang','yes'],['남태령','Namtaeryeong','yes'],['선바위','Seonbawi','no'],['경마공원','Seoul Racecourse Park','no'],['대공원','Seoul Grand Park','no']]},
    {id:'l3',line:'3',color:'#dd791e',from:0,stops:[['경복궁','Gyeongbokgung','yes'],['불광','Bulgwang','yes'],['연신내','Yeonsinnae','yes'],['구파발','Gupabal','yes'],['지축','Jichuk','no'],['삼송','Samsong','no']]},
    {id:'l5',line:'5',color:'#9569cf',from:0,stops:[['광화문','Gwanghwamun','yes'],['천호','Cheonho','yes'],['상일동','Sangil-dong','yes'],['강일','Gangil','yes'],['미사','Misa','no'],['하남검단산','Hanam Geomdansan','no']]},
    {id:'l8s',line:'8',color:'#de527f',from:0,stops:[['잠실','Jamsil','yes'],['가락시장','Garak Market','yes'],['장지','Jangji','yes'],['복정','Bokjeong','yes'],['남위례','Namwirye','no'],['모란','Moran','no']]},
    {id:'l8n',line:'8',color:'#de527f',from:0,stops:[['잠실','Jamsil','yes'],['천호','Cheonho','yes'],['암사','Amsa','yes'],['암사역사공원','Amsa History Park','yes'],['장자호수공원','Jangja Lake Park','no'],['구리','Guri','no']]},
    {id:'l7',line:'7',color:'#9c9f41',from:4,stops:[['가산디지털단지','Gasan Digital Complex','yes'],['철산','Cheolsan','no'],['광명사거리','Gwangmyeongsageori','no'],['천왕','Cheonwang','yes'],['온수','Onsu','yes'],['까치울','Kkachiul','no']]},
    {id:'l1',line:'1',color:'#557bd3',from:0,stops:[['서울역','Seoul Station','yes'],['구로','Guro','yes'],['금천구청','Geumcheon-gu Office','yes'],['석수','Seoksu','no'],['안양','Anyang','no'],['수원','Suwon','no']]},
    {id:'gj',line:'GJ',color:'#4cb2a4',from:0,stops:[['홍대입구','Hongik Univ.','yes'],['용산','Yongsan','yes'],['상봉','Sangbong','yes'],['양원','Yangwon','yes'],['구리','Guri','no'],['양수','Yangsu','no']]},
    {id:'arex',line:'AREX',color:'#73b8da',from:0,stops:[['서울역','Seoul Station','yes'],['홍대입구','Hongik Univ.','yes'],['김포공항','Gimpo Airport','yes'],['계양','Gyeyang','no'],['청라국제도시','Cheongna Int’l City','no'],['인천공항1터미널','Incheon Airport T1','exit'],['인천공항2터미널','Incheon Airport T2','exit']]},
    {id:'l2',line:'2',color:'#43ad77',from:0,stops:[['홍대입구','Hongik Univ.','yes'],['시청','City Hall','yes'],['을지로입구','Euljiro 1-ga','yes'],['성수','Seongsu','yes'],['잠실','Jamsil','yes']]}
  ];
  var i18n = {
    ko: {
      title:'역 이름으로 보는 기후동행카드 이용 범위',
      intro:'관광객용 단기권 주요 경로. 노선을 선택하고 출발역·도착역의 이용 가능 여부 확인.',
      date:'범위 기준 2026.10.01 · 확인 2026.11.28',
      choose:'확인할 노선·방면', from:'출발역', to:'도착역',
      line:'{n}호선', gj:'경의중앙선', arex:'공항철도 일반열차',
      yes:'승차·하차 가능', no:'승차·하차 불가', exit:'공항 하차만 가능',
      diagram:'주요 역 노선도', hint:'중간역 생략 · 축척 없는 노선도. 가로로 스크롤해 역 이름 확인. 표시는 해당 노선의 승차·하차 가능 여부이며 전체 수도권 노선도가 아님.',
      status:'선택한 이동의 카드 안내', same:'출발역과 다른 도착역 선택.',
      insideTitle:'이 구간은 기후동행카드 이용 가능',
      inside:'선택한 노선의 출발역·도착역 모두 승차·하차 가능 역. 유효한 단기권으로 해당 노선 이용 가능. 다른 노선으로 바꿔 이동하면 그 노선의 조건도 확인.',
      outsideTitle:'처음 승차할 때부터 일반 교통카드·별도 승차권 이용',
      outside:'출발역 또는 도착역이 단기권 이용 범위 밖. 티머니·이즐 등 일반 교통카드나 해당 구간 승차권을 출발역부터 사용. 경계역에서 열차 안에 머문 채 카드만 바꾸는 방식은 불가.',
      airportTitle:'서울 → 인천공항: 하차 예외 적용',
      airport:'공항철도 이용 가능 역에서 승차해 인천공항 T1·T2에서 하차 가능. 일반열차 기준이며 직통열차는 별도 승차권 필요. 청라국제도시 등 중간의 범위 밖 역에서 하차하는 것은 불가.',
      returnTitle:'인천공항 출발: 일반 교통카드·별도 승차권 필요',
      returning:'인천공항 T1·T2는 기후동행카드 승차 불가. 서울로 돌아오는 편도 처음부터 일반 교통카드 또는 해당 열차 승차권 이용.',
      splitTitle:'카드를 바꿔야 하는 시점',
      split:'범위 밖 역에서 내릴 계획이라면 첫 승차 전 결제 수단 결정. 구간을 나누려면 이용 가능 역에서 정상 하차 처리 후 재승차하는 방법과 요금을 역 직원에게 먼저 확인. 이미 범위 밖 역에 도착했다면 직원에게 정산 요청. 출발역부터의 운임이 별도 청구될 수 있음.',
      exception7:'7호선은 철산·광명사거리처럼 서울 안의 이용 가능 역 사이에도 승차·하차 불가 역이 있음. 행정구역만 보고 판단하지 말고 역별 확인. 해당 역을 열차로 통과하는 것과 그 역에서 승차·하차하는 것은 다름.',
      exclusions:'신분당선·GTX·공항 직통열차는 별도 결제. 버스는 서울시 면허 시내·마을버스 여부 확인. 광역·공항버스와 타 지역 면허 버스는 제외.',
      all:'표시되지 않은 역·노선은 공식 검색에서 확인', official:'서울시 전체 역별 이용범위 검색', english:'서울시 영어 안내·역별 표',
      overview:'다른 주요 경계역도 한눈에 보기', boundary:'이용 가능 역 → 범위 밖 역',
      disclaimer:'역별 표를 바탕으로 제작한 서울착륙 안내도. 실제 운행 경로·요금 계산기는 아님. 출발 당일 공식 정보 재확인.'
    },
    en: {
      title:'Climate Card coverage, station by station',intro:'Selected routes for tourist short-term passes. Choose a line, then check your boarding and alighting stations.',date:'Coverage effective 2026-10-01 · Checked 2026-11-28',
      choose:'Line and direction',from:'Board at',to:'Alight at',line:'Line {n}',gj:'Gyeongui–Jungang',arex:'AREX all-stop train',yes:'Board & alight',no:'Not accepted',exit:'Airport exit only',diagram:'Selected-station route map',
      hint:'Intermediate stops omitted; not to scale. Scroll horizontally for station names. Symbols show boarding/alighting eligibility on this line, not the entire metropolitan network.',
      status:'Which card to use',same:'Choose a different arrival station.',insideTitle:'Climate Card accepted for this trip',inside:'Both selected stations accept boarding and alighting on this line. Use a valid short-term pass. If you change to another line, check that line separately.',
      outsideTitle:'Use a regular transit card or ticket from the start',outside:'Your boarding or alighting station is outside short-term pass coverage. Use T-money, EZL or a suitable ticket from your first station. You cannot switch cards while staying on the train at the boundary.',
      airportTitle:'Seoul → Incheon Airport: exit exception',airport:'Board at an eligible AREX station and alight at Airport T1 or T2. All-stop trains only; the express train requires a separate ticket. This exception does not allow alighting at other excluded stops such as Cheongna.',
      returnTitle:'From Incheon Airport: another card or ticket required',returning:'You cannot board with a Climate Card at Airport T1 or T2. Use a regular transit card or a ticket for the train from the start of your return trip.',
      splitTitle:'When to use another card',split:'If you will alight outside coverage, choose your payment method before boarding. To split a journey, first ask station staff about exiting through the gates at an eligible station, re-entering and the resulting fares. If already outside coverage, ask staff to settle the fare; the full trip may be charged separately.',
      exception7:'Line 7 has excluded stations such as Cheolsan and Gwangmyeongsageori between eligible stations. Check each station. Passing through a station is different from boarding or alighting there.',
      exclusions:'Sinbundang, GTX and AREX express trains require separate payment. For buses, check for a Seoul-licensed city or town service. Express, airport and other-region licensed buses are excluded.',
      all:'For unlisted stations and lines, use the official search',official:'Official station coverage search (Korean)',english:'Official English guide and station table',overview:'More coverage boundaries at a glance',boundary:'Eligible station → excluded station',
      disclaimer:'A Seoul Landing guide based on the official station table, not a live route planner or fare calculator. Recheck official information on your travel day.'
    },
    ja: {
      title:'駅名で確認する気候同行カードの利用範囲',intro:'旅行者向け短期券の主なルート。路線を選び、乗車駅と降車駅の利用可否を確認できます。',date:'利用範囲：2026年10月1日〜 · 確認日：2026年11月28日',
      choose:'路線・方面を選択',from:'乗車駅',to:'降車駅',line:'{n}号線',gj:'京義・中央線',arex:'空港鉄道 一般列車',yes:'乗車・降車可能',no:'乗車・降車不可',exit:'空港での降車のみ',diagram:'主な駅の路線図',
      hint:'途中駅を省略した縮尺のない路線図です。横にスクロールして駅名を確認できます。記号は選択した路線での乗降可否を示し、首都圏全体の路線図ではありません。',
      status:'この移動で使うカード',same:'乗車駅と異なる降車駅を選んでください。',insideTitle:'この区間は気候同行カードを利用可能',inside:'選択した路線の乗車駅・降車駅はいずれも利用可能です。有効な短期券で利用できます。ほかの路線に乗り換える場合は、その路線の条件も確認してください。',
      outsideTitle:'最初の乗車から通常の交通カード・乗車券を利用',outside:'乗車駅または降車駅が短期券の対象外です。最初の駅からT-money・EZLなどの交通カードや適切な乗車券を利用してください。境界駅で車内にいたままカードだけを切り替えることはできません。',
      airportTitle:'ソウル → 仁川空港：降車の特例あり',airport:'空港鉄道の対象駅から乗車し、仁川空港T1・T2で降車できます。一般列車が対象で、直通列車は別の乗車券が必要です。青羅国際都市など、途中の対象外駅での降車はできません。',
      returnTitle:'仁川空港発：通常の交通カード・乗車券が必要',returning:'仁川空港T1・T2では気候同行カードで乗車できません。ソウルへ向かう際も、最初から通常の交通カードまたは利用する列車の乗車券を使ってください。',
      splitTitle:'別のカードを使うタイミング',split:'対象外の駅で降りる場合は、最初の乗車前に支払方法を決めてください。区間を分ける場合は、対象駅で改札を出て再入場する方法と運賃を事前に駅員に確認してください。すでに対象外の駅に着いた場合は駅員に精算を依頼してください。乗車駅からの全区間分が別途請求される場合があります。',
      exception7:'7号線には、利用可能な駅の間にも鉄山・光明サゴリなどの対象外駅があります。駅ごとに確認してください。列車で通過することと、その駅で乗降することは異なります。',
      exclusions:'新盆唐線・GTX・空港鉄道の直通列車は別途支払いが必要です。バスはソウル市免許の市内・マウルバスか確認してください。広域・空港バス、他地域免許のバスは対象外です。',
      all:'表示のない駅・路線は公式検索で確認',official:'ソウル市の全駅利用範囲検索（韓国語）',english:'ソウル市の英語案内・駅別一覧',overview:'ほかの主な境界駅も確認',boundary:'利用可能な駅 → 対象外の駅',
      disclaimer:'公式の駅別一覧をもとにソウル着陸が作成した案内図です。リアルタイムの経路検索・運賃計算ではありません。利用当日に公式情報を再確認してください。'
    },
    zh: {
      title:'按车站确认气候同行卡适用范围',intro:'游客短期票的主要路线。选择线路，并确认上车站和下车站是否适用。',date:'范围自2026年10月1日起适用 · 核对日期2026年11月28日',
      choose:'选择线路与方向',from:'上车站',to:'下车站',line:'{n}号线',gj:'京义·中央线',arex:'机场铁路普通列车',yes:'可上车、下车',no:'不可上车、下车',exit:'仅限机场下车',diagram:'主要车站线路图',
      hint:'省略中间站，不按比例绘制。可横向滚动查看站名。符号表示所选线路各站的上下车资格，并非完整首都圈线路图。',
      status:'本次行程用卡指南',same:'请选择与上车站不同的下车站。',insideTitle:'此段可使用气候同行卡',inside:'所选线路的上车站与下车站均适用，可使用有效短期票。若换乘其他线路，还需单独确认该线路条件。',
      outsideTitle:'从最初上车站起使用普通交通卡或另购车票',outside:'上车站或下车站超出短期票适用范围。请从最初上车站起使用T-money、EZL等普通交通卡或适用车票。不能在边界站留在车内直接换卡。',
      airportTitle:'首尔 → 仁川机场：适用下车例外',airport:'可从机场铁路适用站上车，在仁川机场T1、T2下车。仅限普通列车；直达列车需另购车票。不可利用此例外在青罗国际城等其他范围外车站下车。',
      returnTitle:'仁川机场出发：需普通交通卡或另购车票',returning:'仁川机场T1、T2不能使用气候同行卡上车。前往首尔时也需从起点使用普通交通卡或相应列车车票。',
      splitTitle:'何时使用其他交通卡',split:'若计划在范围外车站下车，应在最初上车前确定付款方式。如需分段乘车，请先向站务人员确认在适用站正常出闸后重新进站的方法与费用。如已到达范围外车站，请联系站务人员结算，可能需要另付从上车站起的全程车费。',
      exception7:'7号线的适用站之间也有铁山、光明十字路口等不适用站，需逐站确认。乘车经过某站与在该站上下车不同。',
      exclusions:'新盆唐线、GTX及机场铁路直达列车需另行付费。公交需确认是否为首尔市许可的市内或社区公交。广域公交、机场巴士和其他地区许可的公交不适用。',
      all:'未显示的车站与线路请使用官方查询',official:'首尔市全站适用范围查询（韩文）',english:'首尔市英文指南与车站表',overview:'查看其他主要边界站',boundary:'适用站 → 不适用站',
      disclaimer:'首尔着陆依据官方车站表制作的指南图，并非实时路线或票价查询。出行当天请再次确认官方信息。'
    }
  };
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function lineName(r,t){return r.line==='GJ'?t.gj:r.line==='AREX'?t.arex:t.line.replace('{n}',r.line);}
  function stopName(s,lang){return lang==='ko'?s[0]:s[1]+' · '+s[0];}
  function routeName(r,t,lang){return lineName(r,t)+' · '+stopName(r.stops[0],lang)+' → '+stopName(r.stops[r.stops.length-1],lang);}
  function result(r,from,to){
    if(from===to)return 'same';
    if(r.stops[from][2]==='exit')return 'return';
    if(r.stops[from][2]==='no'||r.stops[to][2]==='no')return 'outside';
    if(r.stops[to][2]==='exit')return 'airport';
    return 'inside';
  }
  function svg(r,t,from,to){
    var w=Math.max(960,r.stops.length*170), y=150, step=(w-140)/(r.stops.length-1);
    var description=r.stops.map(function(st){return st[0]+' / '+st[1]+': '+t[st[2]];}).join('; ');
    var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' 305" role="img" aria-labelledby="cm-svg-title cm-svg-desc"><title id="cm-svg-title">'+esc(t.diagram+' · '+lineName(r,t))+'</title><desc id="cm-svg-desc">'+esc(description)+'</desc>';
    s+='<rect width="'+w+'" height="305" rx="18" fill="#101a30"/><text x="30" y="35" fill="#d8e5f8" font-size="17" font-weight="700">'+esc(lineName(r,t))+'</text>';
    s+='<path d="M70 '+y+' H'+(w-70)+'" stroke="'+r.color+'" stroke-width="8" fill="none"/>';
    r.stops.forEach(function(st,i){
      var x=70+i*step, color=st[2]==='yes'?'#98e5ba':st[2]==='exit'?'#8bcaff':'#ffb7bd';
      var mark=st[2]==='yes'?'O':st[2]==='exit'?'↓':'X';
      if(i===from||i===to)s+='<rect x="'+(x-60)+'" y="64" width="120" height="28" rx="14" fill="'+(i===from?'#253b57':'#4b3b27')+'"/><text x="'+x+'" y="83" text-anchor="middle" fill="#fff" font-size="14">'+esc(i===from?t.from:t.to)+'</text>';
      s+='<circle cx="'+x+'" cy="'+y+'" r="21" fill="#101a30" stroke="'+color+'" stroke-width="3"/><text x="'+x+'" y="157" text-anchor="middle" fill="'+color+'" font-size="21" font-weight="700">'+mark+'</text>';
      s+='<text x="'+x+'" y="203" text-anchor="middle" fill="#f2f6fc" font-size="17" font-weight="700">'+esc(st[0])+'</text>';
      // Long English station names wrap without shrinking the map's text.
      var words=st[1].split(' '), lines=['']; words.forEach(function(word){var n=lines.length-1;if((lines[n]+' '+word).length>20&&lines[n])lines.push(word);else lines[n]+=(lines[n]?' ':'')+word;});
      lines.forEach(function(l,j){s+='<text x="'+x+'" y="'+(228+j*19)+'" text-anchor="middle" fill="#b7c8df" font-size="14">'+esc(l)+'</text>';});
      s+='<text x="'+x+'" y="287" text-anchor="middle" fill="'+color+'" font-size="12">'+esc(t[st[2]])+'</text>';
    });
    return s+'</svg>';
  }
  function panel(r,t,lang,from,to){
    var kind=result(r,from,to), title=kind==='same'?t.same:t[kind+'Title'], body=kind==='same'?'':t[kind==='return'?'returning':kind];
    return '<div class="cm-map-scroll" tabindex="0" role="region" aria-label="'+esc(t.diagram)+'">'+svg(r,t,from,to)+'</div><p class="cm-hint">'+esc(t.hint)+'</p>'+
      '<div class="cm-result cm-'+kind+'" role="status"><span>'+esc(t.status)+'</span><h4>'+esc(title)+'</h4><p>'+esc(body)+'</p></div>'+(r.id==='l7'?'<p class="cm-special">'+esc(t.exception7)+'</p>':'');
  }
  function options(r,lang,selected){return r.stops.map(function(s,i){return '<option value="'+i+'"'+(i===selected?' selected':'')+'>'+esc(stopName(s,lang))+'</option>';}).join('');}
  function render(lang){
    var t=i18n[lang]||i18n.en,r=routes[0],from=r.from,to=r.stops.length-1;
    var overview=routes.filter(function(r){return r.id!=='arex'&&r.id!=='l2';}).map(function(r){var pairs=[];r.stops.forEach(function(s,i){if(i&&s[2]==='no'&&r.stops[i-1][2]==='yes')pairs.push(stopName(r.stops[i-1],lang)+' → '+stopName(s,lang));});return '<li><strong>'+esc(lineName(r,t))+'</strong><span>'+esc(pairs.join(' / '))+'</span></li>';}).join('');
    return '<section class="climate-atlas" data-climate-lang="'+lang+'"><p class="cm-date">'+esc(t.date)+'</p><h3>'+esc(t.title)+'</h3><p>'+esc(t.intro)+'</p>'+
      '<div class="cm-legend"><span class="cm-yes">O '+esc(t.yes)+'</span><span class="cm-no">X '+esc(t.no)+'</span><span class="cm-exit">↓ '+esc(t.exit)+'</span></div>'+
      '<div class="cm-controls"><label class="cm-route-label" for="cm-route">'+esc(t.choose)+'<select id="cm-route">'+routes.map(function(r){return '<option value="'+r.id+'">'+esc(routeName(r,t,lang))+'</option>';}).join('')+'</select></label>'+
      '<label for="cm-from">'+esc(t.from)+'<select id="cm-from">'+options(r,lang,from)+'</select></label><label for="cm-to">'+esc(t.to)+'<select id="cm-to">'+options(r,lang,to)+'</select></label></div>'+
      '<div id="cm-panel">'+panel(r,t,lang,from,to)+'</div><div class="cm-payment"><h4>'+esc(t.splitTitle)+'</h4><p>'+esc(t.split)+'</p></div>'+
      '<details class="cm-overview"><summary>'+esc(t.overview)+'</summary><p>'+esc(t.boundary)+'</p><ul>'+overview+'</ul></details><p class="cm-special">'+esc(t.exclusions)+'</p><p>'+esc(t.all)+'</p>'+
      '<div class="cm-links"><a href="https://func.seoul.go.kr/climateCard/rangeList.do" target="_blank" rel="noopener noreferrer">'+esc(t.official)+' ↗</a><a href="'+source+'" target="_blank" rel="noopener noreferrer">'+esc(t.english)+' ↗</a></div><p class="cm-hint">'+esc(t.disclaimer)+'</p></section>';
  }
  document.addEventListener('change',function(e){
    if(!e.target||!/^cm-(route|from|to)$/.test(e.target.id))return;
    var box=e.target.closest('.climate-atlas'); if(!box)return;
    var lang=box.getAttribute('data-climate-lang'),t=i18n[lang]||i18n.en;
    var select=document.getElementById('cm-route'),r=routes.find(function(r){return r.id===select.value;});if(!r)return;
    var a=document.getElementById('cm-from'),b=document.getElementById('cm-to');
    if(e.target.id==='cm-route'){a.innerHTML=options(r,lang,r.from);b.innerHTML=options(r,lang,r.stops.length-1);a.value=String(r.from);b.value=String(r.stops.length-1);}
    var from=Number(a.value),to=Number(b.value);if(!r.stops[from]||!r.stops[to])return;
    document.getElementById('cm-panel').innerHTML=panel(r,t,lang,from,to);
  });
  SL.climateAtlas={render:render,routes:routes,result:result};
})();
