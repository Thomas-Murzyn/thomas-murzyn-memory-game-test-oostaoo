import "./cards.styles.scss";
import { images } from "../../utils/Data";

function Cards() {
  return (
    <div className="card-container">
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.src} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
