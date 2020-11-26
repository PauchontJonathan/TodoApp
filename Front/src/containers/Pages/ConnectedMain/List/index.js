import { connect } from 'react-redux';
import List from 'src/components/Pages/ConnectedMain/List';
import {
  getListId,
  deleteList,
  handleOpenInputUpdate,
} from 'src/store/reducers/list';

const mapStateToProps = (state) => ({
  nameInput: state.list.nameInput,
  openInputUpdate: state.list.openInputUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  getListId: (currentId) => {
    dispatch(getListId(currentId));
  },
  deleteList: () => {
    dispatch(deleteList());
  },
  handleOpenInputUpdate: () => {
    dispatch(handleOpenInputUpdate());
  }
});


const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;
