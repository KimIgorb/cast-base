import React from "react";

interface Props {
  arr: { id: number; src: string; styles: string }[];
}

const BackstageGallery: React.FC<Props> = ({ arr }) => {
  return (
    <div className="flex flex-col">
      {arr.map((image) => (
        <div key={image.id} className={`${image.styles}`}>
          <img src={image.src} alt="Photo" />
        </div>
      ))}
    </div>
  );
};

export default BackstageGallery;
