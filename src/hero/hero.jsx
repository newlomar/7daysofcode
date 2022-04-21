import image from "./imagem-hero1.svg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log("infinite loop test");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        {
          name: name,
          to_email: email,
          from_name: "N E W T I N  C A R A I",
          message: "<h1>Salve</h1>",
          reply_to: "newtonlomar16@gmail.com",
        },
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
          <form onSubmit={handleSubmit} className="form">
            <label id="name">
              <input
                type="text"
                name=""
                id="name"
                placeholder="Diga seu nome"
                className="name-input"
                value={name}
                onChange={handleNameChange}
              />
            </label>

            <div>
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
            </div>
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
