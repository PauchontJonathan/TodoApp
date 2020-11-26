/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './listmodal.scss';

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

const ListModal = ({ openInputUpdate, handleOpenInputUpdate, nameInput, getNameInput, updateList }) => {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  const handleOpenInput = () => {
    handleOpenInputUpdate();
  };

  const handleNameInput = (e) => {
    const { value } = e.target;
    getNameInput(value);
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form method="post" className="listModal" onSubmit={handleUpdateSubmit}>
        <label htmlFor="name" className="listModal-label">Nom de la liste</label>
        <input className="listModal-name" value={nameInput} onChange={handleNameInput} />
        <button type="submit" className="listModal-button" >Modifier</button>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={openInputUpdate}
        onClose={handleOpenInput}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default ListModal;

ListModal.propTypes = {
  handleOpenInputUpdate: PropTypes.func.isRequired,
  openInputUpdate: PropTypes.bool.isRequired,
  nameInput: PropTypes.string.isRequired,
  getNameInput: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
};
