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
    <div className="text-white max-w-2xl space-y-7">
      <div>
        <p className="font-titleAbout uppercase text-4xl">Age</p>
        <Text text={age} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">height</p>
        <Text text={height} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">weight</p>
        <Text text={weight} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">work experience</p>
        {experience.map((text) => (
          <Text key={text} text={text} className="text-2xl" />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
