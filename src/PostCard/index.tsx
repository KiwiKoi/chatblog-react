import { Link } from "react-router-dom";
import styles from "./postCard.module.scss";

type Post = {
  id: string;
  title: string;
  content: string;
};

function postCard(post: Post) {
  const { id, title, content } = post;

  return (
    <Link to={`/posts/${id}`} className={styles.postCard} key={id}>
      <div className={styles.textContent}>
      <h3>{title}</h3>
      <p>{content}</p>
      </div>
    </Link>
  );
}

export default postCard;
