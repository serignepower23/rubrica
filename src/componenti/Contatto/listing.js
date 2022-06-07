import SingoloContatto from "./SingoloContatto";
import "./listing.css";

function Listing(props) {
  let visualizzare = <p>k</p>;
  const contattiRender = props.contatti.filter((bho) => {
    return (
      bho.nome.includes(props.risultatoRicerca) ||
      bho.cognome.includes(props.risultatoRicerca)
    );
  });

  if (props.risultatoRicerca == "") {
    console.log(contattiRender.lenght);
    visualizzare = props.contatti.map((dati) => (
      <SingoloContatto
        key={dati.numero}
        nome={dati.nome}
        cognome={dati.cognome}
        email={dati.email}
        numero={dati.numero}
      ></SingoloContatto>
    ));
  } else if (contattiRender.length !== 0) {
    visualizzare = contattiRender.map((dati) => (
      <SingoloContatto
        nome={dati.nome}
        cognome={dati.cognome}
        email={dati.email}
        dati={dati.numero}
      ></SingoloContatto>
    ));
  } else visualizzare = <h2>not found</h2>;
  /* visualizzare = <h2>not found</h2>; */

  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">nome</th>
            <th scope="col">cognome</th>
            <th scope="col">indirizzo</th>
            <th scope="col">numero</th>
          </tr>
        </thead>
        {visualizzare}
      </table>
    </div>
  );
}

export default Listing;
