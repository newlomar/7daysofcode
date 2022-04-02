import "./hero.css";
import image from "./imagem-hero1.svg";

function Hero() {
  return (
    <>
      <div className="background"></div>
      <section>
        <div>
          <p>Suas casas com as</p>
          <h1>melhores plantas</h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <form>
            <input type="text" name="" id="" placeholder="Insira seu e-mail" />
            <button>Assinar newsletter</button>
          </form>
        </div>
        <div>
          <img src={image} alt="plant" />
        </div>
      </section>
    </>
  );
}

export { Hero };
