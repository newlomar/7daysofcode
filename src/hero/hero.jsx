import image from "./imagem-hero1.svg";
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };
  return (
    <>
      <div className="background"></div>
      <section className="hero-container">
        <div className="hero-text-div">
          <p className="hero-paragraph">Sua casa com as</p>
          <h1 className="heading1">melhores plantas</h1>
          <p className="larger-text">
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <form>
            <label id="email" className="letter-label">
              <input
                type="email"
                name=""
                id="email"
                placeholder="Insira seu e-mail"
                className="email-input"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <button className={validateEmail(email) ? "cta show" : "cta"}>
              Assinar newsletter
            </button>
          </form>
        </div>
        <div className="image-div">
          <img src={image} alt="plant" className="hero-plant" />
        </div>
      </section>
    </>
  );
}

export { Hero };
