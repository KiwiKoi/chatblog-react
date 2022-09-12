import { useState } from "react";
import styles from "./newPost.module.scss";
import { v4 as uuidv4 } from "uuid";

function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>('');


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const post = { title, content, id: uuidv4(), author: 'Daniel', image };

    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new post added");
    });
  };

  return (
    <>
      <div className={styles.newPostComponent}>
        <h1 className={styles.title}>New Post</h1>
        <form className={styles.newPostForm} onSubmit={handleSubmit}>
          <div className={styles.formBlock}>
            <label>Title :</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>Content :</label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles.formBlock}>
            <label>Image :</label>
            <input
              type="text"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button type="submit">Publish</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
