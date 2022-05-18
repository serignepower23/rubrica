import NavBar from "./componenti/NavBar";
import TabellaContatti from "./componenti/TabellaContatti";

function App() {
  const dati = [
    {
      nome: "mark",
      cognome: "otto",
      email: "blaaa",
    },
    {
      nome: "serigne",
      cognome: "fall",
      email: "sergi@gmail.com",
    },
    {
      nome: "elisa",
      cognome: "giudici",
      email: "eligiudi@gmail.com",
    },
    {
      nome: "paperino",
      cognome: "paolino",
      email: "paopar@gmail.com",
    },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <TabellaContatti infoContatto={dati}></TabellaContatti>
    </div>
  );
}

export default App;
