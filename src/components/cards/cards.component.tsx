import "./cards.styles.scss";
import imagesList from "../../utils/Data";
import Card from "../card/card.component";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  playerWin,
  addCardsIdAndIndex,
  resetCardsIdAndIndex,
} from "../../app/features/game/game.slice";

function Cards() {
  const dispatch = useAppDispatch();
  const cardsIndex = useAppSelector((state) => state.game.cardsIndex);
  const cardsId = useAppSelector((state) => state.game.cardsId);

  const [images, setImages] = useState(imagesList);

  const selectImage = (id: number, index: number) => {
    // If we click on the same card
    if (cardsIndex?.length === 1 && cardsIndex[0] === index) {
      return;
    }

    if (cardsId?.length < 2) {
      dispatch(addCardsIdAndIndex({ id, index }));

      // We check if cards are the same
      if (cardsId?.length === 1) {
        if (cardsId[0] === id) {
          // If there are the same add point and add cards to cardsOpen
          dispatch(playerWin(id));
        }
        // Reset
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
