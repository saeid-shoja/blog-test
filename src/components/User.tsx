import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import userImage from "../assets/images/profile-pic-c715447ce38098828758e525a1128b87.jpg";

const User = () => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.user}>
        <div className={styles.userImage}>
          <Image src={userImage} alt="user" />
        </div>
        <p>
          Personal blog by <Link href="#"> Dan Abramov.</Link> <br />I explain
          with words and code.
        </p>
      </div>
    </div>
  );
};

export default User;
