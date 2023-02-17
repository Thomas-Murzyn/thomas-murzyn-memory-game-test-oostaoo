import "./card.styles.scss";
import { imageType } from "../../utils/Data";
import { useState } from "react";

export type CardType = {
  index: number;
  selectImage: (index: number, id: number) => void;
  cardsChosenIndex: number[];
  cardsOpen: number[];
} & imageType;

function Card({
  id,
  name,
  src,
  index,
  selectImage,
  cardsChosenIndex,
  cardsOpen,
}: CardType) {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    selectImage(id, index);
  };

  function isCardActive(id: number, index: number) {
    return cardsChosenIndex?.includes(index) || cardsOpen?.includes(id);
  }

  return (
    <div
      onClick={clickHandler}
      className={`card-container ${isCardActive(id, index) ? "active" : ""}`}
    >
      <img src={src} alt={name} />
    </div>
  );
}

export default Card;
