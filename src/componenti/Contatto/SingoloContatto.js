import React, { useState } from "react";

//componente per i singoli contatti, va poi dentro TabellaContatti.js
function SingoloContatto(props) {
  //creazione state
  const [nome, setNome] = useState(0);

  /* semplice test per vedere l'effetivo uso degli state
  in questo caso viene semplicemte usato per cambiare nome contatto al click del pulsante  */
  function clickHandler() {
    setNome(nome + 1);
    console.log(nome);
  }
  return (
    <tbody>
      <tr>
        <td>{props.nome}</td>
        <td>{props.cognome}</td>
        <td>{props.email}</td>
      </tr>
    </tbody>
  );
}

export default SingoloContatto;
