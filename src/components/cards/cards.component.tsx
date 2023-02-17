import "./cards.styles.scss";
import imagesList from "../../utils/Data";
import Card from "../card/card.component";
import { useState } from "react";

function Cards() {
  const [cardsId, setCardsId] = useState<number[]>([]);
  const [cardsChosenIndex, setCardsChosenIndex] = useState<number[]>([]);
  const [images, setImages] = useState(imagesList);
  const [points, setPoints] = useState(0);
  const [cardsOpen, setcardsOpen] = useState<number[]>([]);

  const selectImage = (id: number, index: number) => {
    // If we click on the same card
    if (cardsChosenIndex?.length === 1 && cardsChosenIndex[0] === index) {
      return;
    }

    if (cardsId?.length < 2) {
      setCardsId((cardsId) => cardsId?.concat(id));
      setCardsChosenIndex((cardsChosenIndex) =>
        cardsChosenIndex?.concat(index)
      );

      // We check if cards are the same
      if (cardsId?.length === 1) {
        if (cardsId[0] === id) {
          // If there are the same at point and add cards to cardsOpen
          setPoints((points) => points + 10);
          setcardsOpen((cardsOpen) => cardsOpen?.concat([cardsId[0], id]));
        }
        // Reset
        setTimeout(() => {
          setCardsChosenIndex([]);
          setCardsId([]);
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
            cardsChosenIndex={cardsChosenIndex}
            cardsOpen={cardsOpen}
          />
        );
      })}
    </div>
  );
}

export default Cards;
