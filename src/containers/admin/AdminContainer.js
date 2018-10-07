import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/actionCreators/base';

class AdminContainer extends Component {
  componentDidMount() {
    this.showLoginModal();
  }

  showLoginModal = async () => {
    const { BaseActions, logged } = this.props;
    if (logged) {
      try {
        BaseActions.logout();
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
      return;
    }
    BaseActions.showModal('login');
    BaseActions.initializeLoginModal();
  };

  render() {
    return (
      <div>Admin Page</div>
    );
  }
}

AdminContainer.propTypes = {};

export default connect(
  state => ({
    logged: state.base.get('logged'),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(AdminContainer);
