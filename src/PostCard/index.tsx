import React from "react";
import { Link } from "react-router-dom";
import styles from "./postCard.module.scss";

type Post = {
  postID: string;
  title: string;
  content: string;
};

function postCard(post: Post) {
  const { postID, title, content } = post;

  return (
    <Link to={`/posts/${postID}`}>
      <div
        className={styles.postCard}
        key={postID}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}

export default postCard;
