import { connect } from 'react-redux';
import Task from 'src/components/Pages/ConnectedMain/List/Task';
import { handleTaskModal, getListId, createTask } from 'src/store/reducers/task';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  handleTaskModal: () => {
    dispatch(handleTaskModal());
  },
  getListId: (currentListId) => {
    dispatch(getListId(currentListId));
  },
  createTask: () => {
    dispatch(createTask());
  },
});


const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

export default TaskContainer;
