import React from 'react';
import PropTypes from 'prop-types';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SingleTask from 'src/containers/Pages/ConnectedMain/List/Task/SingleTask';

const Task = ({ tasks, id, getListId, createTask }) => {

  // sending id too to create one task
  const handleTaskModalOnClick = (e) => {
    const currentList = e.currentTarget;
    const currentListId = currentList.getAttribute('data-id');
    getListId(currentListId);
    createTask();
  }


  return (
    <div className="connectedMain-lists-single-tasks">
      <AddBoxIcon data-id={id} className="connectedMain-lists-single-tasks-add" onClick={handleTaskModalOnClick}/>
      { tasks.map((task) => (
        <SingleTask key={task.id} {...task}/>
      )) }
    </div>
  )
}

export default Task;

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleTaskModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  getListId: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
}