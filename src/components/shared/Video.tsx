import React from "react";

interface Props {
  src: string;
  poster: string;
  className?: string;
  isView?: boolean;
  classNameView?: string
}

const Video: React.FC<Props> = ({ src, poster, className, isView, classNameView }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Ошибка при попытке воспроизведения видео:", error);
        });
    }
  };

  return (
    <div className={`relative ${classNameView}`}>
      {isView ? (
        <video
          ref={videoRef}
          controls
          src={src}
          poster={poster}
          preload="auto"
          className={`object-cover ${className}`}
        >
        </video>
      ) : (
        <>
          <video
            ref={videoRef}
            controls={isPlaying ? true : false}
            poster={poster}
            src={src}
            preload="none"
            className={`object-cover ${className}`}
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handlePlay}
            >
              <svg
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.2209 34.6827L17.0772 64.2106L17.0772 5.15488L68.2209 34.6827Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Video;
