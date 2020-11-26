import { connect } from 'react-redux';
import ListModal from 'src/components/Pages/ConnectedMain/ListModal';
import { handleOpenInputUpdate, getNameInput, updateList } from 'src/store/reducers/list';

const mapStateToProps = (state) => ({
  openInputUpdate: state.list.openInputUpdate,
  nameInput: state.list.nameInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenInputUpdate: () => {
    dispatch(handleOpenInputUpdate());
  },
  getNameInput: (currentName) => {
    dispatch(getNameInput(currentName));
  },
  updateList: () => {
    dispatch(updateList());
  }
});


const ListModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListModal);

export default ListModalContainer;
