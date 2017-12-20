/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/reducer tuple for this container?',
  }, {
    type: 'confirm',
    name: 'wantSaga',
    when: (ans) => ans.wantActionsAndReducer,
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }, {
    type: 'confirm',
    name: 'wantLoadable',
    default: true,
    message: 'Do you want to load resources asynchronously?',
  }],
  actions: (data) => {
    const actions = [];

    // Generate index.js
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/index.js',
      templateFile: './container/class.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/index.test.js',
      templateFile: './container/test.js.hbs',
      abortOnFail: true,
    });

    // Generate selectors.js
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/selectors.js',
      templateFile: './container/selectors.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/selectors.test.js',
      templateFile: './container/selectors.test.js.hbs',
      abortOnFail: true,
    });

    if (data.wantMessages) {
      // Generate messages.js
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantActionsAndReducer) {
      // Generate constants.js
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Generate actions.js
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Generate reducer.js
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });

      if (data.wantSaga) {
        // Generate saga.js
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/saga.js',
          templateFile: './container/saga.js.hbs',
          abortOnFail: true,
        });
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/tests/saga.test.js',
          templateFile: './container/saga.test.js.hbs',
          abortOnFail: true,
        });
      }
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    } else {
      actions.push({
        type: 'modify',
        pattern: /(from\s'containers\/[a-zA-Z]+\/reducer';\n)(?!.*from\s'containers\/[a-zA-Z]+\/reducer';)/g,
        path: '../../app/reducers.js',
        templateFile: './container/reducers-import.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        pattern: /([a-zA-Z]+Reducer,\n)(?!.*[a-zA-Z]+Reducer,\n)/g,
        path: '../../app/reducers.js',
        templateFile: './container/reducers-combine.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
