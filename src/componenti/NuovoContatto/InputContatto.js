import React, { useState } from "react";
import "./InputContatto.css";

function InputContatto(props) {
  let aggiorna = false;
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
      enteredEmailAdress != "" &&
      enteredPhoneNumber != ""
    ) {
      var datiContatto = {
        //creazione oggetto che useremo per salvare i dati
        id: 3,
        nome: enteredFirstName,
        cognome: enteredLastName,
        email: enteredEmailAdress,
        numero: enteredPhoneNumber,
      };
      props.onSavedaticontatto(datiContatto);
      console.log("dati contatto in InputContatto: \n", datiContatto);
      /* negli elementi input abbiamo settato il loro value uguale allo state,
    quindi qui resettiamo(semplicemente lo si fa diventare stringa vuota) quel value in modo che si possa continuare ad aggiungere
    valori una volta fatto il submit senza dover ricaricare la pagina o cancellare cioè che l'utente
    aveva scritto */
      setEnterdFirstName("");
      setEnterdLastName("");
      setEnterdEmailAdress("");
      setEnterdPhoneNumber("");
    } else alert("non tutti i campi sono stati completati");

    /* inviamo il dato al componente NuovoContatto.js usando evento creato da noi.
    in questo caso il salvataggio di un dato*/
  }

  //ritorno del form all'interno della pagina, finisce prima dentro NuovoContatto
  return (
    <div>
      <form className="input_contatto" onSubmit={submitHeadler}>
        <div class="row">
          <div class="col">
            <label for="nome">inserire nome</label>
            <input
              value={enteredFirstName}
              id="nome"
              type="text"
              class="form-control"
              placeholder="First name"
              onChange={firstName_InputHeandler}
            />
          </div>
          <div class="col">
            <label for="cognome">inserire cognome</label>
            <input
              id="cognome"
              value={enteredLastName}
              type="text"
              class="form-control"
              placeholder="Last name"
              onChange={lastName_InputHeadler}
            />
          </div>
          <div class="col">
            <label for="numero">inserire numero</label>
            <input
              id="numero"
              value={enteredPhoneNumber}
              type="tel"
              class="form-control"
              placeholder="Number Phone"
              onChange={phoneNumber_InputHeandler}
            />
          </div>
          <div class="col">
            <label for="email">inserire email</label>
            <input
              id="email"
              value={enteredEmailAdress}
              type="email"
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
    </div>
  );
}

export default InputContatto;
{
  /* <div class="row">
        <div class="col">
          <input
            value={enteredPhoneNumber}
            type="text"
            class="form-control"
            placeholder="Phone number "
            onChange={phoneNumber_InputHeandler}
          />
        </div> */
}
