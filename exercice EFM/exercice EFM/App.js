
import React, { useState } from 'react';
import DropList from './DropList';
import RecherchOrdinateur from './RecherchOrdinateur';
import FormNew from './FormNew';
import InfoOrdinateur from './InfoOrdinateur';
import { marques, salles, Ordinateurs } from './Data';

function App() {                                                                                        
  const [CurrentPC, setCurrentPC] = useState(Ordinateurs[0]);
  const [marque, SetMarque] = useState(marques[0]);
  const [salle, SetSalle] = useState(salles[0]);
  const [ordinateursTrouvés, setOrdinateursTrouvés] = useState(Ordinateurs);

  const changerMarque = (e) => {
    SetMarque(e);
  }

  const changerSalle = (e) => {
    SetSalle(e);
  }

  const rechercher = () => {
    const ordinateursFiltres = Ordinateurs.filter((ordinateur) =>
      (marque === '' || ordinateur.Marque === marque) &&
      (salle === '' || ordinateur.Salle === salle)
    );
    setOrdinateursTrouvés(ordinateursFiltres);
  }

  const changerOrdinateur = (numero) => {
    const selectedPC = Ordinateurs.find((ordinateur) => ordinateur.Numero === parseInt(numero));
    setCurrentPC(selectedPC);
  }

  const ajouterPC = (nouvelOrdinateur) => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let pc = { ...nouvelOrdinateur, Marque: marque, Salle: salle, DateAchat: date };
    setOrdinateursTrouvés([...ordinateursTrouvés, pc]);
  }

  return (
    <>
      <div>
        <div>
          <label>Marque:</label>
          <DropList items={marques} selectedItem={changerMarque} />
          <label>Salle:</label>
          <DropList items={salles} selectedItem={changerSalle} />
          <button onClick={rechercher}>Recherche</button>
        </div>
        <div>
          <RecherchOrdinateur elements={ordinateursTrouvés} selectedElement={changerOrdinateur} />
        </div>
        <div>
          <FormNew submit={ajouterPC} />
        </div>
        <div>
          <InfoOrdinateur ordinateur={CurrentPC} />
        </div>
      </div>
    </>
  );
}

export default App;