import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';
import Task from 'src/components/Pages/ConnectedMain/List/Task';

const List = ({ name }) => {
  return (
    <div className="connectedMain-lists-single">
      <CancelIcon className="connectedMain-lists-single-delete"/>
      <CreateIcon className="connectedMain-lists-single-modify"/>
      <p className="connectedMain-lists-single-name">{name}</p>
      <Task />
    </div>
  )
}

export default List;

List.propTypes = {
  name: PropTypes.string,
}

List.defaultProps = {
  name: '',
}