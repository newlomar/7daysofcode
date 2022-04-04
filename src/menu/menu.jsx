import logo from "./logo.svg";
import "./menu.css";

function Menu() {
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="brand logo" />
        <nav>
          <ul>
            <li>Como fazer /</li>
            <li>Ofertas /</li>
            <li>Depoimentos /</li>
            <li>Vídeos /</li>
            <li>Meu carrinho</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Menu };
