import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';

const SingleTask = ({ content, id, checked, getTaskId, deleteTask }) => {

  const isChecked = className('connectedMain-lists-single-task-single', { 'connectedMain-lists-single-task-single-checked': checked === 1 });

  const handleDeleteTask = (e) => {
    const currentTask = e.currentTarget;
    const currentTaskId = currentTask.getAttribute('data-id');
    console.log(currentTaskId);
    getTaskId(currentTaskId);
    deleteTask();
  };

  return (
    <div className="connectedMain-lists-single-task">
      <CancelIcon data-id={id} className="connectedMain-lists-single-task-delete" onClick={handleDeleteTask}/>
      <CreateIcon data-id={id} className="connectedMain-lists-single-task-modify" />
      { content && <p className={isChecked}>{content}</p>}
      { content == null && <p className="connectedMain-lists-single-task-single-empty">Tâche à remplir</p>}
    </div>
  )
}

export default SingleTask;

SingleTask.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
  checked: PropTypes.number.isRequired,
  getTaskId: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

SingleTask.defaultProps = {
  content: null,
}