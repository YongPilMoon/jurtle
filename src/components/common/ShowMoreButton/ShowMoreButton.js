import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  button: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: '1.6rem',
    fontFamily: 'Spoqa Han Sans, sans-serif',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    '&:hover': {
      backgroundColor: '#fafafa',
    },
  },
});

const ShowMoreButton = ({ classes, getMorePostList, lastPage }) => (
  <Button aria-label="Add" className={classes.button} onClick={() => getMorePostList({ page: lastPage })}>
      Show More
  </Button>
);

ShowMoreButton.propTypes = {
  classes: PropTypes.object.isRequired,
  getMorePostList: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default withStyles(styles)(ShowMoreButton);
