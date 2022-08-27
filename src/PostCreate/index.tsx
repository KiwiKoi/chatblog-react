import { useState } from "react";
import styles from "./postCreate.module.scss";
import { v4 as uuidv4 } from "uuid";

function PostCreate() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const post = { title, content, id: uuidv4() };

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
      <div className={styles.postCreateComponent}>
        <h1 className={styles.title}>Post Creation</h1>
        <form className={styles.createPostForm} onSubmit={handleSubmit}>
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

          <button type="submit">Add post</button>
        </form>
      </div>
    </>
  );
}

export default PostCreate;
