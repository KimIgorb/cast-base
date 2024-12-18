import React from "react";

interface Props {
  arr: { id: number; src: string;}[];
  className?: string
}

const BackstageGallery: React.FC<Props> = ({ arr, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {arr.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt="Photo" />
        </div>
      ))}
    </div>
  );
};

export default BackstageGallery;
