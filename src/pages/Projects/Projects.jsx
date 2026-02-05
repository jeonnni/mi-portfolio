import { useState } from "react";
import styles from "./Projects.module.scss";
import OpenModal from "../../components/common/OpenModal/OpenModal";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(3); // 초기에 보여줄 프로젝트 수
  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 3); 
  };
  const onOpenModal = (project)=> {
    // console.log(project);
    OpenModal(project);
  }

  return (
    <div className={styles.container}>
      <div className={`text-kr ${styles.grid}`}>
        {projectsData.slice(0, itemsToShow).map((project) => (
          <div
            className={styles.card}
            key={project.id}
            onClick={() => onOpenModal(project)}
          >
            <div className={styles.icon}>{project.icon}</div>
            <h3>{project.title}</h3>
            <p>
              {project.desc.length > 10
                ? `${project.desc.slice(0, 50)}...`
                : project.desc}
            </p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span className="text-en" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 모든 데이터를 다 보여주면 버튼 숨김 */}
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
