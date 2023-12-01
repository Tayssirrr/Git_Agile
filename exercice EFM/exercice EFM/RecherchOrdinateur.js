import React from 'react';

const RecherchOrdinateur = (props) => {
  return (
    <div>
      <h3>Ordinateurs trouvés:</h3>
      <select multiple onChange={(e) => props.selectedElement(e.target.value)}>
        {props.elements.map((e, i) => (
          <option key={i} value={e.Numero}>
            {e.Intitulé}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RecherchOrdinateur;