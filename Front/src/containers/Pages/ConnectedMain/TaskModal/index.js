import { connect } from 'react-redux';
import TaskModal from 'src/components/Pages/ConnectedMain/TaskModal';
import { handleTaskModal, getCurrentTaskValue } from 'src/store/reducers/task';

const mapStateToProps = (state) => ({
  isOpenTaskModal: state.task.isOpenTaskModal,
  contentTaskInput: state.task.contentTaskInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleTaskModal: () => {
    dispatch(handleTaskModal());
  },
  getCurrentTaskValue: () => {
    dispatch(getCurrentTaskValue());
  },
});


const TaskModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskModal);

export default TaskModalContainer;
