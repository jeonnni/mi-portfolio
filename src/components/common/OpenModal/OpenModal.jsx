import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./OpenModal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MySwal = withReactContent(Swal);

const OpenModal = (project) => {
    // 사이트 주소가 있는지 확인
    const hasUrl = !!project.siteUrl;
    MySwal.fire({
      html: (
        <div
          className={`text-kr ${styles.modal_container}`}
          style={{
            maxHeight: "75vh",
            padding: "50px 40px",
            textAlign: "left",
            backgroundColor: "#fff",
          }}
        >
          {/* 제목 */}
          <h1 className={styles.modal_title}>
            {project.title.replace("\n", " ")}
          </h1>
          <div className={styles.modal_content}>
            {/* 프로젝트 이미지 */}
            {project.images && project.images.length > 0 && (
              <div className={styles.modal_swiper_wrapper}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  // navigation
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
              {/* <h3 className={styles.section_label}>프로젝트 설명</h3> */}
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
            <div className={styles.modal_section}>
              {!project.details ? null : (
                <>
                  <h2 className={styles.detail_title}>상세 내용</h2>
                  <div className={styles.detail_list}>
                    {project.details &&
                      project.details.map((item, index) => (
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
                </>
              )}
            </div>
          </div>
        </div>
      ),
      // icon: "info",
      width: "700px",
      backdrop: true,
      showCloseButton: true,
      heightAuto: false, // <body> 높이 고정 방지
      customClass: {
        popup: "my-project-modal", // CSS에서 height: auto를 주기 위해
        htmlContainer: "my-html-area", // 내부 스크롤 영역을 잡기 위해
      },
      showConfirmButton: hasUrl, // 주소가 있을 때만 confirmButtonText 노출
      confirmButtonText: "VISIT SITE",
      confirmButtonColor: "#3085d6",
      didOpen: () => {
        document.body.style.removeProperty("padding-right");
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // 사용자가 'VISIT SITE'를 눌렀을 때 true가 됨
        if (project.siteUrl) {
          window.open(project.siteUrl, "_blank");
        } else {
          alert(
            "본 프로젝트는 현재 서비스 운영이 종료되어 상세 구현 내용은 코드로 확인 가능합니다.",
          );
        }
      }
    }); 
};

export default OpenModal;
