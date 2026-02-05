import styles from "./Skills.module.scss";
import {
  frontendSkills,
  serverSkills,
  designSkills,
  collaborationSkills,
} from "../../data/skillsData";

const Skills = () => {
return (
  <section className={styles.skillsWrapper}>
    <div className={styles.content}>
      <h1 className={styles.title}>SKILLS</h1>

      <p
        className={`text-kr ${styles.description}`}
      >
        프론트엔드 개발을 중심으로 UI 구조 설계와 사용자 경험을 고려한 웹 서비스
        구현에 집중하고 있습니다. <br />
        React 기반 컴포넌트 설계와 상태 관리, 비동기 데이터 처리 경험을 보유하고
        있으며, <br />
        Java/Spring 기반 백엔드 구조에 대한 이해를 바탕으로 API 연동과 데이터
        흐름을 고려한 개발이 가능합니다.
      </p>

      <div className={styles.skillGrid}>
        {/* 프론트엔드 */}
        <div className={styles.skillBox}>
          <span className={styles.label}>Frontend</span>
          <div className={styles.tagList}>
            {frontendSkills.map((item, index) => (
              <div className={styles.skillCard} key={index}>
                <img src={item.img} className={styles.img} alt={item.name} />
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 서버 */}
        <div className={styles.skillBox}>
          <span className={styles.label}>Server-side Experience</span>
          <div className={styles.tagList}>
            {serverSkills.map((item, index) => (
              <div className={styles.skillCard} key={index}>
                <img src={item.img} className={styles.img} alt={item.name} />
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 디자인 */}
        <div className={styles.skillBox}>
          <span className={styles.label}>Design</span>
          <div className={styles.tagList}>
            {designSkills.map((item, index) => (
              <div className={styles.skillCard} key={index}>
                <img src={item.img} className={styles.img} alt={item.name} />
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 협업 도구 */}
        <div className={styles.skillBox}>
          <span className={styles.label}>Collaboration</span>
          <div className={styles.tagList}>
            {collaborationSkills.map((item, index) => (
              <div className={styles.skillCard} key={index}>
                <img src={item.img} className={styles.img} alt={item.name} />
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Skills;