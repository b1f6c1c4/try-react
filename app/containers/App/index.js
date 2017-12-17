/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { withStyles, Drawer, List, Hidden, Divider, AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { toggleDrawer } from './actions';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  flex: {
    flex: 1,
  },
});

class App extends React.PureComponent {
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List></List>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="menu"
                onClick={this.props.onDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.flex} type="title" color="inherit" noWrap>
                Try React
              </Typography>
              <Button color="contrast">Login</Button>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.props.drawerOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.props.onDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onDrawerToggle: () => dispatch(toggleDrawer()),
  };
}

const mapStateToProps = createStructuredSelector({
  drawerOpen: createSelector(
    (state) => state.get('global'),
    (state) => state.get('drawerOpen'),
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles, { withTheme: true }),
)(App);
