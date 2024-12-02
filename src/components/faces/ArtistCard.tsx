import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  src: string;
  id: number;
}

const ArtistCard: React.FC<Props> = ({ name, src, id }) => {
  return (
    <li className="relative">
      <Link to={`/faces/${id}`}>
        <img src={src} alt="Photo" />
        <span className="font-title text-secondary text-2xl absolute bottom-2.5 left-3">{name}</span>
      </Link>
    </li>
  );
};

export default ArtistCard;
