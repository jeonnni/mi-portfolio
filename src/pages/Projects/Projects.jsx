import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import OpenModal from "../../components/common/OpenModal/OpenModal";
import { projectsData } from "../../data/projectsData";
import { useInView } from "../../hooks/useInView";

const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const { ref: gridRef, inView: gridVisible } = useInView(0.05);

  // Projects는 카드가 많아 스크롤이 필요 → 이 페이지에서만 허용
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    const main = document.querySelector('main.content');
    if (main) main.style.overflow = 'visible';
    return () => {
      document.documentElement.style.overflowY = '';
      if (main) main.style.overflow = '';
    };
  }, []);

  const handleShowMore = () => setItemsToShow((prev) => prev + 3);

  return (
    <div className={`page-enter ${styles.container}`}>
      <div
        ref={gridRef}
        className={`text-kr ${styles.grid}`}
      >
        {projectsData.slice(0, itemsToShow).map((project, index) => (
          <div
            className={`${styles.card} anim ${gridVisible ? 'visible' : ''}`}
            key={project.id}
            style={{ '--delay': `${index * 0.08}s` }}
            onClick={() => OpenModal(project)}
          >
            <div className={styles.icon}>{project.icon}</div>
            <h3>{project.title}</h3>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span className="text-en" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {itemsToShow < projectsData.length && (
        <button
          className={`text-kr ${styles.moreBtn}`}
          onClick={handleShowMore}
        >
          더 보기
        </button>
      )}
    </div>
  );
};

export default Projects;
