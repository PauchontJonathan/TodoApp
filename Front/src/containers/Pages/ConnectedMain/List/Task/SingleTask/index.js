import { connect } from 'react-redux';
import SingleTask from 'src/components/Pages/ConnectedMain/List/Task/SingleTask';
import { getTaskId, deleteTask } from 'src/store/reducers/task';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  getTaskId: (currentTaskId) => {
    dispatch(getTaskId(currentTaskId));
  },
  deleteTask: () => {
    dispatch(deleteTask());
  },
});


const SingleTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleTask);

export default SingleTaskContainer;
