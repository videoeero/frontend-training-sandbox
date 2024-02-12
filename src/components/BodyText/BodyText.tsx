import React from "react";
import styles from "./BodyText.module.scss";

type Props = {
  styleClass?: string;
  marginBottom?: "none" | "xs" | "sm" | "md";
  children: React.ReactNode;
};

export default function BodyText({
  styleClass,
  children,
  marginBottom = "none",
}: Props) {
  return (
    <p
      className={[
        styleClass,
        styles["body-text"],
        `margin-bottom__${marginBottom}`,
      ]
        .join(" ")
        .trim()}
    >
      {children}
    </p>
  );
}
