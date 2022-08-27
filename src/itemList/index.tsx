import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Item from "../Item";
import ItemCard from "../ItemCard";
import styles from "./itemList.module.scss";

function ItemList() {
  type Post = {
    postID: string;
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
      <div className={styles.itemList}>
        <h2 className={styles.title}>Item List</h2>
        <div>
          {posts?.map((post) => (
            <ItemCard key={post.postID} {...post}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
