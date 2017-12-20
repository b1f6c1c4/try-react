import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Field, reduxForm } from 'redux-form/immutable';

import {
  withStyles,
  Button,
} from 'material-ui';

import {
  makeSelectLoginPageIsLoading,
} from './selectors';
import {
  submitLoginAction,
} from './actions';
import reducer from './reducer';
import sagas from './sagas';
import messages from './messages';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.default,
  },
});

class LoginPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <FormattedMessage {...messages.header} />
        <p>{this.props.isLoading.toString()}</p>
        <form onSubmit={this.props.onSubmitLoginAction}>
          <Field name="username" component="input" type="text" />
          <Field name="password" component="input" type="password" />
          <Button onClick={this.props.onSubmitLoginAction}>SubmitLoginAction</Button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmitLoginAction: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitLoginAction: () => dispatch(submitLoginAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoginPageIsLoading(),
});

export const styledLoginPage = withStyles(styles, { withTheme: true })(LoginPage);

export default compose(
  injectSaga({ key: 'loginPage', saga: sagas }),
  injectReducer({ key: 'loginPage', reducer }),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'login' }),
)(styledLoginPage);
