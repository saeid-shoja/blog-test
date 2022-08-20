import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import foodIcon from "../assets/images/food.png";
import cupIcon from "../assets/images/cup.png";
import Image from "next/image";

interface PostType {
  postTitle: string;
  publishDate: number;
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
  const cups = [cupIcon, cupIcon, cupIcon];
  const foods = [foodIcon, foodIcon, foodIcon];

  return (
    <div className={styles.postWrapper}>
      <Link href={to}>
        <h1 className={styles.postTitle}>{postTitle}</h1>
      </Link>
      <div className={styles.postDate}>
        <p>{publishDate} july 2021.</p>
        {readTime >= 50
          ? foods.map((food) => (
              <Image
                key={readTime}
                src={food}
                alt="food"
                width="15px"
                height="15px"
              />
            ))
          : cups.map((cup) => (
              <Image
                key={readTime}
                src={cup}
                alt="cup"
                width="15px"
                height="15px"
              />
            ))}
        <p style={{ marginLeft: "7px" }}>{readTime}</p> min read
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Post;
