import { Link } from "react-router-dom";
import styles from "./postCard.module.scss";

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
};

function postCard(post: Post) {
  const { id, title, content, image } = post;
  return (
    <Link to={`/posts/${id}`} className={styles.postCard} key={id}>
      <div className={styles.cardContent}>
        <img className={styles.image} src={image} alt="" />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}

export default postCard;
