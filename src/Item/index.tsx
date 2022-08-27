import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { postID } = useParams();
  
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

const post = posts?.find(post => post.postID === postID )

  return (
    <>
      <div>
        <h1>Testing</h1>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
    </>
  );
}

export default Item;
