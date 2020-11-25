import { connect } from 'react-redux';
import Pages from 'src/components/Pages';
import { receiveToken, getUserDatas } from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  receiveToken: (currentToken) => {
    dispatch(receiveToken(currentToken));
  },
  getUserDatas: () => {
    dispatch(getUserDatas());
  }
});


const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
