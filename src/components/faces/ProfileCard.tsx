import React from "react";
import Text from "../shared/Text";

interface Props {
  age: number;
  height: number;
  weight: number;
  experience: string[];
}

const ProfileCard: React.FC<Props> = ({ age, height, weight, experience }) => {
  return (
    <div className="text-white max-w-2xl space-y-1 md:space-y-3">
      <div>
        <p className="font-titleAbout uppercase text-xl md:text-2xl">Age</p>
        <Text text={age} className="text-white"/>
      </div>
      <div>
        <p className="font-titleAbout uppercase text-xl md:text-2xl">height</p>
        <Text text={height} className="text-white"/>
      </div>
      <div>
        <p className="font-titleAbout uppercase text-xl md:text-2xl">weight</p>
        <Text text={weight} className="text-white"/>
      </div>
      <div>
        <p className="font-titleAbout uppercase mb-2 md:text-2xl">work experience</p>
        {experience.map((text) => (
          <Text key={text} text={text} className="text-white" />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
