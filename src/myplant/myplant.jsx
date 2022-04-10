import plant from "./image3.svg";

function MyPlant() {
  return (
    <section className="central-container">
      <div className="central-plant-div">
        <img src={plant} alt="plant" className="central-plant" />
      </div>
      <aside className="central-text">
        <p className="central-paragraph">Como conseguir</p>
        <h2 className="heading2">minha planta</h2>
        <ul className="central-ul">
          <li className="central-li">
            <span className="yellow-circle"></span>Escolha suas plantas
          </li>
          <li className="central-li">
            <span className="yellow-circle"></span>Faça seu pedido
          </li>
          <li className="central-li">
            <span className="yellow-circle"></span>Aguarde na sua casa
          </li>
        </ul>
      </aside>
    </section>
  );
}

export { MyPlant };
