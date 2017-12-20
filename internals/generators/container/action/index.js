/**
 * Container action generator
 */

module.exports = {
  description: 'Add an action to a container',
  prompts: [{
    type: 'input',
    name: 'container',
    default: 'Form',
    message: 'Name of the container?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'name',
    default: 'toggle open',
    message: 'Name of the action?',
  }, {
    type: 'confirm',
    name: 'confirm',
    default: true,
    message: 'Are you sure?',
  }],
  actions: (data) => {
    if (!data.confirm) {
      return [];
    }

    const actions = [];

    // constants.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /[A-Z_]+_ACTION';$/g,
      path: '../../app/containers/{{properCase container}}/constants.js',
      template: 'export const {{ constantCase name }}_ACTION = \'{{ properCase container }}/{{ constantCase name }}_ACTION\';',
      abortOnFail: true,
    });

    // actions.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_ACTION,$/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      template: '  {{ constantCase name }}_ACTION,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 0,
      section: /^\/\/ Actions/g,
      pattern: /^\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      templateFile: './container/action/actions.js.hbs',
      abortOnFail: true,
    });

    // actions.test.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_ACTION,$/g,
      path: '../../app/containers/{{properCase container}}/tests/actions.test.js',
      template: '  {{ constantCase name }}_ACTION,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Action,$/g,
      path: '../../app/containers/{{properCase container}}/tests/actions.test.js',
      template: '  {{ camelCase name }}Action,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 2,
      section: /^ {2}\/\/ Actions/g,
      pattern: /^ {2}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/tests/actions.test.js',
      templateFile: './container/action/actions.test.js.hbs',
      abortOnFail: true,
    });

    // reducer.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_ACTION,$/g,
      path: '../../app/containers/{{properCase container}}/reducer.js',
      template: '  {{ constantCase name }}_ACTION,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 4,
      postpadding: false,
      section: /^ {4}\/\/ Actions/g,
      pattern: /^ {4}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/reducer.js',
      templateFile: './container/action/reducer.js.hbs',
      abortOnFail: true,
    });

    // reducer.test.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Action,$/g,
      path: '../../app/containers/{{properCase container}}/tests/reducer.test.js',
      template: '  {{ camelCase name }}Action,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 2,
      section: /^ {2}\/\/ Actions/g,
      pattern: /^ {2}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/tests/reducer.test.js',
      templateFile: './container/action/reducer.test.js.hbs',
      abortOnFail: true,
    });

    // index.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Action,$/g,
      path: '../../app/containers/{{properCase container}}/index.js',
      template: '  {{ camelCase name }}Action,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}on[a-zA-Z]+: PropTypes/g,
      path: '../../app/containers/{{properCase container}}/index.js',
      template: '  on{{ properCase name }}Action: PropTypes.func.isRequired,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {4}on[a-zA-Z]+: \(\) => dispatch/g,
      path: '../../app/containers/{{properCase container}}/index.js',
      template: '    on{{ properCase name }}Action: () => dispatch({{ camelCase name }}Action()),',
      abortOnFail: true,
    });

    // index.test.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Action,$/g,
      path: '../../app/containers/{{properCase container}}/tests/index.test.js',
      template: '  {{ camelCase name }}Action,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {8}on[A-Z][a-zA-Z]*Action=\{jest\.fn\(\)\}$/g,
      path: '../../app/containers/{{properCase container}}/tests/index.test.js',
      template: '        on{{ properCase name }}Action={jest.fn()}',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 2,
      section: /^ {2}\/\/ Actions/g,
      pattern: /^ {2}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/tests/index.test.js',
      templateFile: './container/action/test.js.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
