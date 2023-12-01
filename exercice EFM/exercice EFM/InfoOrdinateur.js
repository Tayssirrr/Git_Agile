import React from 'react';

function InfoOrdinateur(props) {
  return (
    <>
      <span style={{ textDecoration: "underline", fontWeight: 'bold' }}>Ordinateur sélectionné:</span>
      <p>Numero: {props.ordinateur.Numero}</p>
      <p>Intitulé: {props.ordinateur.Intitulé}</p>
      <p>Date Achat: {props.ordinateur.DateAchat}</p>
    </>
  );
}

export default InfoOrdinateur;
