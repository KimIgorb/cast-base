import React from "react";

interface Props {
  text: string;
  isSmall?: boolean;
  className?: string;
  isThin?: boolean;
}

// text-3xl

const SectionTitle: React.FC<Props> = ({
  text,
  isSmall,
  className,
  isThin,
}) => {
  return (
    <h2
      className={`text-secondary font-normal ${
        isSmall ? "text-xs mini:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" : "text-5xl md:text-6xl xl:text-7xl"
      } ${className} ${isThin ? "font-mainTitle" : "font-title"}`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
