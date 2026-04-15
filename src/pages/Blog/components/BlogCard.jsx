import styles from "./BlogCard.module.scss";

const BlogCard = ({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* 배경 이미지 - 독립된 레이어로 분리해야 줌 효과 적용 가능 */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${data.bg})` }}
      />
      <div className={styles.overlay} />
      <div className={styles.cardContent}>
        <h3>{data.title}</h3>
        <p>{data.date}</p>
      </div>
      <span className={styles.more}>자세히 보기 »</span>
    </a>
  );
};

export default BlogCard;
