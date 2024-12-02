import React from "react";

interface Props {
  text: string;
  isSmall?: boolean;
  className?: string;
}

const SectionTitle: React.FC<Props> = ({ text, isSmall, className }) => {
  return (
    <h2
      className={`text-secondary font-normal font-title ${
        isSmall ? "text-3xl" : "text-7xl"
      } ${className}`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
