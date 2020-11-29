import { connect } from 'react-redux';
import SingleTask from 'src/components/Pages/ConnectedMain/List/Task/SingleTask';
import { getTaskId, deleteTask, handleTaskModal, handleIsCkeckedTask,setCheckStateTask } from 'src/store/reducers/task';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  getTaskId: (currentTaskId) => {
    dispatch(getTaskId(currentTaskId));
  },
  deleteTask: () => {
    dispatch(deleteTask());
  },
  handleTaskModal: () => {
    dispatch(handleTaskModal());
  },
  handleIsCkeckedTask: (checkedValue) => {
    dispatch(handleIsCkeckedTask(checkedValue));
  },
  setCheckStateTask: () => {
    dispatch(setCheckStateTask());
  }
});


const SingleTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleTask);

export default SingleTaskContainer;
