import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

interface PostType {
  postTitle: string;
  publishDate: string;
  readTime: number;
  description: string;
  to: string;
}

const Post = ({
  postTitle,
  publishDate,
  readTime,
  description,
  to,
}: PostType) => {
  return (
    <div className={styles.postWrapper}>
      <Link href={to}>
        <h1>{postTitle}</h1>
      </Link>
      <div className={styles.postDate}>
        <p>{publishDate}</p>
        <p>{readTime}</p> min read
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Post;
