import React, { useState } from "react";
import Listing from "./listing";
import SingoloContatto from "./SingoloContatto";
import "./TabellaContatti.css";

function TabellaContatti(props) {
  return (
    <Listing
      contatti={props.infoContatto}
      risultatoRicerca={props.ricerca}
    ></Listing>
  );
}

export default TabellaContatti;
