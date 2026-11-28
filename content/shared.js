/* 서울 착륙 — 언어와 상관없이 같은 값 (링크, 영상 ID, 여행지 공통 데이터)
   링크를 바꿀 때는 여기만 고치면 세 언어에 모두 반영돼요. */
window.SL = window.SL || {};
window.SL.shared = {
  updated: "2026-11",
  links: {
    tmoney: "https://www.tmoney.co.kr",
    ezl: "https://www.myezl.com",
    naver: "https://map.naver.com",
    kakao: "https://map.kakao.com",
    papago: "https://papago.naver.com",
    korail: "https://www.letskorail.com",
    visitkorea: "https://english.visitkorea.or.kr",
    visitseoul: "https://www.visitseoul.net",
    culture: "https://culture.seoul.go.kr",
    seoulmetro: "https://www.seoulmetro.co.kr/",
    topis: "https://topis.seoul.go.kr",
    lost112: "https://minwon24.police.go.kr/cvlcpt/cvlcptGdInfo.do?cvlcptId=MW-201",
    uber: "https://www.uber.com",
    popga: "https://popga.co.kr",
    weverse: "https://weverse.io",
    nolworld: "https://world.nol.com"
  },
  /* kind: "video" = 일반 영상, "short" = 쇼츠 */
  videos: {
    V05: { id: "bC2mR3u8pBs", kind: "video" },
    V06: { id: "ec-WhDCsPMk", kind: "video" },
    V07: { id: "fPiD7da0njc", kind: "video" },
    V08: { id: "BRBa1vnlEhw", kind: "short" }
  },
  /* 여행지 9곳 공통 정보 (순서 = 당일치기 → 1박 2일 → 2박 3일)
     photos  : 대표 사진 (로컬 파일 경로)
     photoMeta: 사진별 다국어 설명 · 촬영자 · 출처 · 라이선스
     vlogs   : videos 의 코드. 제목·요약은 places.js 의 vlog.items 순서와 맞춰요
     minutes : 서울에서 이동시간(분) [가장 빠른, 가장 느린]
     level   : 현지 이동 난이도 1 쉬움 · 2 보통 · 3 어려움
     station : 도착역(터미널) 한국어 이름 — 지도 검색 · 복사용
     spots   : 주요 볼거리 한국어 이름 — places.js 의 sights 와 같은 순서
     food    : 네이버지도 맛집 검색어
     official: 공식 관광 사이트 */
  places: {
    seongbuk: { photos: ["assets/trips/seongbuk-1.jpg"], photoMeta: [{"alt": {"ko": "성북동 길상사", "zh": "城北洞吉祥寺", "ja": "城北洞・吉祥寺", "en": "Gilsangsa Temple, Seongbuk-dong"}, "title": "길상사(吉祥寺, Gilsangsa Temple) 091122 1.jpg", "author": "S h y numis", "source": "https://commons.wikimedia.org/wiki/File:%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_1.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}], minutes: [15, 40], level: 1, station: "한성대입구역", spots: ["최순우옛집", "수연산방", "심우장", "길상사"], food: "성북동 맛집", official: "https://www.sb.go.kr/tour" },
    yangpyeong: { photos: ["assets/trips/yangpyeong-1.jpg", "assets/trips/yangpyeong-2.jpg", "assets/trips/yangpyeong-3.jpg"], vlogs: ["V06"], minutes: [60, 90], level: 1, station: "양수역", spots: ["두물머리", "세미원", "양수리"], food: "양수역 맛집", official: "https://tour.yp21.go.kr/" },
    yeoju: { photos: ["assets/trips/yeoju-1.jpg", "assets/trips/yeoju-2.jpg", "assets/trips/yeoju-3.jpg"], vlogs: ["V07", "V08"], minutes: [60, 100], level: 2, station: "여주역", spots: ["세종대왕릉", "신륵사", "여주 남한강"], food: "여주 신륵사 맛집", official: "https://www.yeoju.go.kr/tour/" },
    wonju: { photos: ["assets/trips/wonju-1.jpg"], photoMeta: [{"alt": {"ko": "원주 강원감영", "zh": "原州江原监营", "ja": "原州・江原監営", "en": "Gangwon Gamyeong, Wonju"}, "title": "Gangwon Gamyeong, in Wonju, Gangwon Province, South Korea.jpg", "author": "Cultural Heritage Administration (문화재청)", "source": "https://commons.wikimedia.org/wiki/File:Gangwon_Gamyeong%2C_in_Wonju%2C_Gangwon_Province%2C_South_Korea.jpg", "license": "KOGL Type 1", "licenseUrl": "https://www.kogl.or.kr/info/licenseType1.do"}], minutes: [50, 75], level: 2, station: "원주역", spots: ["원주한지테마파크", "강원감영", "원주중앙시장"], food: "원주 중앙시장 맛집", official: "https://www.wonju.go.kr/tour/contents.do?key=6480" },
    asan: { photos: ["assets/trips/asan-1.jpg"], photoMeta: [{"alt": {"ko": "아산 외암민속마을", "zh": "牙山外岩民俗村", "ja": "牙山・外岩民俗村", "en": "Oeam Folk Village, Asan"}, "title": "Oeam Folk Village 2010.JPG", "author": "Jjw", "source": "https://commons.wikimedia.org/wiki/File:Oeam_Folk_Village_2010.JPG", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}], minutes: [90, 125], level: 2, station: "온양온천역", spots: ["온양온천역", "온양온천시장", "외암민속마을"], food: "온양온천역 맛집", official: "https://www.asan.go.kr/main/" },
    chungju: { photos: ["assets/trips/chungju-1.jpg"], photoMeta: [{"alt": {"ko": "충주 탄금호", "zh": "忠州弹琴湖", "ja": "忠州・弾琴湖", "en": "Tangeum Lake, Chungju"}, "title": "Tangeumlake.jpg", "author": "Kimhs5400(블루시티)", "source": "https://commons.wikimedia.org/wiki/File:Tangeumlake.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}], minutes: [65, 100], level: 2, station: "충주역", spots: ["중앙탑사적공원", "충주박물관", "탄금호"], food: "충주 중앙탑 맛집", official: "https://www.chungju.go.kr/tour/" },
    jecheon: { photos: ["assets/trips/jecheon-1.jpg"], photoMeta: [{"alt": {"ko": "제천 의림지", "zh": "堤川义林池", "ja": "堤川・義林池", "en": "Uirimji Reservoir, Jecheon"}, "title": "봄철 우륵호의 전경.jpg", "author": "류금열", "source": "https://commons.wikimedia.org/wiki/File:%EB%B4%84%EC%B2%A0_%EC%9A%B0%EB%A5%B5%ED%98%B8%EC%9D%98_%EC%A0%84%EA%B2%BD.jpg", "license": "CC0 1.0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"}], minutes: [70, 100], level: 3, station: "제천역", spots: ["의림지", "청풍호", "청풍문화유산단지", "청풍호반케이블카"], food: "제천 중앙시장 맛집", official: "https://tour.jecheon.go.kr/tour/base/tour/contents/view?clturCntntsNo=971&menuLevel=3&menuNo=84" },
    gongbu: { photos: ["assets/trips/gongbu-1.jpg"], photoMeta: [{"alt": {"ko": "공주 공산성", "zh": "公州公山城", "ja": "公州・公山城", "en": "Gongsanseong Fortress, Gongju"}, "title": "공주공산성-Gongsanseong-Fortress-1.jpg", "author": "Korearoadtour", "source": "https://commons.wikimedia.org/wiki/File:%EA%B3%B5%EC%A3%BC%EA%B3%B5%EC%82%B0%EC%84%B1-Gongsanseong-Fortress-1.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}], minutes: [110, 170], level: 2, station: "공주종합버스터미널", spots: ["공산성", "무령왕릉과 왕릉원", "국립공주박물관", "부소산성", "궁남지", "정림사지"], food: "공주 산성시장 맛집", official: "https://www.buyeo.go.kr/html/tour/" },
    gangneung: { photos: ["assets/trips/gangneung-1.jpg"], photoMeta: [{"alt": {"ko": "강릉 경포해변", "zh": "江陵镜浦海滩", "ja": "江陵・鏡浦海岸", "en": "Gyeongpo Beach, Gangneung"}, "title": "Gyeongpo Beach 1.jpg", "author": "Christophe95", "source": "https://commons.wikimedia.org/wiki/File:Gyeongpo_Beach_1.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}], minutes: [91, 110], level: 2, station: "강릉역", spots: ["안목커피거리", "오죽헌", "경포호", "정동진역"], food: "강릉 초당순두부", official: "https://www.gn.go.kr/entour/index.do" }
  }
};
