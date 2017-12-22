/**
 * Returns the given params without curly braces.
 */

module.exports = (theParams) => {
  let params = theParams;

  if (typeof params === 'string') {
    params = params.replace(/(\{|\})/g, '');
  } else {
    params = '';
  }

  return params;
};
