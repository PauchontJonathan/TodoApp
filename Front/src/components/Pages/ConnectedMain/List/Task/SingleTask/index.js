import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';

const SingleTask = ({
  content,
  id,
  checked,
  getTaskId,
  deleteTask,
  handleTaskModal,
  handleIsCkeckedTask,
  setCheckStateTask,
}) => {

  const isChecked = className('connectedMain-lists-single-task-single', { 'connectedMain-lists-single-task-single-checked': checked === 1 });

  const handleDeleteTask = (e) => {
    const currentTask = e.currentTarget;
    const currentTaskId = currentTask.getAttribute('data-id');
    getTaskId(currentTaskId);
    deleteTask();
  };

  const openTaskModalOnClick = (e) => {
    const currentTask = e.currentTarget;
    const currentTaskId = currentTask.getAttribute('data-id');
    getTaskId(currentTaskId);
    handleTaskModal();
  }

  const handleCheckedTaskOnClick = (e) => {
    const currentTask = e.currentTarget;
    const currentTaskId = currentTask.getAttribute('data-id');
    getTaskId(currentTaskId);
    if (checked === 0) {
      handleIsCkeckedTask('true');
      setCheckStateTask();
    } else if (checked === 1) {
      handleIsCkeckedTask('false');
      setCheckStateTask();
    }
  };

  return (
    <div className="connectedMain-lists-single-task">
      <CancelIcon data-id={id} className="connectedMain-lists-single-task-delete" onClick={handleDeleteTask}/>
      <CreateIcon data-id={id} className="connectedMain-lists-single-task-modify" onClick={openTaskModalOnClick}/>
      { content && <p data-id={id} onClick={handleCheckedTaskOnClick} className={isChecked}>{content}</p>}
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
  handleTaskModal: PropTypes.func.isRequired,
  handleIsCkeckedTask: PropTypes.func.isRequired,
  setCheckStateTask: PropTypes.func.isRequired,
}

SingleTask.defaultProps = {
  content: null,
}