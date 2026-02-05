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
        "HTML, CSS, JavaScript를 기반으로 웹 표준과 접근성을 고려한 퍼블리싱과 React를 활용한 사용자 중심 UI 구현이 가능합니다. Java · Spring 기반 풀스택 과정을 수료하여 백엔드 흐름과 API 구조를 이해하고 있으며, 개발자 간 협업을 고려한 프론트엔드 개발을 지향합니다.",
      tags: ["HTML5", "CSS3", "jQuery", "JavaScript (ES6+)", "React"],
    },
    // 협업 및 디자인
    {
      id: 2,
      title: "Design & Tools",
      description:
        "Figma, Adobe XD를 활용해 디자인 시안을 이해하고 UI로 구현할 수 있습니다. GitHub와 Jira를 통해 작업 이력 관리와 협업 경험이 있으며, 팀 프로젝트 환경에 빠르게 적응할 수 있습니다.",
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
              Creative
              <span className={styles.wordBox}>
                <strong className={styles.word}>Developer</strong>
                <strong className={styles.word}>Fast Learner</strong>
                <strong className={styles.word}>Publisher</strong>
              </span>
            </p>
            <button
              className={styles.goBtn}
              onClick={() => navigate("/projects")}
            >
              Go Project
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
                  <p
                    className={`text-kr ${styles.description}`}
                  >
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