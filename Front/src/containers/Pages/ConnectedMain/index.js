import { connect } from 'react-redux';
import ConnectedMain from 'src/components/Pages/ConnectedMain';
import {
  receiveList,
} from 'src/store/reducers/list';

const mapStateToProps = (state) => ({
  list: state.list.list,
  isListCharged: state.list.isListCharged,
});

const mapDispatchToProps = (dispatch) => ({
  receiveList: () => {
    dispatch(receiveList());
  },
});


const ConnectedMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedMain);

export default ConnectedMainContainer;
