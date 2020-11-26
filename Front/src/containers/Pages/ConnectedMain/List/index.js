import { connect } from 'react-redux';
import List from 'src/components/Pages/ConnectedMain/List';
import {
  getListId,
  deleteList,
} from 'src/store/reducers/list';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getListId: (currentId) => {
    dispatch(getListId(currentId));
  },
  deleteList: () => {
    dispatch(deleteList());
  }
});


const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;
