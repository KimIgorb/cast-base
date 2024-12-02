import React from "react";

interface Props {
  text: string | number;
  className?: string;
}

const Text: React.FC<Props> = ({ text, className }) => {
  return <p className={`text-3xl ${className}`}>{text}</p>;
};

export default Text;
