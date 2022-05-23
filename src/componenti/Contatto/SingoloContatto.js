import React, { useState } from "react";

//componente per i singoli contatti, va poi dentro TabellaContatti.js
function SingoloContatto(props) {
  //creazione state
  const [nome, setNome] = useState(props.nome);

  /* semplice test per vedere l'effetivo uso degli state
  in questo caso viene semplicemte usato per cambiare nome contatto al click del pulsante  */
  function clickHandler() {
    setNome("luigi");
    console.log(nome);
  }
  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{nome}</td>
        <td>{props.cognome}</td>
        <td>{props.email}</td>
        <td>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={clickHandler}
          >
            ciao
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default SingoloContatto;
