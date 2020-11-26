/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import List from 'src/containers/Pages/ConnectedMain/List';

import './connectedMain.scss';

const ConnectedMain = ({
  receiveList,
  isDatasReceived,
  isListCharged,
  list,
  isListCreated,
  createList,
  isDeletedList,
}) => {

  useEffect(() => {
    if ( isDatasReceived ) {
      receiveList();
    }
  }, [isDatasReceived]);

  useEffect(() => {
    receiveList();
  }, [isListCreated]);

  useEffect(() => {
    receiveList();
  }, [isDeletedList]);

  const handleCreateList = () => {
    createList();
  };


  return (
    <div className="connectedMain">
      <h1 className="connectedMain-title">Mes listes</h1>
      <button type="button" className="connectedMain-create" onClick={handleCreateList}>Créer une liste</button>
      <div className="connectedMain-lists">
        { isListCharged && (
          <>
            {list.map((singleList) => (
              <List key={singleList.id} id={singleList.id} name={singleList.name} />
            ))}
          </>
        ) }
      </div>
    </div>
  )
}

export default ConnectedMain;

ConnectedMain.propTypes = {
  receiveList: PropTypes.func.isRequired,
  isDatasReceived: PropTypes.bool.isRequired,
  isListCharged: PropTypes.bool.isRequired,
  list: PropTypes.array,
  isListCreated: PropTypes.bool.isRequired,
  createList: PropTypes.func.isRequired,
  isDeletedList: PropTypes.bool.isRequired,
}

ConnectedMain.defaultProps = {
  list: [],
}
