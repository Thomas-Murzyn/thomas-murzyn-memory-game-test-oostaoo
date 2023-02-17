import "./card.styles.scss";
import { imageType } from "../../utils/Data";

function Card({ id, name, src }: imageType) {
  return (
    <div className="card-container">
      <img src={src} alt={name} />
    </div>
  );
}

export default Card;
