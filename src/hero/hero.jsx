import image from "./imagem-hero1.svg";

function Hero() {
  return (
    <>
      <div className="background"></div>
      <section>
        <div className="text-div">
          <p>Sua casa com as</p>
          <h1>melhores plantas</h1>
          <p className="larger-text">
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <form>
            <label id="email">
              <input
                type="text"
                name=""
                id="email"
                placeholder="Insira seu e-mail"
              />
            </label>
            <button>Assinar newsletter</button>
          </form>
        </div>
        <div className="image-div">
          <img src={image} alt="plant" className="plant" />
        </div>
      </section>
    </>
  );
}

export { Hero };
