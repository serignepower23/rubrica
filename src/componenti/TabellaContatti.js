import SingoloContarro from "./SingoloContatto";
import "./TabellaContatti.css";

function TabellaContatti() {
  return (
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
      <SingoloContarro></SingoloContarro>
    </table>
  );
}

export default TabellaContatti;
