import styles from "./About.module.scss";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; // 기본 스타일

const About = () => {
  const navigate = useNavigate();
  const skillInfo = [
    // 개발 역량
    {
      id: 1,
      title: "Frontend & SERVICE FLOW",
      description:
        "HTML, CSS, JavaScript 기반으로 웹 표준과 접근성을 고려한 퍼블리싱을 수행했으며, React를 활용해 컴포넌트 구조 설계와 UI 개발을 진행했습니다. Spring Boot 기반 REST API 연동 프로젝트를 통해 프론트엔드와 백엔드 간 데이터 흐름을 이해하고 협업 구조를 고려한 개발을 해왔습니다.",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "React"],
    },
    // 협업 및 디자인
    {
      id: 2,
      title: "Design & Tools",
      description:
        "Figma, Adobe XD 기반 디자인 시안을 해석하여 화면에 구현했으며, GitHub와 Jira를 활용해 이슈 관리 및 협업을 진행했습니다.",
      tags: ["Figma", "Adobe XD", "GitHub", "Jira"],
    },
  ];
  
  return (
    <div className={styles.container}>
      <Swiper
        direction={"horizontal"} // 가로 방향
        slidesPerView={1} // 한 번에 한 페이지
        mousewheel={true} // 마우스 휠로 넘기기
        pagination={{ clickable: true }} // 아래쪽에 점 표시
        modules={[Pagination, Mousewheel]}
        className={styles.mySwiper}
      >
        {/* 첫 번째 슬라이드 */}
        <SwiperSlide className={styles.slide}>
          <div className={styles.content}>
            <h1 className={styles.name}>JEON EUNMI</h1>
            <div className={styles.line}></div>
            <p className={styles.job}>
              Frontend
              <span className={styles.wordBox}>
                <strong className={styles.word}>Developer</strong>
                <strong className={styles.word}>React</strong>
                <strong className={styles.word}>UI / UX</strong>
              </span>
            </p>
            <button
              className={styles.goBtn}
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>
          </div>
        </SwiperSlide>
        {/* 두 번째 슬라이드 */}
        <SwiperSlide className={styles.slide}>
          <div className={styles.content}>
            <h1 className={styles.name}>CAPABILITY</h1>
            <div className={styles.line}></div>

            <div className={styles.doubleCard}>
              {skillInfo.map((item) => (
                <div className={styles.infoGroup} key={item.id}>
                  <h3 className={styles.skillTitle}>{item.title}</h3>
                  <p className={`text-kr ${styles.description}`}>
                    {item.description}
                  </p>
                  <div className={styles.tags}>
                    {item.tags &&
                      item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;