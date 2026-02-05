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

      <p className={`text-kr ${styles.description}`}>
        React 기반 컴포넌트 구조 설계와 상태 관리, <br />
        API 연동을 포함한 프론트엔드 UI 개발을 수행해 왔습니다.
        <br />
        Spring 기반 백엔드 구조 이해를 바탕으로 프론트엔드–백엔드 간 데이터
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