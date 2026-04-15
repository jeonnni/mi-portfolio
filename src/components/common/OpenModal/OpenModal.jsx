import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./OpenModal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MySwal = withReactContent(Swal);

const OpenModal = (project) => {
    const hasUrl = !!project.siteUrl;
    const isDark = document.body.classList.contains("dark-mode");

    MySwal.fire({
      html: (
        <div
          className={`text-kr ${styles.modal_container}`}
          style={{
            maxHeight: "75vh",
            padding: "50px 40px",
            textAlign: "left",
            backgroundColor: isDark ? "var(--border-dark)" : "var(--white)",
            color: isDark ? "var(--white-soft)" : "var(--black-light)",
          }}
        >
          {/* 제목 */}
          <h1 className={styles.modal_title}>
            {project.title.replace(/\n/g, " ")}
          </h1>
          <div className={styles.modal_content}>
            {/* 프로젝트 이미지 */}
            {project.images && project.images.length > 0 && (
              <div className={styles.modal_swiper_wrapper}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`slide-${index}`}
                        className={styles.project_img}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {/* 설명 */}
            <div className={styles.modal_section}>
              <p className={styles.section_text}>{project.desc}</p>
            </div>

            {/* 기술 */}
            <div className={styles.modal_section}>
              <h3 className={styles.section_label}>기술 스택</h3>
              <div className={styles.modal_tags}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-en ${styles.modal_tag_item}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 참여인원, 기간, 링크 */}
            <div className={styles.modal_meta_grid}>
              <div className={styles.meta_item}>
                <h3>참여인원</h3>
                <p>{project.member || "1명"}</p>
              </div>
              <div className={styles.meta_item}>
                <h3>기간</h3>
                <p>{project.period || "2023.00 ~ 2023.00"}</p>
              </div>
              <div className={styles.meta_item}>
                <h3>관련 링크</h3>
                <div className={styles.meta_links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
            <hr className={styles.modal_divider} />
            {/* 상세 내용 */}
            {project.details && (
              <div className={styles.modal_section}>
                <h2 className={styles.detail_title}>상세 내용</h2>
                <div className={styles.detail_list}>
                  {project.details.map((item, index) => (
                    <div key={index} className={styles.detail_item}>
                      <p className={styles.detail_main_text}>
                        {index + 1}. {item.point}
                      </p>
                      <ul className={styles.detail_sub_list}>
                        {item.subPoints &&
                          item.subPoints.map((sub, i) => (
                            <li key={i}>{sub}</li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
      width: "700px",
      backdrop: true,
      showCloseButton: true,
      heightAuto: false,
      customClass: {
        popup: isDark ? "my-project-modal dark-modal" : "my-project-modal",
        htmlContainer: "my-html-area",
      },
      showConfirmButton: hasUrl,
      confirmButtonText: "VISIT SITE",
      confirmButtonColor: "#3085d6",
      didOpen: () => {
        document.body.style.removeProperty("padding-right");
      },
    }).then((result) => {
      if (result.isConfirmed && project.siteUrl) {
        window.open(project.siteUrl, "_blank");
      }
    });
};

export default OpenModal;
