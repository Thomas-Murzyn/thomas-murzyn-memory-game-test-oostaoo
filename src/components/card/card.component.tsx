import "./card.styles.scss";
import { imageType } from "../../utils/Data";
import { useAppSelector } from "../../app/hooks";

export type CardType = {
  index: number;
  selectImage: (index: number, id: number) => void;
} & imageType;

function Card({ id, name, src, index, selectImage }: CardType) {
  const cardsIndex = useAppSelector((state) => state.game.cardsIndex);
  const cardsOpen = useAppSelector((state) => state.game.cardsOpen);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);

  // Handle click on a card, if game started enable click on card, else disable click
  const clickHandler = () => {
    if (isGameStarted) {
      selectImage(id, index);
    }
  };

  function isCardActive(id: number, index: number) {
    return cardsIndex?.includes(index) || cardsOpen?.includes(id);
  }

  return (
    <div
      onClick={clickHandler}
      className={`card-container ${isCardActive(id, index) ? "active" : ""}${
        cardsOpen.includes(id) ? " success" : ""
      }`}
    >
      <img src={src} alt={name} />
    </div>
  );
}

export default Card;
