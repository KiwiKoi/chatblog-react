import React from "react";
import { Link } from "react-router-dom";
import styles from "./postCard.module.scss";

type Post = {
  id: string;
  title: string;
  content: string;
};

function postCard(post: Post) {
  const { id, title, content } = post;

  console.log(post)

  return (
    <Link to={`/posts/${id}`}>
      <div
        className={styles.postCard}
        key={id}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}

export default postCard;
