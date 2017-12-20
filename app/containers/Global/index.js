import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import {
  withStyles,
  Typography,
  Button,
} from 'material-ui';

import {
  makeSelectGlobalIsDrawerOpen,
} from './selectors';
import {
  toggleDrawerOpenAction,
} from './actions';
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
        <FormattedMessage {...messages.header} />
        <Typography>{this.props.isDrawerOpen.toString()}</Typography>
        <Button onClick={this.props.onToggleDrawerOpenAction}>ToggleDrawerOpenAction</Button>
        <Switch>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

Global.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  onToggleDrawerOpenAction: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onToggleDrawerOpenAction: () => dispatch(toggleDrawerOpenAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  isDrawerOpen: makeSelectGlobalIsDrawerOpen(),
});

export const styledGlobal = withStyles(styles, { withTheme: true })(Global);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(styledGlobal);
