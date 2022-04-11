import { Card } from "../card";
import plant1 from "./plant1.png";
import plant2 from "./plant2.svg";
import plant3 from "./plant3.svg";
import plant4 from "./plant4.svg";
import plant5 from "./plant5.svg";
import plant6 from "./plant6.svg";

function Offers() {
  const offers_list = [
    {
      image: plant1,
      name: "Ajuga reptans",
      price: "R$ 20,00",
    },
    {
      image: plant2,
      name: "Cordyline fruticosa",
      price: "R$ 20,00",
    },
    {
      image: plant3,
      name: "Crassula ovata",
      price: "R$ 20,00",
    },
    {
      image: plant4,
      name: "Cyperus rotundus",
      price: "R$ 20,00",
    },
    {
      image: plant5,
      name: "Delairea odorata",
      price: "R$ 20,00",
    },
    {
      image: plant6,
      name: "Datura metel",
      price: "R$ 20,00",
    },
  ];
  return (
    <section className="offers-container">
      <p>Conheça nossas</p>
      <h3>Ofertas</h3>
      <ul className="offers-list">
        {offers_list.map((item) => {
          return (
            <Card
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </ul>
    </section>
  );
}

export { Offers };
