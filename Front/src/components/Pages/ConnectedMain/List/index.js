import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';
import Task from 'src/components/Pages/ConnectedMain/List/Task';

const List = ({ name, id, getListId, deleteList, handleOpenInputUpdate }) => {

  const getIdOnClick = (e) => {
    const currentList = e.currentTarget;
    const currentId = currentList.getAttribute('data-id');
    getListId(currentId);
    deleteList();
  };

  const handleModalInput = (e) => {
    const currentList = e.currentTarget;
    const listId = currentList.getAttribute('data-id');
    getListId(listId);
    handleOpenInputUpdate();
  };

  return (
    <div className="connectedMain-lists-single">
      <CancelIcon data-id={id} className="connectedMain-lists-single-delete" onClick={getIdOnClick} />
      <CreateIcon data-id={id} className="connectedMain-lists-single-modify" onClick={handleModalInput} />
      { name && <p className="connectedMain-lists-single-name">{name}</p>}
      { !name && <p className="connectedMain-lists-single-name-empty">Aucun nom</p>}
      <Task />
    </div>
  )
}

export default List;

List.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  getListId: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  handleOpenInputUpdate: PropTypes.func.isRequired,
}

List.defaultProps = {
  name: '',
}