import React, { useState } from "react";
import "./InputContatto.css";

function InputContatto(props) {
  //creazione degli state per gestire input dal form
  const [enteredFirstName, setEnterdFirstName] = useState("");
  const [enteredLastName, setEnterdLastName] = useState("");
  const [enteredPhoneNumber, setEnterdPhoneNumber] = useState("");
  const [enteredEmailAdress, setEnterdEmailAdress] = useState("");

  //funzioni per gestione input utente e memorizzarli negli state
  const firstName_InputHeandler = (evento) => {
    setEnterdFirstName(evento.target.value);
    console.log(evento.target.value);
  };

  const lastName_InputHeadler = (evento) => {
    setEnterdLastName(evento.target.value);
  };

  const phoneNumber_InputHeandler = (evento) => {
    setEnterdPhoneNumber(evento.target.value);
  };
  const emailAdress_inputHeandler = (evento) => {
    setEnterdEmailAdress(evento.target.value);
  };

  //ora creaiamo una funzione per gestire il submit dell'utente
  function submitHeadler(evento) {
    evento.preventDefault(); ///usato per evitare refresh pagina al click
    if (
      //preveniamo il salvataggio di input vuoti con questo semplice if ed else
      enteredFirstName != "" &&
      enteredLastName != "" &&
      enteredPhoneNumber != "" &&
      enteredEmailAdress != ""
    ) {
      var datiContatto = {
        //creazione oggetto che useremo per salvare i dati
        firstName: enteredFirstName,
        lastName: enteredLastName,
        phoneNumber: enteredPhoneNumber,
        emailAdress: enteredEmailAdress,
      };
      console.log("dati contatto in InputContatto: \n", datiContatto);
      /* negli elementi input abbiamo settato il loro value uguale allo state,
    quindi qui resettiamo(semplicemente lo si fa diventare stringa vuota) quel value in modo che si possa continuare ad aggiungere
    valori una volta fatto il submit senza dover ricaricare la pagina o cancellare cioè che l'utente
    aveva scritto */
      setEnterdFirstName("");
      setEnterdLastName("");
      setEnterdPhoneNumber("");
      setEnterdEmailAdress("");
    } else alert("non tutti i campi sono stati completati");

    /* inviamo il dato al componente NuovoContatto.js usando evento creato da noi.
    in questo caso il salvataggio di un dato*/
    props.onSavedaticontatto(datiContatto);
  }

  //ritorno del form all'interno della pagina, finisce prima dentro NuovoContatto
  return (
    <form onSubmit={submitHeadler}>
      <div class="row">
        <div class="col">
          <input
            value={enteredFirstName}
            type="text"
            class="form-control"
            placeholder="First name"
            onChange={firstName_InputHeandler}
          />
        </div>
        <div class="col">
          <input
            value={enteredLastName}
            type="text"
            class="form-control"
            placeholder="Last name"
            onChange={lastName_InputHeadler}
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            value={enteredPhoneNumber}
            type="text"
            class="form-control"
            placeholder="Phone number "
            onChange={phoneNumber_InputHeandler}
          />
        </div>
        <div class="col">
          <input
            value={enteredEmailAdress}
            type="text"
            class="form-control"
            placeholder="Email address"
            onChange={emailAdress_inputHeandler}
          />
        </div>
      </div>
      <div className="box-btn">
        <button type="submit" class="btn btn-success btn-form">
          Success
        </button>
      </div>
    </form>
  );
}

export default InputContatto;
