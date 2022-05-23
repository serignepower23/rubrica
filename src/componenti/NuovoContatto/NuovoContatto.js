import InputContatto from "./InputContatto";

function NuovoContatto(props) {
  //la funzione salverà il dato nuovamente e lo manderemo ad App.js
  const savedaticontattoHeandler = function (enteredDatiContatto) {
    const datiContatto = {
      ...enteredDatiContatto,
    };
    ////verifica che il dato sia arrivato correttamente a questo componente
    console.log("dati contatto in NuovoContatto:\n", datiContatto);
    //invio dato a App.js
    props.onAddContact(datiContatto);
  };
  return (
    <InputContatto
      onSavedaticontatto={
        savedaticontattoHeandler
      } /* creiamo evento di salvataggio dati */
    ></InputContatto>
  );
}

export default NuovoContatto;
