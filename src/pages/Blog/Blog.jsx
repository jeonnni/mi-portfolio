import styles from "./Blog.module.scss";
import { BLOG_DATA } from "../../data/blogData";
import { LINK_DATA } from "../../data/linkData";
import BlogCard from "./components/BlogCard";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div
        className={`text-kr ${styles.cardContainer}`}
      >
        {BLOG_DATA.map((data) => {
          return <BlogCard key={data.id} data={data} />;
        })}
      </div>
      <div className={styles.btnContainer}>
        {LINK_DATA.map((link) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Blog;