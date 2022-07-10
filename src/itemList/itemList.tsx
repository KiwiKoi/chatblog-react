import { useEffect, useState } from "react";
import styles from "./itemList.module.scss";

function ItemList() {

    type Post = {
        id: number;
        title: string;
        content: string;
    }

    const [posts, setPosts] = useState<Post[]>()
  const items = [
    { id: 1, title: "title 1", content: "this is content 1" },
    { id: 2, title: "title 2", content: "this is content 2" },
    { id: 3, title: "title 3", content: "this is content 3" },
  ];

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  },[]);

  
  console.log(`posts : ${JSON.stringify(posts)}`)

  return (
    <div className={styles.itemList}>
      <h2 className={styles.title}>Item List</h2>
      <div>
        {posts?.map((item) => (
          <div className={styles.listItem} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
