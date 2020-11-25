import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';
import Task from 'src/components/Pages/ConnectedMain/List/Task';

const List = () => {
  return (
    <div className="connectedMain-lists">
      <div className="connectedMain-lists-single">
        <CancelIcon className="connectedMain-lists-single-delete"/>
        <CreateIcon className="connectedMain-lists-single-modify"/>
        <p className="connectedMain-lists-single-name">Première liste</p>
        <Task />
      </div>
    </div>
  )
}

export default List;