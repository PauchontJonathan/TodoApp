/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './taskmodal.scss';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#894e0a',
    padding: theme.spacing(2, 4, 3),
  },
}));

const TaskModal = ({ isOpenTaskModal, handleTaskModal, contentTaskInput, getCurrentTaskValue, updateTask }) => {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  const handleOpenInput = () => {
    handleTaskModal();
  };

  const handleTaskInput = (e) => {
    const { value } = e.target;
    getCurrentTaskValue(value);
  }

const handleUpdateTaskOnSubmit = (e) => {
    e.preventDefault();
    updateTask();
}

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form method="post" className="listModal" onSubmit={handleUpdateTaskOnSubmit}>
        <label htmlFor="name" className="listModal-label">Nom de la tâche</label>
        <input className="listModal-name" value={contentTaskInput} onChange={handleTaskInput} />
        <button type="submit" className="listModal-button" >Modifier</button>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={isOpenTaskModal}
        onClose={handleOpenInput}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default TaskModal;

TaskModal.propTypes = {
  isOpenTaskModal: PropTypes.bool.isRequired,
  handleTaskModal: PropTypes.func.isRequired,
  contentTaskInput: PropTypes.string.isRequired,
  getCurrentTaskValue: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
}

