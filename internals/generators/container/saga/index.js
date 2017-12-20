/**
 * Container saga generator
 */

module.exports = {
  description: 'Add a saga to a container',
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
    default: 'ext',
    message: 'Name of the saga?',
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
      pattern: /[A-Z_]+_FAILURE';$/g,
      path: '../../app/containers/{{properCase container}}/constants.js',
      template: `export const {{ constantCase name }}_REQUEST = '{{ properCase container }}/{{ constantCase name }}_REQUEST';
export const {{ constantCase name }}_SUCCESS = '{{ properCase container }}/{{ constantCase name }}_SUCCESS';
export const {{ constantCase name }}_FAILURE = '{{ properCase container }}/{{ constantCase name }}_FAILURE';`,
      abortOnFail: true,
    });

    // actions.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_FAILURE,$/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      template: `  {{ constantCase name }}_REQUEST,
{{ constantCase name }}_SUCCESS,
{{ constantCase name }}_FAILURE,`,
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 0,
      section: /^\/\/ Sagas/g,
      pattern: /^\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      templateFile: './container/action/actions.js.hbs',
      abortOnFail: true,
    });

    // reducer.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_FAILURE,$/g,
      path: '../../app/containers/{{properCase container}}/reducer.js',
      template: `  {{ constantCase name }}_REQUEST,
{{ constantCase name }}_SUCCESS,
{{ constantCase name }}_FAILURE,`,
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 4,
      postpadding: false,
      section: /^ {4}\/\/ Sagas/g,
      pattern: /^ {4}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/reducer.js',
      templateFile: './container/action/reducer.js.hbs',
      abortOnFail: true,
    });

    // reducer.test.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Failure,$/g,
      path: '../../app/containers/{{properCase container}}/tests/reducer.test.js',
      template: `  {{ camelCase name }}Request,
  {{ camelCase name }}Success,
  {{ camelCase name }}Failure,`,
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 2,
      section: /^ {2}\/\/ Sagas/g,
      pattern: /^ {2}\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/tests/reducer.test.js',
      templateFile: './container/action/reducer.test.js.hbs',
      abortOnFail: true,
    });

    // sagas.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[A-Z_]+_REQUEST,$/g,
      path: '../../app/containers/{{properCase container}}/sagas.js',
      template: '  {{ constantCase name }}_REQUEST,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Failure,$/g,
      path: '../../app/containers/{{properCase container}}/sagas.js',
      template: `  {{ camelCase name }}Success,
  {{ camelCase name }}Failure,`,
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 0,
      section: /^\/\/ Sagas/g,
      pattern: /^\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/sagas.js',
      templateFile: './container/action/sagas.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ yield take.*REQUEST.*Request);$/g,
      path: '../../app/containers/{{properCase container}}/sagas.js',
      template: `  /* istanbul ignore next */
  yield takeEvery({{ constantCase name }}_REQUEST, {{ camelCase name }}Request);`,
      abortOnFail: true,
    });

    // sagas.test.js
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Failure,$/g,
      path: '../../app/containers/{{properCase container}}/tests/sagas.test.js',
      template: `  {{ camelCase name }}Success,
  {{ camelCase name }}Failure,`,
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'lastOccurance',
      pattern: /^ {2}[a-zA-Z]+Request,$/g,
      path: '../../app/containers/{{properCase container}}/tests/sagas.test.js',
      template: '  {{ camelCase name }}Request,',
      abortOnFail: true,
    });
    actions.push({
      type: 'complexModify',
      method: 'sectionEnd',
      indent: 0,
      section: /^\/\/ Sagas/g,
      pattern: /^\/\/ [A-Z][a-zA-Z]*$/g,
      path: '../../app/containers/{{properCase container}}/tests/sagas.test.js',
      templateFile: './container/action/sagas.test.js.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
