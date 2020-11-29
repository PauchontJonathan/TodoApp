import { connect } from 'react-redux';
import TaskModal from 'src/components/Pages/ConnectedMain/TaskModal';
import { handleTaskModal, getCurrentTaskValue, updateTask } from 'src/store/reducers/task';

const mapStateToProps = (state) => ({
  isOpenTaskModal: state.task.isOpenTaskModal,
  contentTaskInput: state.task.contentTaskInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleTaskModal: () => {
    dispatch(handleTaskModal());
  },
  getCurrentTaskValue: (currentTaskValue) => {
    dispatch(getCurrentTaskValue(currentTaskValue));
  },
  updateTask: () => {
    dispatch(updateTask());
  }
});


const TaskModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskModal);

export default TaskModalContainer;
