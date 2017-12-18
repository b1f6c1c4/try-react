/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Button } from 'material-ui';
import Typography from 'material-ui/Typography';
import { FormattedMessage } from 'react-intl';
import root from 'window-or-global';

import messages from './messages';
import { makeApi } from '../App/constants';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Typography type="display1" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Button raised color="primary">BUTTON-N</Button>
        <p><a href={makeApi('/login')}>{makeApi('/login')}</a></p>
        <p>Hostname= { root.location.hostname}</p>
        <p>API_URL= {process.env.API_URL}</p>
        <p>NODE_ENV= {process.env.NODE_ENV}</p>
      </div>
    );
  }
}
