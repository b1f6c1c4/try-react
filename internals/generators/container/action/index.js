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
    default: 'toggle',
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

    actions.push({
      type: 'modify',
      pattern: /([A-Z_]+_ACTION';\n)(?!.*[A-Z_]+_ACTION')/g,
      path: '../../app/containers/{{properCase container}}/constants.js',
      templateFile: './container/action/constants.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      pattern: /([A-Z_]+_ACTION';\n)(?!.*[A-Z_]+_ACTION')/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      templateFile: './container/action/actions-constant.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      pattern: /(export function [a-zA-Z]+Action.*^};\n)(?!.*export function [a-zA-Z_]+Action')/g,
      path: '../../app/containers/{{properCase container}}/actions.js',
      templateFile: './container/action/actions-function.js.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
