import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import styles from "./postList.module.scss";

function PostList() {
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

  return (
    <>
      <div className={styles.postListComponent}>
        <h2 className={styles.postTitle}>Post List</h2>
        <div>
          {posts?.map((post) => (
            <PostCard key={post.id} {...post}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
