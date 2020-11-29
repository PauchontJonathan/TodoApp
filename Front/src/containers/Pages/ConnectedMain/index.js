import { connect } from 'react-redux';
import ConnectedMain from 'src/components/Pages/ConnectedMain';
import {
  receiveList,
  createList,
} from 'src/store/reducers/list';

const mapStateToProps = (state) => ({
  isDeletedList: state.list.isDeletedList,
  list: state.list.list,
  isListCharged: state.list.isListCharged,
  isListCreated: state.list.isListCreated,
  openInputUpdate: state.list.openInputUpdate,
  isTaskCreated: state.task.isTaskCreated,
  isDeletedTask: state.task.isDeletedTask,
  isTaskUpdated: state.task.isTaskUpdated,
  isCheckedTaskCallLoaded: state.task.isCheckedTaskCallLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  receiveList: () => {
    dispatch(receiveList());
  },
  createList: () => {
    dispatch(createList());
  },
});


const ConnectedMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedMain);

export default ConnectedMainContainer;
