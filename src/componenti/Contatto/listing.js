import SingoloContatto from "./SingoloContatto";

function Listing(props) {
  const contattiRender = props.contatti.filter((bho) => {
    return bho.nome.includes(props.risultatoRicerca);
  });

  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">nome</th>
            <th scope="col">cognome</th>
            <th scope="col">indirizzo</th>
          </tr>
        </thead>
        {props.contatti.map((dati) => (
          <SingoloContatto
            nome={dati.nome}
            cognome={dati.cognome}
            email={dati.email}
          ></SingoloContatto>
        ))}
      </table>
    </div>
  );
}

export default Listing;
