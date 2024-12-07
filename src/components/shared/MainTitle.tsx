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
      <p
        className="lg:left-0 lg:top-2 font-title absolute 2xl:left-4 2xl:top-6 z-10 text-[17.625rem] bg-cover bg-clip-text text-transparent leading-[272px]"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundPosition: "center 30%"
        }}
      >
        CAST
      </p>
      <p
        className="lg:right-52 lg:top-60 leading-[272px] font-title absolute 2xl:top-96 2xl:right-0 z-10 text-[17.625rem] bg-cover bg-clip-text text-transparent"
        style={{
          backgroundImage: `url(${backgroundImages1[currentImage]})`,
          backgroundPosition: "center 30%"
        }}
      >
        BASE
      </p>
    </h1>
  );
};

export default MainTitle;
