import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import {
  withStyles,
} from 'material-ui';

import messages from './messages';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.default,
  },
});

class HomePage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const styledHomePage = withStyles(styles, { withTheme: true })(HomePage);

export default compose(
  connect(null, null),
)(styledHomePage);
