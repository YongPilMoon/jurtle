import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowMoreButton from 'components/common/ShowMoreButton';
import * as ListActions from 'store/reducers/list';

class ShowMoreButtonContainer extends Component {
  render() {
    return this.props.isLast ? null : <ShowMoreButton
      getMorePostList={this.props.getMorePostList}
      lastPage={this.props.lastPage}
      tag={this.props.tag}
    />;
  }
}

ShowMoreButtonContainer.propTypes = {
  getMorePostList: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  lastPage: state.list.get('lastPage'),
  isLast: state.list.get('isLast'),
});

const mapDispatchToProps = dispatch => ({
  getMorePostList: payload => dispatch(ListActions.getMorePostList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButtonContainer);
