import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { disconnectUser } from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  userNickname: state.user.userNickname,
});

const mapDispatchToProps = (dispatch) => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  }
});


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
