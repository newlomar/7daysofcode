import logo from "./logo.svg";

function Menu() {
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="brand logo" />
        <nav>
          <ul className="menu-ul">
            <li className="menu-li">Como fazer /</li>
            <li className="menu-li">Ofertas /</li>
            <li className="menu-li">Depoimentos /</li>
            <li className="menu-li">Vídeos /</li>
            <li className="menu-li">Meu carrinho</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Menu };
