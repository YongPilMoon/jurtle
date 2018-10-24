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
    marginTop: '30px',
    '&:hover': {
      backgroundColor: '#fafafa',
    },
  },
});

const ShowMoreButton = ({ classes }) => (
  <Button aria-label="Add" className={classes.button}>
      Show More
  </Button>
);

ShowMoreButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowMoreButton);
