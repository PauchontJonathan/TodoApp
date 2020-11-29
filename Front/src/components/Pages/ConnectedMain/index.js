/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import List from 'src/containers/Pages/ConnectedMain/List';
import ListModal from 'src/containers/Pages/ConnectedMain/ListModal';
import TaskModal from 'src/containers/Pages/ConnectedMain/TaskModal';

import './connectedMain.scss';

const ConnectedMain = ({
  receiveList,
  isDatasReceived,
  isListCharged,
  list,
  isListCreated,
  createList,
  isDeletedList,
  openInputUpdate,
  isTaskCreated,
  isDeletedTask,
  isTaskUpdated,
}) => {

  // update the component if the main datas are loaded
  useEffect(() => {
    if ( isDatasReceived ) {
      receiveList();
    }
  }, [isDatasReceived]);

  // update the component if a list is created
  useEffect(() => {
    receiveList();
  }, [isListCreated]);

  // update the component if a list is deleted
  useEffect(() => {
    receiveList();
  }, [isDeletedList]);

  // update the component if a list name is updated
  useEffect(() => {
    receiveList();
  }, [openInputUpdate]);

  // update the component if a task is created
  useEffect(() => {
    receiveList();
  }, [isTaskCreated]);

  // update the component if a task is deleted
  useEffect(() => {
    receiveList();
  }, [isDeletedTask]);

  // update the component if a task is updated
  useEffect(() => {
    receiveList();
  }, [isTaskUpdated]);

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
              <List key={singleList.id} id={singleList.id} name={singleList.name} tasks={singleList.tasks}/>
            ))}
          </>
        ) }
      </div>
      <ListModal />
      <TaskModal />
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
  openInputUpdate: PropTypes.bool.isRequired,
  isTaskCreated: PropTypes.bool.isRequired,
  isDeletedTask: PropTypes.bool.isRequired,
  isTaskUpdated: PropTypes.bool.isRequired,
}

ConnectedMain.defaultProps = {
  list: [],
}
