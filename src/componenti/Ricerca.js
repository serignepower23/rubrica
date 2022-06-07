import React, { useState } from "react";

function Ricerca(props) {
  const [trovato, setTrovato] = useState("");
  function onChancHeandler(event) {
    setTrovato(event.target.value);
  }
  function onRicerca(event) {
    event.preventDefault();
    props.onTrovato(trovato);
  }

  return (
    <form class="form-inline my-2 my-lg-0" onSubmit={onRicerca}>
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChancHeandler}
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default Ricerca;
