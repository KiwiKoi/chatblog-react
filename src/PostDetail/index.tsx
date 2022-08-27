import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./postDetail.module.scss";

function PostDetail() {
  const { id } = useParams();

  type Post = {
    id: string;
    title: string;
    content: string;
  };

  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  const post = posts?.find((post) => post.id === id);

  return (
    <>
      <div className={styles.postDetailComponent}>
        <div className={styles.textContent}>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p className={styles.postContent}>{post?.content}</p>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
