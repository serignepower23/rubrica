import React, { useState } from "react";

function SingoloContatto(props) {
  const [nome, setNome] = useState(props.nome);

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
