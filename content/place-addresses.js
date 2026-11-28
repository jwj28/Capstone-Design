/* Korean place names and visitor addresses, checked against the linked official
   sources on 2026-11-27. Array order matches shared.places[key].spots.
   An empty address means the entry is an area/lake/river without a single
   verified street address; copy its Korean place name instead.
   Busosanseong uses the visitor car park specified by Buyeo County. */
window.SL = window.SL || {};
window.SL.placeAddresses = {
  seongbuk: [
    { name: "최순우옛집", address: "서울특별시 성북구 성북로15길 9", source: "https://www.sb.go.kr/tour/contents.do?key=138" },
    { name: "수연산방", address: "서울특별시 성북구 성북로26길 8", source: "https://japanese.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=82388" },
    { name: "심우장", address: "서울특별시 성북구 성북로29길 24", source: "https://archive.sb.go.kr/story/781" },
    { name: "길상사", address: "서울특별시 성북구 선잠로5길 68", source: "https://www.sb.go.kr/tour/contents.do?key=7683" }
  ],
  yangpyeong: [
    { name: "두물머리", address: "경기도 양평군 양서면 두물머리길 145", source: "https://ggtour.or.kr/travel-info/tourism-info/725b764d-746a-11ee-b910-0242ac120002" },
    { name: "세미원", address: "경기도 양평군 양서면 양수로 93", source: "https://www.semiwon.or.kr/content.htm?page_id=location" },
    { name: "양수리", address: "", source: "https://tour.yp21.go.kr/www/contents.do?key=135" }
  ],
  yeoju: [
    { name: "세종대왕릉", address: "경기도 여주시 세종대왕면 영릉로 269-10", source: "https://royal.khs.go.kr/ROYAL/contents/R707000000.do?ilIdx=20231030072949633973&schGroupCode=rtm" },
    { name: "신륵사", address: "경기도 여주시 신륵사길 73", source: "https://gnews.gg.go.kr/news/news_detail.do?number=202611041203109479C076&s_code=C501" },
    { name: "여주 남한강", address: "", source: "https://www.ggtour.or.kr/dulegil/usr/wap/detail.do?app=24910&seq=10034" }
  ],
  wonju: [
    { name: "원주한지테마파크", address: "강원특별자치도 원주시 한지공원길 151", source: "https://www.wonju.go.kr/tour/contents.do?key=6480" },
    { name: "강원감영", address: "강원특별자치도 원주시 원일로 77", source: "https://www.wonju.go.kr/tour/contents.do?key=5523" },
    { name: "원주중앙시장", address: "강원특별자치도 원주시 중앙시장길 6", source: "https://www.wonju.go.kr/www/contents.do?key=395" }
  ],
  asan: [
    { name: "온양온천역", address: "충청남도 아산시 온천대로 1496", source: "https://www.asan.go.kr/town/onyang2/node/?menu=010200" },
    { name: "온양온천시장", address: "충청남도 아산시 시장길 29", source: "https://www.asan.go.kr/main/cms/?no=286" },
    { name: "외암민속마을", address: "충청남도 아산시 송악면 외암민속길9번길 13-2", source: "https://tour.chungnam.go.kr/prog/trsrcn/kor/sub02_01_02/view.do?trsrcnNo=879" }
  ],
  chungju: [
    { name: "중앙탑사적공원", address: "충청북도 충주시 중앙탑면 중앙탑길 112-28", source: "https://www.kctg.or.kr/tour/touristSiteView.do?tourist_cd=TOURIST_ID00010526" },
    { name: "충주박물관", address: "충청북도 충주시 중앙탑면 중앙탑길 112-28", source: "https://tour.chungbuk.go.kr/www/selectTourCntnts.do?key=60&searchMainSe=ATTR&tourNo=623" },
    { name: "탄금호", address: "", source: "https://tour.chungbuk.go.kr/www/selectTourCntnts.do?key=60&searchMainSe=ATTR&tourNo=2601" }
  ],
  jecheon: [
    { name: "의림지", address: "충청북도 제천시 의림지로 33", source: "https://tour.jecheon.go.kr/tour/base/tour/contents/view?clturCntntsNo=1117&menuLevel=3&menuNo=46" },
    { name: "청풍호", address: "", source: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=a30b2fab-0e08-4cc8-9f58-f56edf1abae4" },
    { name: "청풍문화유산단지", address: "충청북도 제천시 청풍면 청풍호로 2048", source: "https://access.visitkorea.or.kr/ms/detail.do?cotId=8535e686-de1e-4248-81b3-f4f043c332d7" },
    { name: "청풍호반케이블카", address: "충청북도 제천시 청풍면 문화재길 166", source: "https://tour.jecheon.go.kr/tour/base/tour/contents/view?clturCntntsNo=3727&menuLevel=3&menuNo=48" }
  ],
  gongbu: [
    { name: "공산성", address: "충청남도 공주시 웅진로 280", source: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110924" },
    { name: "무령왕릉과 왕릉원", address: "충청남도 공주시 왕릉로 37", source: "https://cyber.gongju.go.kr/onnuri/sub05_01_06.do" },
    { name: "국립공주박물관", address: "충청남도 공주시 관광단지길 34", source: "https://cyber.gongju.go.kr/onnuri/sub05_01_06.do" },
    { name: "부소산성", address: "충청남도 부여군 부여읍 성왕로 247-9 (주차장)", source: "https://www.buyeo.go.kr/html/tour/info/info_01110103.html" },
    { name: "궁남지", address: "충청남도 부여군 부여읍 궁남로 52", source: "https://www.buyeo.go.kr/html/tour/info/info_01020103.html" },
    { name: "정림사지", address: "충청남도 부여군 부여읍 정림로 83", source: "https://bysmart.buyeo.go.kr/url/mobile/mainPage?mainUrl=%2Furl%2Fenjoyu%2Ftour%2FOMUL_000000000000182" }
  ],
  gangneung: [
    { name: "안목커피거리", address: "강원특별자치도 강릉시 창해로14번길 20-1", source: "https://access.visitkorea.or.kr/ms/detail_print.do?cotId=24329859-4dc1-44d0-96e5-fc20e0eb0553" },
    { name: "오죽헌", address: "강원특별자치도 강릉시 율곡로3139번길 24", source: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110823" },
    { name: "경포호", address: "", source: "https://access.visitkorea.or.kr/ms/detail.do?cotId=8f82f247-b041-4223-8d0b-ab9deaa81ce6" },
    { name: "정동진역", address: "강원특별자치도 강릉시 강동면 정동역길 17", source: "https://access.visitkorea.or.kr/ms/detail.do?cotId=d65d01db-5529-401b-8e71-efeb9b16f216" }
  ]
};
