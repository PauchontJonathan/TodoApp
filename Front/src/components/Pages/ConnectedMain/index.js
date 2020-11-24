import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';

import './connectedMain.scss';

const ConnectedMain = () => {
  return (
    <div className="connectedMain">
      <h1 className="connectedMain-title">Mes listes</h1>
      <button type="button" className="connectedMain-create">Créer une liste</button>
      <div className="connectedMain-lists">
        <div className="connectedMain-lists-single">
          <CancelIcon className="connectedMain-lists-single-delete"/>
          <CreateIcon className="connectedMain-lists-single-modify"/>
          <p className="connectedMain-lists-single-name">Première liste</p>
          <div className="connectedMain-lists-single-tasks">
            <div className="connectedMain-lists-single-task">
              <p className="connectedMain-lists-single-task-single">Je suis une tâche</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectedMain;