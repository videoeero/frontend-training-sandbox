import React from "react";

type AcceptedHeadings = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  children: string;
  headingLevel?: AcceptedHeadings;
};

export const Heading = ({ children, headingLevel = 2 }: Props) => {
  const TagToRender = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className="heading">
      {headingLevel ? (
        <TagToRender>{children}</TagToRender>
      ) : (
        <h2>{children}</h2>
      )}
    </div>
  );
};
