import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import {
  withStyles,
  Typography,
} from 'material-ui';

import {
  makeSelectNotFoundPageData,
} from './selectors';
import messages from './messages';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.default,
  },
});

class NotFoundPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Typography>{this.props.data}</Typography>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectNotFoundPageData(),
});

export const styledNotFoundPage = withStyles(styles, { withTheme: true })(NotFoundPage);

export default compose(
  connect(mapStateToProps, null),
)(styledNotFoundPage);
