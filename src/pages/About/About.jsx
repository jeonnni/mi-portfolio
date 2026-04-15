import { useState } from "react";
import styles from "./About.module.scss";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { capabilityData } from "../../data/aboutData";

const About = () => {
  const navigate = useNavigate();
  const [slide2Active, setSlide2Active] = useState(false);

  return (
    <div className={`page-enter ${styles.container}`}>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel]}
        className={styles.mySwiper}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 1) setSlide2Active(true);
        }}
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
            <h1 className={`${styles.name} ${slide2Active ? styles.animateIn : ''}`}>
              CAPABILITY
            </h1>
            <div className={`${styles.line} ${slide2Active ? styles.animateIn : ''}`}
              style={{ '--delay': '0.15s' }}
            ></div>

            <div className={styles.doubleCard}>
              {capabilityData.map((item) => (
                <div
                  className={`${styles.infoGroup} ${slide2Active ? styles.animateIn : ''}`}
                  key={item.id}
                  style={{ '--delay': `${item.id * 0.12}s` }}
                >
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
