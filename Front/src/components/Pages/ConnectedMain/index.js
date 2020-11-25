import React from 'react';
import List from 'src/components/Pages/ConnectedMain/List';

import './connectedMain.scss';

const ConnectedMain = () => {
  return (
    <div className="connectedMain">
      <h1 className="connectedMain-title">Mes listes</h1>
      <button type="button" className="connectedMain-create">Créer une liste</button>
      <List />
    </div>
  )
}

export default ConnectedMain;