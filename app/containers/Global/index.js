import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import injectSaga from 'utils/injectSaga';

import {
  withStyles,
  Typography,
  Button,
} from 'material-ui';

import {
  makeSelectGlobalData,
} from './selectors';
import {
  defaultAction,
} from './actions';
import sagas from './sagas';
import messages from './messages';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.default,
  },
});

class Global extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Typography>{this.props.data}</Typography>
        <Button onClick={this.props.onDefaultAction}>DefaultAction</Button>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Global.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.string.isRequired,
  onDefaultAction: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onDefaultAction: () => dispatch(defaultAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectGlobalData(),
});

export const styledGlobal = withStyles(styles, { withTheme: true })(Global);

export default compose(
  injectSaga({ key: 'global', sagas }),
  connect(mapStateToProps, mapDispatchToProps),
)(styledGlobal);
