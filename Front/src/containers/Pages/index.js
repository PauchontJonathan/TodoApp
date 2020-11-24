import { connect } from 'react-redux';
import Pages from 'src/components/Pages';
import { receiveToken } from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  receiveToken: (currentToken) => {
    dispatch(receiveToken(currentToken));
  }
});


const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
