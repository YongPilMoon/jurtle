import React, { Component } from 'react';
import Footer from 'components/common/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/actionCreators/base';
import PropTypes from 'prop-types';

class FooterContainer extends Component {
  render() {
    return (
      <Footer />
    );
  }
}

FooterContainer.propTypes = {};

export default connect(
  state => ({
    logged: state.base.get('logged'),
  }), null,
)(FooterContainer);
