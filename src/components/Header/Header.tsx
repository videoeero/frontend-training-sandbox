import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to Mess Around App</h1>
      <Image
        src="/victor-grabarczyk-N04FIfHhv_k-unsplash-min.jpg"
        alt="Jack Russell Terrier for PuppyHero.com. Source: Unsplash.com / Victor Grabarczyk"
        className={styles.header__image}
        width={100}
        height={24}
        priority
      />
    </header>
  );
}
