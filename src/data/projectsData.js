import {
  movieImgs,
  howsImgs,
  nbtiImgs,
  cryptoImgs,
  gentlemonsterImgs,
  elementalImgs,
  locknlockImgs,
  cjoneImgs,
  samsungImgs,
} from "../assets/projectsImg";

export const projectsData = [
  {
    id: 1,
    title: "TMDB API 기반의 실시간 고평점\n영화 큐레이션 서비스",
    desc: "TMDB API를 활용해 고평점 영화를 필터링하고, 우선순위 알고리즘 기반의 유튜브 예고편을 제공하는 영화 탐색 플랫폼입니다.",
    tags: ["TMDB API", "React", "Async/Await", "Pagination"],
    icon: "🎬",
    member: "개인 프로젝트",
    period: "2025.12 ~ 2026.01",
    siteUrl: "https://jeonnni.github.io/movies/",
    githubUrl: "https://github.com/jeonnni/movies",
    details: [
      {
        point: "TMDB API 연동 및 비동기 데이터 처리",
        subPoints: [
          "TMDB Discover API를 활용하여 실시간 영화 데이터를 한국어 환경에 맞게 제공",
          "Async/Await 기반 비동기 통신으로 로딩 상태 관리 및 안정적인 데이터 바인딩 구현",
        ],
      },
      {
        point: "유튜브 예고편 우선순위 필터링 로직 구현",
        subPoints: [
          "Trailer → Teaser → Featurette 순의 콘텐츠 우선순위 알고리즘 설계",
          "YouTube key를 활용한 동적 URL 생성 및 비정상 데이터 예외 처리",
        ],
      },
      {
        point: "커스텀 평점 필터링 및 페이지네이션",
        subPoints: [
          "vote_average.gte 파라미터를 활용한 최소 평점 기준 영화 큐레이션",
          "First / Last / 이전 / 다음 버튼을 포함한 직관적인 페이지네이션 구현",
        ],
      },
      {
        point: "컴포넌트 기반 UI 아키텍처 설계",
        subPoints: [
          "Header, Footer, Movie, Detail, StarRating 컴포넌트 분리를 통한 유지보수성과 확장성 확보",
          "별점 시각화 라이브러리를 활용한 가독성 높은 UI 구성",
        ],
      },
    ],
    images: movieImgs,
  },
  {
    id: 2,
    title: "React 기반 인테리어 가구\n커머스 & 커뮤니티 플랫폼",
    desc: "React와 Spring Boot 기반의 이커머스 웹 서비스로, 상품 탐색부터 리뷰 커뮤니티까지 아우르는 사용자 중심 쇼핑 플랫폼입니다.",
    tags: ["React", "Zustand", "Firebase", "Spring Boot", "GCP", "Docker"],
    icon: "🛋️",
    member: "팀 프로젝트 (5명)",
    period: "2024.08 ~ 2024.09",
    siteUrl: "",
    githubUrl: "https://github.com/ol7mi/Hows",
    details: [
      {
        point: "프론트엔드 핵심 기능 개발 및 상태 관리",
        subPoints: [
          "Zustand를 활용한 전역 상태 관리로 상품, 카테고리, 리뷰 상태 일관성 유지",
          "Axios 기반 API 통신으로 백엔드(Spring Boot)와 데이터 연동 구현",
        ],
      },
      {
        point: "커머스 로직 및 사용자 맞춤 탐색 기능",
        subPoints: [
          "가격순 / 최신순 / 인기순 등 4종 정렬 및 카테고리 필터링 기능 구현",
          "대규모 상품 목록에서도 효율적인 탐색이 가능한 UI 흐름 설계",
        ],
      },
      {
        point: "리뷰 시스템 및 별점 UX 고도화",
        subPoints: [
          "React Star Rating과 Swiper를 활용한 직관적인 별점 및 슬라이드 UI 구현",
          "리뷰 작성·수정·삭제(CRUD) 기능 개발로 사용자 피드백 수집 구조 설계",
        ],
      },
      {
        point: "이미지 관리 및 데이터 무결성 처리",
        subPoints: [
          "Google Cloud Storage(GCS) 연동으로 리뷰 이미지 업로드 및 관리 기능 구현",
          "리뷰 수정/삭제 시 GCS와 DB 데이터를 동기화하여 데이터 정합성 유지",
        ],
      },
      {
        point: "배포 환경 구축 및 협업 프로세스",
        subPoints: [
          "Firebase(Frontend)와 GCP Cloud Run(Backend) 분리 배포 환경 구성",
          "Docker 기반 서버 구성 및 Jira, GitKraken을 활용한 스프린트·이슈 관리",
        ],
      },
    ],
    images: howsImgs,
  },
  {
    id: 3,
    title: "기업 관리 전산 시스템\n(일정 · 자원 예약 · 관리자 페이지)",
    desc: "사내 업무 효율 향상을 목표로 일정 관리와 자원 예약 기능을 제공하는 기업 관리 전산 웹 시스템입니다.",
    tags: ["React", "FullCalendar", "Zustand", "Java", "Oracle", "JDBC"],
    icon: "🏢",
    member: "팀 프로젝트 (4명)",
    period: "2024.07 ~ 2024.08",
    siteUrl: "",
    githubUrl: "https://github.com/ol7mi/NBTI",
    details: [
      {
        point: "전역 상태 관리 및 데이터 흐름 설계",
        subPoints: [
          "Zustand를 활용해 일정 및 자원 예약 데이터를 전역 상태로 관리",
          "여러 컴포넌트 간 데이터 불일치를 방지하여 유지보수성과 확장성 향상",
        ],
      },
      {
        point: "일정 관리 및 자원 예약 시스템 구현",
        subPoints: [
          "회의실, 차량, 비품 등 사내 자원 예약 기능 설계 및 구현",
          "FullCalendar 라이브러리를 활용해 예약 현황을 직관적인 캘린더 UI로 시각화",
        ],
      },
      {
        point: "관리자 전용 기능 및 권한 기반 UI",
        subPoints: [
          "관리자 전용 CRUD 페이지 구현으로 자원 및 일정 관리 효율화",
          "권한별 화면 분기 처리로 일반 사용자와 관리자 UI 명확히 구분",
        ],
      },
      {
        point: "DB 설계 및 연동을 통한 시스템 안정성 확보",
        subPoints: [
          "SQL Developer를 활용한 Oracle DB 설계 및 데이터 구조 관리",
          "JDBC 기반 DB 연동으로 예약/일정 데이터의 정합성 유지",
        ],
      },
      {
        point: "업무 효율 중심 UX 개선",
        subPoints: [
          "복잡한 예약 프로세스를 최소한의 인터랙션으로 처리하도록 UI 개선",
          "실제 기업 업무 흐름을 고려한 화면 구성으로 관리자 사용성 강화",
        ],
      },
    ],
    images: nbtiImgs,
  },
  {
    id: 4,
    title: "웹 게임 포털 사이트\n(Java Servlet 기반 미니게임 플랫폼)",
    desc: "Java Servlet/JSP 기반의 웹 게임 포털로, 미니게임 플레이와 커뮤니티 기능을 결합한 웹 서비스입니다.",
    tags: ["Java", "Servlet", "JSP", "JavaScript", "Phaser3", "Tomcat"],
    icon: "🎮",
    member: "팀 프로젝트 (4명)",
    period: "2024.06",
    siteUrl: "",
    githubUrl: "https://github.com/ol7mi/Wolf-Project",
    details: [
      {
        point: "웹 서비스 클라이언트-서버 구조 학습",
        subPoints: [
          "Servlet/JSP 기반 MVC 구조를 직접 구현하며 요청·응답 흐름 이해",
          "Tomcat WAS 환경에서 웹 애플리케이션 배포 및 실행 경험",
        ],
      },
      {
        point: "미니게임 개발 및 포털 통합",
        subPoints: [
          "Phaser3 라이브러리를 활용한 ‘자동차 피하기’ 게임 개발",
          "게임 로직을 웹 포털에 통합하여 즉시 플레이 가능한 구조 구현",
        ],
      },
      {
        point: "메인 페이지 및 게임 탐색 UI 설계",
        subPoints: [
          "게임 목록, 게임 상세 페이지 등 포털 핵심 화면 설계 및 구현",
          "HTML/CSS/JS 기반 반응형 UI 구성으로 사용자 접근성 개선",
        ],
      },
      {
        point: "DB 연동 및 커뮤니티 기능 구현",
        subPoints: [
          "Oracle DB와 연동하여 게시판 및 게임 관련 커뮤니티 기능 구현",
          "JSTL 및 JDBC(OJDBC)를 활용한 서버 사이드 렌더링 처리",
        ],
      },
      {
        point: "웹 애플리케이션 전반 이해도 향상",
        subPoints: [
          "게임, 게시판, 사용자 인터랙션을 하나의 서비스로 통합",
          "프론트엔드와 백엔드 간 데이터 흐름에 대한 실전 경험 축적",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Crypto Converter\n실시간 암호화폐 환율 계산기",
    desc: "React와 Coinpaprika API를 활용해 상위 100위 암호화폐의 실시간 시세를 반영하고, USD 기준으로 보유 가능한 코인 수량을 즉시 계산해주는 환율 계산기 프로젝트입니다.",
    tags: ["React", "Coinpaprika API"],
    icon: "⚡",
    member: "개인 프로젝트",
    period: "2025.12 ~ 2026.01",
    siteUrl: "https://jeonnni.github.io/crypto-converter/",
    githubUrl: "https://github.com/jeonnni/crypto-converter",
    details: [
      {
        point: "실시간 암호화폐 데이터 연동",
        subPoints: [
          "Coinpaprika API를 활용해 시가총액 상위 100위 암호화폐 리스트 및 실시간 시세 반영",
          "JSON 데이터 파싱을 통해 코인 가격 정보를 안정적으로 처리",
        ],
      },
      {
        point: "실시간 환율 계산 로직 구현",
        subPoints: [
          "USD 입력 시 선택된 코인의 수량을 즉시 계산하는 실시간 변환 기능 구현",
          "입력값과 선택값을 양방향 상태로 연동하여 즉각적인 결과 반영",
        ],
      },
      {
        point: "UX 중심 로딩 핸들링",
        subPoints: [
          "데이터 로딩 중 불필요한 0 값 노출을 방지하는 조건부 렌더링 적용",
          "Skeleton 스타일의 로딩 메시지로 사용자 경험 개선",
        ],
      },
      {
        point: "트렌디한 UI 및 스타일링",
        subPoints: [
          "Glassmorphism 디자인을 적용해 배경 블러와 반투명 컨테이너 구성",
          "Space Grotesk(영문)와 Noto Sans KR(국문) 폰트 페어링으로 가독성 강화",
        ],
      },
      {
        point: "비동기 처리 및 로직 최적화",
        subPoints: [
          "useEffect와 fetch를 활용한 비동기 데이터 로딩 흐름 이해",
          "입력값 유효성 검사를 통한 정확한 계산 결과 도출",
        ],
      },
    ],
    images: cryptoImgs,
  },
  {
    id: 6,
    title: "Gentle Monster 브랜드 사이트 리디자인\n반응형 그리드 시스템 구축",
    desc: "Bootstrap 그리드 시스템을 기반으로 브랜드 사이트를 재구성하며 반응형 레이아웃 설계 역량을 강화한 UI 프로젝트입니다.",
    tags: ["Responsive Design", "Bootstrap", "UI Layout"],
    icon: "👓",
    member: "개인 프로젝트",
    period: "2024.04",
    siteUrl: "https://jeonnni.github.io/gentlemonster/",
    githubUrl: "https://github.com/jeonnni/gentlemonster",
    images: gentlemonsterImgs,
  },
  {
    id: 7,
    title: "Elemental 컨셉 기반\n시각적 인터랙션 웹 구현",
    desc: "애니메이션 영화 Elemental의 색감과 분위기에서 영감을 받아 HTML/CSS 중심의 시각적 인터랙션을 구현한 디자인 프로젝트입니다.",
    tags: ["UI Design", "CSS Animation", "Visual Interaction"],
    icon: "🔥",
    member: "개인 프로젝트",
    period: "2024.03",
    siteUrl: "https://ol7mi.github.io/elemental/",
    githubUrl: "https://github.com/ol7mi/elemental",
    images: elementalImgs,
  },
  {
    id: 8,
    title: "LocknLock 브랜드 사이트\n바닐라 자바스크립트 클론 코딩",
    desc: "Lock&Lock 공식 홈페이지의 UI 패턴을 분석하고, HTML/CSS와 JavaScript(jQuery)를 사용해 동적 UI 요소와 사용자 인터랙션을 직접 구현한 클론 프로젝트입니다.",
    tags: ["Vanilla JS", "Web Standard", "DOM Manipulation"],
    icon: "🍱",
    member: "개인 프로젝트",
    period: "2022.08",
    siteUrl: "https://ol7mi.github.io/locknlock/",
    githubUrl: "https://github.com/ol7mi/locknlock",
    images: locknlockImgs,
  },
  {
    id: 9,
    title: "CJ ONE 멤버십 플랫폼\n웹 표준 기반 UI 구조 설계",
    desc: "CJ ONE 공식 홈페이지를 벤치마킹하여 웹 표준 기반의 레이아웃 구조와 사용자 흐름을 분석하고, HTML/CSS 및 JavaScript(jQuery)를 활용해 주요 UI 인터랙션을 재현한 프로젝트입니다.",
    tags: ["Web Standard", "Semantic HTML", "Vanilla JS"],
    icon: "💳",
    member: "개인 프로젝트",
    period: "2022.08",
    siteUrl: "https://ol7mi.github.io/cjone/",
    githubUrl: "https://github.com/ol7mi/cjone",
    images: cjoneImgs,
  },
  {
    id: 10,
    title: "Samsung 공식 홈페이지 벤치마킹\n대규모 웹 UI 구조 분석",
    desc: "삼성전기 공식 홈페이지를 참고하여 대기업 웹 서비스의 레이아웃 구성과 콘텐츠 배치 방식을 분석하고, HTML/CSS 중심으로 정적인 UI 구조를 구현하며 웹 표준과 마크업 구조에 대한 이해를 강화한 프로젝트입니다.",
    tags: ["UI Architecture", "Web Standard", "DOM Performance"],
    icon: "📱",
    member: "개인 프로젝트",
    period: "2022.08",
    siteUrl: "https://ol7mi.github.io/samsung/",
    githubUrl: "https://github.com/ol7mi/samsung",
    images: samsungImgs,
  },
];
