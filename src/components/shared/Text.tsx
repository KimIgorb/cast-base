import React from "react";

interface Props {
  text: string | number;
  className?: string;
}

const Text: React.FC<Props> = ({ text, className }) => {
  return <p className={`2xl:text-3xl lg:text-2xl ${className}`}>{text}</p>;
};

export default Text;
