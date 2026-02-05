import styles from "./BlogCard.module.scss";

const BlogCard = ({ data }) => {
  const cardBg = {
    backgroundImage:`url(${data.bg})`
  };
  
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={cardBg}
    >
      <div className={styles.overlay}></div>
      {/* 호버 시 사라질 카드 */}
      <div className={styles.cardContent}>
        <h3>{data.title}</h3>
        <p>{data.date}</p>
      </div>
      {/* 호버 시 사라질 버튼 */}
      <span className={styles.more}>자세히 보기 »</span>
    </a>
  );
};

export default BlogCard;