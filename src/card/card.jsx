import seta from "./seta.svg";

function Card({ image, name, price }) {
  return (
    <li className="card-list-item">
      <div className="card-image-div">
        <img className="card-images" src={image} alt={`${name} plant`} />
      </div>
      <div className="offers-text-div">
        <p>{name}</p>
        <p>{price}</p>
        <p>
          Comprar <img src={seta} alt="arrow" className="arrow" />
        </p>
      </div>
    </li>
  );
}

export { Card };
