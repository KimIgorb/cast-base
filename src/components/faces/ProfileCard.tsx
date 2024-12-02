import React from "react";
import Text from "../shared/Text";

interface Props {
  age: number;
  heigh: number;
  sizes: string;
  experience: string;
}

const ProfileCard: React.FC<Props> = ({ age, heigh, sizes, experience }) => {
  return (
    <div className="text-white max-w-2xl space-y-7">
      <div>
        <p className="font-titleAbout uppercase text-4xl">Age</p>
        <Text text={age} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">heigh</p>
        <Text text={heigh} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">sizec</p>
        <Text text={sizes} className="text-2xl" />
      </div>
      <div>
        <p className="font-titleAbout uppercase text-4xl">experience</p>
        <Text text={experience} className="text-2xl" />
      </div>
    </div>
  );
};

export default ProfileCard;
