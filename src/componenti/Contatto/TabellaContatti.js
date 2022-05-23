import SingoloContatto from "./SingoloContatto";
import "./TabellaContatti.css";

function TabellaContatti(props) {
  return (
    <div>
      <table className="table table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nome</th>
            <th scope="col">cognome</th>
            <th scope="col">indirizzo</th>
            <th scope="col">azione</th>
          </tr>
        </thead>
        <SingoloContatto
          nome={props.infoContatto[0].nome}
          cognome={props.infoContatto[0].cognome}
          email={props.infoContatto[0].email}
        />
        <SingoloContatto
          nome={props.infoContatto[1].nome}
          cognome={props.infoContatto[1].cognome}
          email={props.infoContatto[1].email}
        />
        <SingoloContatto
          nome={props.infoContatto[2].nome}
          cognome={props.infoContatto[2].cognome}
          email={props.infoContatto[2].email}
        />
        <SingoloContatto
          nome={props.infoContatto[3].nome}
          cognome={props.infoContatto[3].cognome}
          email={props.infoContatto[3].email}
        />
      </table>
    </div>
  );
}

export default TabellaContatti;
