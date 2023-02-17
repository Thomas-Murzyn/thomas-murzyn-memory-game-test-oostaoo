import "./cards.styles.scss";
import images from "../../utils/Data";
import Card from "../card/card.component";

function Cards() {
  return (
    <div className="cards-container">
      {images.map((image, index) => {
        return (
          <Card key={index} src={image.src} id={image.id} name={image.name} />
        );
      })}
    </div>
  );
}

export default Cards;
