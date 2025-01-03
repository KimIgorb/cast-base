import React from "react";

interface Props {
  text: string | number;
  className?: string;
}

const Text: React.FC<Props> = ({ text, className }) => {
  return <p className={`text-primary 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-sm text-[7px] ${className}`}>{text}</p>;
};

export default Text;
