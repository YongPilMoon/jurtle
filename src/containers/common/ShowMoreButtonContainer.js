import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowMoreButton from 'components/common/ShowMoreButton';
import * as ListActions from 'store/reducers/list';

class ShowMoreButtonContainer extends Component {
  render() {
    return (
      <ShowMoreButton getMorePostList={this.props.getMorePostList} lastPage={this.props.lastPage} />
    );
  }
}

ShowMoreButtonContainer.propTypes = {
  getMorePostList: PropTypes.object.isRequired,
  lastPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  lastPage: state.list.get('lastPage'),
});

const mapDispatchToProps = dispatch => ({
  getMorePostList: payload => dispatch(ListActions.getMorePostList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButtonContainer);
