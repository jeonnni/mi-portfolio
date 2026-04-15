import styles from "./Skills.module.scss";
import { useInView } from "../../hooks/useInView";
import {
  frontendSkills,
  serverSkills,
  designSkills,
  collaborationSkills,
} from "../../data/skillsData";

const skillGroups = [
  { label: "Frontend",               items: frontendSkills },
  { label: "Server-side Experience", items: serverSkills },
  { label: "Design",                 items: designSkills },
  { label: "Collaboration",          items: collaborationSkills },
];

const Skills = () => {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: gridRef,   inView: gridVisible }   = useInView(0.05);

  return (
    <section className={`page-enter ${styles.skillsWrapper}`}>
      <div className={styles.content}>

        {/* 제목 + 설명 */}
        <div ref={headerRef}>
          <h1 className={`${styles.title} anim ${headerVisible ? 'visible' : ''}`}>
            SKILLS
          </h1>
          <p className={`text-kr ${styles.description} anim ${headerVisible ? 'visible' : ''}`}
            style={{ '--delay': '0.12s' }}
          >
            React 기반 컴포넌트 구조 설계와 상태 관리, <br />
            API 연동을 포함한 프론트엔드 UI 개발을 수행해 왔습니다.
            <br />
            Spring 기반 백엔드 구조 이해를 바탕으로 프론트엔드–백엔드 간 데이터
            흐름을 고려한 개발이 가능합니다.
          </p>
        </div>

        {/* 스킬 그리드 */}
        <div ref={gridRef} className={styles.skillGrid}>
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.label}
              className={`${styles.skillBox} anim ${gridVisible ? 'visible' : ''}`}
              style={{ '--delay': `${groupIndex * 0.1}s` }}
            >
              <span className={styles.label}>{group.label}</span>
              <div className={styles.tagList}>
                {group.items.map((item) => (
                  <div className={styles.skillCard} key={item.name}>
                    <img src={item.img} className={styles.img} alt={item.name} />
                    <span className={styles.skillName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
