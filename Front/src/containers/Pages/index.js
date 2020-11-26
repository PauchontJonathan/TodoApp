import { connect } from 'react-redux';
import Pages from 'src/components/Pages';
import { receiveToken, getUserDatas, handleReceiveDatasBool } from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  isDatasReceived: state.user.isDatasReceived,
});

const mapDispatchToProps = (dispatch) => ({
  receiveToken: (currentToken) => {
    dispatch(receiveToken(currentToken));
  },
  getUserDatas: () => {
    dispatch(getUserDatas());
  },
  handleReceiveDatasBool: () => {
    dispatch(handleReceiveDatasBool());
  }
});


const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
