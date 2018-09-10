import React, {Component} from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/actionCreators/base';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginModalContainer extends Component {

  handleLogin = async () => {
    const { BaseActions, password, history } = this.props;
    try {
      await BaseActions.login(password);
      BaseActions.hideModal('login');
      localStorage.logged = "true";
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  handleCancel = () => {
    const { BaseActions, history, logged } = this.props;
    if(logged) {
      try {
        BaseActions.logout();
      } catch (e) {
        console.log(e);
      }
    }
    BaseActions.hideModal('login');
    history.push("/");
    window.location.reload();
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleLogin();
    }
  };
  render() {
    const { handleLogin, handleCancel, handleChange, handleKeyPress } = this;
    const { visible, error, password } = this.props;

    return (
      <LoginModal
        onLogin={handleLogin} onCancel={handleCancel}
        onChange={handleChange} onKeyPress={handleKeyPress}
        visible={visible} error={error} password={password}
      />
    );
  }
}

LoginModalContainer.propTypes = {};

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'login']),
    password: state.base.getIn(['loginModal', 'password']),
    error: state.base.getIn(['loginModal', 'error']),
    logged: state.base.get('logged')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(LoginModalContainer));
