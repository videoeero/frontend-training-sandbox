import React from "react";
import "./Heading.scss";

type AcceptedHeadings = 1 | 2 | 3 | 4 | 5 | 6;
type AcceptedSizes = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  level?: AcceptedHeadings;
  size?: AcceptedSizes;
};

export default function Heading({ children, level = 2, size = "md" }: Props) {
  const TagToRender = `h${level}` as keyof JSX.IntrinsicElements;

  return level ? (
    <TagToRender className={`heading heading__${size}`}>{children}</TagToRender>
  ) : (
    <h2>{children}</h2>
  );
}
