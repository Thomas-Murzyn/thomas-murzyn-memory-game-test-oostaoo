import "./cards.styles.scss";
import Card from "../card/card.component";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  playerWin,
  addCardsIdAndIndex,
  resetCardsIdAndIndex,
} from "../../app/features/game/game.slice";
import { imageType } from "../../utils/Data";

function Cards({ images }: { images: imageType[] }) {
  const dispatch = useAppDispatch();
  const cardsIndex = useAppSelector((state) => state.game.cardsIndex);
  const cardsId = useAppSelector((state) => state.game.cardsId);

  // This function handle click on a card
  const selectImage = (id: number, index: number) => {
    // If we click on the same card do nothing
    if (cardsIndex?.length === 1 && cardsIndex[0] === index) {
      return;
    }

    // if card length is less than 2 do add id to cardsId and index to cardsIndex
    if (cardsId?.length < 2) {
      dispatch(addCardsIdAndIndex({ id, index }));

      // If cardsId already contain a card, check if id in cardsId and the current id are the same
      if (cardsId?.length === 1) {
        if (cardsId[0] === id) {
          // If there are the same add point and add cardsId[0] and current id to cardsOpen
          dispatch(playerWin(id));
        }
        // Reset cardsId and CardsIndex
        setTimeout(() => {
          dispatch(resetCardsIdAndIndex());
        }, 900);
      }
    }
  };

  return (
    <div className="cards-container">
      {images.map((image, index) => {
        return (
          <Card
            key={index}
            src={image.src}
            id={image.id}
            name={image.name}
            index={index}
            selectImage={selectImage}
          />
        );
      })}
    </div>
  );
}

export default Cards;
