import React from "react";

const backgroundImages = [
  "/titleBg/image1.jpg",
  "/titleBg/image2.jpg",
  "/titleBg/image3.jpg",
];

const backgroundImages1 = [
  "/titleBg/image3.jpg",
  "/titleBg/image2.jpg",
  "/titleBg/image1.jpg",
];

const images = [
  { text: "CAST", backgrounds: backgroundImages },
  { text: "BASE", backgrounds: backgroundImages1 },
];

const MainTitle: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {images.map((item, index) => (
        <p
          key={index}
          className={`title ${index === 0 ? "title_cast" : "title_base"}`}
          style={{
            backgroundImage: `url(${item.backgrounds[currentImage]})`,
            backgroundPosition: "center 30%",
          }}
        >
          {item.text}
        </p>
      ))}
    </h1>
  );
};

export default MainTitle;
