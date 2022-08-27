import React from "react";
import { Link } from "react-router-dom";
import styles from "./itemCard.module.scss";

type Post = {
  postID: string;
  title: string;
  content: string;
};

function itemCard(post: Post) {
  const { postID, title, content } = post;

  const clickHandler = () => {
    window.location.assign(`/posts/${postID}`);
  };

  return (
    <Link to={`/posts/${postID}`}>
      <div
        className={styles.itemCard}
        key={postID}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}

export default itemCard;
