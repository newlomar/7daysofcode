import plant from "./image3.svg";

function MyPlant() {
  return (
    <section>
      <div>
        <img src={plant} alt="" />
      </div>
      <aside>
        <p>Como conseguir</p>
        <h2>minha planta</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </section>
  );
}

export { MyPlant };
