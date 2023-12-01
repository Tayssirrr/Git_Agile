import React, { useState } from 'react';

const FormNew = (props) => {
  const [num, setNumero] = useState('');
  const [Intl, setIntitule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let or = { Numero: num, Intitulé: Intl };
    props.submit(or);
    setNumero('');
    setIntitule('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Numéro:</label><input type="text" value={num} onChange={(e) => setNumero(e.target.value)} /><br></br>
      <label>Intitulé:</label><input type="text" value={Intl} onChange={(e) => setIntitule(e.target.value)} /><br></br>
      <input type='submit' value="Nouvel ordinateur" />
    </form>
  );
}

export default FormNew;
