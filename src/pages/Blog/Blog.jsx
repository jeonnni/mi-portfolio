import styles from "./Blog.module.scss";
import { BLOG_DATA } from "../../data/blogData";
import { LINK_DATA } from "../../data/linkData";
import BlogCard from "./components/BlogCard";
import { useInView } from "../../hooks/useInView";

const Blog = () => {
  const { ref: cardsRef, inView: cardsVisible } = useInView(0.05);
  const { ref: btnsRef,  inView: btnsVisible  } = useInView();

  return (
    <div className={`page-enter ${styles.container}`}>
      <div ref={cardsRef} className={`text-kr ${styles.cardContainer}`}>
        {BLOG_DATA.map((data, index) => (
          <div
            key={data.id}
            className={`anim ${cardsVisible ? 'visible' : ''}`}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <BlogCard data={data} />
          </div>
        ))}
      </div>

      <div ref={btnsRef} className={`${styles.btnContainer} anim ${btnsVisible ? 'visible' : ''}`}
        style={{ '--delay': '0.1s' }}
      >
        {LINK_DATA.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.goButton}
          >
            {link.label}
            <span className={styles.icon}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
