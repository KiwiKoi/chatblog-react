import { useEffect, useState } from "react";
import styles from "./itemList.module.scss";

function ItemList() {

    type Post = {
        id: number;
        title: string;
        content: string;
    }

    const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  },[]);


  return (
    <div className={styles.itemList}>
      <h2 className={styles.title}>Item List</h2>
      <div>
        {posts?.map((post) => (
          <div className={styles.listItem} key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
