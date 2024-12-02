import React from "react";

interface Props {
  text: string;
  isSmall?: boolean;
  className?: string;
  isThin?: boolean;
}

const SectionTitle: React.FC<Props> = ({
  text,
  isSmall,
  className,
  isThin,
}) => {
  return (
    <h2
      className={`text-secondary font-normal  ${
        isSmall ? "text-3xl" : "text-7xl"
      } ${className} ${isThin ? "font-mainTitle" : "font-title"}`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
