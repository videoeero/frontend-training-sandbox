"use client";

import React from "react";
import styles from "./Button.module.scss";

type Variants = "primary" | "secondary";

type Props = {
  children: React.ReactNode;
  variant?: Variants;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  variant = "primary",
  handleClick,
}: Props) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${styles.button} ${styles[`button__${variant}`]}`}
    >
      {children}
    </button>
  );
}
