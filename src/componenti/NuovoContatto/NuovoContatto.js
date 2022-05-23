import InputContatto from "./InputContatto";

function NuovoContatto() {
  const savedaticontattoHeandler = function (enteredDatiContatto) {
    const datiContatto = {
      ...enteredDatiContatto,
    };
  };
  return (
    <InputContatto
      onSavedaticontatto={savedaticontattoHeandler}
    ></InputContatto>
  );
}

export default NuovoContatto;
